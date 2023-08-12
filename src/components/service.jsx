import { IconContainer, ServiceContainer } from "../styled_components/style.js"
import { MdAssignmentReturned, MdAssignmentLate } from "react-icons/md"
import {BsFillTrashFill} from "react-icons/bs"
import SweetAlert2 from "react-sweetalert2"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const Service = ({ object, viewEdit,setUserServices}) => {
    const [alertTitle, setAlertTitle] = useState("")
    const navigate = useNavigate()
    const [alertView, setAlertView] = useState(false)
    const disable_able = async () => {
        setUserServices([])
        console.log(object.id)
        if (object.avaible) {
            await axios.put(import.meta.env.VITE_API_URL + `/services/${object.id}`, { avaible: false })
            setAlertTitle("alterado para indisponivél")
            setAlertView(true)
            axios.get(import.meta.env.VITE_API_URL + "/services/me")
            .then((r) => {
                if (r.data.length === 0) {
                    setUserServices(["  Você nâo possui serviços!!  "])
                } else {
                    setUserServices(r.data)
                }
            }).catch((e) => {
                console.log(e.response.data)
            }).catch((e)=>{
                console.log(e)
            })
        } else {
            await axios.put(import.meta.env.VITE_API_URL + `/services/${object.id}`, { avaible: true })
            setAlertTitle("alterarado para dispinivél")
            setAlertView(true)
        }
    }

    const  deletService = () =>  {
        setUserServices([])
        axios.delete(import.meta.env.VITE_API_URL + `/service/${object.id}`)
        .then(()=>{
            axios.get(import.meta.env.VITE_API_URL + "/services/me")
            .then((r) => {
                if (r.data.length === 0) {
                    setUserServices(["  Você nâo possui serviços!!  "])
                } else {
                    setUserServices(r.data)
                }
            }).catch((e) => {
                console.log(e.response.data)
            })
            setAlertTitle("serviço apagado !!")
            setAlertView(true)
        }).catch((e)=>{
            console.log(e)
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