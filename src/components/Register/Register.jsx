import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Prifile from '../Prifile/Prifile';
import './Register.css'
function Register() {
  
    const name = useRef()
    const email = useRef()
    const password = useRef()

    const localSignUp = localStorage.getItem("signUp")
    const localEmail = localStorage.getItem("email")
    const localPssword = localStorage.getItem("password")
    const localName = localStorage.getItem("name")

    const [swowHome,setShowHome] = useState(false);
    const [show,setShow] = useState(false);
    useEffect(() => {
        if(localSignUp) {
            setShowHome(true)
        }

        if(localEmail) {
            setShow(true)
        }
    })

    const handlerSignIn = () => {
        if(email.current.value==localEmail&&password.current.value==localPssword) {
            localStorage.setItem('signUp', email.current.value);

            window.location.reload()

        } else {
            alert("Пожалуюста введите коректную почту")
        }

    }


    const handlerClick = () => {
        if(name.current.value&&email.current.value&&password.current.value)

        {
            localStorage.setItem('name', name.current.value)
            localStorage.setItem('email', email.current.value)
            localStorage.setItem('password', password.current.value)
            localStorage.setItem('signUp', email.current.value)
            alert('Акайнт успешно создан')
            window.location.reload()
        }
    }

    return (
    <div>
        {swowHome? <Prifile email={localEmail} name={localName}/>: 
        (show?
            <div className="container">
            <h2 className="user-name">Привет {localName} Как ваши дела?</h2>
            <div className="input__space">
                <input type="email" placeholder='email' ref={email} />
            </div>

            <div className="input__space">
                <input type="password" placeholder='password' ref={password} />
            </div>

            <button onClick={handlerSignIn} className="btn__space">отправить</button>

        </div>
                : 
                <div className="container">
                    <div className="input__space">
                        <input type="text" placeholder='name' ref={name} />
                    </div>

                    <div className="input__space">
                        <input type="email" placeholder='email' ref={email} />
                    </div>

                    <div className="input__space">
                        <input type="password" placeholder='password' ref={password} />
                    </div>

                    <button onClick={handlerClick} className="btn__space">отправить</button>

                </div>)
}
    </div>
  )
}

export default Register