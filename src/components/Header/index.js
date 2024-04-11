import { Link } from "react-router-dom";
import logo from '../../assets/images/table-tennis-logo.png'
import Button from '@mui/material/Button';
import { MdMenuOpen, MdOutlineMenu, MdDarkMode, MdOutlineMailOutline, MdOutlineLightMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import SearchBox from "../SearchBox";

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
                            <SearchBox />
                        </div>

                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3 pl-4">
                            <Button className="rounded-circle"><MdOutlineLightMode/></Button>
                            <Button className="rounded-circle"><IoCartOutline/></Button>
                            <Button className="rounded-circle"><MdOutlineMailOutline/></Button>
                            <Button className="rounded-circle"><FaRegBell/></Button>

                            <div className="myAccWrapper">
                                <Button className="myAcc d-flex align-items-center">
                                    <div className="userImg">
                                        <span className="rounded-circle">
                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                        </span>
                                    </div>

                                    <div className="userInfo">
                                        <h4>Hải</h4>
                                        <p className="mb-0">@viethai</p>
                                    </div>

                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
