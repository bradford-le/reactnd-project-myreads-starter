import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }
  render() {
    const { books } = this.props
    const { query } = this.state

    let showingBooks
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = books.filter((book) => match.test(book.title))
    } else {
      showingBooks = books
    }

    showingBooks.sort(sortBy('title'))
    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          {/* 
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
            
            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input type="text" placeholder="Search by title or author"/>
          
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
        {showingBooks.map((book) => (
            <li key={book.id} className='book-list-item'>
              <div className='book-cover' style={{
                backgroundImage: `url(${book.imageLinks.thumbnail})`
              }}/>
              <div className='book-details'>
                <p>{book.title}</p>
                <p>{book.subtitle}</p>
              </div>
              {/* <button onClick={() => onDeleteContact(contact)} className='contact-remove'>
                Remove
              </button> */}
            </li>
          ))}
        </ol>
      </div>
    </div>
    )
  }
}

export default ListBooks