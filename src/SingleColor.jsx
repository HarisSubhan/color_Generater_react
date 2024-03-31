import React, { useEffect, useState } from 'react'
import { FaRegCopy } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa6";


const SingleColor = ({ rgb, hex, index }) => {

    const [copied, setCopied] = useState(false)

    setTimeout (() =>{
        setCopied(false)
    }, 2000)
    
  return (
    <>
    <div className="col-md-3 mt-5" >
        <div className="card my-2 p-5 position-relative" style={{ 
            background: `rgb(${rgb})`,
            color:`${index > 10 && 'White'}`
            
        }} >
             {copied ? (
                <FaCheckDouble size={20} cursor="pointer" className="position-absolute " style={{ left:'10px', top:'10px' }}  />
             ) : (
                <FaRegCopy onClick={() => {
                    navigator.clipboard.writeText( `#${hex}`)
                    toast.success('Copied')
                    setCopied(true)
                         }} size={20} cursor="pointer" className="position-absolute " 
                        style={{ left:'10px', top:'10px' }}  />
             )}
            <h3>#{hex}</h3>

        </div>

    </div>
    </>
  )
}

export default SingleColor