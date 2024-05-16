import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { emphasize, Box, Breadcrumbs, Button, Chip, FormControl, InputLabel, MenuItem, Select, Rating, styled } from "@mui/material/";
import { Home, ExpandMore } from "@mui/icons-material";

import { FaCloudUploadAlt } from "react-icons/fa";

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

const BladeCreate = () => {

    const [brandVal, setBrandVal] = useState(null);
    const [brandData, setBrandData] = useState([]);

    const [subBranchVal, setSubBranchVal] = useState(null);
    const [subBranchData, setSubBranchData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/public/brand/list');
                setBrandData(response.data);
                console.error(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    // Nếu brand có sub brand, setSubBranchVal
    const handleClickBrand = async (event) => {
        console.error(event.target.value);
        setBrandVal(event.target.value);
        try {
            const response = await axios.get('http://localhost:8080/api/v1/public/brand/list-sub/' + event.target.value);
            setSubBranchData(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleClickSubBranch = async (event) => {
        setSubBranchVal(event.target.value);
    }

    return (
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4">
                    <h5 className="mb-0">Blade Create</h5>
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
                            label="Blade Create"
                        />
                    </Breadcrumbs>
                </div>

                <form className='form'>
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="card p-4">
                                <h5 className="mb-4">Blade Information</h5>
                                <div className="form-group">
                                    <h6>* TITLE</h6>
                                    <input type="text" name="bladeName" />
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">* BRAND</InputLabel>
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

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">* SUB BRANCH</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={subBranchVal}
                                                        label="SUB BRANCH"
                                                        onChange={handleClickSubBranch}
                                                    >
                                                        {subBranchData && subBranchData.length > 0 ? (
                                                            subBranchData.map((item) => (
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

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">* PADDLE</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={brandVal}
                                                        label="PADDLE"
                                                    >
                                                        <MenuItem value={'FL'}>FL</MenuItem>
                                                        <MenuItem value={'ST'}>ST</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="card p-4">
                                <h5 className="mb-4">Image</h5>
                                <div className="form-group">

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-9">
                            <div className="card p-4">
                                <h5 className="mb-4">Line Information</h5>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">PERIOD</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={brandVal}
                                                        label="PERIOD"
                                                        onChange={handleClickBrand}
                                                    >
                                                        <MenuItem value={'2W'}>2 weeks</MenuItem>
                                                        <MenuItem value={'1M'}>1 month</MenuItem>
                                                        <MenuItem value={'2M'}>2 months</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">* PERIOD COUNT</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={brandVal}
                                                        label="* PERIOD COUNT"
                                                        onChange={handleClickBrand}
                                                    >
                                                        <MenuItem value={1}>1</MenuItem>
                                                        <MenuItem value={2}>2</MenuItem>
                                                        <MenuItem value={3}>3</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <h6>INIT PRICE</h6>
                                            <input type="number"/>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <h6>DEPOSIT</h6>
                                            <input type="number"/>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <h6>DEPRECIATION</h6>
                                            <input type="number"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>FEE</h6>
                                            <input type="number"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                            <h6>END PRICE</h6>
                                            <input type="number"/>
                                        </div>
                                    </div>
                                </div>

                                <Button className="btn-blue btn-big btn-lg"><FaCloudUploadAlt/> &nbsp; PUBLISH AND VIEW</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default BladeCreate;
