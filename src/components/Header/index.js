import { Link, useNavigate, useParams } from "react-router-dom";
import logo from '../../assets/images/table-tennis-logo.png'
import Button from '@mui/material/Button';
import { MdMenuOpen, MdOutlineMenu, MdDarkMode, MdOutlineMailOutline, MdOutlineLightMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { IoCartOutline, IoShieldHalfSharp } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import SearchBox from "../SearchBox";

import { React, useContext, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { MyContext } from "../../App";
import UserAvatarImgComponent from "../userAvatarImg";


const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpenNotificationDrop, setisOpenNotificationDrop] = useState(false);
    const openMyAcc = Boolean(anchorEl);
    const openNotifications = Boolean(isOpenNotificationDrop);

    const [isLogin, setIsLogin] = useState(true);

    const navigate = useNavigate();
    const context = useContext(MyContext);
    // Check login
    const token = localStorage.getItem("jwtToken");
    const email = localStorage.getItem("email");
    const username = localStorage.getItem("username");

    const handleOpenMyAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };
    const handleOpenNotificationsDrop = () => {
        setisOpenNotificationDrop(true);
    };
    const handleCloseNotificationsDrop = () => {
        setisOpenNotificationDrop(false);
    };

    return (
        <>
            <header className="row d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/** Logo Wrapper */}
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className="d-flex align-items-center logo" >
                                <img src={logo} className="ml-2" />
                                <span className="ml-2">탁구</span>
                            </Link>
                        </div>

                        <div className="col-sm-3 d-flex align-items-center part2">
                            <Button
                                className="rounded-circle mr-3"
                                onClick={() => context.setIsToggleSidebar(!context.isToggleSidebar)}
                            >
                            {
                                context.isToggleSidebar === false ? <MdMenuOpen/> : <MdOutlineMenu/>
                            }
                            </Button>
                            <SearchBox />
                        </div>

                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3 pl-4">
                            <Button className="rounded-circle mr-3" onClick={()=>context.setThemeMode(!context.themeMode)}>
                                <MdOutlineLightMode/>
                            </Button>
                            <Button className="rounded-circle mr-3"><IoCartOutline/></Button>
                            <Button className="rounded-circle mr-3"><MdOutlineMailOutline/></Button>

                            <div className="dropdownWrapper position-relative">
                                <Button className="rounded-circle mr-3" onClick={handleOpenNotificationsDrop}><FaRegBell/></Button>

                                <Menu
                                    anchorEl={isOpenNotificationDrop}
                                    className="notifications dropdown_list"
                                    id="notifications"
                                    open={openNotifications}
                                    onClose={handleCloseNotificationsDrop}
                                    onClick={handleCloseNotificationsDrop}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >

                                    <div className="head pl-3 pb-0">
                                        <h4>Order (12)</h4>
                                    </div>
                                    <Divider className="mb-1" />

                                    <div className="scroll">
                                        <MenuItem onClick={handleCloseNotificationsDrop}>
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <UserAvatarImgComponent img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">Few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNotificationsDrop}>
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">Few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNotificationsDrop}>
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">Few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNotificationsDrop}>
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">Few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNotificationsDrop}>
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">Few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNotificationsDrop}>
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">Few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNotificationsDrop}>
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">Few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                    </div>

                                    <div className="pl-3 pr-3 pt-2 pb-1 w-100">
                                        <Button className="btn-blue w-100">View all notifications</Button>
                                    </div>
                                </Menu>
                            </div>

                            {
                                context.isLogin !== true ?
                                <Link to={'/login'}><Button className='btn-blue btn-lg btn-round'>Sign In</Button></Link>
                                :
                                <div className="myAccWrapper">
                                    <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDrop}>
                                        <div className="userImg">
                                            <span className="rounded-circle">
                                                <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                            </span>
                                        </div>

                                        <div className="userInfo">
                                            <h4>Hải</h4>
                                            <p className="mb-0">@{email}</p>
                                        </div>
                                    </Button>

                                    <Menu
                                        anchorEl={anchorEl}
                                        id="account-menu"
                                        open={openMyAcc}
                                        onClose={handleCloseMyAccDrop}
                                        onClick={handleCloseMyAccDrop}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >

                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <ListItemIcon>
                                                <PersonAdd fontSize="small" />
                                            </ListItemIcon>
                                            My account
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <ListItemIcon>
                                                <IoShieldHalfSharp />
                                            </ListItemIcon>
                                            Reset Password
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <ListItemIcon>
                                                <Logout fontSize="small" />
                                            </ListItemIcon>
                                            Logout
                                        </MenuItem>
                                    </Menu>
                                </div>
                            }


                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
