import React, { useState } from 'react'

const MusicPlayerContext = React.createContext([{}, () => {}])

const MusicPlayerProvider = (props) => {
  const [state, setState] = useState({
    tracks: [
      {
        name: 'Robots, Robots! - Vedo'
      },
      {
        name: 'Stone Crab - The 25Bs'
      },
      {
        name: 'Super Fun Time - Happy Divison'
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
