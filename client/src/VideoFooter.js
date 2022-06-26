import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter() {
  return (
    <div className = "videoFooter">
        <div className='videoFooter__text'>
          <h3>@username</h3>
          <p>Description blah-blah-blah</p>
          <div className = 'footer_ticker'>
            <MusicNoteIcon className = 'Footer_icon'/>
            <Ticker mode = "smooth">
      {({ index }) => (
        <>
          <p>I am an extremely long song</p>
        </>
      )}
    </Ticker>
          </div>
        </div>
        <img className='footer_record' src='./media/record.png'></img>
    </div>
  )
}

export default VideoFooter