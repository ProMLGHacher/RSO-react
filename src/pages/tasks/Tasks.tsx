import { useState } from "react"
import { Link } from "react-router-dom"

export const Tasks = () => {

    const [state, setState] = useState(false)

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




            

        </div>
    )
}
