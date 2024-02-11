import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import axios from 'axios';

import { useParams } from 'react-router-dom';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

function EditToDoList(props) {
  const [course, setCourse] = useState('');
  const [detail, setDetail] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const {data} = await axios.get('http://localhost:4000/todos/edit-todo/' + id);
      setCourse(data.course);
      setDetail(data.detail);
      setDueDate(data.dueDate);
    }
    fetchData();
  } ,[])

  const handleUpdate = (e) => {
    e.preventDefault();

    const obj = {
      course: course,
      detail: detail,
      dueDate: dueDate
    };

    axios.put('http://localhost:4000/todos/update-todo/' + id, obj)
      .then(() => console.log('Todo successfully updated'))
      .catch(error => console.error(error));

      window.location.href = '/';
  }

  return (
    <Container className='d-flex justify-content-center align-items-center mt-5'>
      <Container className='w-50'>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "1rem" }}>
          <h1>Update ToDoList</h1>
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
                // defaultValue={dayjs(new Date())}
                value={dayjs(dueDate)}
                label="Due date"
                sx={{ width: '100%' }}
                onChange={(dueDate) => setDueDate(dueDate)}
              // onChange={(dueDate) => setDueDate(dueDate.format('DD/MM/YYYY'))}
              // format="DD/MM/YYYY"
              />

            </DemoContainer>
          </LocalizationProvider>

          <Button variant="primary" type="submit" size="lg" block="block" className='mt-5 w-100' onClick={handleUpdate}>
            Update
          </Button>
        </Form>
      </Container>
    </Container>
  )
}

export default EditToDoList