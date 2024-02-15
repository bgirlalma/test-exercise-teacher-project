import UserNavButton from "./button/userNavButton";
import Logo from "./logo";
import Navigation from "./navigation/nav";

const Header = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <UserNavButton/>
        </div>
    )
}

export default Header;