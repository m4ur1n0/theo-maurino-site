import './NavOptions.css'
import { useTheme } from './ThemeProvider';

interface Props {
    selectedPage : string;
}

const NavOptions = (p : Props) => {
/*
    import {theo-maurino} from
        './src/_projects'
        './src/about_me'
        './src/blog_personal'
        '/src/_philosophy'
*/
    const {isLight} = useTheme();
    const {selectedPage} = p; // add bolding selected page

    return (
        <div className={isLight ? 'nav-options nav-options-light' : 'nav-options nav-options-dark'}>
            <div className={isLight ? 'nav-title nav-title-light' : 'nav-title nav-title-dark'}>
                import &#123; theo-maurino &#125; from
            </div>
            <div className={isLight ? 'about-me-link about-me-link-light' : 'about-me-link about-me-link-dark'}>
                './src/about_me'
            </div>
            <div className={isLight ? 'projects-link projects-link-light' : 'projects-link projects-link-dark'}>
                './src/projects'
            </div>
            <div className={isLight ? 'blog-link blog-link-light' : 'blog-link blog-link-dark'}>
                './src/blog_personal'
            </div>
            <div className={isLight ? 'philosophy-link philosophy-link-light' : 'philosophy-link philosophy-link-dark'}>
                './src/philosophy'
            </div>
        </div>
    )
}

export default NavOptions