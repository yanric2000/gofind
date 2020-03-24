import styled from "styled-components";
import * as Variables from '../../assets/theme/variables';

export const ContainerNavigation = styled.div`
    background-color: transparent;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
    height: 60px;
    left: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    transition: all 0.25s ease-in-out;
    width: 100%;
    z-index: 9999;
    &.active {
        background-color: ${Variables.rgba(Variables.thirdyColor, 0.8)}
    }
`;