import React, { Component } from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import './styles.scss';

export default class UserTablePagination extends Component {
    constructor(props) {
        super(props);

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(e, page) {
        e.preventDefault();
        this.props.handlePageChange(page + 1);
    }
    
    render() {
        const { currentPage, totalItems, rowsPerPage } = this.props;
        return (
            <TablePagination
                rowsPerPage={rowsPerPage}
                page={currentPage ? currentPage - 1 : 0}
                count={totalItems ? totalItems : 1}
                rowsPerPageOptions={[]}
                className="paginacao"
                onChangePage={ (e, page) => this.handlePageChange(e, page) }
                />
        );
    }
}