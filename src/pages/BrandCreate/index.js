import axios from "axios";
import React, { useEffect, useState } from "react";
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

const BrandCreate = () => {

    // Check login
    // const navigate = useNavigate();
    // const token = localStorage.getItem("jwtToken");
    // if (token == null || token == undefined) navigate("/login");

    const [brandVal, setBrandVal] = useState(null);
    const [brandData, setBrandData] = useState([]);

    const handleSubmit = async (event) => {
        alert('handleSubmit');
    }

    const [imageUrl, setImageUrl] = useState(null);
    const [fileImg, setFileImg] = useState();

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
                    <h5 className="mb-0"><GrBladesHorizontal/> Brand Create</h5>
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
                            label="Brand Create"
                        />
                    </Breadcrumbs>
                </div>

                <form className='form' onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="card p-4">
                                <h5 className="mb-4"><IoIosInformationCircleOutline/> Brand Information</h5>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <h6>* BRAND NAME</h6>
                                            <input type="text" value="" />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <h6>* BRAND CODE</h6>
                                            <input type="text" value="" />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">BRAND PARENT</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={brandVal}
                                                        label="BRAND"
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
                                </div>

                                <Button type="submit" className="btn-blue btn-big btn-lg"><FaCloudUploadAlt/> &nbsp; PUBLISH AND VIEW</Button>
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

                </form>
            </div>
        </>
    )
}

export default BrandCreate;
