import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    white: "#FFFFFF",
    red: 'darkred',
    primary: '#0366d6',
    backgroundDark: '#24292e',
    backgroundLight: '#eeeeee',
    inputBorder: '#aaaaaa',
    placeholderText: '#bbbbbb'
  },
  fontSizes: {
    body: 14,
    subheading: 16
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    }) 
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;