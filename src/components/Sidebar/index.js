import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import Button from '@mui/material/Button';

import { FaProductHunt, FaLock, FaUserCircle } from "react-icons/fa";
import { FaAngleRight, FaCartArrowDown, FaBell, FaGripVertical } from "react-icons/fa6";
import { IoIosSettings, IoMdLogOut } from "react-icons/io";
import { MdDashboard, MdMessage, MdViewKanban } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";

const Sidebar = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const context = useContext(MyContext);

    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu);
    }

    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`} onClick={() => isOpenSubmenu(0)}>
                            <span className='icon'><MdDashboard/></span>
                            Dashboard
                            <span className='arrow'><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 1 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
                                <span className='icon'><FaProductHunt/></span>
                                Products (제품)
                                <span className='arrow'><FaAngleRight/></span>
                            </Button>
                            <div className={`submenuWrapper ${activeTab === 1 && isToggleSubmenu === true ? 'collapsed' : 'collapse'}`}>
                                <ul className="submenu">
                                    <li><Link to="/products">Product List</Link></li>
                                    <li><Link to="/product/details">Product View</Link></li>
                                    <li><Link to="/product/upload">Product Upload</Link></li>
                                </ul>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)}>
                            <span className='icon'><FaCartArrowDown/></span>
                            Orders
                            <span className='arrow'><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`} onClick={() => isOpenSubmenu(3)}>
                            <span className='icon'><MdMessage/></span>
                            메시지
                            <span className='arrow'><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`} onClick={() => isOpenSubmenu(4)}>
                        <span className='icon'><FaBell/></span>
                        Notifications
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 5 ? 'active' : ''}`} onClick={() => isOpenSubmenu(5)}>
                        <span className='icon'><IoIosSettings/></span>
                        Settings
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 6 ? 'active' : ''}`} onClick={() => isOpenSubmenu(6)}>
                        <span className='icon'><FaLock/></span>
                        Authentication
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 7 ? 'active' : ''}`} onClick={() => isOpenSubmenu(7)}>
                        <span className='icon'><FaUserCircle/></span>
                        User
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 8 ? 'active' : ''}`} onClick={() => isOpenSubmenu(8)}>
                        <span className='icon'><MdViewKanban/></span>
                        Kanban
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 9 ? 'active' : ''}`} onClick={() => isOpenSubmenu(9)}>
                            <span className='icon'><MdViewKanban/></span>
                            Brand
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 9 && isToggleSubmenu === true ? 'collapsed' : 'collapse'}`}>
                            <ul className="submenu">
                                <li><Link to="/brand-list">List Brand</Link></li>
                                <li><Link to="/brand-create">Create Brand</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 10 ? 'active' : ''}`} onClick={() => isOpenSubmenu(10)}>
                            <span className='icon'><FaGripVertical/></span>
                            Blade
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 10 && isToggleSubmenu === true ? 'collapsed' : 'collapse'}`}>
                            <ul className="submenu">
                                <li><Link to="/blade-list">List Blade</Link></li>
                                <li><Link to="/blade-create">Create Blade</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 11 ? 'active' : ''}`} onClick={() => isOpenSubmenu(11)}>
                            <span className='icon'><GrTransaction /></span>
                            Transaction
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 11 && isToggleSubmenu === true ? 'collapsed' : 'collapse'}`}>
                            <ul className="submenu">
                                <li><Link to="/transaction-report">Report</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <div className="logoutWrapper">
                    <div className="logoutBox">
                        <Button variant="contained"><IoMdLogOut/>Logout</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;
