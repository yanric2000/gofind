import styled from "styled-components";
import * as Variables from '../../assets/theme/variables';

export const Container = styled.div`
    align-items: center;
    background-color: ${
        (props) => {
            return props.backgroundColor ? props.backgroundColor : Variables.randomHex();
        }
    };
    display: flex;
    flex-flow: column;
    justify-content: center;
    height: 100%;
    padding: 40px;
    width: 25%;
    .header {
        align-items: center;
        display: flex;
        justify-content: center;
        width: 100%;
        svg {
            max-height: 40px;
        }
    }
    .container-text {
        display: block;
        text-align: center;
        h3 {
            color: ${Variables.thirdyColor};
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 50px;
            margin-top: 26px;
            text-align: center;
        }
        span {
            color: ${Variables.thirdyColor};
            font-size: 16px;
            line-height: 1.2;
            text-align: center;
        }
    }
    @media (max-width: 1300px) {
        width: 50%;
        .container-text {
            h3 {
                margin-bottom: 40px;
                margin-top: 20px;
            }
        }
    }
    @media (max-width: 640px) {
        width: 100%;
        .container-text {
            h3 {
                margin-bottom: 30px;
                margin-top: 14px;
            }
        }
    }
`;