import { useContext, useEffect, useState } from 'react';
import googleIcon from '../../assets/images/logo-google.png';
import Logo from '../../assets/images/logo-google.png';
import patern from '../../assets/images/pattern.webp';
import { MyContext } from '../../App';

import { MdMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
    const context = useContext(MyContext);

    useEffect(() => {
        context.setIsHideSidebarAndHeader(true);
    },[])

    const focusInput = (index) => {
        setInputIndex(index);
    }

    return (
        <>
            <img src={patern} className='loginPatern' />
            {/* if you want to change form style, remove signUpSection  */}
            <section className="loginSection signUpSection">
                <div className="row">
                    <div className='col-md-8'>

                    </div>

                    <div className='col-md-4 pr-0'>
                        <div className="loginBox">
                            <div className="logo text-center">
                                <img src={Logo} width="70px" />
                                <h5 className='font-weight-bold'>Register a new 계정</h5>
                            </div>

                            <div className='wrapper mt-3 card border'>
                                <form>
                                    <div className={`form-group position-relative ${inputIndex === 0 && 'focus'}`}>
                                        <span className='icon'><FaUserCircle/></span>
                                        <input type='text' className='form-control' placeholder='enter your name'
                                            onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex(null)}
                                        />
                                    </div>

                                    <div className={`form-group position-relative ${inputIndex === 1 && 'focus'}`}>
                                        <span className='icon'><MdMail/></span>
                                        <input type='text' className='form-control' placeholder='enter your email'
                                            onFocus={()=>focusInput(1)} onBlur={()=>setInputIndex(null)}
                                        />
                                    </div>

                                    <div className={`form-group position-relative ${inputIndex === 2 && 'focus'}`}>
                                        <span className='icon'><RiLockPasswordFill/></span>
                                        <input type={`${isShowPassword === true ? 'text' : 'password'}`} className='form-control' placeholder='enter your password'
                                            onFocus={()=>focusInput(2)} onBlur={()=>setInputIndex(null)}
                                        />

                                        <span className='toggleShowPassword' onClick={()=>setIsShowPassword(!isShowPassword)}>
                                            {
                                                isShowPassword === true ? <IoMdEyeOff/> : <IoMdEye/>
                                            }
                                        </span>
                                    </div>

                                    <div className={`form-group position-relative ${inputIndex === 3 && 'focus'}`}>
                                        <span className='icon'><IoShieldCheckmark /></span>
                                        <input type={`${isShowConfirmPassword === true ? 'text' : 'password'}`} className='form-control' placeholder='confirm your password'
                                            onFocus={()=>focusInput(3)} onBlur={()=>setInputIndex(null)}
                                        />

                                        <span className='toggleShowPassword' onClick={()=>setIsShowConfirmPassword(!isShowConfirmPassword)}>
                                            {
                                                isShowConfirmPassword === true ? <IoMdEyeOff/> : <IoMdEye/>
                                            }
                                        </span>
                                    </div>

                                    <div className='form-group'>
                                        <Button className='btn-blue btn-lg w-100 btn-big'>Sign Up</Button>
                                    </div>

                                    <div className='form-group text-center mb-0'>
                                        <div className='d-flex align-items-center justify-content-center or mt-1'>
                                            <span className='line'></span>
                                            <span className='txt'>OR</span>
                                            <span className='line'></span>
                                        </div>

                                        <Button variant="outlined" className='w-100 btn-lg btn-lg loginWithGoogle mt-3'>
                                            <img src={googleIcon} width="30px" /> &nbsp; Sign In with Google
                                        </Button>
                                    </div>
                                </form>
                                <span className='text-center d-block mt-3'>
                                    Already have account?
                                    <Link to={'/login'} className='link color ml-1'>Sign In</Link>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp;
