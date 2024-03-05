import { useEffect, useState } from "react"

import Form from "./Form"
import List from "./List"

import '../assets/styles/styles.scss'

const Main = () => {
    const [formData, setFormData] = useState({ name: '', email: '' })
    const [message, setMessage] = useState({ error: null, success: null })
    const [users, setUsers] = useState(() => {
        return JSON.parse(localStorage?.getItem('userData')) || []
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
            setMessage({ error: '*Please fill in the required fields!' })
        } else if (!isValidEmail) {
            setMessage({ error: '*Please check the format of Email field!' })
        } else {
            addUser({
                name: formData.name,
                email: formData.email,
                created: Date.now()
            })
            setMessage({ success: 'User added to the system!' })
            
            setFormData({ name: '', email: '' })
            setTimeout(() => setMessage({ success: null }), 3000)
        }
    }
    return (
        <div className="container">
            <Form
                formData={formData}
                handleChange={handleChange}
                message={message}
                isValidEmail={isValidEmail}
                handleSubmit={handleSubmit}
            />
            {!!users?.length &&
                <List users={users} />
            }
        </div>
    )
}

export default Main