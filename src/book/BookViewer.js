import React from 'react'
import BookViewerSection from './BookViewerSection';
import { Link } from 'react-router-dom';
import { routeNameContainer } from '../constants/constants';

class BookViewer extends React.Component {
     
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
            />
            <BookViewerSection
                title="Want to Read"
                books={this.props.books.filter(book => book.shelf === `wantToRead`)}
            />
            <BookViewerSection
                title="Read"
                books={this.props.books.filter(book => book.shelf === `read`)}
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
