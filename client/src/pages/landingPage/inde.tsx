import { Button } from "../../components/button"
import { useNavigate } from "react-router-dom"
import { LandingPageContainer } from "./styles"

export const LandingPage = () => {

    const navigate = useNavigate()

    return (
        <>
            <LandingPageContainer>
                <h1 className="main-title">Kenzie Contact List</h1>
                <div>
                    <p>Já possui uma conta?</p>

                    <Button
                        background={"main1"}
                        color={"text1"}
                        text={"Faça Login"}
                        border="main1"
                        onClick={() => navigate('/login')}
                    />

                    <p>Ainda não possui uma conta?</p>

                    <Button
                        background="transparent"
                        text="Cadastre-se"
                        color="text1"
                        border="main1"
                        onClick={() => navigate('/register')}
                    />
                </div>

            </LandingPageContainer>
            
        </>
    )
}