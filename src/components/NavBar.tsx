import React, {ReactNode} from 'react'
import { useTheme } from './ThemeProvider';
import './NavBar.css'

const NavBar : React.FC<{children : ReactNode}> = ({children}) => {
    const {isLight} = useTheme();

    return (
    <div className={isLight ? 'navbar navbar-light' : 'navbar navbar-dark'}>
        {children}
    </div>
    )
}

export default NavBar