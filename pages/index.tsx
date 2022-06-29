import type { NextPage } from "next";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#00853f",
    },
  },
});

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant="contained">Hello World</Button>
    </ThemeProvider>
  );
};

export default Home;
