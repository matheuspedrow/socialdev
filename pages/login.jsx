import styled from "styled-components"

import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/typography/H1"
import H2 from "../src/components/typography/H2"
import H4 from "../src/components/typography/H4"

const FormContainer = styled.div`
  margin-top: 60px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 15px;
`

const Text = styled.p`
  text-align: center;
`

function LoginPage () {
  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H4>A plataforma dos desenvolvedores</H4>
      <FormContainer>
        <H2>Entre em sua conta</H2>
        <Form>
          <input type="email" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </Form>
        <Text>Não possuo uma conta? <a href="#">Faça seu cadastro</a> </Text>
      </FormContainer>
    </ImageWithSpace>
  )
}

export default LoginPage