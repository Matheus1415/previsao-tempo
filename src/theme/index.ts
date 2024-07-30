import { extendTheme } from '@chakra-ui/react';

const themePersonalizado = extendTheme({
  colors: {
    primary: {
      100: "#E5FCF1",
      200: "#27EF96",
      300: "#10DE82",
      400: "#0EBE6F",
      500: "#0CA25F",
      600: "#0A8649",
      700: "#086F3D",
      800: "#075C33",
      900: "#064528",
    },
  },
});

export default themePersonalizado;
