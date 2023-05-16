import { Link } from "react-router-dom";


const Nav = () => {

    const handleRefreshClick = () => {
        window.location.reload();
      };

    return (
        <div className="navBar">
            <div className="wrapperNav navigation">
                <ul>
                    <li><Link to="/" className="homeNav">Create My Meme</Link></li>
                    <li><p className="refreshNav" onClick={handleRefreshClick}>&#8634;</p></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;