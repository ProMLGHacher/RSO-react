import { useEffect, useState } from "react"

export const NewQuestion = () => {



    const [question, setQuestion] = useState("")
    const [type, setType] = useState<"Theoretical" | "Practical">("Theoretical")
    const [answers, setAnswers] = useState<string[]>([])
    const [rightAnswerIndex, setRightAnswerIndex] = useState(0)

    useEffect(() => {
        setAnswers([])
        setRightAnswerIndex(0)
    }, [type])


    return (
        <div>
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
        </div>
    )
}
