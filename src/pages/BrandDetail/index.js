import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getApiURL } from "../../common/utils/domainUtil";
import Slider from "react-slick";
import { Box, MenuItem, Select, FormControl, Button, Pagination, Breadcrumbs, Chip, emphasize, styled } from "@mui/material/";
import { Home, ExpandMore } from "@mui/icons-material";
import circlePlusIcon from '../../assets/images/icon-plus-circle.png';

import { BsTextareaResize } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
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

const BrandDetail = () => {

    const [brandDetail, setBrandDetail] = useState('');

    const apiBrandDetail = 'public/brand/detail/';
    const apiURLBrandDetail = getApiURL(apiBrandDetail);

    let params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiURLBrandDetail + params.brandCD);
                setBrandDetail(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return <>
        <section className="right-content w-100">
            <div className="card shadow border-0 w-100 flex-row p-4">
                <h5 className="mb-0">Brand Detail</h5>
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
                        label="Brand"
                    />
                    <StyledBreadcrumb
                        label="Brand Detail"
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
                <h3 className="hd">Brand Detail</h3>

                <div className="row cardFilters mt-3">

                </div>

                <div className="card productDetailsSection">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                                <h6 className="mb-4">Logo thương hiệu</h6>
                                <div className="item">
                                    <img src="/upload/images/product/takku-1.jpg" className="w-100" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                                <h6 className="mb-4">Thông tin</h6>

                                <h4>{brandDetail.brandName}</h4>

                                <div className="productInfo mt-3">
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><MdBrandingWatermark/></span>
                                            <span className="name">Parent</span>
                                        </div>

                                        <div className="col-sm-9">
                                            : <span>
                                                <Link to={`/brand-detail/${brandDetail.parentBrandCD}`}>{brandDetail.parentBrandName}</Link>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><MdGridView/></span>
                                            <span className="name">Số lượng sản phẩm</span>
                                        </div>

                                        <div className="col-sm-9">
                                            : <span>Suite</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4">
                        <h5 className="mt-4 mb-3">Mô tả thương hiệu</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default BrandDetail;
