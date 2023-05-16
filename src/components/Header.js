
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header>
            <div className="wrapper headerFlex">
                <h1>Create My Meme</h1>
                <h2>The ultimate meme creator website for all the internet warriors out there.</h2>
                <p>Express your creativity and humor with our extensive collection of meme templates. Whether you're a fan of classic memes or you want to create the next viral sensation, Create My Meme has got you covered. So, what are you waiting for? Get ready to unleash your inner meme master and let the world laugh with you!</p>
                <Link to="/templatelist">View All Templates</Link>

                
            </div>
        </header>
    )
}

export default Header;