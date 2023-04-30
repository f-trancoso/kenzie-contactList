import { useForm } from "react-hook-form";
import { Button } from "../button";
import { yupResolver } from "@hookform/resolvers/yup";
import { IContactRequest } from "../../interfaces";
import { CreateContactSchema } from "../../schemas/userSchema";
import { Modal } from "../modal";
import { Input } from "../input";
import { SubmitHandler } from "react-hook-form/dist/types";

interface Iprops {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    submitFormFunc: SubmitHandler<IContactRequest>
}

export const CreateContactForm = ({setIsOpen, isOpen, submitFormFunc}: Iprops) => {

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<IContactRequest>({
        resolver: yupResolver(CreateContactSchema),
    });

    return (
        <Modal headerTitle="Criar novo contato" setIsOpen={setIsOpen} isOpen={isOpen}>
            <form action="submit" onSubmit={handleSubmit(submitFormFunc)}>
                <Input
                    label="nome"
                    id='name'
                    type="text"
                    register={register}
                    errors={errors?.name?.message}
                />

                <Input
                    label="e-mail"
                    id='email'
                    type="text"
                    register={register}
                    errors={errors?.email?.message}
                />

                <Input
                    label="telefone"
                    id='phone'
                    type="text"
                    register={register}
                    errors={errors?.phone?.message}
                />

                <Button
                    background="transparent"
                    type="submit"
                    text="criar"
                    color='text1'
                    border="main1"
                />
            </form>
        </Modal>
    )
}