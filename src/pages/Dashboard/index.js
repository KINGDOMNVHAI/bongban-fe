import { useContext, useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuItem, Select, FormControl, Button, Pagination } from "@mui/material/";

import { FaUserCircle, FaEye, FaPencilAlt } from "react-icons/fa"
import { GiStarsStack } from "react-icons/gi";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdCart, IoIosTimer } from "react-icons/io";
import { MdShoppingBag, MdDelete } from "react-icons/md";

import DashboardBox from "./components/dashboardBox";
import { MyContext } from "../../App";

export const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
];

export const options = {
    // title: "Company Performance",
    // hAxis: { title: "Year", titleTextStyle: {color: "#333" }},
    // vAxis: { minValue: 0 },


    'backgroundColor': 'transparent',
    'chartArea': { 'width': '100%', 'height': '100%'},
};

const Dashboard = () => {

    // Check login
    const navigate = useNavigate();
    const token = localStorage.getItem("jwtToken");
    if (token == null || token == undefined) navigate("/login");

    const [anchorEl, setAnchorEl] = useState(null);
    const [showBy, setShowBy] = useState('');
    const [showBysetCatBy, setCatBy] = useState('');
    const open = Boolean(anchorEl);

    const ITEM_HEIGHT = 48;

    const context = useContext(MyContext);

    useEffect(()=>{
        context.setIsHideSidebarAndHeader(false);

        window.scrollTo(0,0);
    })

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    // const handleChange = (event) => {
    //     setShowBy(event.target.value);
    // };

    return <>
        <section className="right-content w-100">
            <div className="row dashboardBoxWrapperRow">
                <div className="col-md-8">
                    <div className="dashboardBoxWrapper d-flex">
                        <DashboardBox color={["#1da256","#48d483"]} icon={<FaUserCircle/>} grow={true} />
                        <DashboardBox color={["#c012e2","#eb64fe"]} icon={<IoMdCart/>} />
                        <DashboardBox color={["#2c78e5","#60aff5"]} icon={<MdShoppingBag/>} />
                        <DashboardBox color={["#e1950e","#f3cd29"]} icon={<GiStarsStack/>} />
                    </div>
                </div>

                <div className="col-md-4 pl-0">
                    <div className="box graphBox">
                        <div className="d-flex align-items-center w-100 bottomEle">
                            <h6 className="text-white mb-0 mt-0">Total Sales</h6>
                            <div className="ml-auto">
                                <Button className="ml-auto toggleIcon" onClick={handleClick}><HiDotsVertical/></Button>
                            </div>

                            <Menu
                                className="dropdown_menu"
                                MenuListProps={{
                                    'aria-labelledby': 'long-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: '20ch',
                                    },
                                }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <IoIosTimer/> Last Day
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <IoIosTimer/> Last Week
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <IoIosTimer/> Last Month
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <IoIosTimer/> Last Year
                                </MenuItem>
                            </Menu>
                        </div>

                        <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
                        <p>$3,578.90 in last month</p>

                        <Chart
                            chartType="PieChart"
                            width="100%"
                            height="170px"
                            data={data}
                            options={options}
                        />
                    </div>
                </div>
            </div>

            <div className="card shadow border-0 p-3 mt-4">
                <h3 className="hd">Best Selling Products</h3>

                <div className="row cardFilters mt-3">
                    <div className="col-md-3">
                        <h4>SHOW BY</h4>
                        <FormControl size="small" className="w-100">
                        <Select
                            value={showBy}
                            onChange={(e) => setShowBy(e.target.value)}
                            displayEmpty
                            inputProps={{'aria-label': 'Without label'}}
                            labelId="demo-select-small-label"
                            className="w-100"
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        </FormControl>
                    </div>

                    <div className="col-md-3">
                        <h4>CATEGORY BY</h4>
                        <FormControl size="small" className="w-100">
                        <Select
                            value={showBysetCatBy}
                            onChange={(e) => setCatBy(e.target.value)}
                            displayEmpty
                            inputProps={{'aria-label': 'Without label'}}
                            labelId="demo-select-small-label"
                            className="w-100"
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        </FormControl>
                    </div>
                </div>

                <div className="table-responsive mt-3">
                    <table className="table table-bordered v-align">
                        <thead className="thead-dark">
                            <tr>
                                <th>UID</th>
                                <th style={{width:'300px'}}>PRODUCT</th>
                                <th>CATEGORY</th>
                                <th>BRAND</th>
                                <th>PRICE</th>
                                <th>STOCK</th>
                                <th>RATING</th>
                                <th>ORDER</th>
                                <th>SALES</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>#1</td>
                                <td>
                                    <div className="d-flex align-items-center productBox">
                                        <div className="imgWrapper">
                                            <div className="img">
                                                <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" />
                                            </div>
                                        </div>
                                        <div className="info pl-2">
                                            <h6>Tops and skirt set for Female...</h6>
                                            <p>Women's exclusive summer Tops and skirt set for Female Top and skirt set...</p>
                                        </div>
                                    </div>
                                </td>
                                <td>Womans</td>
                                <td>richman</td>
                                <td>
                                    <div style={{width:'150px'}}>
                                        <del className="old">$21.00</del>
                                        <span className="new text-danger">$19.00</span>
                                    </div>
                                </td>
                                <td>30</td>
                                <td>4.9 (16)</td>
                                <td>380</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex align-items-center">
                                        <Link to="/product/details">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                        </Link>
                                        <Button className="success" color="success"><FaPencilAlt/></Button>
                                        <Button className="error" color="error"><MdDelete/></Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>#2</td>
                                <td>
                                    <div className="d-flex align-items-center productBox">
                                        <div className="imgWrapper">
                                            <div className="img">
                                                <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" />
                                            </div>
                                        </div>
                                        <div className="info pl-2">
                                            <h6>Tops and skirt set for Female...</h6>
                                            <p>Women's exclusive summer Tops and skirt set for Female Top and skirt set...</p>
                                        </div>
                                    </div>
                                </td>
                                <td>Womans</td>
                                <td>richman</td>
                                <td>
                                    <div style={{width:'150px'}}>
                                        <del className="old">$21.00</del>
                                        <span className="new text-danger">$19.00</span>
                                    </div>
                                </td>
                                <td>30</td>
                                <td>4.9 (16)</td>
                                <td>380</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex align-items-center">
                                        <Button className="secondary" color="secondary"><FaEye/></Button>
                                        <Button className="success" color="success"><FaPencilAlt/></Button>
                                        <Button className="error" color="error"><MdDelete/></Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>#3</td>
                                <td>
                                    <div className="d-flex align-items-center productBox">
                                        <div className="imgWrapper">
                                            <div className="img">
                                                <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" />
                                            </div>
                                        </div>
                                        <div className="info pl-2">
                                            <h6>Tops and skirt set for Female...</h6>
                                            <p>Women's exclusive summer Tops and skirt set for Female Top and skirt set...</p>
                                        </div>
                                    </div>
                                </td>
                                <td>Womans</td>
                                <td>richman</td>
                                <td>
                                    <div style={{width:'70px'}}>
                                        <del className="old">$21.00</del>
                                        <span className="new text-danger">$19.00</span>
                                    </div>
                                </td>
                                <td>30</td>
                                <td>4.9 (16)</td>
                                <td>380</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex align-items-center">
                                        <Button className="secondary" color="secondary"><FaEye/></Button>
                                        <Button className="success" color="success"><FaPencilAlt/></Button>
                                        <Button className="error" color="error"><MdDelete/></Button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="d-flex tableFooter">
                        <p>Showing <b>12</b> of <b>60</b> results</p>
                        <Pagination count={10} color="primary" className="pagination" showFirstButton showLastButton />
                    </div>
                </div>
            </div>

        </section>
    </>
}

export default Dashboard;
