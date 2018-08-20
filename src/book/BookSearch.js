import React from "react";
import { Link } from "react-router-dom";
import { routeNameContainer } from "../constants/constants";
import { BooksApi } from "../api/BooksAPI";
import BookCard from "./BookCard";

class BookSearch extends React.Component {
  state = {
    books: []
  };

  updateQuery(value) {
    console.log(value);
    BooksApi.search(value)
    .then(books => this.setState({
      books
    }))
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={routeNameContainer.root} className="close-search">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            {/*
            NOTES: The search from BooksAPI is 
            limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES 
            search by title or author. So, don't worry if
            you don't find a specific author or title. 
            Every search is limited by search terms.
            */}
            <input
              type="text"
              onChange={event => this.updateQuery(event.target.value)}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {
              this.state
              .books
              .map((book, i) => {
                  if(book.authors === undefined)debugger
                  return (
                  <li key={i}>
                    <BookCard book={book}/>
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
