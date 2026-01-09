import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

interface ToastProps {
    message: string;
    color: string;
}

const Toast = ({ message, color }: ToastProps) => {
 const [close, setClose] =  useState(false);

  if (close) return null;

  return (
    <div 
    className="flex items-center justify-between gap-8 p-4 rounded shadow-lg text-white fixed top-4  " 
    style={{ backgroundColor: color }}>
      {message}
      <IoMdCloseCircle size={24} onClick={() => setClose(true)} className="hover:scale-105" />
    </div>
  )
}

export default Toast
