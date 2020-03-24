import React from 'react'
import { Container } from './styles'

export default function ContainerDefault(props) {
    return (
        <Container className={props.className} style={props.customStyle}>
            {props.children}
        </Container>
    )
}
