import React from 'react'

class BookCard extends React.Component {
    state = {
        shelfOptions: [
            {
                value: `currentlyReading`,
                title:`Currently Reading`,
            },
            {
                value: `wantToRead`,
                title:`Want to Read`,
            },
            {
                value: `read`,
                title:`Read`,
            },
            {
                value: `none`,
                title:`None`,
            },
        ]
    };

    handleChange = (book, clickedShelf) => {
        this.props.onBookShelfChanged(book, clickedShelf); 
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
                <select 
                    value={ 
                        this.props.book && this.props.book.shelf
                        ? this.props.book.shelf
                        : `none`
                    }
                    onChange={
                        event => this.handleChange(this.props.book, event.target.value)
                    }>
                    <option value="move" disabled>Move to...</option>
                    {
                        this.state.shelfOptions
                        .map((opt, idx) => {
                            return (
                                <option 
                                    key={idx}
                                    value={opt.value}>
                                    {opt.title}
                                </option>
                            )
                        })
                    }
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