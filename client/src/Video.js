import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';
import "./Video.css"

function Video() {

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
    //when stop play it
}
  return (
    <div className='video'>
        <div className = "LogoContainer">
          <img src='./media/favicon.png' className='logo'></img> 
          <h2>TikTok</h2>
        </div>
        <p id = 'username_top'>@username</p>
        <video loop className = "video_player"  ref={videoRef} onClick = {Play}
        src='./media/test.mp4'></video>
        <VideoFooter />
        <VideoSideBar />
    </div>
  )
}

export default Video