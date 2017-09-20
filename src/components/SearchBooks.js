import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Shelf } from './Shelf';

class SearchBooks extends Component {
 
  render() {
    
    const {searchFunc, books} = this.props;

    return (
      <div className="search-books">
         <div className="search-books-bar">
            <Link to="/" className="close-search" >Close</Link>
            <div className="search-books-input-wrapper">
                <input type="text" onChange={searchFunc} placeholder="Search by title or author"/>
            </div>
          </div>
          <Shelf title="" filter="" books={books} onUpdateShelf={this.props.onUpdateShelf}/>
      </div>
        )
    }
}

export default SearchBooks;