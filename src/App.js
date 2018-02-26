import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI.js'
import SearchBooks from './SearchBooks.js'
import List from './BookList.js'
import { Route } from 'react-router-dom'
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books : []
  }
  getBooks(){
    BooksAPI.getAll().then(recv => this.setState({books : recv}));
  }
  changeShelf = (book, e)=>{
    BooksAPI.update(book, e.target.value).then(BooksAPI.getAll().then(() => this.getBooks()))
  }
  componentDidMount() {
    this.getBooks()
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (<List books={this.state.books} change={this.changeShelf}/>)}/>
        <Route exact path='/search' render={() => (<SearchBooks books={this.state.books} change={this.changeShelf}/>)}/>
      </div>
    )
  }
}

export default BooksApp
