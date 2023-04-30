import { useEffect, useState } from "react"
import { IUserResponse } from "../../interfaces"
import { RequestApi } from "../../requests/api-connections"
import { ProfilePageContainer } from "./styles"
import { serializePhone } from "../../components/contactCard"
import { Button } from "../../components/button"
import { renderContactCard } from "../../components/contactCard"
import { CreateContactForm } from "../../components/createContactForm"
import { IContactRequest } from "../../interfaces"
import { toast } from "react-toastify"

export const ProfilePage = () => {

    const [user,setUser] = useState({} as IUserResponse)
    const [createContactIsOpen, setCreateContactIsOpen] = useState(false)

    const userId = localStorage.getItem('@userId')
    const token = localStorage.getItem('@userToken')

    useEffect(() => {
        const fetchUser = async () => {
            const response = await RequestApi.get(`users/${userId}`, {headers: {Authorization: `Bearer ${token}`}})
            console.log(response)
            setUser(response.data.user[0])
        }
        fetchUser()
    }, [userId, token])

    const refresh = () => window.location.reload()

    const submitForm = async (data: IContactRequest) => {
        console.log(data)

        try {
            await RequestApi.post(`users/${userId}/contacts/`, data, {headers: {Authorization: `Bearer ${token}`}})

            toast.success('Contato criado com sucesso', {autoClose: 2000})
        } catch (error) {
            console.error(error)
            toast.error('Ocorreu um erro durante a criação do contato', {autoClose: 2000})
        } finally {
            refresh()
        }
    }

    console.log(user)

    return (
        <>
            {user.contacts && 
                <ProfilePageContainer>
                    <section className="main-container">
                        <div className="userInfo">
                            <div className="userInfo-main">
                                <h3>{user.name}</h3>

                                <p>{user.email}</p>
                            </div>
                            <span className="userInfo-phone">{serializePhone(user.phone)}</span>
                        </div>
                        
                        
                        <h4 className="contact-container_head">Contacts</h4>

                        <ul className="contact-container">   
                            {user.contacts.map((contact) => renderContactCard(contact))}
                        </ul>

                        <Button
                            background='main1'
                            text="novo contato"
                            color='text1'
                            border='main1'
                            onClick={() => setCreateContactIsOpen(true)}
                        />
                    </section>
                    {createContactIsOpen && <CreateContactForm 
                                                    setIsOpen={setCreateContactIsOpen} 
                                                    isOpen={createContactIsOpen} 
                                                    submitFormFunc={submitForm}
                                                />}
                </ProfilePageContainer>     
            }
            
        </>
    )
}