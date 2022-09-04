import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import swal from 'sweetalert'
import Swal from 'sweetalert2'
import { addUser, clearUser, updateUser } from '../reducers/userReducer'
import { useHistory } from 'react-router'

// const schema = yup.object().shape({
//     firstName: yup.string().required('First Name is required'),
//     lastName: yup.string().required('Last Name is required'),
//     email: yup.string().email().required('Email is required'),
//     age: yup.number().required().typeError('Age is required and must be an number'),
//     password: yup.string().min(6).max(12).required('Password is required'),
//     confirmPassword: yup.string().oneOf([yup.ref('password')], 'Password Should Match').required('Confirm Password is required')
// })

const Login = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [show, setShow] = useState(false)
    const [ids, setIds] = useState(2)

    const {
        register,
        handleSubmit,
        errors,
        watch
    } = useForm()

    const showPasswordHandler = () => {
        setShow(prev => !prev)
    }

    const firstName = watch("firstName")
    const lastName = watch("lastName")

    console.log(firstName, "firstName", lastName)
    console.log(ids, "ids")

    const onSubmit = () => {
        if (!firstName || !lastName) {
            swal("Errors", "Please Fill the all inputs", "errors")
        } else if (singleUser?.firstName) {
            dispatch(updateUser({ id: singleUser?.id, firstName, lastName }))
            dispatch(clearUser())
            history.push("/products")
        } else {
            dispatch(addUser({ id: users.length + 1, firstName, lastName }))
            history.push("/products")
        }
    }

    const { singleUser, users } = useSelector(state => state.login)

    // const updateUserHandler = () => {
    //     dispatch(updateUser({ firstName, lastName }))
    //     dispatch(clearUser())
    //     history.push("/products")
    // }


    return (
        <div className="container py-5 mb-5">
            <div className="row" style={{ alignItems: 'center' }} >
                <div className="col-md-6 mx-auto">
                    <h1 className="text-info mb-4" style={{ textDecoration: 'underline' }}>Login</h1>
                        <div className="form-group">
                            <input defaultValue={singleUser?.firstName} type="text" name="firstName" className="form-control" ref={register} placeholder="First Name" onChange={e => e.target.value = e.target.value.length <= 1 ? e.target.value.toUpperCase() : e.target.value} />
                        </div>
                        {/* <p className="text-danger">{errors.firstName?.message}</p> */}
                        <div className="form-group">
                            <input defaultValue={singleUser?.lastName} type="text" name="lastName" className="form-control" ref={register} placeholder="Last Name" onChange={e => e.target.value = e.target.value.length <= 1 ? e.target.value.toUpperCase() : e.target.value} />
                        </div>
                        <button onClick={onSubmit} className='btn-success p-2 '>{singleUser?.firstName ? "Update" : "Create"}</button>
                        {/* <p className="text-danger">{errors.lastName?.message}</p>
                        <div className="form-group">
                            <input type="text" name="email" className="form-control" ref={register} placeholder="Email" />
                        </div>
                        <p className="text-danger">{errors.email?.message}</p>
                        <div className="form-group">
                            <input type="text" name="age" className="form-control" ref={register} placeholder="Age" />
                        </div>
                        <p className="text-danger">{errors.age?.message}</p>
                        <div className="form-group">
                            <input type={`${show ? 'text' : 'password'}`} name="password" className="form-control" ref={register} placeholder={"Password"} />
                            <span style={{ marginTop: '-33px' }} className="btn btn-primary btn-sm float-right" onClick={showPasswordHandler}>{show ? 'Hide Password' : 'Show Password'}</span>
                        </div>
                        <p className="text-danger">{errors.password?.message}</p>
                        <div className="form-group">
                            <input type={`${show ? 'text' : 'password'}`} name="confirmPassword" className="form-control" ref={register} placeholder="Confirm Password" />
                        </div>
                        <p className="text-danger">{errors.confirmPassword?.message}</p>
                        <button type="submit" className="btn btn-block btn-primary" style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Login</button> */}
                </div>
            </div>
        </div>
    )
}

export default Login
