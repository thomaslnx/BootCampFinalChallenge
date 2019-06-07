import styled from "styled-components";
import loginBackground from "../../assets/fundo.jpg";

export const BackgroundLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${loginBackground});
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 170px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;

  img {
    width: 72px;
    height: 72px;
    margin: 350px auto 40px;
  }

  input {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    color: #999999;
    letter-spacing: 0;
    text-align: left;
    border: none;
    padding-left: 20px;
    height: 40px;
    width: 320px;
    border-radius: 6px;
    margin-top: 15px;

    &:nth-child(odd) {
      margin-top: 10px;
    }
  }

  button {
    font-family: Helvetica-Bold;
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
