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
    <form onSubmit={submit}>
      <input value={mail} onChange={e => setMail(e.target.value)} type="text" />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
      <button>Войти</button>
      <Link to={'/reg'}>Нет аккаунта?</Link>
    </form>
  )
}

export default Login