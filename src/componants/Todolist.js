import React, {useState, useEffect} from 'react'
import axios from 'axios';

import { Container, Table, Button } from 'react-bootstrap'
import TodoTableRow from './TodoTableRow';

function Todolist() {
    const [TodoObject, setTodoObject] = useState([{}])

    useEffect(() => {
        axios.get('http://localhost:4000/todos')
            .then(res => {
                setTodoObject(res.data)
            })
            .catch(error => console.error(error))
    }, [])

    // console.log(TodoObject)

    return (
        <Container className='mt-5'>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "1rem" }}>
                <h1>ToDoList</h1>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th width="20" className="text-center text-wrap text-break" style={{ whiteSpace: 'normal', textoverflow: 'ellipsis', overflow: 'hidden' }}>Course-Id</th>
                        <th width="250" className="text-center text-wrap text-break" style={{ overflowWrap: 'break-word' }}>Detail</th>
                        <th width="20" className="text-center text-wrap text-break" style={{ whiteSpace: 'normal', }}>Due date</th>
                        <th width="20" className="text-center text-wrap text-break" style={{ whiteSpace: 'normal', }}></th>
                    </tr>
                </thead>

                <tbody>
                    {TodoObject.map((obj, i) => {
                        return <TodoTableRow obj={obj} key={i} />
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default Todolist