import React from 'react'
import { ClipboardCopyIcon, MailIcon, XIcon  } from "@heroicons/react/outline";

const LoginModal = ({visible, closeModal}) => {
  return (
    <div className={`font-satoshi feedjet-backdrop mx-auto absolute min-h-[100%] w-full flex flex-col items-center justify-center z-50  ${visible ? "block" : "hidden"}`}>
        
        
        LoginModal
        
        
        <div className="absolute bg-white p-2 top-10 right-[17%] text-sm cursor-pointer" onClick={closeModal}>
                <XIcon className="w-5 h-5 text-[#8C7B89]" />
            </div>


        </div>
  )
}

export default LoginModal