import styled from "styled-components";
import loginBackground from "../../assets/fundo.jpg";

export const BackgroundLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1),
      rgba(255, 0, 0, 0)
    ),
    url(${loginBackground});
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  height: 60%;

  img {
    width: 72px;
    height: 72px;
    margin: 180px auto 0px;
  }

  input {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    color: #999999;
    letter-spacing: 0;
    text-align: left;
    border: none;
    outline: 0;
    padding-left: 20px;
    height: 40px;
    width: 350px;
    border-radius: 6px;
    margin-top: 30px;

    &:nth-child(odd) {
      margin-top: 10px;
    }
  }

  button {
    font-family: Helvetica;
    font-weight: bold;
    font-size: 15px;
    color: #ffffff;
    margin-top: 15px;
    background: #e5293e;
    height: 40px;
    border: none;
    outline: 0;
    border-radius: 6px;
  }
`;

export default BackgroundLogin;
