import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Modal } from "@mui/material/";
import { getApiURL } from "../../../common/utils/domainUtil";
import "./PopupAddStyle.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #1866ee',
    boxShadow: 24,
    p: 4,
};

const PopupAdd = ({ onClose, showModalPopupAdd }) => {

    const token = "ABCXYZ";
    const email = "nguyenan@gmail.com";
    const lineID = "2024_06_00001";

    const apiBladeRegister = 'public/line/register';
    const apiURLBladeRegister = getApiURL(apiBladeRegister);

    const [userData, setUserData] = useState({
        email: email,
        token: token,
        lineID: lineID,
        depositStatus: 'Y'
    });

    const handleRegister = async (event) => {
        try {
            const response = await axios.post(apiURLBladeRegister, userData);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <Modal
                open={showModalPopupAdd}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Bạn muốn đăng ký?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                        Nhấn vào <Link onClick={handleRegister}>đây</Link> để đăng ký
                    </Typography>
                    <Button className="close-modal" onClick={onClose}>Bỏ qua</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default PopupAdd;
