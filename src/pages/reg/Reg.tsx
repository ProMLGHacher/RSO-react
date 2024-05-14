import React, { useState } from 'react'
import { UserRole } from '../../features/authorization/authSlice'
import { useAppDispatch } from '../../app/store/storeHooks'
import { signUpThunk } from '../../features/authorization/signUpThunk'
import { Link } from 'react-router-dom'

const Reg = () => {

  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState(UserRole.Beginner)
  const [fullname, setFullname] = useState("")

  const dispatch = useAppDispatch()

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(signUpThunk({
      email: mail,
      password: password,
      role: role,
      fullname
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
        <p>Регистрация</p>
      </div>
      <input placeholder='фио' value={fullname} onChange={e => setFullname(e.target.value)} type="text" />
      <input placeholder='mail' value={mail} onChange={e => setMail(e.target.value)} type="email" />
      <input placeholder='пароль' value={password} onChange={e => setPassword(e.target.value)} type="password" />
      <select onChange={e => setRole(e.target.value as UserRole)}>
        {
          Object.keys(UserRole).map(e => <option key={e} value={e}>{e}</option>)
        }
      </select>
      <button>Регистрация</button>
      <Link to={'/login'}>Уже есть аккаунт?</Link>
    </form>
  )
}

export default Reg