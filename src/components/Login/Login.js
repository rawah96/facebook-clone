import React  from 'react'
import './Login.css'
import fb from './fb.jpg'
import Button from '@material-ui/core/Button'
import {auth, provider} from '../../firebase'
import {actionTypes} from '../../reducer';
import {useStateValue} from '../../StateProvider'


function Login() {
    const [state, dispatch] = useStateValue();
    const logIn = () => {
        auth.signInWithPopup(provider)
        .then(res => {
            dispatch({
            type: actionTypes.SET_USER,
            user: res.user,
        })}
        )    
    }

    return (
        <div className="facebook-login">
            <div className="login">
                <div className="login-logo">
                    <img src={fb} alt="" width="100%"/>
                    <h2>Connect with friends and the world 
                        around you on Facebook.</h2>
                </div>
            </div>
            <Button type="submit" onClick={logIn} className="btn">
                Log In
            </Button>
        </div>
    )
}

export default Login
