import styled from 'styled-components';

// Colors
export const primaryColor = '#22D0BC';
export const primaryColorLighter = '#38DBBB';
export const primaryColorDarker = '#179183';

export const secondaryColor = '#089A2A';
export const secondaryColorLighter = '#00B05B';
export const secondaryColorDarker = '#00703A';

export const thirdyColor = '#FFF';
export const thirdyColorDarker = '#404040';
export const thirdyColorShadow = '#333333';

export const fourthColor = '#222222';
export const fourthColorLighter = '#2E2E2E';

export const fifthColor = '#D11200';
export const fifthColorShadow = '#910C00';

// Components
export const ContainerDefault = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 100%;
    padding: 30px;
    width: 1100px;
`;

//Functions
const hexToRgb = (hex) => {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    } : null;
};

export const rgba = (hex, alpha) => {
    const color = hexToRgb(hex);
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
};

export const randomHex = () => {
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
};