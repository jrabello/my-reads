import React from "react";
import { Link } from "react-router-dom";
import { Debounce } from 'react-throttle';

import { routeNameContainer } from "../constants/constants";
import { BooksApi } from "../api/BooksAPI";
import BookCard from "./BookCard";
 

class BookSearch extends React.Component {
  state = {
    books: []
  };

  updateQuery(value) {
    // error checking
    if(!(value && value.length)) {
      this.setState({
        books: []
      })
      return;
    }

    // searching books
    BooksApi.search(value)
    .then(books => this.setState({
      books: (books && !books.error) ? books : []
    }))
    
  }

  handleBookShelfChanged = (book, shelf) =>  {
    // calls parent component
    this.props.onBookShelfChanged(book, shelf);   
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={routeNameContainer.root} className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <Debounce time="300" handler="onChange">
              <input
                type="text"
                onChange={event => this.updateQuery(event.target.value)}
                placeholder="Search by title or author"
              />
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {
              this
              .state
              .books
              .map((book, i) => {
                  return (
                  <li key={i}>
                    <BookCard book={book} onBookShelfChanged={this.handleBookShelfChanged}/>
                  </li>
                  )
              })
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default BookSearch;
