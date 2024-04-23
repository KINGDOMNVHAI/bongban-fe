import { useContext, useEffect } from 'react';
import Logo from '../../assets/images/table-tennis-logo.png';
import patern from '../../assets/images/pattern.webp';
import { MyContext } from '../../App';

import { MdMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {

    const context = useContext(MyContext);

    useEffect(() => {
        context.setIsHideSidebarAndHeader(true);
    },[])

    return (
        <>
            <img src={patern} className='loginPatern' />
            <section className="loginSection">
                <div className="loginBox">
                    <div className="logo text-center">
                        <img src={Logo} width="70px" />
                        <h5 className='font-weight-bold'>Login to 탁구</h5>
                    </div>

                    <div className='wrapper mt-3 card border p-4'>
                        <form>
                            <div className='form-group mb-3 position-relative'>
                                <span className='icon'><MdMail/></span>
                                <input type='text' className='form-control' placeholder='your email' />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;
