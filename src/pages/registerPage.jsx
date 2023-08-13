import { useContext, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import SweetAlert2 from "react-sweetalert2"
import { Logo } from "../components/logo.jsx"
import { CenterContainer, Container, FormContainer } from "../styled_components/style"
import { authContext } from "../contexts/authContext.jsx"
import { Header } from "../components/header.jsx"
import ReactLoading from "react-loading"
export const RegisterPage = () => {
    const { register } = useContext(authContext)
    const [showAlert, setShowAlert] = useState(false)
    const [alertText, setAlertText] = useState("")
    const name = useRef(null)
    const email = useRef(null)
    const local = useRef(null)
    const phone = useRef(null)
    const password = useRef(null)
    const confirmPassword = useRef(null)
    const navigate = useNavigate()
    const [buttonState,setButtonState] = useState(false)


    const Submit = async (e) => {
        setButtonState(true)
        e.preventDefault()
        if (password.current.value !== confirmPassword.current.value) {
            setAlertText("Senha e confirma  senha  precisam ser igauis!!")
            setButtonState(false)
            setShowAlert(true)
        } else {
            const registed = await register(name.current.value, email.current.value
                , phone.current.value, local.current.value
                , password.current.value)
            if (registed.status === 201) {
                setButtonState(false)
                navigate("/login")
            } else {
                setButtonState(false)
                setAlertText(registed.response.data)
                setShowAlert(true)
            }
        }
    }
    return (
        <>
            <Header />
            <Container>
                <SweetAlert2
                    show={showAlert}
                    title={"erro"}
                    text={alertText}
                    onConfirm={() => { setShowAlert(false) }}
                />
                <CenterContainer>
                    <Logo width={"400px"} />
                    <FormContainer onSubmit={Submit}>
                        <input type="text" ref={name} placeholder="Nome" />
                        <input type="email" ref={email} placeholder="Email" />
                        <input type="text" ref={local} placeholder="local" />
                        <input type="number" ref={phone} placeholder="Numero  de celular" />
                        <input type="password" ref={password} placeholder="Senha" />
                        <input type="password" ref={confirmPassword} placeholder="Confirme sua senha" />
                        {buttonState ? <ReactLoading  color="#13AEC6" /> : <button disabled={buttonState}> Enviar </button>}
                        <Link to={"/login"}> ja tem uma conta ? entre aqui....</Link>
                    </FormContainer>
                </CenterContainer>
            </Container>
        </>
    )
}