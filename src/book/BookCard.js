import React from 'react'

class BookCard extends React.Component {
    
    handleChange = (book, shelf) => {
        console.log(`book, shelf: `, book, shelf);
        this.props.onBookShelfChanged(book, shelf);   
    }
    
    render() {
        return (
            <div className="book">
            <div className="book-top">
            <div className="book-cover" 
                style={{ 
                    width: 128, 
                    height: 193, 
                    backgroundImage: `url(${
                        this.props.book.imageLinks ? 
                        this.props.book.imageLinks.thumbnail :
                        ``
                    })` 
                }}></div>
            <div className="book-shelf-changer">
                <select onChange={event => 
                    this.handleChange(this.props.book, event.target.value)
                    }>
                    <option value="move" disabled selected={true}>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">
            {
                this.props
                .book
                .authors ? 
                    this.props
                    .book
                    .authors
                    .map((author, i) => {
                        return (
                            <div key={i} className="book-authors">
                                {author}
                            </div>
                        )
                    })
                :
                    <div className="book-authors">
                    </div>
                    
            }
            </div>
            </div>
        )
    }
}

export default BookCard