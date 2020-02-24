import React, { Component } from 'react'
import ReactPaginate from 'react-paginate';

export class Table extends Component {
    constructor() {
        super();
        this.state = { data: [],
                       currentPage: 1,
                       todosPerPage: 3};
    }

    renderData = () => {
        const { data, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderData = currentTodos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
        });

        return renderData;
    };

    handlePageClick = (e) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    };

    render() {
        
        return (
          <div>
              <ul>
              {this.renderData()}
            </ul>
         <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={5}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        /></div>
        );
    }
}

export default Table
