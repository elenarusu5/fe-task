import { useEffect, useState } from "react"

import Form from "./Form"
import List from "./List"

const Main = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)
    const [users, setUsers] = useState(() => {
        return JSON.parse(localStorage.getItem('userData')) || []
    })

    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    const isValidEmail = emailRegex.test(formData?.email)

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(users))
    }, [users])


    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    const handleSubmit = () => {
        if (!formData.name.length || !formData.email.length) {
            setErrorMessage('Please fill in the required fields')
        } else if (!isValidEmail) {
            setErrorMessage('Please check the format of Email field')
        } else {
            addUser({
                name: formData.name,
                email: formData.email,
                created_at: Date.now()
            })
            setFormData({
                name: '',
                email: ''
            })
            setErrorMessage(null)
        }
    }

    return (
        <div className="container">
            <Form
                formData={formData}
                handleChange={handleChange}
                errorMessage={errorMessage}
                isValidEmail={isValidEmail}
                handleSubmit={handleSubmit}
            />
            <List users={users} />
        </div>
    )
}

export default Main