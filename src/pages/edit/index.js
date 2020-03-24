import React, { Component } from 'react';
import ContainerDefault from '../../components/ContainerDefault';
import ContainerFullScreen from '../../components/ContainerFullScreen';
import LoadingModal from '../../components/LoadingModal';
import CallbackMessage from '../../components/CallbackMessage';
import FormUser from '../../components/FormUser';
import api from '../../services/api';
import { ContainerContent } from './styles';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            user: {
                first_name: '',
                last_name: '',
                email: '',
                userId: '',
            }
        }

        this.startLoading = this.startLoading.bind(this);
        this.stopLoading = this.stopLoading.bind(this);
    }

    startLoading() {
        this.setState({loading: true});
        
        setTimeout(() => {
            this.setState({loading: false});
        }, 5000);
    }

    stopLoading(differenceInMinutes) {
        this.setState({loading: false});

        if(differenceInMinutes < 4) {
            toastr.success('Os dados foram salvos.', 'Cadastro atualizado!')
        }else {
            toastr.error('Caso persistir volte mais tarde.', 'Ocorreu um erro.')
        }
    }

    async getUser(userId) {
        const response = await api.get(`/users/${userId}`);
        const user = response.data.data ? response.data.data : null;
        const first_name = user ? user.first_name : '';
        const last_name = user ? user.last_name : '';
        const email = user ? user.email : '';

        return { first_name, last_name, email, userId };
    }

    async componentDidMount() {
        const userId = this.props.match.params.userId;
        const user = await this.getUser(userId);

        this.setState({ user });
    }

    render() {
        return (
            <ContainerFullScreen backgroundColor={'#222222'}>
                <ContainerDefault>
                    <ContainerContent>
                        <FormUser
                            user={this.state.user}
                            startLoading={this.startLoading}
                            stopLoading={this.stopLoading}
                            className={this.state.loading ? 'hidden' : ''}
                        />
                        <LoadingModal
                            className={ this.state.loading ? 'show' : 'hidden' }
                            size={60}
                            style={{color: '#089A2A'}}
                        />
                        <CallbackMessage
                            messsage="Nenhum usuário encontrado" />
                    </ContainerContent>
                </ContainerDefault>
            </ContainerFullScreen>
        );
    }
}

export default Edit;
