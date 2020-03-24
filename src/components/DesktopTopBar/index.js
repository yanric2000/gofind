import React, { Component } from 'react'
import { Nav } from './styles';
import Button from '@material-ui/core/Button';
import ContainerDefault from '../ContainerDefault';

export default class TopBar extends Component {
    render() {
        return (
            <ContainerDefault customStyle={{height: '100%'}}>
                <Nav>
                    <Button
                        href="/"
                        variant="contained"
                        color="primary"
                    >
                        Home
                    </Button>
                    <Button
                        href="/users"
                        variant="contained"
                        color="primary"
                    >
                        Usuários
                    </Button>
                </Nav>
            </ContainerDefault>
        )
    }
}
