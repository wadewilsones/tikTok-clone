import React, { useState } from 'react'; 
import "./VideoSideBar.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function VideoSideBar() {


  const [liked, setLiked] = useState(false);

  return (
    <div className='video_side_bar'>

      <div className = "video_side_bar_button">
        {liked ? (
          <FavoriteIcon fontSize = "large"  id = 'likedBtn'onClick={(e) => {setLiked(false)}}/>
        ):
          <FavoriteBorderIcon fontSize = "large" 
          onClick={(e) => {setLiked(true)}}
          />
        }

        <p>{liked? 101 : 100}</p>
      </div>

      <div className = "video_side_bar_button">
        <CommentIcon fontSize = "large"/>
        <p>250</p>
      </div>

      <div className = "video_side_bar_button">
        <ShareIcon fontSize = "large"/>
        <p>12</p>
        </div>   
     
    </div>
  )
}

export default VideoSideBar