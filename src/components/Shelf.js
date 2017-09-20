import React, {Component} from 'react';

class Shelf extends Component {

    state = {
        book: ''
    }

    onShelfChange = ( (book, event) => {
       book.shelf = event.target.value;
       this.props.onUpdateShelf(book, event.target.value);
     });

    render() {

        const {books} = this.props;

         return (
            <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {(books && books.length > 0)  && (               
                            books.map( (book, key) => (
                            <li key={key}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover"
                                            title="Cover not available"
                                            style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks !== undefined? book.imageLinks.thumbnail:''})` }}></div>
                                            <div className="book-shelf-changer">
                                                 <select onChange={this.onShelfChange.bind(this, book)} value={book.shelf}>
                                                    <option value="none" disabled>Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                            </div>
                                        <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                             ))
                        )} 
                    </ol>    
                    </div>    
                </div>
            </div>
        )
    }

}

export default Shelf;
