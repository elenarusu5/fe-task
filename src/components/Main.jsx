import { useState } from "react"

import Form from "./Form"
import List from "./List"

const Main = () => {
    const [users, setUsers] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    const handleSubmit = () => {
        addUser({
            name: formData.name,
            email: formData.email,
            created_at: new Date()
        })
        setFormData({
            name: '',
            email: ''
        })
    }
    console.log(users)
    return (
        <div className="container">
            <Form
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <List users={users} />
        </div>
    )
}

export default Main