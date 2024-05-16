import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import { useNavigate, Link } from "react-router-dom";
import { MyContext } from "../../App";
import { Breadcrumbs, Chip, emphasize, styled, MenuItem, Select, FormControl, Button, Pagination } from "@mui/material/";
import { Home, ExpandMore } from "@mui/icons-material";

import { FaEye, FaPencilAlt, FaPlus } from "react-icons/fa";
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

const Blade = () => {

    // Check login
    // const navigate = useNavigate();
    // const token = localStorage.getItem("jwtToken");
    // if (token == null || token == undefined) navigate("/login");

    const [showBy, setShowBy] = useState('');
    const [showBysetCatBy, setCatBy] = useState('');

    const context = useContext(MyContext);

    useEffect(()=>{
        context.setIsHideSidebarAndHeader(false);

        window.scrollTo(0,0);
    })

    // Popup
    const [showModalPopupAdd, setShowModalPopupAdd] = useState(false);
    const openPopupAdd = () => {
        setShowModalPopupAdd(!showModalPopupAdd);
    }

    // API list blade
    const [bladeData, setBladeData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/public/blade/list');
                setBladeData(response.data);
                console.error(response);
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
                                <th>PEOPLE</th>
                                <th>STARTED PRICE (khởi điểm)</th>
                                <th>DEPOSIT (đặt cọc)</th>
                                <th>DEPRECIATION (khấu hao)</th>
                                <th>ENDED PRICE (kết thúc)</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>

                        <tbody>
                            {bladeData && bladeData.length > 0 ? (
                                bladeData.map((item) => (
                                <tr>
                                    <td>{item.seq}</td>
                                    <td>{item.bladeFullName}</td>
                                    <td>{item.periodCnt}</td>
                                    <td>{item.initPrice} VND</td>
                                    <td>{item.deposit} VND</td>
                                    <td>{item.fee} VND</td>
                                    <td>{item.endPrice} VND</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to={'/blade-detail'}><Button className="secondary" color="secondary"><FaEye/></Button></Link>
                                            <Button className="success" color="success"><FaPencilAlt/></Button>
                                            <Button className="success" color="success" onClick={openPopupAdd}><FaPlus /></Button>

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
                                        <div className="info pl-2">
                                            <h6>Butterfly Tamca 5000</h6>
                                            <p>Vợt Butterfly Tamca 5000 được thiết kế với tính năng trợ lực cho người chơi cùng 2 lớp sợi Carbon đan xen 3 lớp gỗ nằm gần lớp gỗ hinoki ở ngoài.</p>
                                        </div>
                                    </div>
                                </td>
                                <td>10</td>
                                <td>6.500.000 VND</td>
                                <td>3.000.000 VND</td>
                                <td>100.000 VND</td>
                                <td>3.000.000 VND</td>
                                <td>
                                    <div className="actions d-flex align-items-center">
                                        <Link to={'/blade-detail'}><Button className="secondary" color="secondary"><FaEye/></Button></Link>
                                        <Button className="success" color="success"><FaPencilAlt/></Button>
                                        <Button className="success" color="success" onClick={openPopupAdd}><FaPlus /></Button>

                                        {/* <Button className="error" color="error"><MdDelete/></Button> */}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {showModalPopupAdd &&
                        <PopupAdd
                            onClose={() => setShowModalPopupAdd(false)}
                            showModalPopupAdd={showModalPopupAdd}
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

export default Blade;
