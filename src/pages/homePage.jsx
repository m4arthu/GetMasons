import axios from "axios"
import { Header } from "../components/header.jsx";
import { Container, FormContainer } from "../styled_components/style.js";
import { useEffect, useState } from "react";
import { Service } from "../components/service.jsx";
import ReactLoading from "react-loading"
export const HomePage = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "/services")
            .then((r) => {
                setServices(r.data)
            })
    }, [])
    if (services.length === 0) {
        return (
            <>
                <Header />
                <Container>
                    <ReactLoading color="#13AEC6" width={"250px"} />
                    <p>
                        Loading....
                    </p>
                </Container>
            </>
        )
    } else {
        return (
            <>
                <Header />
                <Container>
                    <FormContainer>
                        {services.map((s) => {
                            if (s.avaible) {
                                return (
                                    <Service key={s.id} object={s} />
                                )
                            }
                        })}
                    </FormContainer>
                </Container>
            </>
        )
    }
}