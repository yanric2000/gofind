import styled from 'styled-components';
import * as Variables from '../../assets/theme/variables';

export const Container = styled.div`
    background-color: ${
        (props) => {
            return props.backgroundColor ? props.backgroundColor : Variables.primaryColorLighter;
        }
    };
    display: flex;
    flex-flow: ${
        (props) => {
            return props.flexFlow ? props.flexFlow : '';
        }
    };
    justify-content: center;
    width: 100%;
`;