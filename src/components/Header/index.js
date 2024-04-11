import { Link } from "react-router-dom";
import logo from '../../assets/images/table-tennis-logo.png'
import Button from '@mui/material/Button';
import { MdMenuOpen, MdOutlineMenu } from "react-icons/md";

const Header = () => {
    return (
        <>
            <header className="row d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/** Logo Wrapper */}
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className="d-flex align-items-center logo" >
                                <img src={logo} className="ml-2" />
                                <span className="ml-2">PING PONG</span>
                            </Link>
                        </div>

                        <div className="col-sm-3 d-flex align-items-center part2 pl-4">
                            <Button className="rounded-circle"><MdMenuOpen/></Button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
