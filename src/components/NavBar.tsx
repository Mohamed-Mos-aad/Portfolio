import { NavLink } from 'react-router-dom'
import style from '../style/components/navbar.module.css'

export default function NavBar() {
    return (
        <>
            <nav className={style.nav}>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about-me'>About Me</NavLink>
                    </li>
                    <li>
                        <NavLink to='/projects'>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>contact</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
