import React from "react";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import {ReactComponent as Logo} from "../../starter_files/images/logo.svg";
import {ReactComponent as ArrowDown} from "../../starter_files/images/icon-arrow-down.svg";
import {ReactComponent as Moon} from "../../starter_files/images/icon-moon.svg";

export default function App() {

  const [font, setFont] = useState("Sans Serif")

  const [mode, setMode] = useState("light");

  const [menu, setMenu] = useState(false)

  function getLocalStorage() {
    const localStorageMode = localStorage.getItem('mode');
    const localStorageFont = localStorage.getItem('font')
    if (localStorageMode) {
      setMode(localStorageMode);
    }
    if (localStorageFont) {
      setFont(localStorageFont);
    }
  }
  function updateLocalStorageMode(mode) {
    const localStorageMode = localStorage.getItem('mode');

    if (localStorageMode) {
      localStorage.setItem('mode', localStorageMode);
      setMode(localStorageMode);
    }
    localStorage.setItem('mode', mode);
    setMode(mode);
  }

  function updateLocalStorageFont(font) {
    const localStorageFont = localStorage.getItem('font')

    if (localStorageFont) {
      localStorage.setItem('font', localStorageFont);
      setFont(localStorageFont);
    }
    localStorage.setItem('font', font);
    setFont(font);
  }
  
  useEffect(() => {
    getLocalStorage();
  }, [])

  const toggleMenu = () => {
    setMenu(!menu);
  }

  const changeFont = (event) => {
    updateLocalStorageFont(event.target.text)
    setMenu(!menu);
  }

  const toggleColorMode = () => {
      updateLocalStorageMode(mode === 'light' ? 'dark' : mode === 'dark' ? 'light' : 'light')
  }
  return (
    <>
      <section theme={mode} font={font}>
        <section className="mainWrapper">
          <div className="header">
            <Logo className="logo" />
            <div className="headerActions">
              <div id="select">
                <span>{font}</span>
              </div>
              <ArrowDown onClick={toggleMenu} className="arrowDown" />
              <div className={`menu ${menu ? 'show' : ''}`}>
                <div className="menuContainer">
                    <ul>
                        <li><a href="#" onClick={changeFont}>Sans Serif</a></li>
                        <li><a href="#" onClick={changeFont}>Serif</a></li>
                        <li><a href="#" onClick={changeFont}>Mono</a></li>
                    </ul>
                </div>
              </div>
              <IconButton onClick={toggleColorMode}>
                {mode === 'dark' ? <ToggleOnIcon sx={{ color: "hsl(274, 82%, 60%)" }}/> : <ToggleOffIcon color="disabled" />}
              </IconButton>
              {mode === 'dark' ? <Moon stroke= "hsl(274, 82%, 60%)"/> : <Moon stroke= "hsl(0, 0%, 51%)" />}
            </div>
          </div>

          <div className="input">

          </div>
        </section>
      </section>
    </>
  );
}