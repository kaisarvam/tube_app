import './VideoItem.css';
import React from 'react';


const VideoItem = (props)=>{

    return (
    <div onClick={e=>{props.onVideoSelect(props.video);}} className="item video-item">
        <img alt={props.video.snippet.title} 
        className="ui image" 
        src={props.video.snippet.thumbnails.medium.url}/>
   <div className="content">
<div className="header"> {props.video.snippet.title} </div>
   </div>
    
    </div>
    );
}

export {VideoItem as default};