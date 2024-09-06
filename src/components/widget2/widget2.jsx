import {React,useState,useRef} from 'react';
import './widget2.css';

export default function Widget2() {
    const containerRef=useRef(null);

    // const handleButtonClick=(direction)=>{
    //     if(direction === 'next'){
    //         containerRef.current.scrollIntoView({behaviour:'smooth',inline:'line'});
    //     }
    //     else{
    //         containerRef.current.scrollIntoView({behaviour:'smooth',inline:'start'});
    //     }
    // }
    const [scrollPosition,setScrollPosition]=useState(0);

    const handleButtonClick=(direction)=>{
        if(direction==='next'){
            setScrollPosition(scrollPosition + 100);
        }
        else{
            setScrollPosition(scrollPosition - 100 );
        }
    }
    return (
    <div className="widget2">
                <div className="icon4">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#9b9595"><path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                </div>
                <div className="menu">
                    <button className="gallery_btn">Gallery</button>
                    <div className="add-img">
                        <button className="add_btn"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>ADD IMAGE</button>
                        <button className="nav_btn" onClick={()=> handleButtonClick('prev')}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#9b9595"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg></button>
                        <button className="nav_btn" onClick={()=> handleButtonClick('next')}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#9b9595"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg></button>
                    </div>
                </div>
                <div className="icon5">

                </div>
               
                <div className="gallery" style={{scrollLeft:scrollPosition}} ref={containerRef}>
                    <img className="scal" src="./camera-pic.jpg" alt="product picture"/>
                    <img src="./camera-pic.jpg" alt="product picture"/>
                    <img src="./camera-pic.jpg" alt="product picture"/>
                    <img src="./camera-pic.jpg" alt="product picture"/>
                    <img src="./camera-pic.jpg" alt="product picture"/>
                    <img src="./camera-pic.jpg" alt="product picture"/>
                    <img src="./camera-pic.jpg" alt="product picture"/>
                    <img src="./camera-pic.jpg" alt="product picture"/>
                    <img src="./camera-pic.jpg" alt="product picture"/>
                    <img src="./camera-pic.jpg" alt="product picture"/>
                </div>
            </div>
  )
}
