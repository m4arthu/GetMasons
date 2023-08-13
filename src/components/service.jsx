import { IconContainer, ServiceContainer } from "../styled_components/style.js"
import { MdAssignmentReturned, MdAssignmentLate } from "react-icons/md"
import {BsFillTrashFill} from "react-icons/bs"
import axios from "axios"
export const Service = ({ 
    object, 
    viewEdit,
    setUserServices,
    setAlertTitle,
    setAlertShow
}) => {
    const disable_able = async () => {
        setUserServices([])
        if (object.avaible) {
            await axios.put(import.meta.env.VITE_API_URL + `/services/${object.id}`, { avaible: false })
            .then(()=>{
                setAlertTitle("alterado para indisponivél")
                setAlertShow(true)
            }).catch((e)=>{
                console.log(e)
            })
        } else {
            await axios.put(import.meta.env.VITE_API_URL + `/services/${object.id}`, { avaible: true })
            .then(()=>{
                setAlertTitle("alterado para disponivél")
                setAlertShow(true)
            }).catch((e)=>{
                console.log(e)
            })
        }
    }

    const  deletService = () =>  {
        setUserServices([])
        axios.delete(import.meta.env.VITE_API_URL + `/service/${object.id}`)
        .then(()=>{
            setAlertTitle("serviço apagado!!")
            setAlertShow(true)
        }).catch((e)=>{
            console.log(e)
        })
    }

    return (
        object.avaible ?
            <>
                <ServiceContainer>
                    <img src={object.image} alt="" />
                    <div>
                        <h2>{object.title}</h2>
                        <p><span>R$/h:</span>{object.price}</p>
                            <p>{object.descripition}</p>
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
                <ServiceContainer>
                    <img src={object.image} alt="" />
                    <div>
                        <h2>{object.title}</h2>
                        <p><span>R$/h:</span>{object.price}</p>
                            <p>{object.descripition}</p>
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