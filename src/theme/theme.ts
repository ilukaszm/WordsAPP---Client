import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    yellow: '#F9DC5C',
    primaryRed: '#ED254E ',
    secondaryRed: '#C21F40',
    darkBlue: '#011936',
    black: '#000000',
    white: '#FFFFFF',
  },
  sizes: {
    XXL: '48px',
    XL: '36px',
    L: '24px',
    M: '16px',
    S: '14px',
  },
  bolds: {
    bold: '700',
    regular: '400',
    light: '300',
  },
  font: 'Montserrat, sans-serif',
  devices: {
    mobile: '@media (max-width: 640px)',
    mobileL: '@media (max-width: 767px)',
    tablet: '@media (min-width: 768px)',
    tabletL: '@media (min-width: 1024px)',
    desktop: '@media (min-width: 1366px)',
    desktopFHD: '@media (min-width: 1920px)',
  },
};

export default theme;
