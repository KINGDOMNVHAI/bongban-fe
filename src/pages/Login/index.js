import { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/images/table-tennis-logo.png';
import patern from '../../assets/images/pattern.webp';
import { MyContext } from '../../App';

import { MdMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

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
                        <form>
                            <div className={`form-group mb-4 position-relative ${inputIndex === 0 && 'focus'}`}>
                                <span className='icon'><MdMail/></span>
                                <input type='text' className='form-control' placeholder='your email'
                                    onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex(null)}
                                />
                            </div>

                            <div className={`form-group mb-4 position-relative ${inputIndex === 1 && 'focus'}`}>
                                <span className='icon'><RiLockPasswordFill/></span>
                                <input type={`${isShowPassword === true ? 'text' : 'password'}`} className='form-control' placeholder='your password'
                                    onFocus={()=>focusInput(1)} onBlur={()=>setInputIndex(null)}
                                />

                                <span className='toggleShowPassword' onClick={()=>setIsShowPassword(!isShowPassword)}>
                                    {
                                        isShowPassword === true ? <IoMdEyeOff/> : <IoMdEye/>
                                    }
                                </span>
                            </div>

                            <div className='form-group'>
                                <Button className='btn-blue btn-lg w-100 btn-big'>Sign In</Button>
                            </div>

                            <div className='form-group text-center'>
                                <Link to={'/forgot-password'} className='link'>FORGOT PASSWORD</Link>
                                <div className='d-flex align-items-center justify-content-center or mt-1'>
                                    <span className='line'></span>
                                    <span className='txt'>OR</span>
                                    <span className='line'></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;
