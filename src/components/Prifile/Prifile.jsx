import React from 'react'
import './Prifile.css'
function Prifile({ email, name, }) {

    const deleteacc = () => {
        localStorage.clear()
        window.location.reload()
    }

    const logout = () => {
        localStorage.removeItem("signUp");
        window.location.reload()
    }


  return (
    <div className='block-profil'>
        <h1 className="prifile__title">Профил</h1>
        <h2 className="name">Имя: {name}</h2>
        <h2 className="email">Почта: {email}</h2>
        <button onClick={logout} className="profil__btn">Выйти</button>
        <button onClick={deleteacc} className="profil__btn">Удалит</button>
    </div>
  )
}

export default Prifile