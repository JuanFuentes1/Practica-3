import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Login() {
    const [user, setUser] = useState("")

    const userInputHandler = (e) => {
        const inputValue = e.target.value
        setUser(inputValue)
        if (inputValue.toLowerCase().includes('o') || inputValue.toUpperCase().includes('O')){
            alert("Por favor, ¡Nombres de usuario sin la letra o!")
        }
    }

    const registerButtonHandler = (e) => {
        e.preventDefault()
        if (user.length === 0 || (user.toLowerCase().includes('o') && user.toUpperCase().includes('O'))){
            alert("Usuario inválido para registrarse")
        }
        else{
            alert("Usuario registrado correctamente")
        }
        console.log(user)
    }

    
    return (
        <div className='container'>
            <Form onSubmit={registerButtonHandler}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control 
                    type="username" 
                    placeholder="Nombre de usuario"
                    value={user}
                    onChange={userInputHandler}
                    />
                    <p>Ingresaste: {user}</p>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrarse
                </Button>
            </Form>
        </div>
    );
}

export default Login;