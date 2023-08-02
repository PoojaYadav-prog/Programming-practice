import { useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function Form() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({name: "",email: "",age: ""});
    const [inputError, setInputError] = useState(null);

    const isEmail = (email) =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        if (name === 'email' && !isEmail(value.email)) {
            setInputError('please enter data');
        } else {
             setInputError(null);
        }
        
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));     
    }
 
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        navigate("/profile", {state: {formData: formData}});
        // we  can use <Link></Link>
    };

    return (
        <div>
            <h1>Users Form</h1>
            <form className="form" onSubmit={handleSubmit} >
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
            
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                    {inputError && <div style={{ color: 'red' }}>{inputError}</div>}

                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required/>
            
                <button type="submit">Submit</button>
            </form>
        </div>
    );
 }
    