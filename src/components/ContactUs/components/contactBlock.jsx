import React from "react";
let overall={
    height:'20vh',
    color:'white',
    fontSize:'1rem',
    padding:'0em 2em',
    margin:'0.5em 1em',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    border:'solid rgba(255,255,255,0.05) 0.5px',
    borderRadius:'0.2em'
};
function contactBlock({img, text,buttonText,action}){
    return (
    <div style={overall}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <img src={img} alt="text" style={{height:'2.1em',padding:'0.1em'}}/>
                <h3 >{text}</h3>
            </div>
            <a
            onClick={action}
            href="#_"
            className="animate-slidein mt-6 relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold group"
            >
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                    {buttonText}
                </span>
                <span className="absolute inset-0 border-2 border-white"></span>
            </a>

    </div>
  )
}

export default contactBlock;