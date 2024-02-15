import { NavLink } from "react-router-dom"
import { LoginSvg } from "../../image/login";

const UserNavButton = () => {
    return (
        <div>
            <button>
                <LoginSvg/>
                <NavLink>Log in</NavLink>
            </button>
            <button>
                <NavLink>Registration</NavLink>
            </button>
        </div>
    )
}

export default UserNavButton;