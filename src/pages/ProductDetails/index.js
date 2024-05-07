import { Home, ExpandMore } from "@mui/icons-material";
import { Breadcrumbs, Chip, emphasize, styled } from "@mui/material";
import Slider from "react-slick";

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
        slidesToScroll: 1
    };

    var productSliderSmlOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
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

                <div className="card">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <Slider {...productSliderOptions}>
                                    <div className="item">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" className="w-100" />
                                    </div>
                                </Slider>
                                <Slider {...productSliderSmlOptions}>
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
                                </Slider>
                            </div>




                            <div className="col-md-8">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;
