import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import { MyContext } from "../../App";
import { Box, Breadcrumbs, Button, Chip, emphasize, FormControl, InputLabel, MenuItem, Pagination, styled, Select } from "@mui/material/";
import { Home, ExpandMore } from "@mui/icons-material";

import { FaEye, FaPencilAlt, FaPlus } from "react-icons/fa";

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

const Brand = () => {

    // Check login
    // const navigate = useNavigate();
    // const token = localStorage.getItem("jwtToken");
    // if (token == null || token == undefined) navigate("/login");

    const [brandVal, setBrandVal] = useState(null);
    const [brandData, setBrandData] = useState([]);
    const [brandSelectData, setBrandSelectData] = useState([]);
    const [searchData, setSearchData] = useState({
        brandCD: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/public/brand/list');
                setBrandData(response.data);
                setBrandSelectData(response.data);
                console.error(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    // Nếu brand có sub brand, setSubBranchVal
    const handleClickBrand = async (event) => {
        try {
            searchData.brandCD = event.target.value;
            const response = await axios.post('http://localhost:8080/api/v1/public/brand/search', searchData);
            setBrandData(response.data);
            setBrandVal(event.target.value);
        } catch (error) {
            console.error(error);
        }
    }

    return <>

<section className="right-content w-100">
            <div className="card shadow border-0 w-100 flex-row p-4">
                <h5 className="mb-0">Brand List</h5>
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
                                    {brandSelectData && brandSelectData.length > 0 ? (
                                        brandSelectData.map((item) => (
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
                    <table className="table table-bordered v-align">
                        <thead className="thead-dark">
                            <tr>
                                <th style={{width:'100px'}}>UID</th>
                                <th style={{width:'150px'}}>THUMBNAIL</th>
                                <th>NAME</th>
                                <th>CODE</th>
                                <th>PARENT</th>
                                <th style={{width:'200px'}}>ACTION</th>
                            </tr>
                        </thead>

                        <tbody>
                            {brandData && brandData.length > 0 ? (
                                brandData.map((item) => (
                                <tr>
                                    <td>{item.seq}</td>
                                    <td>{item.thumbnail}</td>
                                    <td>{item.brandName}</td>
                                    <td>{item.brandCD}</td>
                                    <td>
                                    {item.parent == 'ROOT' ? (
                                        ''
                                    ) : (
                                        item.parent
                                    )}
                                    </td>

                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            {/* <Link to={`/brand-detail/${item.seq}`}><Button className="secondary" color="secondary"><FaEye/></Button></Link> */}

                                            <Link to={`/brand-detail/${item.brandCD}`}><Button className="secondary" color="secondary"><FaEye/></Button></Link>
                                            <Button className="success" color="success"><FaPencilAlt/></Button>

                                            {item.periodCnt > item.countRegister ? (
                                                <Button className="success" color="success"><FaPlus /></Button>
                                            ) : (
                                                ''
                                            )}

                                            {/* <Button className="error" color="error"><MdDelete/></Button> */}
                                        </div>
                                    </td>
                                </tr>
                                ))
                            ) : (
                                <tr className="bladeBox">
                                    <td colSpan="8">Không có sản phẩm</td>
                                </tr>
                            )}
                            <tr>
                                <td>#1</td>
                                <td>
                                    <div className="d-flex align-items-center productBox">
                                        <div className="imgWrapper">
                                            <div className="img">
                                                <img src="/upload/images/product/takku-1.jpg" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>Butterfly</td>
                                <td>BUT</td>
                                <td>Butterfly</td>
                                <td>
                                    <div className="actions d-flex align-items-center">
                                        <Link to={'/blade-detail/${item.seq}'}><Button className="secondary" color="secondary"><FaEye/></Button></Link>
                                        <Button className="success" color="success"><FaPencilAlt/></Button>
                                        <Button className="success" color="success"><FaPlus /></Button>

                                        {/* <Button className="error" color="error"><MdDelete/></Button> */}
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

export default Brand;
