import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div className="navBar">
            <div className="wrapperNav navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/templatelist">Refresh</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;