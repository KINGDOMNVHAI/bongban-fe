import Button from '@mui/material/Button';
import { FaProductHunt } from "react-icons/fa";
import { FaAngleRight, FaCartArrowDown } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

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
                </ul>
            </div>
        </>
    )
}

export default Sidebar;
