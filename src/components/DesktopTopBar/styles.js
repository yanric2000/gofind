import styled from "styled-components";

export const Nav = styled.nav`
    align-items: center;
    display: flex;
    height: 100%;
    width: 100%;
    a {
        margin-right: 24px;
        &:last-child{
            margin-right: 0;
        }
    }
`;