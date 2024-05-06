import { useState, option, useRef } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Box, Backdrop, Select, FormControl, Button, Typography, Modal } from "@mui/material/";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
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
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Nhấn vào đây để đăng ký
                    </Typography>
                    <Button className="close-modal" onClick={onClose}>Bỏ qua</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default PopupAdd;
