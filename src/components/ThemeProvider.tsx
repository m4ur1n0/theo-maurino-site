import React, {createContext, ReactNode, useContext, useState} from 'react'

interface ThemeContextType {
  isLight : boolean;
  toggleDarkMode : () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider : React.FC<{children : ReactNode}> = ({children}) => {
  const [isLight, setTheme] = useState(true);

  const toggleDarkMode = () => {
    setTheme(prevMode => !prevMode);
  };


  return (
    <ThemeContext.Provider value={{isLight, toggleDarkMode}}>
      {children}
    </ThemeContext.Provider>
  )

}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("theme context doesn't exist, or is being called outside of theme provider");
  } else {
    return context;
  }
}