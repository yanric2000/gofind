import styled from 'styled-components';
import * as Variables from '../../assets/theme/variables';

export const List = styled.ul`
    margin: 0 auto;
    padding: 70px 0;
    padding-right: 100px;
    width: 33%;
    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
        padding-right: 0;
        width: calc(33% - 100px);
    }
    li {
        color: ${Variables.thirdyColor};
        font-size: 18px;
        margin-bottom: 36px;
        &:first-child {
            min-height: 58px;
        }
        &:last-child {
            margin-bottom: 0;
        }
        h3  {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 50px;
        }
        a {
            color: inherit;
            line-height: 1.2;
            position: relative;
            &::after {
                background-color: ${Variables.secondaryColor};
                bottom: -2px;
                content: '';
                height: 1px;
                left: 0;
                position: absolute;
                transition: width 0.25s ease-in-out;
                width: 0;
            }
            &:hover {
                color: ${Variables.secondaryColor};
                &::after {
                    width: 100%;
                }
            }
        }
    }
    @media (max-width: 1280px) {
        padding-right: 50px;
        width: 30%;
        &:first-child {
            width: 36%;
        }
    }
    @media (max-width: 1024px) {
        margin-bottom: 70px;
        padding: 0 30px !important;
        width: 100% !important;
        &:first-child {
            margin-top: 70px;
        }
        li {
            align-items: center;
            display: flex;
            flex-flow: column;
            margin-bottom: 30px;
            min-height: auto !important;
            a {
                text-align: center;
            }
            h3 {
                margin-bottom: 0;
            }
        }
    }
    @media (max-width: 700px) {
        margin-bottom: 40px;
        &:first-child {
            margin-top: 40px;
        }
        li {
            margin-bottom: 20px;
        }
    }
    @media (max-width: 568px) {
        margin-bottom: 30px;
        padding: 0 16px !important;
        &:first-child {
            margin-top: 30px;
            li {
                &:first-child {
                    margin-bottom: 20px;
                }
            }
        }
        li {
            font-size: 16px;
            margin-bottom: 6px;
            h3 {
                font-size: 22px;
            }
        }
    }
`;

export const Copyright = styled.div`
    align-items: center;
    background-color: ${Variables.thirdyColorDarker};
    display: flex;
    height: 70px;
    justify-content: center;
    width: 100%;
    p {
        color: ${Variables.thirdyColor};
    }
`;