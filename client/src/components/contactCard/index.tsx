import { IContactResponse } from "../../interfaces";
import { StyledContactCard } from "./styles";

export const serializePhone = (phone: string) => {
    return `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`
}

export const ContactCard = ({
    name,
    email,
    phone
}: IContactResponse) => {
    return (
        <StyledContactCard>
            <h4>{name}</h4>
            <div>
                <span className="contact-email">{email}</span>
                <span className="contact-phone">{serializePhone(phone)}</span>
            </div>
            
        </StyledContactCard>
    )
}

export const renderContactCard = (data: IContactResponse) => {
    return (
        <ContactCard
            id={data.id}
            key={data.id}
            name={data.name}
            email={data.email}
            phone={data.phone}
        />
    )
}
    
    