"use client";
import React from 'react';
import {Toaster} from "react-hot-toast";

const ToastConfig = () => {
    return (
        <Toaster
            position={"top-center"}
            duration={2000}
        />
    );
};

export default ToastConfig;