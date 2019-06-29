import React from 'react'

import TrackList from '../TrackList'
import { MusicPlayerProvider } from '../../contexts/MusicPlayerContext'

const MusicPlayer = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList />
      </div>
    </MusicPlayerProvider>
  )
}

export default MusicPlayer
