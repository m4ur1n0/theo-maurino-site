import React, {ReactNode} from 'react';
import './Background.css';
import NavOptions from './NavOptions';
import NavBar from './NavBar';
import { useTheme } from './ThemeProvider';

const Background : React.FC<{children : ReactNode}> = ({children}) => {


    const {isLight} = useTheme();

    return (
        <div className={isLight ? `background background-light` : `background background-dark`}>
            <NavBar>
                <NavOptions />
            </NavBar>
            {children}
        </div>
    )
}

export default Background
