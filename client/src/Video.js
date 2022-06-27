import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';
import "./Video.css"

function Video(props) {

const [playing, setPlaying] = useState(false) 
const videoRef = useRef(null); 

const Play = () => {
    //when play stop it
    if(playing){
        videoRef.current.pause();
        setPlaying(false)
    }
    else{
        videoRef.current.play();
        setPlaying(true)
    }

}
  return (
    <div className='video'>
      <div className = "LogoContainer">
          <img src='./media/favicon.png' className='logo'></img> 
          <h2>TikTok</h2>
        </div>
        <p id = 'username_top'>{props.channel}</p>
        <video loop className = "video_player"  ref={videoRef} onClick = {Play} src={props.url}></video>
        <VideoFooter channel = {props.channel} descr = {props.description} song = {props.song}/>
        <VideoSideBar likes = {props.likes} comments = {props.messages} shares = {props.shares}/>
    </div>
  )
}

export default Video