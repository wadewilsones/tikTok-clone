import  axios from './Axios';
import { useEffect, useState } from 'react'
import './App.css';
import Video from './Video'
import VideoSideBar from './VideoSideBar';



function App() {

const [videos, setVideos] = useState([])

useEffect(() => {

  async function fetchPosts() {
    const response = await axios.get('/v2/posts');
    setVideos(response.data);

    return response;
  }

  fetchPosts();

}, [])

  return (
    <div className="app">
        <div className='app_videos'>
          {videos.map (video => 

            <Video 
                key = {video._id}
                url = {video.url}
                channel = {video.channel}
                description = {video.description}
                song = {video.song}
                likes = {video.likes}
                messages = {video.messages}
                shares = {video.shares}
                />
          )}
        </div>
    </div>
  );
}

export default App;
