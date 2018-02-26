import React from 'react'
import Book from './Book.js'
class BookShelf extends React.Component {
  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map(book=> <Book book={book} change={this.props.change} key={book.id}/>)}
            </ol>
          </div>
      </div>
    )
  }
}
export default BookShelf;