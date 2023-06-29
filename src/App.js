import logo from './logo.svg';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/globalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeButton, ThemeContainer } from './theme/ThemeSwitching.styled';
import { useEffect, useState } from 'react';
import { blue, brown, dark, green, light, pink } from './theme/theme';
import HomePage from './pages/HomePage';

function App() {
  const [selectedTheme, setSelectedTheme] = useState(light);

  

  // react hook to get the theme selected by the user that is saved in local storage
  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);

  // function to handle user theme selection on click and save it to local storage
  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };
  return (
    <div className="App">
     <ThemeProvider theme={selectedTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <ThemeContainer>
            <span>Themes: </span>
            <ThemeButton
              className={`light ${selectedTheme === light ? "active" : ""}`}
              onClick={() => handleThemeChange(light)}
            ></ThemeButton>
            <ThemeButton
              className={`dark ${selectedTheme === dark ? "active" : ""}`}
              onClick={() => handleThemeChange(dark)}
            ></ThemeButton>
            <ThemeButton
              className={`blue ${selectedTheme === blue ? "active" : ""}`}
              onClick={() => handleThemeChange(blue)}
            ></ThemeButton>
            <ThemeButton
              className={`green ${selectedTheme === green ? "active" : ""}`}
              onClick={() => handleThemeChange(green)}
            ></ThemeButton>
            <ThemeButton
              className={`brown ${selectedTheme === brown ? "active" : ""}`}
              onClick={() => handleThemeChange(brown)}
            ></ThemeButton>
            <ThemeButton
              className={`pink ${selectedTheme === pink ? "active" : ""}`}
              onClick={() => handleThemeChange(pink)}
            ></ThemeButton>
          </ThemeContainer>
          <Routes>
            <Route exact path="/" element={<HomePage  />} />
          </Routes>
        </BrowserRouter>
     </ThemeProvider>
    </div>
  );
}

export default App;
