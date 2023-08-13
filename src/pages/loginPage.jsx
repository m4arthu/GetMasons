import { Logo } from "../components/logo.jsx"
import { CenterContainer, Container, FormContainer } from "../styled_components/style"
import { Link, useNavigate } from "react-router-dom"
import { useRef, useContext, useState } from "react"
import { authContext } from "../contexts/authContext.jsx"
import SweetAlert2 from "react-sweetalert2"
import { Header } from "../components/header.jsx"
import ReactLoading from "react-loading"
export const LoginPage = () => {
    const { login } = useContext(authContext)
    const [showAlert, setShowAlert] = useState(false)
    const [alertText, setAlertText] = useState("")
    const email = useRef(null)
    const password = useRef(null)
    const navigate = useNavigate()
    const [buttonState,setButtonState] = useState(false)
    const Submit = async (e) => {
        setButtonState(true)
        e.preventDefault()
        const loged = await login(email.current.value, password.current.value)
        if (loged.status === 200) {
            setButtonState(false)
             localStorage.setItem("token", loged.data)
            console.log(loged.data)
            navigate("/")
        } else {
            setButtonState(false)
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
                        {buttonState ? <ReactLoading  color="#13AEC6" /> : <button disabled={buttonState}> Enviar </button>}
                        <Link to={"/registe"}>Não tem uma conta ? registre-se aqui</Link>
                    </FormContainer>
                </CenterContainer>
            </Container>
        </>
    )
}

