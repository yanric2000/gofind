import React from 'react'
import { List, Copyright } from './styles';
import ContainerFullScreen from '../ContainerFullScreen';
import ContainerDefault from '../ContainerDefault';
import * as Variables from '../../assets/theme/variables';
import goFind from '../../assets/images/gofind.png';

export default function Footer() {
    return (
        <ContainerFullScreen backgroundColor={Variables.thirdyColorShadow} flexFlow="column">
            <ContainerDefault>
                <List>
                    <li> <img src={goFind} alt="Gofind logo"/> </li>
                    <li> <a href="https://www.gofind.online"> Rua São Paulo, 31 Sala 101 Bairro Bucarein, Joinville - SC - Brasil </a> </li>
                    <li> <a href="mailto:contato@gofind.online"> contato@gofind.online </a> </li>
                    <li> <a href="tel:+554734613134"> Fone: (47) 3461 3134 </a> </li>
                    <li> <a href="https://api.whatsapp.com/send?phone=+5547999310196&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20da%20GoFind."> WhatsApp: (47) 999310196 </a> </li>
                </List>
                <List>
                    <li> <h3> Lorem </h3> </li>
                    <li> <a href="https://www.gofind.online"> Ipsum </a> </li>
                    <li> <a href="https://www.gofind.online"> Ipsum </a> </li>
                    <li> <a href="https://www.gofind.online"> Ipsum </a> </li>
                </List>
                <List>
                    <li> <h3> Lorem </h3> </li>
                    <li> <a href="https://www.gofind.online"> Ipsum </a> </li>
                    <li> <a href="https://www.gofind.online"> Ipsum </a> </li>
                    <li> <a href="https://www.gofind.online"> Ipsum </a> </li>
                </List>
            </ContainerDefault>
            <Copyright>
                <p> Copyright © 2020 Lorem </p>
            </Copyright>
        </ContainerFullScreen>
    )
}
