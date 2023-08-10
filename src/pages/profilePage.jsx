import ReacModal from "react-modal"
import { Container, FormContainer } from "../styled_components/style"
import { useState, useContext } from "react"
import { useEffect } from "react"
import axios from "axios"
import { Service } from "../components/service"
import { authContext } from "../contexts/authContext"
import { useNavigate } from "react-router-dom"
import { MdAssignmentAdd } from "react-icons/md"
import { Header } from "../components/header"
export const ProfilePage = () => {
    const { isloged } = useContext(authContext)
    const navigate = useNavigate()
    
    const [userServices, setUserServices] = useState([])
    useEffect(() => {
        if (!isloged()) {
            navigate("/")
        }
        axios.get(import.meta.env.VITE_API_URL + "/services/me")
            .then((r) => {
                setUserServices(r.data)
            }).catch((e) => {
                console.log(e)
            })
    }, [])


    return (
        <>
        <Header/>
            <Container>
                <FormContainer>
                    <div className="addServiceIcon" onClick={() => {
                        addService()
                    }}><MdAssignmentAdd size={"30px"} /><p>adicione um  serviço</p></div>
                    {userServices.map((s) => {
                        return <Service key={s.id} viewEdit={true} object={s} />
                    })}
                </FormContainer>
                <ReacModal isOpen={false}>
                    dweadwadawd
                </ReacModal>
            </Container>
        </>
    )
}