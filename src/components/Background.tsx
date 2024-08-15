import React, {ReactNode, useState} from 'react';
import './Background.css';
import NavOptions from './NavOptions';
import NavBar from './NavBar';
import { useTheme } from './ThemeProvider';

const Background : React.FC<{children : ReactNode}> = ({children}) => {


    const {isLight} = useTheme();
    const [selectedPage, setSelectedPage] = useState("about_me")

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
