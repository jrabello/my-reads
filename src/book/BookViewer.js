import React from 'react'
import BookViewerSection from './BookViewerSection';
import { Link } from 'react-router-dom';
import { routeNameContainer } from '../constants/constants';

class BookViewer extends React.Component {
    handleBookShelfChanged = (book, shelf) =>  {
        // calls parent component
        this.props.onBookShelfChanged(book, shelf);   
    }

    render() {
        return (
        <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
            <div>
            <BookViewerSection
                title="Currently Reading"
                books={this.props.books.filter(
                    book => book.shelf === `currentlyReading`
                )}
                onBookShelfChanged={this.handleBookShelfChanged}
            />
            <BookViewerSection
                title="Want to Read"
                books={this.props.books.filter(book => book.shelf === `wantToRead`)}
                onBookShelfChanged={this.handleBookShelfChanged}
            />
            <BookViewerSection
                title="Read"
                books={this.props.books.filter(book => book.shelf === `read`)}
                onBookShelfChanged={this.handleBookShelfChanged}
            />
            </div>
        </div>

        <div className="open-search">
            <Link to={routeNameContainer.search}>Add a book</Link>
        </div>
        </div>
        )
    }

}

export default BookViewer
