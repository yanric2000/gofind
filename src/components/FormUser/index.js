import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import SendIcon from '@material-ui/icons/Send';
import { Form } from './styles';
import CloseIcon from '@material-ui/icons/Close';
import api from '../../services/api';

export default class index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            first_name_error: '',
            last_name_error: '',
            email_error: '',
            validationPass: true,
            userId: 0,
            user: []
        }
        
        this.validadeEmail = this.validadeEmail.bind(this);
        this.validadeField = this.validadeField.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validadeEmail(target) {
        let valid = target.validationMessage.length === 0 ? true : false;
        
        if(!valid) {
            this.setState({ [`${target.name}_error`]: target.validationMessage });
        }else if(target.value.length === 0){
            this.setState({ [`${target.name}_error`]: 'Preencha este campo' });
        }else {
            this.setState({ [`${target.name}_error`]: '' })
            return true;
        }

        return false;
    }
    
    validadeField(target) {
        let valid;

        if(target.type === 'email') {
            return this.validadeEmail(target);
        }else {
            valid = target.value.length > 2 ? true : false;
            
            if(!valid) {
                this.setState({ [`${target.name}_error`]: 'No mínimo 3 caracteres.' });
                return false;
            }else {
                this.setState({ [`${target.name}_error`]: '' })
                return true;
            }
        }
    }
    
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        const eventTarget = event.target;
        const validationPass = this.validadeField(eventTarget);
        this.setState({ validationPass });
    }

    async handleSubmit(e) {
        e.preventDefault();
        this.props.startLoading();
        const {userId, first_name, last_name, email  } = this.state;
        const response = await api.put(`users/${userId}`, { first_name, last_name, email });
        this.props.stopLoading(this.differenceInMinutes(new Date(response.data.updatedAt).getTime()));
    }

    // Margem de erro de 2 minutos
    differenceInMinutes(dataConverted) {
        const now = new Date();
        const lastUpdate = dataConverted;
        const diffMs = (lastUpdate - now );
        const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
        
        return diffMins;
    }

    componentWillReceiveProps(nextProps) {
        const first_name = nextProps.user.first_name ? nextProps.user.first_name : '';
        const last_name = nextProps.user.last_name ? nextProps.user.last_name : '';
        const email = nextProps.user.email ? nextProps.user.email : '';
        const userId = nextProps.user.userId ? nextProps.user.userId : '';
        
        this.setState({ user: nextProps.user, first_name, last_name, email, userId });
    }

    render() {
        return (
            <Form
                {...this.props}
                id="custom-form"
                onSubmit={this.handleSubmit}
                autoComplete="off"
            >
                {this.id}
                <div className="row">
                    <div className="container-input">
                        <TextField
                            required
                            name="first_name"
                            variant="outlined"
                            label="Nome"
                            value={this.state.first_name}
                            className={ `text-field ${this.state.first_name.length > 0 ? 'filled' : 'not-filled'} ${this.state.first_name_error.length > 0 ? 'error' : ''}`}
                            onChange={ (e) => this.handleChange(e) }
                        />
                        <div className="error-message">
                            <span> { this.state.first_name_error } </span>
                        </div>
                    </div>
                    <div className="container-input">
                        <TextField
                            required
                            variant="outlined"
                            type="text"
                            name="last_name"
                            label="Sobrenome"
                            className={ `text-field ${this.state.last_name.length > 0 ? 'filled' : 'not-filled'} ${this.state.last_name_error.length > 0 ? 'error' : ''}`}
                            value={this.state.last_name}
                            onChange={ (e) => this.handleChange(e) }
                        />
                        <div className="error-message">
                            <span> { this.state.last_name_error } </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container-input">
                        <TextField
                            required
                            variant="outlined"
                            type="email"
                            name="email"
                            label="E-mail"
                            value={this.state.email}
                            className={ `text-field ${this.state.email.length > 0 ? 'filled' : 'not-filled'} ${this.state.email_error.length > 0 ? 'error' : ''}`}
                            onChange={ (e) => this.handleChange(e) }
                        />
                        <div className="error-message">
                            <span> { this.state.email_error } </span>
                        </div>
                    </div>
                </div>
                <div className="container-button">
                    <Link to="/">
                        <button type="button" className="cancel">
                            {window.innerWidth > 700 ? 'Cancelar' : ''}
                            <CloseIcon size={512} style={{ color: '#FFF' }} />
                        </button>
                    </Link>
                    <button
                        type="submit"
                        className="submit"
                        disabled={this.state.validationPass ? false : true}
                    >
                        {window.innerWidth > 700 ? 'Alterar' : ''}
                        <SendIcon size={512} style={{ color: '#FFF' }} />
                    </button>
                </div>
            </Form>
        );
    }
}
