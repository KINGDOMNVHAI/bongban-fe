import axios from "axios";
import React, { useEffect, useState } from "react";
import { getApiURL } from "../../common/utils/domainUtil";
import { useNavigate, Link } from 'react-router-dom';
import { emphasize, Box, Breadcrumbs, Button, Chip, FormControl, InputLabel, MenuItem, Select, styled } from "@mui/material/";
import { Home } from "@mui/icons-material";

import { FaCloudUploadAlt } from "react-icons/fa";
import { GrBladesHorizontal } from "react-icons/gr";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineCalendarViewDay, MdOutlineImage } from "react-icons/md";

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

    const apiBrandList = 'public/brand/list';
    const apiBrandListSub = 'public/brand/list-sub/';
    const apiBrandInsert = 'public/blade/insert/';
    const apiBrandUploadImage = 'public/blade/upload-image/';
    const apiURLBrandList = getApiURL(apiBrandList);
    const apiURLBrandListSub = getApiURL(apiBrandListSub);
    const apiURLBrandInsert = getApiURL(apiBrandInsert);
    const apiURLBrandUploadImage = getApiURL(apiBrandUploadImage);

    const [fullnameVal, setFullnameVal] = useState(null);
    const [bladeNameVal, setBladeNameVal] = useState(null);

    const [brandVal, setBrandVal] = useState(null);
    const [brandData, setBrandData] = useState([]);

    const [subBranchVal, setSubBranchVal] = useState(null);
    const [subBranchData, setSubBranchData] = useState(null);

    const [paddleVal, setPaddleVal] = useState(null);
    const [periorVal, setPeriorVal] = useState(null);
    const [periorCntVal, setPeriorCntVal] = useState(null);

    const [fileImg, setFileImg] = useState();

    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        brandCD: '',
        brandName: '',
        bladeCD: '',
        bladeName: '',
        bladeFullName: '',
        subBranch: '',
        paddleTP: '',

        id: null,
        bladeUnitID: '',
        periodCnt: '',
        period: '',
        initPrice: 0,
        deposit: 0,
        depreciation: 0,
        fee: 0,
        endPrice: 0,
        userEmail: 'nvhai061993@gmail.com'
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiURLBrandList);
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
            const response = await axios.get(apiURLBrandListSub + event.target.value);
            setSubBranchData(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const validateForm = () => {
        const errors = {};

        // Check if username is empty
        if (!formData.username) {
            errors.username = "Username is required";
        }

        // Check if fee is empty
        if (!formData.fee) {
            errors.fee = "Fee is required";
        }

        setFormData((prevState) => ({ ...prevState, errors }));

        // Return true if there are no errors
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (event) => {
        if (!fileImg) {
            alert('Please Select Your Image!');
            return;
        }

        event.preventDefault();
        // if (validateForm()) {
            // Form is valid, submit data

            const formUploadImage = new FormData();
            formUploadImage.append('files', fileImg);
            console.log(formUploadImage);

            const resUploadImage = await axios.post(apiURLBrandUploadImage, formUploadImage)
            .then(response => {
                // Handle success
                console.log("Handle success");
                console.log(response.data);
            })
            .catch(error => {
                // Handle error
                console.log("Handle error");
                console.error(error);
            });

            formData.brandCD = brandVal;
            formData.bladeCD = brandVal + '_' + subBranchVal + '_' + paddleVal;
            formData.bladeName = bladeNameVal;
            formData.bladeFullName = fullnameVal;
            formData.subBranch = subBranchVal;
            formData.paddleTP = paddleVal;
            formData.periodCnt = periorCntVal;
            formData.period = periorVal;
            formData.bladeUnitID = brandVal + '_' + subBranchVal + '_' + paddleVal;

            const res = await axios.post(apiURLBrandInsert, formData)

            if (res.status != 200) {
                setError(res.data.message)
                return;
            }

            setError("");
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            return navigate('/blade-list');

        // } else {
        //     // Form is invalid, do nothing
        //     setError("Invalid email or password");
        //     console.log(error)
        // }
    };

    const [imageUrl, setImageUrl] = useState(null);

    const handleFileChange = (event) => {
        const fileImg = event.target.files[0];
        setFileImg(fileImg);
        const imageUrl = URL.createObjectURL(fileImg);
        setImageUrl(imageUrl);
    };

    return (
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4">
                    <h5 className="mb-0"><GrBladesHorizontal/> Blade Create</h5>
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

                <form className='form' onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="card p-4">
                                <h5 className="mb-4"><IoIosInformationCircleOutline/> Blade Information</h5>
                                <div className="form-group">
                                    <h6>* FULLNAME</h6>
                                    <input
                                        type="text"
                                        value={fullnameVal}
                                        onChange={(e) => setFullnameVal(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <h6>* BLADE NAME</h6>
                                    <input
                                        type="text"
                                        value={bladeNameVal}
                                        onChange={(e) => setBladeNameVal(e.target.value)}
                                    />
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
                                                        onChange={(e) => setSubBranchVal(e.target.value)}
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
                                                        value={paddleVal}
                                                        label="PADDLE"
                                                        onChange={(e) => setPaddleVal(e.target.value)}
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
                                <h5 className="mb-4"><MdOutlineImage/> Image</h5>
                                <div className="form-group">
                                    {/* <input type="file" onChange={(e) => setFileImg(e.target.value)}></input>
                                    <button onClick={getFile()}>Send</button> */}

                                    <input type="file" onChange={handleFileChange} />

                                    {imageUrl && <img src={imageUrl} alt="File Preview" style={{width:'100%', margin: '5px'}} />}<br/>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-9">
                            <div className="card p-4">
                                <h5 className="mb-4"><MdOutlineCalendarViewDay /> Line Information</h5>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">PERIOD</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={periorVal}
                                                        label="PERIOD"
                                                        onChange={(e) => setPeriorVal(e.target.value)}
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
                                                        value={periorCntVal}
                                                        label="* PERIOD COUNT"
                                                        onChange={(e) => setPeriorCntVal(e.target.value)}
                                                    >
                                                        <MenuItem value={3}>3</MenuItem>
                                                        <MenuItem value={4}>4</MenuItem>
                                                        <MenuItem value={5}>5</MenuItem>
                                                        <MenuItem value={6}>6</MenuItem>
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
                                            <input
                                                type="number"
                                                name="initPrice"
                                                value={formData.initPrice}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <h6>DEPOSIT</h6>
                                            <input
                                                type="number"
                                                name="deposit"
                                                value={formData.deposit}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <h6>DEPRECIATION</h6>
                                            <input
                                                type="number"
                                                name="depreciation"
                                                value={formData.depreciation}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>FEE</h6>
                                            <input
                                                type="number"
                                                name="fee"
                                                value={formData.fee}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                            <h6>END PRICE</h6>
                                            <input
                                                type="number"
                                                name="endPrice"
                                                value={formData.endPrice}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <Button type="submit" className="btn-blue btn-big btn-lg"><FaCloudUploadAlt/> &nbsp; PUBLISH AND VIEW</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default BladeCreate;
