import { IconContainer, ServiceContainer } from "../styled_components/style.js"
import { MdAssignmentReturned, MdAssignmentLate } from "react-icons/md"
import {BsFillTrashFill} from "react-icons/bs"
import SweetAlert2 from "react-sweetalert2"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const Service = ({ object, viewEdit }) => {
    const [alertTitle, setAlertTitle] = useState("")
    const navigate = useNavigate()
    const [alertView, setAlertView] = useState(false)
    const disable_able = async () => {
        console.log(object.id)
        if (object.avaible) {
            await axios.put(import.meta.env.VITE_API_URL + `/services/${object.id}`, { avaible: false })
            setAlertTitle("alterado para indisponivél")
            setAlertView(true)
        } else {
            await axios.put(import.meta.env.VITE_API_URL + `/services/${object.id}`, { avaible: true })
            setAlertTitle("alterarado para dispinivél")
            setAlertView(true)
        }
    }

    const  deletService = () =>  {
        axios.delete(import.meta.env.VITE_API_URL + `/service/${object.id}`)
        .then(()=>{
            setAlertTitle("serviço apagado !!")
            setAlertView(true)
        })
    }

    return (
        object.avaible ?
            <>
                <SweetAlert2 show={alertView} title={alertTitle} onConfirm={() => {
                    setAlertView(false)
                    navigate("/")

                }} />
                <ServiceContainer>
                    <img src={object.image} alt="" />
                    <div>
                        <h2>{object.title}</h2>
                        <p><span>R$/h:</span>{object.price}</p>
                        <div className=".text">
                            <p>{object.descripition}</p>
                        </div>
                        <p><span>Phone:</span>{object.phone}</p>
                    </div>
                    {viewEdit ? <IconContainer className="icons">
                        < MdAssignmentReturned style={{ cursor: "pointer" }} size={"60px"} color={"green"} onClick={() => {
                            disable_able()
                        }} />
                        <BsFillTrashFill style={{ cursor: "pointer" }} size={"60px"}  onClick={() => {
                           deletService()
                        }} />
                    </IconContainer> : ""}
                </ServiceContainer>
            </>

            :
            <>
                <SweetAlert2 show={alertView} title={alertTitle} onConfirm={() => {
                    setAlertView(false)
                    navigate("/")
                }} />
                <ServiceContainer>
                    <img src={object.image} alt="" />
                    <div>
                        <h2>{object.title}</h2>
                        <p><span>R$/h:</span>{object.price}</p>
                        <div className=".text">
                            <p>{object.descripition}</p>
                        </div>
                        <p><span>Phone:</span>{object.phone}</p>
                    </div>
                    {viewEdit ? <IconContainer className="icons">
                        <MdAssignmentLate style={{ cursor: "pointer" }} size={"60px"} color={"red"} onClick={() => {
                            disable_able()
                        }} />
                        <BsFillTrashFill style={{ cursor: "pointer" }} size={"60px"}  onClick={() => {
                           deletService()
                        }} />
                    </IconContainer> : ""}
                </ServiceContainer>
            </>
    )
}