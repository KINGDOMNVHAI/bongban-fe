import { Home, ExpandMore } from "@mui/icons-material";
import { Breadcrumbs, Chip, emphasize, styled } from "@mui/material";
import Slider from "react-slick";

import { BsTextareaResize } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FaUserCircle, FaEye, FaRegStar } from "react-icons/fa"
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

const ProductDetails = () => {

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

    return (
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4">
                    <h5 className="mb-0">Product List</h5>
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
                            label="Products"
                        />
                        <StyledBreadcrumb
                            label="Product View"
                        />
                    </Breadcrumbs>
                </div>

                <div className="card productDetailsSection">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                                <h6 className="mb-4">Product Gallery</h6>
                                <Slider {...productSliderOptions} className="sliderBig mb-2">
                                    <div className="item">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" className="w-100" />
                                    </div>
                                </Slider>
                                <Slider {...productSliderSmlOptions} className="sliderSml">
                                    <div className="item">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp" className="w-100" />
                                    </div>
                                    <div className="item">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp" className="w-100" />
                                    </div>
                                    <div className="item">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp" className="w-100" />
                                    </div>
                                    <div className="item">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp" className="w-100" />
                                    </div>
                                    <div className="item">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp" className="w-100" />
                                    </div>
                                </Slider>
                            </div>
                        </div>


                        <div className="col-md-7">
                            <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                                <h6 className="mb-4">Product Details</h6>

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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;
