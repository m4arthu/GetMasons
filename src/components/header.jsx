import { Link } from "react-router-dom"
import { HeaderContainer } from "../styled_components/style.js"
import { Logo } from "./logo.jsx"
import { useContext } from "react"
import { authContext } from "../contexts/authContext.jsx"
import { MdOutlineDoorFront } from "react-icons/md"
export const Header = () => {
    const { isloged, logOut } = useContext(authContext)
    return (
        isloged() ?
            <>
                <HeaderContainer>
                <div>
                        <Logo />
                        <p>
                            GetMasons
                        </p>
                    </div>
                    <div>
                        <Link to="/"> Home </Link>
                        <Link to="/profile"> Perfil </Link>
                        <Link>
                            <MdOutlineDoorFront size={"30px"} onClick={() => { logOut() }} />
                        </Link>

                    </div>
                </HeaderContainer>
            </>
            :
            <>
                <HeaderContainer>
                    <div>
                        <Logo />
                        <p>
                            GetMasons
                        </p>
                    </div>
                    <div>
                        <Link to="/"> Home </Link>
                        <Link to="/login"> Entrar </Link>
                        <Link to="/register"> Cadastre-se</Link>
                    </div>
                </HeaderContainer>
            </>
    )
}