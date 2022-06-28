import React from "react";
import '../css/todo.scss';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Todo({ todo, index, markTodo, removeTodo }) {
    return (
        <div
            className="todo"

        >
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
            <div className="actions__todo">
                <Button variant="outline-success" onClick={() => markTodo(index)} className="actions__todo__check" style={{ color: "#2b2b2b", borderRadius: "20px", float: "right" }}>✓</Button>{' '}
                <Button variant="outline-danger" onClick={() => removeTodo(index)} className="actions__todo__x" style={{ color: "#2b2b2b", borderRadius: "20px", float: "right" }}>✕</Button>
            </div>
        </div>
    );
}

function FormTodo({ addTodo }) {
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label><b>Add Your To Do's &' Reminders Here</b></Form.Label>
                <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" style={{ color: "#2b2b2b", padding: "6px", borderRadius: "20px" }} />
            </Form.Group>
            <Button variant="primary mb-3" type="submit" style={{ color: "#2b2b2b", padding: "6px", borderRadius: "20px", marginLeft: "140px" }}>
                Submit
            </Button>
        </Form>
    );
}

function ToDoList() {
    const [todos, setTodos] = React.useState([
        {
            text: "Double Check Today's Appoinments",
            isDone: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="todo">
            <div className="todo__container">

                <FormTodo addTodo={addTodo} />
                <div>
                    {todos.map((todo, index) => (
                        <Card>
                            <Card.Body>
                                <Todo
                                    key={index}
                                    index={index}
                                    todo={todo}
                                    markTodo={markTodo}
                                    removeTodo={removeTodo}
                                />
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ToDoList;