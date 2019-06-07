import React from "react";
import logo from "../../assets/logo.svg";
import { BackgroundLogin, Form } from "./styles";

const Login = () => (
  <BackgroundLogin>
    <Form>
      <img src={logo} alt="logo-pizza" />

      <input type="text" name="email" placeholder="Seu email" />
      <input type="password" name="password" placeholder="Senha secreta" />

      <button type="submit"> Entrar </button>
    </Form>
  </BackgroundLogin>
);

export default Login;
