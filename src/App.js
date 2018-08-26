import './App.css'
import React from 'react'
import { Route } from 'react-router-dom';
import BookSearch from './book/BookSearch';
import BookViewer from './book/BookViewer';
import { routeNameContainer } from './constants/constants';
import { BooksApi } from './api/BooksAPI';

class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  componentDidMount() {
    BooksApi
      .getAll()
      .then(books => this.setState({
        books
      }))
  }

  handleBookShelfChanged = async (book, shelf) => {
    const bookFoundIdx = this.state
        .books
        .findIndex(candidateBook => candidateBook.id === book.id)

    const bookFound = bookFoundIdx >= 0;
    if(bookFound) {
      this.state.books[bookFoundIdx].shelf = shelf;
      this.setState({
        books: this.state.books
      })
    } else {
      // book is not in book list yet, send request to server asking for it
      const bookFromServer = await BooksApi.get(book.id)
      bookFromServer.shelf = shelf;
      this.setState({
        books: [...this.state.books, bookFromServer]
      })
    }
    
    BooksApi.update(book, shelf);
  }

  render() {
    return (
      <div className="app">
        <Route exact path={routeNameContainer.root} render= { () => (
          <BookViewer 
            books={ this.state.books } 
            onBookShelfChanged={ this.handleBookShelfChanged }/>
        )}/>
        <Route path={routeNameContainer.search} render= { () => (
          <BookSearch 
            books={ this.state.books }
            onBookShelfChanged={ this.handleBookShelfChanged }/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
