import React, { Component } from 'react';
import ContainerFullScreen from '../../components/ContainerFullScreen';
import ContainerDefault from '../../components/ContainerDefault';
import { ContainerContent } from './styles';
import UsersTable from '../../components/UsersTable';
import UserTablePagination from '../../components/UserTablePagination'
import api from '../../services/api';


class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            totalItems: 1,
            currentPage: 1,
            itemsPerPage: 3
        }

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    async componentDidMount() {
        const itemsPerPage = this.state.itemsPerPage;
        const stateCurrentPage = this.state.currentPage;
        const response = await api.get(`/users?page=${stateCurrentPage}&per_page=${itemsPerPage}`);
        const users = response.data.data;
        const totalItems = response.data.total > 0 ? response.data.total : 1;
        const currentPage = response.data.page > 0 ? response.data.page : 0;

        this.setState({ users });
        this.setState({ totalItems });
        this.setState({ currentPage });
    }

    async handlePageChange(page) {
        const currentPage = page;
        this.setState({ currentPage });
        const perPage = this.state.itemsPerPage;
        const response = await api.get( `/users?&per_page=${perPage}&page=${currentPage}`);
        const users = response.data.data;
        this.setState({users});
    }

    render() {
        const { users } = this.state;
        console.log('users');
        console.log(this.state.currentPage);
        return (
            <ContainerFullScreen>
                <ContainerDefault>
                    <ContainerContent>
                        <UsersTable data={users} />
                        <UserTablePagination
                            rowsPerPage={this.state.itemsPerPage}
                            currentPage={this.state.currentPage ? this.state.currentPage : 0}
                            totalItems={this.state.totalItems ? this.state.totalItems : 1}
                            handlePageChange={this.handlePageChange}
                            />
                    </ContainerContent>
                </ContainerDefault>
            </ContainerFullScreen>
        );
    }
}

export default Users;
