import { useContext, useEffect } from 'react';
import Logo from '../../assets/images/table-tennis-logo.png';

import { MyContext } from '../../App';

const Login = () => {

    const context = useContext(MyContext);

    useEffect(() => {
        context.setIsHideSidebarAndHeader(true);
    },[])

    return (
        <section className="loginSection">
            <div className="loginBox">
                <div className="logo text-center">
                    <img src={Logo} />
                </div>
            </div>
        </section>
    )
}

export default Login;
