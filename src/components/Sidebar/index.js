import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { FaProductHunt, FaLock, FaUserCircle } from "react-icons/fa";
import { FaAngleRight, FaCartArrowDown, FaBell, FaGripVertical } from "react-icons/fa6";
import { MdDashboard, MdMessage, MdViewKanban } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { useState } from "react";

const Sidebar = () => {

    const [activeTab, setActiveTab] = useState(null);

    const isOpenSubmenu = (index) => {
        setActiveTab(index);
    }

    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`}>
                            <span className='icon'><MdDashboard/></span>
                            Dashboard
                            <span className='arrow'><FaAngleRight/></span>
                            </Button>
                            </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 1 ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
                            <span className='icon'><FaProductHunt/></span>
                            Products
                            <span className='arrow'><FaAngleRight/></span>
                            </Button>
                            <div className={`submenuWrapper ${activeTab === 1 ? 'colapse' : 'colapsed'}`}>
                                <ul className="submenu">
                                    <li><Link to="#">Product List</Link></li>
                                    <li><Link to="#">Product View</Link></li>
                                    <li><Link to="#">Product Upload</Link></li>
                                </ul>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`}>
                            <span className='icon'><FaCartArrowDown/></span>
                            Orders
                            <span className='arrow'><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`}>
                            <span className='icon'><MdMessage/></span>
                            Messages
                            <span className='arrow'><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`}>
                        <span className='icon'><FaBell/></span>
                        Notifications
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`}>
                        <span className='icon'><IoIosSettings/></span>
                        Settings
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 5 ? 'active' : ''}`}>
                        <span className='icon'><FaLock/></span>
                        Authentication
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 6 ? 'active' : ''}`}>
                        <span className='icon'><FaUserCircle/></span>
                        User
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 7 ? 'active' : ''}`}>
                        <span className='icon'><MdViewKanban/></span>
                        Kanban
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 8 ? 'active' : ''}`}>
                        <span className='icon'><FaGripVertical /></span>
                        Table Tennis
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;
