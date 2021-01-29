import Input from "../../components/input";
import { Body, Button, Container, FormLogin, Header } from "./styles";

function Login() {
  return (
    <Container>
      <FormLogin>
        <Header>
          <h1>BEM VINDO AO SENAIOVERFLOW</h1>
          <h2>O SEU PORTAL DE RESPOSTAS</h2>
        </Header>
        <Body>
          <Input id="email" label="E-mail" type="email" />
          <Input id="password" label="Senha" type="password" />
          <Button>Entrar</Button>
          <a href="a">Ou clique aqui para se cadastrar</a>
        </Body>
      </FormLogin>
    </Container>
  );
}

export default Login;
