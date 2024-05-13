import { Link } from "react-router-dom"
import { useAppSelector } from "../../app/store/storeHooks"


const Docs = () => {

    const docs = useAppSelector(state => state.auth.user?.documents)

    return (
        <div className="container">
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
                <p>Документы</p>
                <svg style={{ width: '34px', height: '34px' }} width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6689 0V24.2655H23.7244V4.04426H56.7762V24.2655V24.3328L56.9534 24.3159L60.8318 24.3328V24.2655V0H19.6689Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.08984H15.6135V12.1467H4.06813V66.9142C4.06813 68.0338 4.98342 68.9429 6.10215 68.9429H59.0445C60.0086 68.9429 60.8466 68.257 61.0378 67.3118L68.0308 32.431H22.655L12.9363 63.4619L9.0512 62.2529L19.669 28.3742H72.9981L65.0288 68.1072C64.4593 70.9427 61.9412 72.9996 59.0445 72.9996H6.10215C2.73784 72.9996 0 70.2694 0 66.9142V8.08984Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3604 16.1728C26.3604 12.8224 29.0839 10.1064 32.4435 10.1064C35.8032 10.1064 38.5266 12.8224 38.5266 16.1728C38.5266 19.5231 35.8032 22.2391 32.4435 22.2391C29.0839 22.2391 26.3604 19.5231 26.3604 16.1728ZM32.4435 14.1507C31.3237 14.1507 30.4158 15.056 30.4158 16.1728C30.4158 17.2896 31.3237 18.1949 32.4435 18.1949C33.5634 18.1949 34.4713 17.2896 34.4713 16.1728C34.4713 15.056 33.5634 14.1507 32.4435 14.1507Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M52.7208 14.1514H42.582V18.1956H52.7208V14.1514Z" fill="white" />
                </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
                <Link to={'/uploaddoc/CounselorCertificate'} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', color: 'black', borderRadius: '12px', backgroundColor: "#D2D2D2", padding: '20px', fontSize: '22px' }}>
                    Сертификат вожатого
                    <svg style={{ width: '24px', height: '24px' }} width="42" height="72" viewBox="0 0 42 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="3.76487" y1="69.2878" x2="39.2877" y2="33.7649" stroke="black" stroke-width="7" />
                        <line x1="38.8108" y1="38.2356" x2="3.2879" y2="2.71274" stroke="black" stroke-width="7" />
                    </svg>
                </Link>
                <Link to={'/uploaddoc/MedicalBook'} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', color: 'black', borderRadius: '12px', backgroundColor: "#D2D2D2", padding: '20px', fontSize: '22px' }}>
                    Мед книжка
                    <svg style={{ width: '24px', height: '24px' }} width="42" height="72" viewBox="0 0 42 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="3.76487" y1="69.2878" x2="39.2877" y2="33.7649" stroke="black" stroke-width="7" />
                        <line x1="38.8108" y1="38.2356" x2="3.2879" y2="2.71274" stroke="black" stroke-width="7" />
                    </svg>
                </Link>
                <Link to={'/uploaddoc/VaccinationCertificate'} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', color: 'black', borderRadius: '12px', backgroundColor: "#D2D2D2", padding: '20px', fontSize: '22px' }}>
                    Сертификат о прививках
                    <svg style={{ width: '24px', height: '24px' }} width="42" height="72" viewBox="0 0 42 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="3.76487" y1="69.2878" x2="39.2877" y2="33.7649" stroke="black" stroke-width="7" />
                        <line x1="38.8108" y1="38.2356" x2="3.2879" y2="2.71274" stroke="black" stroke-width="7" />
                    </svg>
                </Link>
                <Link to={'/uploaddoc/SanitaryMinimum'} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', color: 'black', borderRadius: '12px', backgroundColor: "#D2D2D2", padding: '20px', fontSize: '22px' }}>
                    Санитарный минимум
                    <svg style={{ width: '24px', height: '24px' }} width="42" height="72" viewBox="0 0 42 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="3.76487" y1="69.2878" x2="39.2877" y2="33.7649" stroke="black" stroke-width="7" />
                        <line x1="38.8108" y1="38.2356" x2="3.2879" y2="2.71274" stroke="black" stroke-width="7" />
                    </svg>
                </Link>
                <Link to={'/uploaddoc/CertificateOfNoCriminalRecord'} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', color: 'black', borderRadius: '12px', backgroundColor: "#D2D2D2", padding: '20px', fontSize: '22px' }}>
                    Справка об отсутствии судимости
                    <svg style={{ width: '24px', height: '24px' }} width="42" height="72" viewBox="0 0 42 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="3.76487" y1="69.2878" x2="39.2877" y2="33.7649" stroke="black" stroke-width="7" />
                        <line x1="38.8108" y1="38.2356" x2="3.2879" y2="2.71274" stroke="black" stroke-width="7" />
                    </svg>
                </Link>
                <Link to={'/uploaddoc/TrainingCertificate'} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', color: 'black', borderRadius: '12px', backgroundColor: "#D2D2D2", padding: '20px', fontSize: '22px' }}>
                    Справка об обучении
                    <svg style={{ width: '24px', height: '24px' }} width="42" height="72" viewBox="0 0 42 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="3.76487" y1="69.2878" x2="39.2877" y2="33.7649" stroke="black" stroke-width="7" />
                        <line x1="38.8108" y1="38.2356" x2="3.2879" y2="2.71274" stroke="black" stroke-width="7" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default Docs