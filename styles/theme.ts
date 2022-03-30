import { extendTheme, themeTools } from "native-base";


const theme = extendTheme({
  components: {
    Text: {
      baseStyle: (props: any) => {
        return {
          color: themeTools.mode('light.200', 'light.200')(props),
        }
      },
    },
  },
  colors: {
    primary: {
      900: '#ebf6fc',
      800: '#cddae5',
      700: '#acbed0',
      600: '#8ba3be',
      500: '#6b87ac',
      400: '#516b92',
      300: '#3f5173',
      200: '#2d3952',
      100: '#1a2232',
      50: '#070c15',
    },
    secondary: {
      50: '#fcf9e1',
      100: '#f2eebb',
      200: '#eae394',
      300: '#e1d76b',
      400: '#d8cc42',
      500: '#bfb229',
      600: '#948b1e',
      700: '#6a6313',
      800: '#403b08',
      900: '#161400',
    },
    tertiary: {
      50: '#e2fbf1',
      100: '#c2ebd8',
      200: '#9fdebf',
      300: '#7bcfa3',
      400: '#57c186',
      500: '#3ea868',
      600: '#2e8356',
      700: '#1e5d41',
      800: '#0f3929',
      900: '#00150c',
    },
    light: {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d',
    },
    dark:
    {
      900: '#ebf6fc',
      800: '#cddae5',
      700: '#acbed0',
      600: '#8ba3be',
      500: '#6b87ac',
      400: '#516b92',
      300: '#3f5173',
      200: '#2d3952',
      100: '#1a2232',
      50: '#070c15',
    }
  },
  fonts: {
    heading: 'Jost',
    body: 'Jost',
    mono: 'Jost',
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
});

export default theme;