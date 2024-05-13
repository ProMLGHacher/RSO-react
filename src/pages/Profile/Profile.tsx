import { useAppDispatch, useAppSelector } from '../../app/store/storeHooks'
import { logOut } from '../../features/authorization/authSlice'
import { getUserThunk } from '../../features/authorization/getUserThunk'
import { updateUserThunk } from '../../features/authorization/updateUserThunk'
import { $api } from '../../shared/api/api'
import styles from './Profile.module.scss'

const Profile = () => {

    const user = useAppSelector(state => state.auth.user)

    const dispatch = useAppDispatch()

    return (
        <div className={styles.wrapper}>
            <div style={{ backgroundColor: '#C67C4E', paddingTop: '20px', paddingBottom: '4px' }}>
                <div className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '20px' }}>
                    <button onClick={() => {
                        dispatch(logOut())
                    }} style={{ border: 'none', backgroundColor: 'transparent' }}>
                        <svg style={{ width: '30px', height: '30px' }} width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.875 0V10.625H74.375V63.75H31.875V74.375H85V0H31.875ZM42.5 21.25V31.875H0V42.5H42.5V53.125L63.75 37.1875L42.5 21.25Z" fill="black" />
                        </svg>
                    </button>
                    <h1 style={{ color: 'white', fontSize: '38px' }}>ПРОфиль</h1>
                </div>
            </div>
            <div className='container'>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.3fr',
                    gap: '20px',
                    height: 'fit-content'
                }}>
                    <div style={{ borderRadius: '50%', aspectRatio: '1/1', transform: 'translateY(-50%)', position: 'relative', backgroundColor: user?.urlIcon ? '' : "black" }}>
                        <input accept='image/*' type="file" style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', borderRadius: '50%', opacity: 0 }} onChange={(e) => {
                            if (!e.target.files) return
                            const formData = new FormData()
                            formData.append('file', e.target.files[0])
                            $api.post('/campapi/upload/profile', formData).then(_ => dispatch(getUserThunk()))
                        }} />
                        {user?.urlIcon && <img style={{ borderRadius: '50%', aspectRatio: '1/1' }} src={user?.urlIcon} alt="" />}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px', height: 'fit-content' }}>
                        <p style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'end', }}>{user?.email}</p>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                }}>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px'
                    }}>
                        <div style={{ backgroundColor: '#C67C4E', padding: '14px', color: 'white', borderRadius: '12px', fontSize: '28px', textAlign: 'center' }}>Штаб</div>
                        <div onClick={() => {
                            const value = prompt()
                            if (!value) return
                            dispatch(updateUserThunk({ detachment: value ?? undefined }))
                        }} style={{ backgroundColor: '#C67C4E', padding: '14px', color: 'white', borderRadius: '12px', fontSize: '28px', textAlign: 'center', flex: 1 }}>{user?.detachment}</div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px'
                    }}>
                        <div style={{ backgroundColor: '#C67C4E', padding: '14px', color: 'white', borderRadius: '12px', fontSize: '28px', textAlign: 'center' }}>Отряд</div>
                        <div onClick={() => {
                            const value = prompt()
                            if (!value) return
                            dispatch(updateUserThunk({ headquarters: value ?? undefined }))
                        }} style={{ backgroundColor: '#C67C4E', padding: '14px', color: 'white', borderRadius: '12px', fontSize: '28px', textAlign: 'center', flex: 1 }}>{user?.headquarters}</div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                    }}>
                        <div style={{ backgroundColor: '#C67C4E', padding: '14px', color: 'white', borderRadius: '12px', fontSize: '28px', textAlign: 'center' }}>Должность</div>
                        <div onClick={() => {
                            const value = prompt()
                            if (!value) return
                            dispatch(updateUserThunk({ heldPost: value ?? undefined }))
                        }} style={{ backgroundColor: '#C67C4E', padding: '14px', color: 'white', borderRadius: '12px', fontSize: '28px', textAlign: 'center', flex: 1 }}>{user?.heldPost}</div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px'
                    }}>
                        <div style={{ backgroundColor: '#C67C4E', padding: '14px', color: 'white', borderRadius: '12px', fontSize: '28px', textAlign: 'center' }}>Год посвящения</div>
                        <div onClick={() => {
                            const value = prompt()
                            if (!value) return
                            dispatch(updateUserThunk({ yearOfInitiation: value ?? undefined }))
                        }} style={{ backgroundColor: '#C67C4E', padding: '14px', color: 'white', borderRadius: '12px', fontSize: '28px', textAlign: 'center', flex: 1 }}>{user?.yearOfInitiation}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile