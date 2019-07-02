import React, { useState } from 'react'

import robotsRobots from '../assets/audio/vedo.mp3'
import stoneCrab from '../assets/audio/b25s.mp3'
import superFunTime from '../assets/audio/happy-division.mp3'

const MusicPlayerContext = React.createContext([{}, () => {}])

const MusicPlayerProvider = (props) => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: 'Robots, Robots! - Vedo',
        file: robotsRobots
      },
      {
        name: 'Stone Crab - The B25s',
        file: stoneCrab
      },
      {
        name: 'Super Fun Time - Happy Divison',
        file: superFunTime
      },
    ],
    currentTrackIndex: null,
    isPlaying: false
  })

  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  )
}

export { MusicPlayerContext, MusicPlayerProvider }
