import { Link } from "react-router-dom"
import '../Home.css';

const NavOps =[
    {
        path: '/',
        label: 'Home'
    },
    {
        path: '/profile',
        label: 'Profile'
    },
];

const Navigation:React.FC = () => {
    return (

        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <span className="navbar-brand">Filmoteca App</span>
            <ul className="navbar-nav mr-auto">
                {NavOps.map(item => (
                    <li className="nav-item" key={item.label}>
                        <Link className="nav-link"to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
        </nav>
    )
}

export default Navigation

