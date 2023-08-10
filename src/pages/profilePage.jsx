import ReacModal from "react-modal"
import { Container, FormContainer, ModalButton } from "../styled_components/style"
import { useState, useContext } from "react"
import { useEffect } from "react"
import axios from "axios"
import { Service } from "../components/service"
import { authContext } from "../contexts/authContext"
import { useNavigate } from "react-router-dom"
import { MdAssignmentAdd } from "react-icons/md"
import { Header } from "../components/header"
import { useRef } from "react"
import SweetAlert2 from "react-sweetalert2"
export const ProfilePage = () => {
    const { isloged } = useContext(authContext)
    const navigate = useNavigate()
    const [modalView, setModalView] = useState(false)
    const [userServices, setUserServices] = useState([])
    const imagUrl = useRef(null)
    const title = useRef(null)
    const price = useRef(null)
    const description = useRef(null)
    const phone = useRef(null)
    const [alertBody,setAlertBody] = useState("")
    const [alertTitle,setAlertTitle] = useState("")
    const [alertShow,setAlertShow] = useState(false)
    const sendService =  (e) => {
        e.preventDefault()
        axios.post(import.meta.env.VITE_API_URL + "/service",{
            imageUrl: imagUrl.current.value,
            title: title.current.value,
            price:Math.trunc(price.current.value),
            description: description.current.value,
            phone:phone.current.value,
            avaible:true
        }).then(()=>{
            setAlertTitle("Serviço criado")
            setAlertShow(true)
            window.location.reload()
        }).catch((e)=> {
            setAlertTitle("erro")
            setAlertBody(e.response.data)
            setAlertShow(true)
        })
    }


    useEffect(() => {
        if (!isloged()) {
            navigate("/")
        }
        axios.get(import.meta.env.VITE_API_URL + "/services/me")
            .then((r) => {
                setUserServices(r.data)
            }).catch((e) => {
                console.log(e.response.data)
            })
    }, [])


    return (
        <>
            <Header />
            <Container>
                <SweetAlert2 onConfirm={()=>{
                    setAlertShow(false)
                }} show={alertShow} title={alertTitle} text={alertBody}/>
                <FormContainer>
                    <div className="addServiceIcon" onClick={() => {
                        setModalView(true)
                    }}><MdAssignmentAdd size={"30px"} /><p>adicione um  serviço</p></div>
                    {userServices.map((s) => {
                        return <Service key={s.id} viewEdit={true} object={s} />
                    })}
                </FormContainer>
                <ReacModal ariaHideApp={false} isOpen={modalView}>
                    <ModalButton onClick={() => {
                        setModalView(false)
                    }}>x</ModalButton>
                    <Container>
                        <FormContainer onSubmit={sendService}>
                            <input type="text" ref={imagUrl} placeholder="Image url"/>
                            <input type="text" ref={title} placeholder="Title" />
                            <input type="number" ref={price} placeholder="Price" />
                            <input type="text" ref={description}  placeholder="description"/>
                            <input type="number" ref={phone} placeholder="phoneNumber (99 99999-9999)" />
                            <button> Enviar </button>
                        </FormContainer>
                    </Container>
                </ReacModal>
            </Container>
        </>
    )
}