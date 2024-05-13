import { NavLink, Outlet } from "react-router-dom"
import Profile from "../Profile/Profile"
import Docs from "../Documents/Docs"
import { Tasks } from "../tasks/Tasks"

export const navigation = [
    {
        path: '/tasks',
        element: <Tasks />,
        icon: () => {
            return <svg style={{ width: '25px', height: '25px', color: 'white' }} width="78" height="56" viewBox="0 0 78 56" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 2H75.5355" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
                <path d="M28 11.4473H61.5062" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
                <path d="M28 23H65.4023" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
                <path d="M28 32.4473H52.9349" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
                <path d="M28.0044 45H59.9522" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
                <path d="M28 53.9688H71.643" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
                <path d="M12.5 7C12.5 10.0376 10.0376 12.5 7 12.5C3.96243 12.5 1.5 10.0376 1.5 7C1.5 3.96243 3.96243 1.5 7 1.5C10.0376 1.5 12.5 3.96243 12.5 7Z" stroke="currentColor" stroke-width="3" />
                <path d="M12.5 28C12.5 31.0376 10.0376 33.5 7 33.5C3.96243 33.5 1.5 31.0376 1.5 28C1.5 24.9624 3.96243 22.5 7 22.5C10.0376 22.5 12.5 24.9624 12.5 28Z" stroke="currentColor" stroke-width="3" />
                <path d="M12.5 49C12.5 52.0376 10.0376 54.5 7 54.5C3.96243 54.5 1.5 52.0376 1.5 49C1.5 45.9624 3.96243 43.5 7 43.5C10.0376 43.5 12.5 45.9624 12.5 49Z" stroke="currentColor" stroke-width="3" />
            </svg>
        }
    },
    {
        path: '/home',
        element: 'home',
        icon: () => {
            return <svg style={{ width: '25px', height: '25px', color: 'white' }} width="93" height="68" viewBox="0 0 93 68" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 65.9996H36C30.5 53 27.0358 24 27.5 20.4996C27.8352 17.9723 22.4049 65.9996 18.5 65.9996C17.5 65.9996 11 65.9996 8.5 65.9996L2 37L27.5 3L55 37L47 65.9996L85 60.5L91 31.5L61.5 34L35.5 2H67.5L87.5 25.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
            </svg>
        }
    },
    {
        path: '/profile',
        element: <Profile />,
        icon: () => {
            return <svg style={{ width: '25px', height: '25px', color: 'white' }} width="67" height="81" viewBox="0 0 67 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.6244 36.3333C42.8292 36.3333 50.2911 28.8714 50.2911 19.6667C50.2911 10.4619 42.8292 3 33.6244 3C24.4197 3 16.9578 10.4619 16.9578 19.6667C16.9578 28.8714 24.4197 36.3333 33.6244 36.3333Z" stroke="white" stroke-width="5" />
                <path d="M50.291 77.9997H16.9578C7.75301 77.9997 -0.375025 69.923 4.42343 62.0676C9.11526 54.3872 18.196 48.833 33.6244 48.833C49.0527 48.833 58.1335 54.3872 62.8252 62.0676C67.6239 69.923 59.4956 77.9997 50.291 77.9997Z" stroke="white" stroke-width="5" />
            </svg>
        }
    },
    {
        path: '/work',
        element: 'work',
        icon: () => {
            return <img style={{ width: '25px', height: '25px', color: 'white' }} src="/free-icon-boy-4790440 2.png" alt="" />
        }
    },
    {
        path: '/docs',
        element: <Docs />,
        icon: () => {
            return <svg style={{ width: '25px', height: '25px', color: 'white' }} width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6691 0V24.2655H23.7245V4.04426H56.7763V24.2655V24.3328L56.9535 24.3159L60.8319 24.3328V24.2655V0H19.6691Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.08984H15.6135V12.1467H4.06813V66.9142C4.06813 68.0338 4.98342 68.9429 6.10215 68.9429H59.0445C60.0086 68.9429 60.8466 68.257 61.0378 67.3118L68.0308 32.431H22.655L12.9363 63.4619L9.0512 62.2529L19.669 28.3742H72.9981L65.0288 68.1072C64.4593 70.9427 61.9412 72.9996 59.0445 72.9996H6.10215C2.73784 72.9996 0 70.2694 0 66.9142V8.08984Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3604 16.1728C26.3604 12.8224 29.0839 10.1064 32.4435 10.1064C35.8032 10.1064 38.5266 12.8224 38.5266 16.1728C38.5266 19.5231 35.8032 22.2391 32.4435 22.2391C29.0839 22.2391 26.3604 19.5231 26.3604 16.1728ZM32.4435 14.1507C31.3237 14.1507 30.4158 15.056 30.4158 16.1728C30.4158 17.2896 31.3237 18.1949 32.4435 18.1949C33.5634 18.1949 34.4713 17.2896 34.4713 16.1728C34.4713 15.056 33.5634 14.1507 32.4435 14.1507Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M52.7208 14.1514H42.582V18.1956H52.7208V14.1514Z" fill="white" />
            </svg>

        }
    },
]

const Main = () => {
    return (
        <div style={{ height: '100%', position: 'relative' }}>
            <div style={{ minHeight: '100%' }}>
                <Outlet />
            </div>
            <div style={{ position: 'sticky', bottom: '20px', marginInline: '20px', backgroundColor: '#292526', borderRadius: '999px', padding: '8px', display: 'flex', justifyContent: 'space-around' }}>
                {navigation.map(e => <NavLink style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#343031', padding: '12px', borderRadius: '50%' }} to={e.path} className={(props) => props.isActive ? '' : 'unactive'}>
                    {e.icon}
                </NavLink>)}
            </div>
        </div>
    )
}

export default Main

