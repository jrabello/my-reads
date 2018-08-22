import React from "react";
import BookCard from "./BookCard";

class BookViewerSection extends React.Component {

  handleBookShelfChanged = (book, shelf) =>  {
    // calls parent component
    this.props.onBookShelfChanged(book, shelf);   
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ this.props.title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.props
              .books
              .map((book, i) => {
                  return (
                  <li key={i}>
                    <BookCard  book={book} onBookShelfChanged={this.handleBookShelfChanged}/>
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
