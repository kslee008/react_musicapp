import React from 'react'
import './SearchResults.css'
import Tracklist from '../tracklist/Tracklist'

export default function SearchResults({searchResults, onAddTrack}) {
  return (    
    <div className="SearchResults">
      <h2>Results</h2>
      {/* Add a TrackList component */}
      <Tracklist 
        listResults = {searchResults}
        remove = {false}
        onAddTrack = {onAddTrack}
      />
    </div>  

  )
}

