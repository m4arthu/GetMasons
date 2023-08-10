import axios from "axios"
import { Header } from "../components/header.jsx";
import { Container, FormContainer } from "../styled_components/style.js";
import { useEffect, useState } from "react";
import { Service } from "../components/service.jsx";

export const HomePage = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "/services")
            .then((r) => {
                setServices(r.data)
            })
    }, [])
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