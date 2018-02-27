import React from 'react'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
class SearchBooks extends React.Component{
  state = {
    query : '',
    results:[]
  }

  handleChange = (e) =>{
      BooksAPI.search(e.target.value).then(
        results =>{
          if(results && !results.error){
            for (var rbook of results) {
              for (var pbook of this.props.books) {
                if (rbook.id === pbook.id) {
                  rbook.shelf = pbook.shelf
                }
              }
            }
              this.setState({results: results})
          }else{
            this.setState({results: []})
          }
        }
      )
    this.setState({query: e.target.value})
  }

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" onChange={this.handleChange} placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.error === undefined && this.state.results.map(book=> <Book book={book} change={this.props.change} key={book.id}/>)}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;