import { Home, ExpandMore } from "@mui/icons-material";
import { Breadcrumbs, Button, Chip, emphasize, Rating, styled } from "@mui/material";
import Slider from "react-slick";

import { BsTextareaResize } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FaUserCircle, FaReply } from "react-icons/fa"
import { GiStarsStack } from "react-icons/gi";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdCart, IoIosTimer } from "react-icons/io";
import { IoColorPaletteOutline, IoPricetagOutline } from "react-icons/io5";
import { MdShoppingBag, MdBrandingWatermark, MdGridView } from "react-icons/md";
import UserAvatarImgComponent from "../../components/userAvatarImg";

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

                                <div className="productInfo mt-4">
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

                    <div className="p-4">
                        <h5 className="mt-4 mb-3">Product Description</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <h5 className="mt-4 mb-4">Rating Analytics</h5>

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
                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    4 Star
                                </span>
                                <div className="col2">
                                    <div className="progress">
                                        <div className="progress-bar" style={{width:'50%'}}></div>
                                    </div>
                                </div>
                                <span className="col3">
                                    (22)
                                </span>
                            </div>
                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    3 Star
                                </span>
                                <div className="col2">
                                    <div className="progress">
                                        <div className="progress-bar" style={{width:'50%'}}></div>
                                    </div>
                                </div>
                                <span className="col3">
                                    (22)
                                </span>
                            </div>
                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    2 Star
                                </span>
                                <div className="col2">
                                    <div className="progress">
                                        <div className="progress-bar" style={{width:'30%'}}></div>
                                    </div>
                                </div>
                                <span className="col3">
                                    (22)
                                </span>
                            </div>
                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    1 Star
                                </span>
                                <div className="col2">
                                    <div className="progress">
                                        <div className="progress-bar" style={{width:'20%'}}></div>
                                    </div>
                                </div>
                                <span className="col3">
                                    (22)
                                </span>
                            </div>
                        </div>

                        <h5 className="mt-4 mb-4">Customer Reviews</h5>

                        <div className="reviewSection">
                            <div className="reviewRow">
                                <div className="row">
                                    <div className="col-sm-7 d-flex">
                                        <div className="d-flex flex-column">
                                            <div className="userInfo d-flex align-items-center mb-3">
                                                <UserAvatarImgComponent img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" lg={true} />

                                                <div className="info pl-2">
                                                    <h6>Miron Mahmud</h6>
                                                    <span>25 minutes ago!</span>
                                                </div>
                                            </div>
                                            <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                                        </div>
                                    </div>

                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                            <Button className="btn-blue btn-big btn-lg ml-auto"><FaReply/> &nbsp; Reply</Button>
                                        </div>
                                    </div>

                                    <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                </div>
                            </div>

                            <div className="reviewRow reply">
                                <div className="row">
                                    <div className="col-sm-7 d-flex">
                                        <div className="d-flex flex-column">
                                            <div className="userInfo d-flex align-items-center mb-3">
                                                <UserAvatarImgComponent img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" lg={true} />

                                                <div className="info pl-2">
                                                    <h6>Miron Mahmud</h6>
                                                    <span>25 minutes ago!</span>
                                                </div>
                                            </div>
                                            <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                                        </div>
                                    </div>

                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                            <Button className="btn-blue btn-big btn-lg ml-auto"><FaReply/> &nbsp; Reply</Button>
                                        </div>
                                    </div>

                                    <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                </div>
                            </div>

                            <div className="reviewRow reply">
                                <div className="row">
                                    <div className="col-sm-7 d-flex">
                                        <div className="d-flex flex-column">
                                            <div className="userInfo d-flex align-items-center mb-3">
                                                <UserAvatarImgComponent img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" lg={true} />

                                                <div className="info pl-2">
                                                    <h6>Miron Mahmud</h6>
                                                    <span>25 minutes ago!</span>
                                                </div>
                                            </div>
                                            <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                                        </div>
                                    </div>

                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                            <Button className="btn-blue btn-big btn-lg ml-auto"><FaReply/> &nbsp; Reply</Button>
                                        </div>
                                    </div>

                                    <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                </div>
                            </div>

                            <div className="reviewRow">
                                <div className="row">
                                    <div className="col-sm-7 d-flex">
                                        <div className="d-flex flex-column">
                                            <div className="userInfo d-flex align-items-center mb-3">
                                                <UserAvatarImgComponent img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" lg={true} />

                                                <div className="info pl-2">
                                                    <h6>Miron Mahmud</h6>
                                                    <span>25 minutes ago!</span>
                                                </div>
                                            </div>
                                            <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                                        </div>
                                    </div>

                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                            <Button className="btn-blue btn-big btn-lg ml-auto"><FaReply/> &nbsp; Reply</Button>
                                        </div>
                                    </div>

                                    <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                </div>
                            </div>
                        </div>

                        <h5 className="mt-4 mb-3">Review Reply Form</h5>


                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductDetails;
