import axios from "axios";
import { useContext, useEffect, useState } from "react";
// import { usePathname } from 'next/router';
import { getApiURL } from "../../common/utils/domainUtil";
import { Link, useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import { Box, Button, Breadcrumbs, Chip, emphasize, styled } from "@mui/material/";
import { Home } from "@mui/icons-material";
import QRCode from 'qrcode.react';

import circlePlusIcon from '../../assets/images/icon-plus-circle.png';

import { BsTextareaResize } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FaPiggyBank } from "react-icons/fa"
import { GiStarsStack } from "react-icons/gi";
import { IoMdCart } from "react-icons/io";
import { IoColorPaletteOutline, IoPricetagOutline } from "react-icons/io5";
import { MdBrandingWatermark, MdGridView } from "react-icons/md";

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

const TransactionDetail = () => {

    // Check login
    const navigate = useNavigate();
    const token = localStorage.getItem("jwtToken");
    if (token == null || token == undefined) navigate("/login");

    const params = useParams();

    const [showBy, setShowBy] = useState('');
    const [showBysetCatBy, setCatBy] = useState('');

    const [dataTransaction, setDataTransaction] = useState(null);
    // var qrcode = "00020101021238570010A000000727012700069704220113VQRQ0001uig8k0208QRIBFTTA530370454062000005802VN62070803abc6304D84C";

    const apiPayOSTransReport = 'public/payos/transaction-report/';
    const apiURLPayOSTransReport = getApiURL(apiPayOSTransReport);

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

    const handleRegisterLine = (event) => {
        console.log("Register Line");
    };

    useEffect(()=>{
        // Call API
        const fetchDataBrand = async () => {
            try {
                console.log(params.id)
                const response = await axios.get(`${apiURLPayOSTransReport}` + params.id);
                setDataTransaction(response.data);
                console.log(response.data)
            } catch (error) {
                console.error(error);
            }
        };

        fetchDataBrand();
    }, []);

    return <>
        <section className="right-content w-100">
            <div className="card shadow border-0 w-100 flex-row p-4">
                <h5 className="mb-0">Transaction Detail</h5>
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
                        label="Transaction"
                    />
                    <StyledBreadcrumb
                        label="Detail"
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
                <h3 className="hd">Transaction Detail</h3>

                <div className="row cardFilters mt-3">

                </div>

                <div className="card productDetailsSection">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                                <h6 className="mb-4">Product Gallery</h6>
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

                                <h4>Formal suits for men wedding slim fit 3 pieces dress business party jacket</h4>

                                <div className="productInfo mt-3">
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><MdBrandingWatermark/></span>
                                            <span className="name">Brand</span>
                                        </div>

                                        <div className="col-sm-9">
                                            : <span>Ecstasy</span>
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
                                                    <li className="list-inline-item">
                                                        <span>MAN</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>STYLES</span>
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
                                            : <span>{dataTransaction.amount} {dataTransaction.currency}</span>
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
                                            <span className="icon"><FaPiggyBank /></span>
                                            <span className="name">Deposit</span>
                                        </div>

                                        <div className="col-sm-9">
                                            : <span>$37.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4">
                        <h5 className="mt-4 mb-3">Mô tả sản phẩm</h5>
                        <p>{dataTransaction.description}</p>

                        <h5 className="mt-4 mb-3">Mã QR thanh toán</h5>
                        <p>{dataTransaction.platform}</p>
                        <QRCode value={dataTransaction.qrCode} />

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

export default TransactionDetail;
