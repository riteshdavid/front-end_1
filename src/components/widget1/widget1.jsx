import {React,useState} from 'react';
import './widget1.css';

export default function Widget1() {
    
    const tabs=[{
      'head':'About Me',
      'content':"I'm Alfred from Ohio.I have completed my Graduation in Science from Ohio State University.I would like to work with your company."
    },{
        'head':'Experience',
        'content':"I have worked as Software intern in StarX for 6 months. "
    },{
        'head':'Recommendation',
        'content':"I have got my recommendation letter from my previous company."
    }];
    const [currentTab, setcurrentTab] =  useState(tabs[0].head);

    function handleCurrentTab(e){
        // tabs.map((a)=>(a.head===e.target.key?setcurrentTab(e.target.key):null));
        setcurrentTab(e);
        console.log(e);
           
    }
        
    
   
    return (
        <div className="widget1">
            <div className="icon1">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#9b9595"><path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
            </div>
            <div className="tab">
                
                {tabs.map((obj)=>(
                    <button onClick={()=> handleCurrentTab(obj.head)} className={currentTab===obj.head?'active':''} key={obj.head}>{obj.head}</button>
                ))}
            </div>
            <div className="icon2">

            </div>
            <div className="icon3">

            </div>
            <div className="tabs">
                <p>{tabs.map((a)=>currentTab===a.head?a.content:currentTab.content)}</p>
            </div>
            <div className="icon2">

            </div>
            </div>
            );
}
