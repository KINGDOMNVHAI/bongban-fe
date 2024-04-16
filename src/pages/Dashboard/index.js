import { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { FaUserCircle, FaEye, FaPencilAlt } from "react-icons/fa"
import { MdShoppingBag, MdDelete } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";

import { MenuItem, Select, FormControl, Button } from "@mui/material/";
// import { FormHelperText } from "@mui/material/FormHelperText";

import DashboardBox from "./components/dashboardBox";

const Dashboard = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [showBy, setShowBy] = useState('');
    const [showBysetCatBy, setCatBy] = useState('');
    const open = Boolean(anchorEl);

    const ITEM_HEIGHT = 48;

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
                    <div className="box">

                    </div>
                </div>
            </div>

            <div className="card shadow border-0 p-3 mt-4">
                <h3 className="hd">SHOW BY</h3>

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
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>UID</th>
                                <th>PRODUCT</th>
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
                                <td>Tops and skirt set for Female</td>
                                <td>Womans</td>
                                <td>richman</td>
                                <td>$21.00</td>
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
                </div>
            </div>

        </section>
    </>
}

export default Dashboard;
