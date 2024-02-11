import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import axios from 'axios';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

function CreateToDoList() {
    const [course, setCourse] = useState('')
    const [detail, setDetail] = useState('')
    const [dueDate, setDueDate] = useState(new Date())

    const handleSubmit = (e) => {
        e.preventDefault()

        const TodoObject = {
            course: course,
            detail: detail,
            dueDate: dueDate
        };

        // console.log(TodoObject)

        axios.post('http://localhost:4000/todos/create-todo', TodoObject)
            .then(res => console.log(res.data))
            .catch(error => console.error(error));

        setCourse('');
        setDetail('');
        setDueDate(new Date());
    }

    return (
        <Container className='d-flex justify-content-center align-items-center mt-5'>
            <Container className='w-50'>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "1rem" }}>
                    <h1>Create ToDoList</h1>
                </div>
                <Form className='mb-3'>
                    <Form.Group className="mb-3" controlId="Course">
                        <Form.Label>Course-Id</Form.Label>
                        <Form.Control type="text" placeholder="Enter course" value={course} onChange={(e) => setCourse(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Detail">
                        <Form.Label>Detail</Form.Label>
                        <Form.Control type="text" placeholder="Enter detail" value={detail} onChange={(e) => setDetail(e.target.value)} />
                    </Form.Group>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker
                                defaultValue={dayjs(new Date())}
                                label="Due date"
                                sx={{ width: '100%' }}
                                onChange={(dueDate) => setDueDate(dueDate)}
                                // onChange={(dueDate) => setDueDate(dueDate.format('DD-MM-YYYY'))}
                                format="DD-MM-YYYY"
                            />

                        </DemoContainer>
                    </LocalizationProvider>

                    <Button variant="primary" type="submit" size="lg" block="block" className='mt-5 w-100' onClick={handleSubmit}>
                        Create
                    </Button>
                </Form>
            </Container>
        </Container>
    )
}

export default CreateToDoList