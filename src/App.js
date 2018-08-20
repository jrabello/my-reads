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
    BooksApi.getAll()
      .then(books => this.setState({
        books
      }))
  }

  render() {
    return (
      <div className="app">
        <Route exact path={routeNameContainer.root} render= { () => (
          <BookViewer books={ this.state.books } />
        )} />
        <Route path={routeNameContainer.search}  render= { () => (
          <BookSearch />
        )}/>
      </div>
    )
  }
}

export default BooksApp
