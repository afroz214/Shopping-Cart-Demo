import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

const Login = ({ history }) => {

    const dispatch = useDispatch() 

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        dispatch({
            type: 'LOG_IN',
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
        history.push('/products')
    }

    return (
        <div className="container">
            <div className="row" style={{ height: '60vh', alignItems: 'center' }} >
                <div className="col-md-6 mx-auto">
                    <h1 className="text-info mb-4" style={{ textDecoration: 'underline' }}>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input {...register('name', { required: true })} className="form-control" placeholder="Name" />
                           {errors.name &&  <p className="text-danger">Name is required</p>}
                        </div>
                        <div className="form-group">
                            <input {...register('email', { required: true, pattern: /@/ })} className="form-control" placeholder="Email" />
                           {errors.email &&  <p className="text-danger">Email is required</p>}
                        </div>
                        <div className="form-group">
                            <input type="password" {...register('password', { required: true, minLength: 6 })} className="form-control" placeholder="Password" />
                           {errors.password &&  <p className="text-danger">Password is required and must be above 6 character</p>}
                        </div>
                        <button type="submit" className="btn btn-block btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
