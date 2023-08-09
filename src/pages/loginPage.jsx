import { Logo } from "../components/logo.jsx"
import { CenterContainer, Container, FormContainer } from "../styled_components/style"
import { useNavigate } from "react-router-dom"
import { useRef, useContext, useState } from "react"
import { authContext } from "../contexts/authContext.jsx"
import SweetAlert2 from "react-sweetalert2"
import { Header } from "../components/header.jsx"

export const LoginPage = () => {
    const { login } = useContext(authContext)
    const [showAlert, setShowAlert] = useState(false)
    const [alertText, setAlertText] = useState("")
    const email = useRef(null)
    const password = useRef(null)
    const navigate = useNavigate()

    const Submit = async (e) => {
        e.preventDefault()
        const loged = await login(email.current.value, password.current.value)
        if (loged.status === 200) {
             localStorage.setItem("token", loged.data)
            console.log(loged.data)
            navigate("/")
        } else {
            setAlertText(loged.response.data)
            setShowAlert(true)
        }
    }

    return (
        <>
            <Header />
            <Container>
                <CenterContainer>
                    <SweetAlert2
                        show={showAlert}
                        title={"erro"}
                        text={alertText}
                        onConfirm={() => { setShowAlert(false) }}
                    />
                    <Logo width={"400px"} />
                    <FormContainer onSubmit={Submit}>
                        <input type="email" ref={email} placeholder="Email" />
                        <input type="password" ref={password} placeholder="Confirme sua senha" />
                        <button> Entrar </button>
                        <a href="/register"> Não tem uma conta ? cadastre-se aqui....</a>
                    </FormContainer>
                </CenterContainer>
            </Container>
        </>
    )
}

