import React from 'react'
import BookShelf from './BookShelf.js'
import {Link} from 'react-router-dom'
class List extends React.Component {
  render(){
    const books = this.props.books
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf name="Currently Reading" change={this.props.change} books={books.filter(book => book.shelf === 'currentlyReading')}/>
            <BookShelf name="Want to Read" change={this.props.change} books={books.filter(book => book.shelf === 'wantToRead')}/>
            <BookShelf name="Read" change={this.props.change} books={books.filter(book => book.shelf === 'read')}/>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}
export default List;