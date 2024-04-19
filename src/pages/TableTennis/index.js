import { useState } from "react";
import { Chart } from "react-google-charts";
import { Menu, MenuItem, Select, FormControl, Button, Pagination } from "@mui/material/";

import { IoMdCart, IoIosTimer } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { FaUserCircle, FaEye, FaPencilAlt } from "react-icons/fa"
import { MdShoppingBag, MdDelete } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";

const TableTennis = () => {

    const [showBy, setShowBy] = useState('');
    const [showBysetCatBy, setCatBy] = useState('');

    return <>
        <section className="right-content w-100">
            <div className="row dashboardBoxWrapperRow">
                <div className="col-md-8">
                    <div className="dashboardBoxWrapper d-flex">

                    </div>
                </div>

                <div className="col-md-4 pl-0">
                    <div className="box">

                    </div>
                </div>
            </div>

            <div className="card shadow border-0 p-3 mt-4">
                <h3 className="hd">Table Tennis</h3>

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
                                <th>STARTED PRICE (khởi điểm)</th>
                                <th>DEPOSIT (đặt cọc)</th>
                                <th>DEPRECIATION (khấu hao)</th>
                                <th>ENDED PRICE (kết thúc)</th>
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
                                                <img src="/upload/images/product/takku-1.jpg" className="w-100" />
                                            </div>
                                        </div>
                                        <div className="info pl-0">
                                            <h6>Butterfly Tamca 5000</h6>
                                            <p>Vợt Butterfly Tamca 5000 được thiết kế với tính năng trợ lực cho người chơi cùng 2 lớp sợi Carbon đan xen 3 lớp gỗ nằm gần lớp gỗ hinoki ở ngoài.</p>
                                        </div>
                                    </div>
                                </td>
                                <td>6.500.000 VND</td>
                                <td>3.000.000 VND</td>
                                <td>100.000 VND</td>
                                <td>3.000.000 VND</td>
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

export default TableTennis;
