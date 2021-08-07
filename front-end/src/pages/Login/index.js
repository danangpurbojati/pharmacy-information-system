import React from 'react'
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    const submitLoginForm = (event) => {
        event.preventDefault();
        history.push("/admin");
    }
    return (
        <div>
            <div>
                <div>
                    <h3>
                        Pharmacy System
                    </h3>
                    <h3>
                        Login
                    </h3>
                    <form onSubmit={submitLoginForm}>
                        <input
                            style={{marginBottom: 16}}
                        />
                        <input
                            style={{marginBottom: 16}}
                        />
                        <button type="submit" fullWidth variant="contained" color="primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
