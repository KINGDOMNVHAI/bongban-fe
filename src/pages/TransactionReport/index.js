import { useContext, useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import { useNavigate, Link } from "react-router-dom";
import { MyContext } from "../../App";
import { Breadcrumbs, Chip, emphasize, styled, MenuItem, Select, FormControl, Button, Pagination } from "@mui/material/";
import { Home, ExpandMore } from "@mui/icons-material";

import { FaEye, FaPencilAlt, FaPlus } from "react-icons/fa"
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

const TransactionReport = () => {

    // Check login
    // const navigate = useNavigate();
    // const token = localStorage.getItem("jwtToken");
    // if (token == null || token == undefined) navigate("/login");

    const [showBy, setShowBy] = useState('');
    const [showBysetCatBy, setCatBy] = useState('');

    const [statusPayment, setStatusPayment] = useState(1);

    const context = useContext(MyContext);

    useEffect(()=>{
        context.setIsHideSidebarAndHeader(false);

        window.scrollTo(0,0);
    })

    const [showModalPopupAdd, setShowModalPopupAdd] = useState(false);
    const openPopupAdd = () => {
        setShowModalPopupAdd(!showModalPopupAdd);
    }

    return <>
        <section className="right-content w-100">
            <div className="card shadow border-0 w-100 flex-row p-4">
                <h5 className="mb-0">Báo Cáo Giao Dịch</h5>
                <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                    <StyledBreadcrumb
                        component="a"
                        href="#"
                        label="Dashboard"
                        icon={<Home fontSize="small"/>}
                    />
                    <StyledBreadcrumb
                        label="Transaction"
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
                                <th>THỜI GIAN</th>
                                <th style={{width:'300px'}}>MÃ ĐƠN HÀNG</th>
                                <th>TÊN KHÁCH HÀNG</th>
                                <th>SỐ ĐT KHÁCH HÀNG</th>
                                <th>SỐ TIỀN</th>
                                <th>TRẠNG THÁI</th>
                                <th>HÀNH ĐỘNG</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>#1</td>
                                <td>2024-06-01</td>
                                <td>123456789</td>
                                <td>Huỳnh Xuân An</td>
                                <td>0706533308</td>
                                <td>100.000 VND</td>

                                {statusPayment == 2 ? (
                                    <td className="process"><span>Process</span></td>
                                ) : (
                                    <td className="new"><span>New</span></td>
                                )}

                                <td>
                                    <div className="actions d-flex align-items-center">
                                        <Button className="secondary" color="secondary"><FaEye/></Button>
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

export default TransactionReport;
