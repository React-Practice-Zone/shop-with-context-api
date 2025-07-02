import { useContext, createContext, useState } from "react";

//#region ThemeContext
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
//#endregion

//#region Header component
function Header() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>Demo Website</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}
//#endregion

//#region Page component
function Page() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="app" className={theme}>
      <Header />

      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
      </article>
    </div>
  );
}
//#endregion

function App() {
  return (
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  );
}

export default App;
