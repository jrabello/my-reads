import React from "react";
import BookCard from "./BookCard";

class BookViewerSection extends React.Component {
  render() {
    return (
      <div className="bookshelf">
      {/* TODO: add title as a parameter */}
        <h2 className="bookshelf-title">{ this.props.title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.props
              .books
              .map((book, i) => {
                  return (
                  <li key={i}>
                    <BookCard  book={book}/>
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

export default BookViewerSection;
