import Button from '@mui/material/Button';
import { FaProductHunt, FaLock, FaUserCircle } from "react-icons/fa";
import { FaAngleRight, FaCartArrowDown, FaBell, FaGripVertical } from "react-icons/fa6";
import { MdDashboard, MdMessage, MdViewKanban } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><MdDashboard/></span>
                        Dashboard
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><FaProductHunt/></span>
                        Products
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><FaCartArrowDown/></span>
                        Orders
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><MdMessage/></span>
                        Messages
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><FaBell/></span>
                        Notifications
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><IoIosSettings/></span>
                        Settings
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><FaLock/></span>
                        Authentication
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><FaUserCircle/></span>
                        User
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><MdViewKanban/></span>
                        Kanban
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><FaGripVertical /></span>
                        Table Tennis
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><FaCartArrowDown/></span>
                        Orders
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><MdMessage/></span>
                        Messages
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><FaBell/></span>
                        Notifications
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><IoIosSettings/></span>
                        Settings
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><FaCartArrowDown/></span>
                        Orders
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><MdMessage/></span>
                        Messages
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><FaBell/></span>
                        Notifications
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><IoIosSettings/></span>
                        Settings
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><FaCartArrowDown/></span>
                        Orders
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><MdMessage/></span>
                        Messages
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><FaBell/></span>
                        Notifications
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                        <span className='icon'><IoIosSettings/></span>
                        Settings
                        <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;
