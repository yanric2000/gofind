import styled from 'styled-components';
import * as Variables from '../../assets/theme/variables';

export const Form = styled.form`
    align-items: center;
    display: flex;
    flex-flow: column;
    padding: 40px;
    width: 100%;
    .row {
        display: flex;
        flex-flow: wrap;
        max-width: 100%;
        width: 500px;
        .container-input {
            margin-top: 24px;
            max-width: 100%;
            width: 100%;
            .error-message {
                margin-top: 14px;
                width: 100%;
                span {
                    color: ${Variables.fifthColor};
                    font-size: 18px;
                    font-weight: 600;
                }
            }
        }
    }
    .container-button {
        align-items: center;
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;
        margin-top: 40px;
        max-width: 100%;
        width: 500px;
        button {
            align-items: center;
            border: 0;
            border-radius: 12px;
            color: ${Variables.thirdyColor};
            cursor: pointer;
            display: flex;
            font-size: 16px;
            height: 44px;
            padding: 10px 20px;
            transition: all 0.2s ease-in-out;
            &.cancel {
                background-color: ${Variables.fifthColor};
                &:hover {
                    background-color: ${Variables.fifthColorShadow};
                }
                svg {
                    height: 22px;
                }
            }
            &.submit {
                background-color: ${Variables.secondaryColorLighter};
                &:hover {
                    background-color: ${Variables.secondaryColorDarker};
                }
                &:disabled{
                    cursor: initial;
                    opacity: 0.5;
                }
            }
            svg {
                height: 100%;
                margin-left: 16px;
                width: auto;
            }
        }
    }
    .text-field {
        width: 100%;
        &.filled.error,
        &.not-filled.error,
        &.filled.error:hover,
        &.not-filled.error:hover {
            label, input, fieldset legend span {
                color: ${Variables.fifthColor} !important;
            }
            fieldset {
                border-color: ${Variables.fifthColor} !important;
            }
            label.Mui-focused,
            .MuiInputBase-root.Mui-focused {
                color: ${Variables.fifthColor} !important;
                input {
                    color: ${Variables.fifthColor} !important;
                }
                fieldset {
                    border-color: ${Variables.fifthColor} !important;
                }
            }
        }
        &:hover {
            label, input, fieldset legend span {
                color: #c3c3c3 !important;
            }
            fieldset {
                border-color: #c3c3c3 !important;
            }
        }
        label {
            color: #FFF !important;
        }
        input {
            color: #FFF !important;
        }
        fieldset {
            border-color: #FFF !important;
            border-width: 2px !important;
        }
        label.Mui-focused,
        .MuiInputBase-root.Mui-focused {
            color: #3f51b5 !important;
            font-size: 18px !important;
            input {
                color: #3f51b5 !important;
                font-size: 16px !important;
            }
            fieldset {
                border-color: #3f51b5 !important;
            }
        }
        &.filled {
            label {
                color: #3f51b5 !important;
                font-size: 18px !important;
            }
            input {
                color: #3f51b5 !important;
            }
            fieldset {
                border-color: #3f51b5 !important;
            }
            &:hover {
                label, input, fieldset legend span {
                    color: #3D78CC !important;
                }
                fieldset {
                    border-color: #3D78CC !important;
                }
            }
        }
    }
    @media (max-width: 700px) {
        .container-button {
            margin-top: 20px;
            button {
                svg {
                    margin: 0 !important;
                }
            }
        }
    }
    @media (max-width: 600px) {
        padding: 0 20px;
        .row {
            .container-input {
                margin-top: 12px;
                input:not(.fake-class) {
                    font-size: 14px !important;
                    padding-bottom: 15px;
                    padding-top: 15px;
                }
                legend {
                    span {
                        font-size: 13px;
                    }
                }
            }   
        }
    }
    @media (max-width: 370px) {
        padding: 0;
    }
    @media (max-height: 680px) {
        margin-bottom: 60px;
        margin-top: 24px;
    }
`;
