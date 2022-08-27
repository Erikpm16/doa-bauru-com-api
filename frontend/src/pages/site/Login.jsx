import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import icon from '../../assets/img/icon-login.png';
import '../../assets/styles/Login.css'

export default function Login() {
  return (
    <div className='login-container'>
    <div className='Tela-login'>
      <Form>
        <Form.Group>
        <img src={icon} className="img" />
        <br/>
        <h1 className='Login-title' >Fazer Login.</h1>
          <Form.Control className='input' type="email" placeholder="Email" />
          <br/>
        </Form.Group>
        <Form.Group>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        <Button  className='btn-login' variant="primary" type="submit">
          Entrar
        </Button>
        <a href='/form' className='criar-conta' >Criar sua conta</a>
        <a href='/' className='criar-conta' >Voltar</a>
      </Form>
    </div>
    </div>
  )
}
