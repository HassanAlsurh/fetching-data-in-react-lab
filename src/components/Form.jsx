import { useState } from 'react'

const Form = (props) => {
    const initialState = {
        query: '',
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        props.setValue(formData.query)
        console.log('Search by Value of: ', formData.query);

        setFormData(initialState)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='query' value={formData.query} onChange={handleChange} required />

                <button type="submit">Search</button>
            </form>
        </div>
    )
};

export default Form;