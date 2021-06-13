import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import swal from 'sweetalert'
import Swal from 'sweetalert2'

const schema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email().required('Email is required'),
    age: yup.number().required().typeError('Age is required and must be an number'),
    password: yup.string().min(6).max(12).required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Password Should Match').required('Confirm Password is required')
})

const Login = ({ history }) => {

    const dispatch = useDispatch()

    const [show, setShow] = useState(false)

    const {
        register,
        handleSubmit,
        errors
    } = useForm({
        resolver: yupResolver(schema)
    })

    const showPasswordHandler = () => {
        setShow(prev => !prev)
    }

    const onSubmit = async (data) => {
        console.log('Given Data', data)
        if (data) {
            const willDelete = await Swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it'
            });

            if (willDelete.isConfirmed) {
                return new Swal("Deleted!", `your ${data.email} account has been deleted`, "success");
            } else if (willDelete.dismiss === Swal.DismissReason.cancel) {
               return Swal.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        }
        return
        dispatch({
            type: 'LOG_IN',
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
        history.push('/products')
    }

    return (
        <div className="container py-5 mb-5">
            <div className="row" style={{ alignItems: 'center' }} >
                <div className="col-md-6 mx-auto">
                    <h1 className="text-info mb-4" style={{ textDecoration: 'underline' }}>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="text" name="firstName" className="form-control" ref={register} placeholder="First Name" onChange={e => e.target.value = e.target.value.length <= 1 ? e.target.value.toUpperCase() : e.target.value} />
                        </div>
                        <p className="text-danger">{errors.firstName?.message}</p>
                        <div className="form-group">
                            <input type="text" name="lastName" className="form-control" ref={register} placeholder="Last Name" onChange={e => e.target.value = e.target.value.length <= 1 ? e.target.value.toUpperCase() : e.target.value} />
                        </div>
                        <p className="text-danger">{errors.lastName?.message}</p>
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
                        <button type="submit" className="btn btn-block btn-primary" style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
