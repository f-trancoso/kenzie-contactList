export interface InputInterface {
    label: string;
    type: string;
    id: string;
    placeholder?: string;
    disabled?: boolean;
    register: Function;
    errors?: string | undefined;
    value?: number;
}

export interface IButton {
    background: string;
    color?: string;
    text: string;
    onClick?: ()=> void
    type?: "button" | "submit" | "reset" | undefined;
    border?: string
}

export interface IButtonStyled {
    background: string;
    color?: string;
    border?: string
}

export interface IContactRequest {
    name: string
    email: string
    phone: string
}

export interface IContactResponse {
    id: string
    name: string
    email: string
    phone: string
    created_at?: Date
}

export interface IUserRequest {
    name: string
    password: string
    confirmPassword: string
    email: string
    phone: string
}

export interface IUserResponse {
    id: string
    name: string
    email: string
    phone: string
    contacts: IContactResponse[]
}

export interface IUserLogin {
    email: string;
    password: string;
  }