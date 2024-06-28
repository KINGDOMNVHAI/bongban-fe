import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import { Box, MenuItem, Select, FormControl, Button, Pagination, Breadcrumbs, Chip, emphasize, styled } from "@mui/material/";
import { Home, ExpandMore } from "@mui/icons-material";
import circlePlusIcon from '../../assets/images/icon-plus-circle.png';

import { BsTextareaResize } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FaEye, FaPencilAlt, FaPiggyBank } from "react-icons/fa"
import { GiStarsStack } from "react-icons/gi";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdCart, IoIosTimer } from "react-icons/io";
import { IoColorPaletteOutline, IoPricetagOutline } from "react-icons/io5";
import { MdShoppingBag, MdBrandingWatermark, MdGridView } from "react-icons/md";

// Breadcrum code
const StyledBreadcrumb = styled(Chip)(({theme}) => {
    const backgroundColor =
        theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
})

const BladeDetail = () => {

    const [showBy, setShowBy] = useState('');
    const [showBysetCatBy, setCatBy] = useState('');

    const [bladeDetail, setBladeDetail] = useState('');

    let params = useParams();

    var productSliderOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    var productSliderSmlOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/public/blade/detail/' + params.unitID);
                setBladeDetail(response.data[0]);
                console.log(response.data);
                console.log("unitID");
                console.log(params.unitID);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const handleRegisterLine = (event) => {
        console.log("Register Line");
    };

    return <>
        <section className="right-content w-100">
            <div className="card shadow border-0 w-100 flex-row p-4">
                <h5 className="mb-0">Blade Detail</h5>
                <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                    <StyledBreadcrumb
                        component="a"
                        href="#"
                        label="Dashboard"
                        icon={<Home fontSize="small"/>}
                    />
                    <StyledBreadcrumb
                        component="a"
                        href="#"
                        label="Blade"
                    />
                    <StyledBreadcrumb
                        label="Blade Detail"
                    />
                </Breadcrumbs>
            </div>

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

                <div className="card productDetailsSection">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                                <h6 className="mb-4">Hình ảnh sản phẩm</h6>
                                <Slider {...productSliderOptions} className="sliderBig mb-2">
                                    <div className="item">
                                        <img src="/upload/images/product/takku-1.jpg" className="w-100" />
                                    </div>
                                </Slider>
                                <Slider {...productSliderSmlOptions} className="sliderSml">
                                    <div className="item">
                                        <img src="/upload/images/product/takku-1.jpg" className="w-100" />
                                    </div>
                                    <div className="item">
                                        <img src="/upload/images/product/takku-1.jpg" className="w-100" />
                                    </div>
                                    <div className="item">
                                        <img src="/upload/images/product/takku-1.jpg" className="w-100" />
                                    </div>
                                    <div className="item">
                                        <img src="/upload/images/product/takku-1.jpg" className="w-100" />
                                    </div>
                                    <div className="item">
                                        <img src="/upload/images/product/takku-1.jpg" className="w-100" />
                                    </div>
                                </Slider>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                                <h6 className="mb-4">Chi tiết sản phẩm</h6>

                                <h4>{bladeDetail.bladeName}</h4>

                                <div className="productInfo mt-3">
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><MdBrandingWatermark/></span>
                                            <span className="name">Brand</span>
                                        </div>

                                        <div className="col-sm-9">
                                            : <span>{bladeDetail.brandName}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><MdGridView/></span>
                                            <span className="name">Category</span>
                                        </div>

                                        <div className="col-sm-9">
                                            : <span>
                                                <ul className="list list-inline tags sml">
                                                    <li className="list-inline-item">
                                                        <span>SUITE</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>PARTY</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>DRESS</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>SMART</span>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><CiSettings/></span>
                                            <span className="name">Tags</span>
                                        </div>

                                        <div className="col-sm-9">
                                            : <span>Suite</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><IoColorPaletteOutline/></span>
                                            <span className="name">Color</span>
                                        </div>

                                        <div className="col-sm-9">
                                            : <span>
                                                <ul className="list list-inline tags sml">
                                                    <li className="list-inline-item">
                                                        <span>RED</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>BLUE</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>WHITE</span>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><BsTextareaResize/></span>
                                            <span className="name">Size</span>
                                        </div>

                                        <div className="col-sm-9">
                                            : <span>
                                                <ul className="list list-inline tags sml">
                                                    <li className="list-inline-item">
                                                        <span>SM</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>MD</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>LG</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>XL</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>XXL</span>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><GiStarsStack/></span>
                                            <span className="name">Paddle</span>
                                        </div>

                                        <div className="col-sm-9">
                                            : <span>
                                                <ul className="list list-inline tags sml">
                                                    <li className="list-inline-item">
                                                        <span>FL</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>ST</span>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><IoPricetagOutline/></span>
                                            <span className="name">Price</span>
                                        </div>

                                        <div className="col-sm-9">
                                            : <span>$37.00</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><IoMdCart/></span>
                                            <span className="name">Stock</span>
                                        </div>

                                        <div className="col-sm-9">
                                            : <span>(68) Piece</span>
                                        </div>
                                    </div>
                                </div>

                                <h4 className="mt-5">Thông tin Line</h4>

                                <div className="productInfo mt-3">
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="name">Period</span>
                                        </div>

                                        <div className="col-sm-9">
                                            : <span>{bladeDetail.period} VND</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="name">Deposit</span>
                                        </div>

                                        <div className="col-sm-9">
                                            : <span>{bladeDetail.deposit} VND</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="name">Fee</span>
                                        </div>

                                        <div className="col-sm-9">
                                            : <span>{bladeDetail.fee} VND</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4">
                        <h5 className="mt-4 mb-3">Mô tả sản phẩm</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <h5 className="mt-4 mb-4">Độ bền</h5>

                        <div className="ratingSection">
                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    5 Star
                                </span>
                                <div className="col2">
                                    <div className="progress">
                                        <div className="progress-bar" style={{width:'70%'}}></div>
                                    </div>
                                </div>
                                <span className="col3">
                                    (22)
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                <h5 className="mt-4 mb-3">Danh sách khách hàng</h5>

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
                        <Button onClick={handleRegisterLine}>
                            <div className="bladeBox img">
                                <img src={circlePlusIcon} className="w-50" />
                            </div>
                        </Button>
                    </Box>
                </div>
            </div>
        </section>
    </>
}

export default BladeDetail;
