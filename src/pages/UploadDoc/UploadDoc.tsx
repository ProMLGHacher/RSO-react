import { useNavigate, useParams } from "react-router-dom"
import { $api } from "../../shared/api/api"
import { useAppDispatch, useAppSelector } from "../../app/store/storeHooks"
import { getUserThunk } from "../../features/authorization/getUserThunk"

const UploadDoc = () => {

    const docs = useAppSelector(state => state.auth.user?.documents)

    const { type } = useParams()

    const getTypeName = () => {
        if (type == 'CounselorCertificate') {
            return 'Сертификат вожатого'
        }
        if (type == 'MedicalBook') {
            return 'Мед книжка'
        }
        if (type == 'VaccinationCertificate') {
            return 'Сертификат о прививках'
        }
        if (type == 'SanitaryMinimum') {
            return 'Санитарный минимум'
        }
        if (type == 'CertificateOfNoCriminalRecord') {
            return 'Сертификат вожатого'
        }
        if (type == 'TrainingCertificate') {
            return 'Справка об обучении'
        }
    }
    const getTypeImg = () => {
        if (type == 'CounselorCertificate') {
            return docs?.counselorCertificateUri
        }
        if (type == 'MedicalBook') {
            return docs?.medicalBookUri
        }
        if (type == 'VaccinationCertificate') {
            return docs?.vaccinationCertificateUri
        }
        if (type == 'SanitaryMinimum') {
            return docs?.sanitaryMinimumUri
        }
        if (type == 'CertificateOfNoCriminalRecord') {
            return docs?.certificateOfNoCriminalRecordUri
        }
        if (type == 'TrainingCertificate') {
            return docs?.trainingCertificateUri
        }
    }

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

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
                <p>{getTypeName()}</p>
            </div>
            <img style={{ marginBlock: '20px' }} src={getTypeImg()} alt="" />
            <input accept='image/*' type="file" style={{ backgroundColor: 'grey', width: '100%', height: '200px', borderRadius: '20px', marginTop: '20px' }} onChange={(e) => {
                if (!e.target.files) return
                const formData = new FormData()
                formData.append('file', e.target.files[0])
                $api.post('/campapi/upload/profile/docs', formData, { params: { doc: type } }).then(_ => {
                    dispatch(getUserThunk()).then(_ => navigate('/docs'))
                })
            }} />
        </div>
    )
}

export default UploadDoc