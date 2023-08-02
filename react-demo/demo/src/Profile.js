import { useLocation } from 'react-router-dom'

export default function Profile() {
    const location = useLocation();
    const props = location.state.formData
    console.log('props',location.state.formData)
    return(
    <>
        <h1>User component</h1>
        <p>name: {props.name}</p>
        <p>Email: {props.email}</p>
        <p>Age: {props.age}</p>


    </>)
}