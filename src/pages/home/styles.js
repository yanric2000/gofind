import styled from "styled-components";
import * as Variables from '../../assets/theme/variables';

export const ContainerSlide = styled.div`
    max-height: 100vh;
    position: relative;
    width: 100%;
    .carousel {
        max-height: 100%;
    }
    .floating-container + div {
        height: 100%;
    }
    .floating-container {
        align-items: center;
        bottom: 0;
        display: flex;
        height: auto;
        justify-content: center;
        left: 0;
        margin: auto;
        max-height: calc(100% - 60px);
        max-width: calc(100% - 60px);
        position: absolute;
        top: 0;
        right: 0;
        width: auto;
        z-index: 10;
        h1 {
            font-family: 'Dancing Script';
            font-size: 86px;
            font-weight: 700;
            letter-spacing: 1.1px;
            margin-bottom: 12px;
            width: 100%;
        }
        p {
            font-size: 30px;
            font-weight: 400;
            letter-spacing: 1.1px;
            width: 100%;
        }
    }
    @media (max-width: 568px) {
        .carousel{
            .control-arrow {
                opacity: 1;
            }
        }
    }
    @media (max-width: 1200px) {
        .floating-container {
            h1 {
                font-size: 74px;
            }
            p {
                font-size: 28px;
            }
        }
    }
    @media (max-width: 1000px) {
        .floating-container {
            h1 {
                font-size: 68px;
            }
            p {
                font-size: 26px;
            }
        }
    }
    @media (max-width: 800px) {
        .floating-container {
            h1 {
                font-size: 62px;
            }
            p {
                font-size: 24px;
            }
        }
    }
    @media (max-width: 700px) {
        .floating-container {
            h1 {
                color: ${Variables.thirdyColor};
                font-size: 58px;
            }
            p {
                color: ${Variables.thirdyColor};
                font-size: 22px;
            }
        }
    }
    @media (max-width: 660px) {
        .floating-container {
            h1 {
                font-size: 50px;
            }
            p {
                font-size: 21px;
            }
        }
    }
    @media (max-width: 540px) {
        .floating-container {
            padding-left: 10px;
            h1 {
                font-size: 40px;
            }
            p {
                font-size: 18px;
            }
        }
    }
    @media (max-width: 540px) {
        .floating-container {
            h1 {
                font-size: 36px;
            }
            p {
                font-size: 16px;
            }
        }
    }
`;

export const ContainerCards = styled.div`
    align-items: center;
    display: flex;
    flex-flow: wrap;
    height: 280px;
    width: 100%;
`;