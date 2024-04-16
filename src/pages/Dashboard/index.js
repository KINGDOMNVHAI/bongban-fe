import { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa"
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";

// import { InputLabel } from "@mui/material/InputLabel";
import { MenuItem, Select } from "@mui/material/";
// import { FormHelperText } from "@mui/material/FormHelperText";
// import { FormControl } from "@mui/material/FormControl";

import DashboardBox from "./components/dashboardBox";

const Dashboard = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [showBy, setShowBy] = useState('');
    const [showBysetCatBy, setCatBy] = useState('');
    const open = Boolean(anchorEl);

    const ITEM_HEIGHT = 48;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    // const handleChange = (event) => {
    //     setShowBy(event.target.value);
    // };

    return <>
        <section className="right-content w-100">
            <div className="row dashboardBoxWrapperRow">
                <div className="col-md-8">
                    <div className="dashboardBoxWrapper d-flex">
                        <DashboardBox color={["#1da256","#48d483"]} icon={<FaUserCircle/>} grow={true} />
                        <DashboardBox color={["#c012e2","#eb64fe"]} icon={<IoMdCart/>} />
                        <DashboardBox color={["#2c78e5","#60aff5"]} icon={<MdShoppingBag/>} />
                        <DashboardBox color={["#e1950e","#f3cd29"]} icon={<GiStarsStack/>} />
                    </div>
                </div>

                <div className="col-md-4 pl-0">
                    <div className="box">

                    </div>
                </div>
            </div>

            <div className="card shadow border-0 p-3 mt-4">
                <h3 className="hd">SHOW BY</h3>

                <div className="row cardFilters mt-3">
                    <div className="col-md-3">
                        <h4>SHOW BY</h4>

                        <Select
                            value={showBy}
                            onChange={(e) => setShowBy(e.target.value)}
                            displayEmpty
                            inputProps={{'aria-label': 'Without label'}}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </div>

                    <div className="col-md-3">
                        <h4>CATEGORY BY</h4>

                        <Select
                            value={showBysetCatBy}
                            onChange={(e) => setCatBy(e.target.value)}
                            displayEmpty
                            inputProps={{'aria-label': 'Without label'}}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </div>
                </div>
            </div>

        </section>
    </>
}

export default Dashboard;
