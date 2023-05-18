import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div className="navBar">
            <div className="wrapperNav navigation">
                <ul>
                    <li><Link to="/" className="homeNav">Create My Meme</Link></li>
                    <li><Link to="/" className="refreshNav">&#8634;</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;