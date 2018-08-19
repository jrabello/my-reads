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
            <li>
              <BookCard book={
                {
                  imgUrl: `http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api`,
                  title: 'The Linux Command Line',
                  authors: ["William E. Shotts, Jr."],
                }
              }/>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default BookViewerSection;
