import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import { getApiURL } from "../../common/utils/domainUtil";
import { useNavigate, Link } from 'react-router-dom';
import { MyContext } from "../../App";
import { Box, Breadcrumbs, Button, Chip, emphasize, FormControl, InputLabel, MenuItem, Pagination, styled, Select } from "@mui/material/";
import { Home, ExpandMore } from "@mui/icons-material";

import { FaEye, FaPencilAlt, FaPlus } from "react-icons/fa";
import { MdAttachMoney, MdOutlinePlayCircle } from "react-icons/md";
import { PiTrendDownBold } from "react-icons/pi";
import { SlControlEnd } from "react-icons/sl";
import PopupAdd from "./components/PopupAdd";

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

const Line = () => {

    // Check login
    // const navigate = useNavigate();
    // const token = localStorage.getItem("jwtToken");
    // if (token == null || token == undefined) navigate("/login");
    // const email = localStorage.getItem("email");

    const apiLineList = 'public/line/list';
    const apiBladeSearch = 'public/blade/search';
    const apiURLineList = getApiURL(apiLineList);
    const apiURLBladeSearch = getApiURL(apiBladeSearch);

    const [brandVal, setBrandVal] = useState(null);
    const [brandData, setBrandData] = useState([]);
    const [lineData, setLineData] = useState(null);
    // const [lineProData, setLineProData] = useState(null);
    const [searchData, setSearchData] = useState({
        brandCD: '',
    });

    const context = useContext(MyContext);

    useEffect(()=>{
        // Hide sidebar
        context.setIsHideSidebarAndHeader(false);
        window.scrollTo(0,0);
    })

    useEffect(()=>{
        // Call API
        const fetchDataBrand = async () => {
            try {
                const response = await axios.get(`${apiURLineList}`);
                // setBrandData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchDataBrand();
    }, []);

    // Nếu brand có sub brand, setSubBranchVal
    const handleClickBrand = async (event) => {
        try {
            searchData.brandCD = event.target.value;
            const response = await axios.post(`${apiURLBladeSearch}`, searchData);
            setBrandVal(event.target.value);
        } catch (error) {
            console.error(error);
        }
    }

    // Popup
    const [showModalPopupAdd, setShowModalPopupAdd] = useState(false);
    // const [lineID, setLineID] = useState(null);
    const openPopupAdd = () => {
        setShowModalPopupAdd(!showModalPopupAdd);
        // setLineID(lineID);
    }

    // API list blade
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiURLineList}`);
                setLineData(response.data);
                // setLineProData(response.data.listProgress);
                // console.log(lineProData.length)
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return <>
        <section className="right-content w-100">
            <div className="card shadow border-0 w-100 flex-row p-4">
                <h5 className="mb-0">Blade List</h5>
                <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                    <StyledBreadcrumb
                        component="a"
                        href="#"
                        label="Dashboard"
                        icon={<Home fontSize="small"/>}
                    />
                    <StyledBreadcrumb
                        label="Products"
                        deleteIcon={<ExpandMore/>}
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
                <div className="row cardFilters mt-3">
                    <div className="col-md-3">
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">BRAND</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={brandVal}
                                    label="BRAND"
                                    onChange={handleClickBrand}
                                >
                                    {brandData && brandData.length > 0 ? (
                                        brandData.map((item) => (
                                        <MenuItem value={item.brandCD}>{item.brandName}</MenuItem>
                                        ))
                                    ) : (
                                        <MenuItem value={'XXX'}>NONE</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>

                <div className="table-responsive mt-3">
                    <table className="table table-bordered v-align listBladeMember">
                        <thead className="thead-dark">
                            <tr>
                                <th style={{width:'300px'}}>SẢN PHẨM</th>
                                <th colSpan={10}>THÔNG TIN</th>
                            </tr>
                        </thead>


                        {lineData && lineData.length > 0 ? (
                            lineData.map((item) => (
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>
                                        <div className="imgProductArea">
                                            <img src="/upload/images/product/takku-1.jpg" className="imgProduct"/>
                                            <div className="progress mt-2">
                                                <div className="progress-bar" style={{width:'70%'}}></div>
                                            </div>
                                            <h6 className="textProduct mt-2">{item.bladeUnitID}</h6>
                                        </div>
                                    </td>
                                    <td colSpan={2} style={{ border: 'none' }}>
                                        <p className="mt-1"><MdOutlinePlayCircle/> Khởi đầu: {item.initPrice} VND</p>
                                    </td>
                                    <td colSpan={2} style={{ border: 'none' }}>
                                        <p className="mt-1"><MdAttachMoney/> Đặt cọc: {item.deposit} VND</p>
                                    </td>
                                    <td colSpan={2} style={{ border: 'none' }}>
                                        <p className="mt-1"><PiTrendDownBold/> Khấu hao: {item.depreciation} VND</p>
                                    </td>
                                    <td colSpan={2} style={{ border: 'none' }}>
                                        <p className="mt-1"><SlControlEnd/> Kết thúc: {item.endPrice} VND</p>
                                    </td>

                                    {item.countListProgress < 10 ? (
                                        <td colSpan={2} style={{ border: 'none' }}>
                                            <div className="imgProductArea">
                                                <div className="logoutBox" onClick={openPopupAdd}>
                                                    <Button variant="contained">Đăng ký</Button>
                                                </div>
                                            </div>
                                        </td>
                                    ) : (
                                        <td colSpan={2} style={{ border: 'none' }}></td>
                                    )}
                                </tr>
                                <tr>

                                {item.listProgress.map((i) => (
                                    <td>
                                        <div className="imgProductArea">
                                            <img src="/upload/images/avatar-1.jpg" className="imgProduct"/>
                                            <p className="textProduct mt-1">{i.name}</p>
                                        </div>
                                    </td>
                                ))}

                                {10 - item.countListProgress > 0 && Array.from({ length: 10 - item.countListProgress }, (_, index) => index).map((number) => (
                                    <td></td>
                                ))}

                                </tr>
                            </tbody>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={11}>Không có sản phẩm</td>
                            </tr>
                        )}

                        <tbody>
                            <tr>
                                <td rowSpan={2}>
                                    <div className="imgProductArea">
                                        <img src="/upload/images/product/takku-1.jpg" className="imgProduct"/>
                                        <div className="progress mt-2">
                                            <div className="progress-bar" style={{width:'70%'}}></div>
                                        </div>
                                        <h6 className="textProduct mt-2">Butterfly Tamca 5000</h6>
                                    </div>
                                </td>
                                <td colSpan={2} style={{ border: 'none' }}>
                                    <p className="mt-1"><MdOutlinePlayCircle/> Khởi đầu: 4.000.000 VND</p>
                                </td>
                                <td colSpan={2} style={{ border: 'none' }}>
                                    <p className="mt-1"><MdAttachMoney/> Đặt cọc: 4.000.000 VND</p>
                                </td>
                                <td colSpan={2} style={{ border: 'none' }}>
                                    <p className="mt-1"><PiTrendDownBold/> Khấu hao: 4.000.000 VND</p>
                                </td>
                                <td colSpan={2} style={{ border: 'none' }}>
                                    <p className="mt-1"><SlControlEnd/> Kết thúc: 4.000.000 VND</p>
                                </td>
                                <td colSpan={2} style={{ border: 'none' }}>
                                    <div className="imgProductArea">
                                        <div className="logoutBox" onClick={openPopupAdd}>
                                            <Button variant="contained">Đăng ký</Button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="imgProductArea">
                                        <Link to={"#"}><img src="/upload/images/avatar-1.jpg" className="imgProduct"/></Link>
                                        <p className="textProduct mt-1 text-sky">Adam Levine</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="imgProductArea">
                                        <img src="/upload/images/avatar-1.jpg" className="imgProduct"/>
                                        <p className="textProduct mt-1 text-red">Adam Levine</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="imgProductArea">
                                        <img src="/upload/images/avatar-1.jpg" className="imgProduct"/>
                                        <p className="textProduct mt-1 text-red">Adam Levine</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="imgProductArea">
                                        <img src="/upload/images/avatar-1.jpg" className="imgProduct"/>
                                        <p className="textProduct mt-1 text-sky">Adam Levine</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="imgProductArea">
                                        <img src="/upload/images/avatar-1.jpg" className="imgProduct"/>
                                        <p className="textProduct mt-1 text-red">Adam Levine</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="imgProductArea">
                                        <img src="/upload/images/avatar-1.jpg" className="imgProduct"/>
                                        <p className="textProduct mt-1">Adam Levine</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="imgProductArea">
                                        <img src="/upload/images/avatar-1.jpg" className="imgProduct"/>
                                        <p className="textProduct mt-1">Adam Levine</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="imgProductArea">
                                        <img src="/upload/images/avatar-1.jpg" className="imgProduct"/>
                                        <p className="textProduct mt-1">Adam Levine</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="imgProductArea">
                                        <img src="/upload/images/avatar-1.jpg" className="imgProduct"/>
                                        <p className="textProduct mt-1">Adam Levine</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="imgProductArea">
                                        <img src="/upload/images/avatar-1.jpg" className="imgProduct"/>
                                        <p className="textProduct mt-1">Adam Levine</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {showModalPopupAdd &&
                        <PopupAdd
                            onClose={() => setShowModalPopupAdd(false)}
                            showModalPopupAdd={showModalPopupAdd}
                            // lineID={lineID}
                            // token={token}
                            // email={email}
                        />
                    }

                    <div className="d-flex tableFooter">
                        <p>Showing <b>12</b> of <b>60</b> results</p>
                        <Pagination count={10} color="primary" className="pagination" showFirstButton showLastButton />
                    </div>
                </div>

            </div>
        </section>
    </>
}

export default Line;
