import axios from 'axios'
import React from 'react'
import { Button } from 'react-bootstrap'

function TodoTableRow(props) {

    const handleDelete = (e) => {
        e.preventDefault()
        axios.delete('http://localhost:4000/todos/delete-todo/' + props.obj._id)
            .then(() => {
                console.log('Todo successfully deleted')
            })
            .catch(error => console.error(error))

        window.location.reload(false);
    }

    return (
        <tr>
            <td className="text-center">
                {/* course-id */}
                {props.obj.course}
            </td>
            <td className="text-wrap text-break">
                {/* detail */}
                {props.obj.detail}
            </td>
            <td className="text-center">
                {/* dueDate */}
                {props.obj.dueDate}
            </td>
            <td className="text-center">
                <Button variant="secondary" className='me-1' href={'/edit/' + props.obj._id} >Edit</Button>
                <Button variant="success" onClick={handleDelete} >Success</Button>
            </td>
        </tr>
    )
}

export default TodoTableRow