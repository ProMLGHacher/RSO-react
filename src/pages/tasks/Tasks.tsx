import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { $api } from "../../shared/api/api"

export const Tasks = () => {

    const [state, setState] = useState(false)

    const [questions, setQuestions] = useState<{
        "id": string,
        "type": "Practical" | 'Theoretical',
        "description": string,
        "rightAnswerIndex": number,
        "answers": string[]
    }[]>([])

    useEffect(() => {
        $api.get('/campapi/questions', { params: { type: state ? 'Practical' : 'Theoretical' } })
            .then(e => setQuestions(e.data))
    }, [state])

    return (
        <div className="container">
            <div style={{
                display: 'grid',
                marginTop: '20px',
                gridTemplateColumns: '1fr 1fr',
                backgroundColor: '#D2D2D2',
                borderRadius: '12px'
            }}>
                <p onClick={() => { setState(false) }} style={{
                    padding: '20px',
                    backgroundColor: !state ? '#C67C4E' : 'transparent',
                    borderRadius: '12px',
                    color: !state ? 'white' : 'black',
                    fontSize: '30px',
                    textAlign: 'center'
                }}>
                    Теория
                </p>
                <p onClick={() => { setState(true) }} style={{
                    padding: '20px',
                    backgroundColor: state ? '#C67C4E' : 'transparent',
                    borderRadius: '12px',
                    color: state ? 'white' : 'black',
                    fontSize: '30px',
                    textAlign: 'center'
                }}>
                    Практика
                </p>
            </div>

            <Link to={'/newQuestion'} style={{
                backgroundColor: '#C67C4E',
                width: '100%',
                padding: '12px',
                border: 'none',
                borderRadius: '8px',
                marginTop: '16px',
                color: 'white',
                display: 'block',
                textAlign: 'center',
                textDecoration: 'none'
            }}>Добавить</Link>

            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {
                    questions.map(e => e.type == "Practical" ? <PracticalTask {...e} /> : <TheoreticalTask {...e} />)
                }
            </div>




        </div>
    )
}


export const TheoreticalTask = (props: {
    "id": string,
    "type": "Practical" | 'Theoretical',
    "description": string,
    "rightAnswerIndex": number,
    "answers": string[]
}) => {

    const [open, setOpen] = useState(false)

    return (
        <div style={{ padding: '20px', backgroundColor: '#D2D2D2', borderRadius: '12px' }} onClick={() => { setOpen(prev => !prev) }}>
            <p>{props.description}</p>
            <div style={{ marginTop: '20px', display: open ? 'grid' : "none", overflow: 'hidden', gridTemplateRows: open ? '1fr' : '0fr', transition: 'grid-template-rows 0.3s ease-out' }}>
                <div style={{ marginBottom: '20px', height: '1px', backgroundColor: 'black' }}></div>
                <p>{props.answers[0]}</p>
            </div>
        </div>
    )
}
export const PracticalTask = (props: {
    "id": string,
    "type": "Practical" | 'Theoretical',
    "description": string,
    "rightAnswerIndex": number,
    "answers": string[]
}) => {

    const [open, setOpen] = useState(false)

    const [selected, setSelected] = useState<number>()

    return (
        <div style={{ padding: '20px', backgroundColor: '#D2D2D2', borderRadius: '12px' }}>
            <p onClick={() => { setOpen(prev => !prev) }}>{props.description}</p>
            <div style={{ marginTop: '20px', display: open ? 'grid' : "none", overflow: 'hidden', gridTemplateRows: open ? '1fr' : '0fr', transition: 'grid-template-rows 0.3s ease-out' }}>
                <div style={{ marginBottom: '20px', height: '1px', backgroundColor: 'black' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <p onClick={() => setSelected(0)} style={{ color: selected != 0 ? 'black' : selected == 0 && selected == props.rightAnswerIndex ? 'green' : 'red' }}>{props.answers[0]}</p>
                    <p onClick={() => setSelected(1)} style={{ color: selected != 1 ? 'black' : selected == 1 && selected == props.rightAnswerIndex ? 'green' : 'red' }}>{props.answers[1]}</p>
                    <p onClick={() => setSelected(2)} style={{ color: selected != 2 ? 'black' : selected == 2 && selected == props.rightAnswerIndex ? 'green' : 'red' }}>{props.answers[2]}</p>
                </div>
            </div>
        </div>
    )
}
