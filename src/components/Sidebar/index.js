import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import Button from '@mui/material/Button';

import { FaProductHunt, FaLock, FaUserCircle } from "react-icons/fa";
import { FaAngleRight, FaCartArrowDown, FaBell, FaGripVertical } from "react-icons/fa6";
import { IoIosSettings, IoMdLogOut } from "react-icons/io";
import { MdDashboard, MdMessage, MdViewKanban } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { TbBrandCarbon } from "react-icons/tb";

const Sidebar = () => {

    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const context = useContext(MyContext);

    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu);
    }

    const handleLogout = async (event) => {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("email");
        navigate("/login");
    }

    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/">
                            <Button className={`w-100`}>
                            <span className='icon'><MdDashboard/></span>
                            Dashboard
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 8 ? 'active' : ''}`} onClick={() => isOpenSubmenu(8)}>
                            <span className='icon'><TbBrandCarbon /></span>
                            Brand
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 8 && isToggleSubmenu === true ? 'collapsed' : 'collapse'}`}>
                            <ul className="submenu">
                                <li><Link to="/brand-list">List Brand</Link></li>
                                <li><Link to="/brand-create">Create Brand</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 9 ? 'active' : ''}`} onClick={() => isOpenSubmenu(9)}>
                            <span className='icon'><FaGripVertical/></span>
                            Blade
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 9 && isToggleSubmenu === true ? 'collapsed' : 'collapse'}`}>
                            <ul className="submenu">
                                <li><Link to="/blade-list">List Blade</Link></li>
                                <li><Link to="/blade-create">Create Blade</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 10 ? 'active' : ''}`} onClick={() => isOpenSubmenu(10)}>
                            <span className='icon'><GrTransaction /></span>
                            Transaction
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 10 && isToggleSubmenu === true ? 'collapsed' : 'collapse'}`}>
                            <ul className="submenu">
                                <li><Link to="/transaction-report">Report</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Button className={`w-100`}>
                        <span className='icon'><FaUserCircle/></span>
                        User
                        </Button>
                    </li>
                </ul>

                <div className="logoutWrapper">
                    <div className="logoutBox" onClick={handleLogout}>
                        <Button variant="contained"><IoMdLogOut/>Logout</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;
