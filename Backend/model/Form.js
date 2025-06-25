import { useState } from "react"

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        department: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:3000/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            console.log('Response from backend:', data)
            // Optionally reset form or show success message here
        } catch (error) {
            console.error('Error submitting form:', error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <br />
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <br />
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                <br />
                <label>Department</label>
                <input type="text" name="department" value={formData.department} onChange={handleChange} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form