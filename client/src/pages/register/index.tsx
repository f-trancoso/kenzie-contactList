import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import { IUserRequest } from "../../interfaces";
import { CreateUserSchema } from "../../schemas/userSchema";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { PageRegisterStyled } from "./styles";
import { RequestApi } from "../../requests/api-connections";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";

const Register = () => {
  
    const {
      register,
      handleSubmit,
      formState: {
        errors: {
          name,
          email,
          phone,
          confirmPassword,
          password,
        },
      },
    } = useForm<IUserRequest>({
      resolver: yupResolver(CreateUserSchema),
    });

    const navigate = useNavigate()
  
    const sendData = async (data: IUserRequest) => {
      console.log(data);
      const {confirmPassword, ...rest} = data

      try {
        await RequestApi.post('users/', rest)

        toast.success('Usuário criado com successo', {autoClose: 2000})
      } catch (error) {
        console.error(error)
        toast.error('Ocorreu um erro durante a criação do usuário', {autoClose: 2000})
      } finally {
        navigate('/login')
      }

      
    };
  
    return (
      <>
        <PageRegisterStyled>
          <div className="container">
            <form onSubmit={handleSubmit(sendData)}>
              <h1>Cadastro</h1>
              <Input
                label={"nome:"}
                type={"text"}
                id={"name"}
                placeholder="Digite seu nome"
                register={register}
                errors={name?.message}
              />
  
              <Input
                label={"email:"}
                type={"email"}
                id={"email"}
                placeholder="Digite seu email"
                register={register}
                errors={email?.message}
              />

              <Input
                label={"celular:"}
                type={"text"}
                id={"phone"}
                placeholder="(DDD) 90000-0000"
                register={register}
                errors={phone?.message}
              />

              <Input
                label={"senha:"}
                type={"password"}
                id={"password"}
                placeholder="Digitar senha"
                register={register}
                errors={password?.message}
              />
  
              <Input
                label={"confirmar senha:"}
                type={"password"}
                id={"confirmPassword"}
                placeholder="Digitar senha"
                register={register}
                errors={confirmPassword?.message}
              />
  
              <div className="div--buttonSubmit">
                <Button
                  background={"main1"}
                  color={""}
                  text={"Cadastrar"}
                  type={'submit'}
                  border="main1"
                />
              </div>
            </form>

            <div className="login-container">
              <p>Já possui uma conta?</p>

              <Button
                  background={"main1"}
                  color={""}
                  text={"Faça Login"}
                  border="main1"
                  onClick={() => navigate('/login')}
                />
            </div>
          </div>
        </PageRegisterStyled>
      </>
    );
  };
  
  export default Register;