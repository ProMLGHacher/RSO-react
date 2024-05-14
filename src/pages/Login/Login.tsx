import React, { useState } from 'react'
import { useAppDispatch } from '../../app/store/storeHooks'
import { Link } from 'react-router-dom'
import { loginThunk } from '../../features/authorization/loginThunk'

const Login = () => {

  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useAppDispatch()

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(loginThunk({
      email: mail,
      password: password
    }))
  }

  return (
    <form className='container' onSubmit={submit} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <div style={{
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
        backgroundColor: '#C67C4E',
        borderRadius: '12px',
        color: 'white',
        fontSize: '30px'
      }}>
        <p>Вход</p>
      </div>
      <input placeholder='Email'  value={mail} onChange={e => setMail(e.target.value)} type="email" />
      <input placeholder='Пароль' value={password} onChange={e => setPassword(e.target.value)} type="password" />
      <button>Войти</button>
      <Link to={'/reg'}>Нет аккаунта?</Link>
    </form>
  )
}

export default Login