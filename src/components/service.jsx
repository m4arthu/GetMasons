import { ServiceContainer } from "../styled_components/style.js"
import { MdAssignmentReturned, MdAssignmentLate } from "react-icons/md"
import SweetAlert2 from "react-sweetalert2"
import { useState } from "react"
import axios from "axios"
export const Service = ({ object, viewEdit }) => {
    const [alertTitle, setAlertTitle] = useState("")
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

    return (
        object.avaible ?
            <>
                <SweetAlert2 show={alertView} title={alertTitle} onConfirm={() => {
                    setAlertView(false)
                    window.location.reload()
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
                    {viewEdit ? <MdAssignmentReturned size={"60px"} color={"green"} onClick={() => {
                        disable_able()
                    }} /> : ""}
                </ServiceContainer>
            </>

            :
            <>
                <SweetAlert2 show={alertView} title={alertTitle} onConfirm={() => {
                    setAlertView(false)
                    window.location.reload()
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
                    {viewEdit ? <MdAssignmentLate style={{cursor: "pointer"}} size={"60px"} color={"red"} onClick={() => {
                        disable_able()
                    }} /> : ""}
                </ServiceContainer>
            </>
    )
}