import { useState, option, useRef } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Menu, MenuItem, Select, FormControl, Button } from "@mui/material/";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import "./PopupAddStyle.css"

const PopupAdd = ({onClose}) => {

    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    return (
        <div rel={modalRef} onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-30 backgrop-blur-sm flex justify-center items-center">
            <div className="mt-10 flex flex-col gap-5 text-white">
                <button onClick={onClose} className="place-self-end"><IoMdClose size={30}/></button>
                <div className="bg-indigo-600 rounded-xl px-20 py-10">
                    <h1>Download free ebook</h1>
                    <p>Want to learn how to crack......</p>
                </div>
            </div>
        </div>
    )
}

export default PopupAdd;
