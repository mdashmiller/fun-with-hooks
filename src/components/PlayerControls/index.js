import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons"

import useMusicPlayer from '../../hooks/useMusicPlayer'

const Controls = () => {
  const {
    isPlaying,
    currentTrackName,
    togglePlay,
    playPreviousTrack,
    playNextTrack
  } = useMusicPlayer()

  return (
    <>
      <div className="controls">
        <div className="current-track">
          <h2>{currentTrackName}</h2>
        </div>
        <div>
          <button
            className="button"
            onClick={playPreviousTrack}
            disabled={!currentTrackName}
          >
            <FontAwesomeIcon icon={faStepBackward} />
          </button>
          <button
            className="button"
            onClick={togglePlay}
            disabled={!currentTrackName}
          >
            {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
          </button>
          <button
            className="button"
            onClick={playNextTrack}
            disabled={!currentTrackName}
          >
            <FontAwesomeIcon icon={faStepForward} />
          </button>
        </div>
      </div>
    </>
  )
}

export default Controls
