import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, MenuItem, Select, FormControl, Button, Pagination } from "@mui/material/";
import circlePlusIcon from '../../assets/images/icon-plus-circle.png';

import { FaUserCircle, FaEye, FaPencilAlt } from "react-icons/fa"
import { GiStarsStack } from "react-icons/gi";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdCart, IoIosTimer } from "react-icons/io";
import { MdShoppingBag, MdDelete, MdBrandingWatermark } from "react-icons/md";

const BladeDetail = () => {

    const [showBy, setShowBy] = useState('');
    const [showBysetCatBy, setCatBy] = useState('');

    var productSliderOptions = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

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
                <h3 className="hd">Blade Detail</h3>

                <div className="row cardFilters mt-3">

                </div>

                <div className="table-responsive mt-3">
                    <table className="table table-bordered v-align">
                        <thead className="thead-dark">
                            <tr>
                                <th style={{width:'300px'}}>PRODUCT</th>
                                <th>STARTED PRICE (khởi điểm)</th>
                                <th>DEPOSIT (đặt cọc)</th>
                                <th>DEPRECIATION (khấu hao)</th>
                                <th>ENDED PRICE (kết thúc)</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
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
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="row">
                    <Box
                        height={200}
                        width={200}
                        display="flex"
                        alignItems="center"
                        sx={{ border: '2px solid grey' }}
                        className="btn-round ml-3 mt-3"
                    >
                        <div className="bladeBox img">
                            <img src="/upload/images/avatar-1.jpg" className="w-50" />
                            <p className="mt-1">Huỳnh Xuân An</p>
                        </div>
                    </Box>

                    <Box
                        height={200}
                        width={200}
                        display="flex"
                        alignItems="center"
                        sx={{ border: '2px solid grey' }}
                        className="btn-round ml-3 mt-3"
                    >
                        <div className="bladeBox img">
                            <img src="/upload/images/avatar-1.jpg" className="w-50" />
                            <p className="mt-1">Adam Levine</p>
                        </div>
                    </Box>

                    <Box
                        height={200}
                        width={200}
                        display="flex"
                        alignItems="center"
                        sx={{ border: '2px solid grey' }}
                        className="btn-round ml-3 mt-3"
                    >
                        <div className="bladeBox img">
                            <img src="/upload/images/avatar-1.jpg" className="w-50" />
                            <p className="mt-1">Huỳnh Xuân An</p>
                        </div>
                    </Box>

                    <Box
                        height={200}
                        width={200}
                        display="flex"
                        alignItems="center"
                        sx={{ border: '2px solid grey' }}
                        className="btn-round ml-3 mt-3"
                    >
                        <div className="bladeBox img">
                            <img src="/upload/images/avatar-1.jpg" className="w-50" />
                            <p className="mt-1">Huỳnh Xuân An</p>
                        </div>
                    </Box>

                    <Box
                        height={200}
                        width={200}
                        display="flex"
                        alignItems="center"
                        sx={{ border: '2px solid grey' }}
                        className="btn-round ml-3 mt-3"
                    >
                        <div className="bladeBox img">
                            <img src="/upload/images/avatar-1.jpg" className="w-50" />
                            <p className="mt-1">Huỳnh Xuân An</p>
                        </div>
                    </Box>

                    <Box
                        height={200}
                        width={200}
                        display="flex"
                        alignItems="center"
                        sx={{ border: '2px solid grey' }}
                        className="btn-round ml-3 mt-3"
                    >
                        <div className="bladeBox img">
                            <img src="/upload/images/avatar-1.jpg" className="w-50" />
                            <p className="mt-1">Huỳnh Xuân An</p>
                        </div>
                    </Box>

                    <Box
                        height={200}
                        width={200}
                        display="flex"
                        alignItems="center"
                        sx={{ border: '2px solid grey' }}
                        className="btn-round ml-3 mt-3"
                    >
                        <div className="bladeBox img">
                            <img src="/upload/images/avatar-1.jpg" className="w-50" />
                            <p className="mt-1">Huỳnh Xuân An</p>
                        </div>
                    </Box>

                    <Box
                        height={200}
                        width={200}
                        display="flex"
                        alignItems="center"
                        sx={{ border: '2px solid grey' }}
                        className="btn-round ml-3 mt-3"
                    >
                        <div className="bladeBox img">
                            <img src="/upload/images/avatar-1.jpg" className="w-50" />
                            <p className="mt-1">Huỳnh Xuân An</p>
                        </div>
                    </Box>

                    <Box
                        height={200}
                        width={200}
                        display="flex"
                        alignItems="center"
                        sx={{ border: '2px solid grey' }}
                        className="btn-round ml-3 mt-3"
                    >
                        <div className="bladeBox img">
                            <img src={circlePlusIcon} className="w-50" />
                        </div>
                    </Box>
                </div>
            </div>
        </section>
    </>
}

export default BladeDetail;
