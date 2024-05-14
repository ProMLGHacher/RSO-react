import { useEffect, useState } from "react"
import { $api } from "../../shared/api/api"
import { useNavigate } from "react-router-dom"

export const NewQuestion = () => {



    const [question, setQuestion] = useState("")
    const [type, setType] = useState<"Theoretical" | "Practical">("Theoretical")
    const [answers, setAnswers] = useState<string[]>([])
    const [rightAnswerIndex, setRightAnswerIndex] = useState(0)

    useEffect(() => {
        setAnswers([])
        setRightAnswerIndex(0)
    }, [type])

    const navigate = useNavigate()


    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} className="container">
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
                <p>Добавить вопрос</p>
            </div>
            <input required value={question} onChange={e => { setQuestion(e.target.value) }} type="text" placeholder="Вопрос" />
            <select value={type} onChange={e => { setType(e.target.value as ("Theoretical" | "Practical")) }}>
                <option value="Practical">Практический</option>
                <option value="Theoretical">Теоритичкский</option>
            </select>
            {
                type == "Theoretical"
                    ?
                    <>
                        <input type="text" onChange={e => setAnswers([e.target.value])} />
                    </>
                    :
                    <>
                        <div>
                            <input type="text" onChange={e => setAnswers(prev => {
                                const arr = [...prev]
                                arr[0] = e.target.value
                                return arr
                            })} />
                            <input type="checkbox" checked={rightAnswerIndex == 0} onClick={() => { setRightAnswerIndex(0) }} />
                        </div>
                        <div>
                            <input type="text" onChange={e => setAnswers(prev => {
                                const arr = [...prev]
                                arr[1] = e.target.value
                                return arr
                            })} />
                            <input type="checkbox" checked={rightAnswerIndex == 1} onClick={() => { setRightAnswerIndex(1) }} />
                        </div>
                        <div>
                            <input type="text" onChange={e => setAnswers(prev => {
                                const arr = [...prev]
                                arr[2] = e.target.value
                                return arr
                            })} />
                            <input type="checkbox" checked={rightAnswerIndex == 2} onClick={() => { setRightAnswerIndex(2) }} />
                        </div>
                    </>
            }
            <button onClick={() => {
                if (!question) return
                if (type == 'Theoretical' && answers.length < 1) return
                if (type == 'Practical' && answers.length < 2) return
                $api.post('/campapi/question', {
                    "description": question,
                    "type": type,
                    "rightAnswerIndex": rightAnswerIndex,
                    "answers": answers
                }).then(_ => navigate('/tasks'))
            }}>Доабвить</button>
        </div>
    )
}
