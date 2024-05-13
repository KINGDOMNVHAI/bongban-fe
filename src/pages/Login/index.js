
import axios from "axios";
import { useContext, useEffect, useState } from 'react';
import googleIcon from '../../assets/images/logo-google.png';
import Logo from '../../assets/images/logo-google.png';
import patern from '../../assets/images/pattern.webp';
import { MyContext } from '../../App';

import { MdMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {

    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const context = useContext(MyContext);

    useEffect(() => {
        context.setIsHideSidebarAndHeader(true);
    },[])

    const focusInput = (index) => {
        setInputIndex(index);
    }



    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const request = {};

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const request = {
                email: email,
                password: password,
            }

            const res = await axios.post('http://localhost:8080/api/v1/public/signin', request)
            // console.log(res.config.data)

            if (res.status != 200) {
                setError(res.data.message)
                return;
            }

            setError("");
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            return navigate('/blade-list');
            // Redirect or perform any other actions
        } catch (error) {
            // Handle error
            setError("Invalid email or password");
            console.log(error)
        }
    };

    const handleLoginGoogle = async (e) => {
        // Redirect to an external URL
        window.location.href = 'http://localhost:8080/oauth2/authorization/google';
    }

    return (
        <>
            <img src={patern} className='loginPatern' />
            <section className="loginSection">
                <div className="loginBox">
                    <div className="logo text-center">
                        <img src={Logo} width="70px" />
                        <h5 className='font-weight-bold'>Login to 탁구</h5>
                    </div>

                    <div className='wrapper mt-3 card border'>
                        <form onSubmit={handleLogin}>
                            <div className={`form-group position-relative ${inputIndex === 0 && 'focus'}`}>
                                <span className='icon'><MdMail/></span>
                                <input type='text' name="email" className='form-control' placeholder='your email'
                                    onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex(null)}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className={`form-group position-relative ${inputIndex === 1 && 'focus'}`}>
                                <span className='icon'><RiLockPasswordFill/></span>
                                <input type={`${isShowPassword === true ? 'text' : 'password'}`} name="password" className='form-control' placeholder='your password'
                                    onFocus={()=>focusInput(1)} onBlur={()=>setInputIndex(null)}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <span className='toggleShowPassword' onClick={()=>setIsShowPassword(!isShowPassword)}>
                                    {
                                        isShowPassword === true ? <IoMdEyeOff/> : <IoMdEye/>
                                    }
                                </span>
                            </div>

                            <div className='form-group'>
                                <Button type="submit" className='btn-blue btn-lg w-100 btn-big'>Sign In</Button>
                            </div>
                        </form>

                        <div className='form-group text-center mb-0'>
                            <Link to={'/forgot-password'} className='link'>FORGOT PASSWORD</Link>
                            <div className='d-flex align-items-center justify-content-center or mt-1'>
                                <span className='line'></span>
                                <span className='txt'>OR</span>
                                <span className='line'></span>
                            </div>

                            <Button onClick={handleLoginGoogle} variant="outlined" className='w-100 btn-lg btn-lg loginWithGoogle mt-3'>
                                <img src={googleIcon} width="30px" /> &nbsp; Sign In with Google
                            </Button>
                        </div>
                    </div>

                    <div className='wrapper mt-3 card border footer p-3'>
                        <span className='text-center'>
                            Don't have account?
                            <Link to={'/sign-up'} className='link color ml-1'>Register</Link>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;
