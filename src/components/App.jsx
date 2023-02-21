import * as React from "react";
import Select from 'react-select'
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import {ReactComponent as Logo} from "../../starter_files/images/logo.svg";


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function Header() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const select = [
    { value: 'sans-serif', label: 'Sans Serif' },
    { value: 'serif', label: 'Serif' },
    { value: 'mono', label: 'Mono' }
  ]

  return (
    <>
      <section className="header">
        <div className="headerWrapper">
          <Logo className="logo" />
          <div>
            <Select options={select} />
          </div>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <ToggleOnIcon sx={{ color: "hsl(274, 82%, 60%)" }}/> : <ToggleOffIcon color="disabled" />}
          </IconButton>
          {theme.palette.mode === 'dark' ? <NightlightRoundIcon sx={{ color: "hsl(274, 82%, 60%)" }}/> : <NightlightRoundIcon color="disabled" />}
        </div>
      </section>
    </>
  );
}

export default function App() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}