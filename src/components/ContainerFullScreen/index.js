import React from 'react'
import { Container } from './styles'

export default function ContainerFullScreen(props) {
    return (
        <Container 
            backgroundColor={props.backgroundColor}
            flexFlow={props.flexFlow}
        >
            {props.children}
        </Container>
    )
}
