import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {Button} from "../../components/button";
import { Input } from "../../components/input";
import { IUserLogin } from "../../interfaces/index";
import { PageLoginStyled } from "./styles";
import { userLoginSchema } from "../../schemas/userSchema";
import {toast} from 'react-toastify'
import { RequestApi } from "../../requests/api-connections";

export const Login = () => {
  
    const {
      register,
      handleSubmit,
      formState: {
        errors: { email, password },
      },
    } = useForm<IUserLogin>({
      resolver: yupResolver(userLoginSchema),
    });

    const navigate = useNavigate()
  
    const logIn = async (data: IUserLogin) => {
      console.log(data)

      try {
        const res = await RequestApi.post("/login", data);

        console.log(res)

        localStorage.setItem("@userToken", res.data.token);
        localStorage.setItem("@userId", res.data.user_id);

        //navigate("/");

        toast.success("Login feito sucesso", {
            autoClose: 1500,
        });
      } catch (error) {
        toast.error("Email ou senha incorretos", {
          autoClose: 1500,
        });
      } finally {
        navigate('/profile')
      }
    };
  
    return (
      <>
        <PageLoginStyled>
          <section className="container">
            <form onSubmit={handleSubmit(logIn)}>
              <h1>Login</h1>
              <Input
                id="email"
                label="Usuário"
                type="email"
                register={register}
                errors={email?.message}
                placeholder="Digitar email"
              />
  
              <Input
                id="password"
                label="Senha"
                type="password"
                register={register}
                errors={password?.message}
                placeholder="Digitar senha"
              />
  
              <Button
                background="transparent"
                text="Entrar"
                color="grey8"
                border="main1"
              />
              
            </form>

            <div className="register-container">
                <p>Ainda não possui uma conta?</p>
                <Button
                background="transparent"
                text="Cadastre-se"
                color="text"
                border="main1"
                onClick={() => navigate('/register')}
                />
            </div>
          </section>
        </PageLoginStyled>
      </>
    );
  };
  