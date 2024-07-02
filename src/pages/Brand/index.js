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

    return <>

    </>
}

export default Brand;
