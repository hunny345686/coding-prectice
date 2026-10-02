// Context API — Theme Toggle

const { createContext, useState, useContext } = require("react");

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setThem] = useState("Light");

  return (
    <ThemeContext.Provider value={{ theme, setThem }}>
      {children}
    </ThemeContext.Provider>
  );
};

function Theme() {
  const { theme, setThem } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <p></p>
    </div>
  );
}

const App = () => {
  return (
    <ThemeProvider>
      <Theme />
    </ThemeProvider>
  );
};

// ==============================
