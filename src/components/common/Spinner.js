import React from 'react'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div className="loading-bar">
      <Loader type="Puff" color="#00305c" height="130" width="130" />
    </div>
  )
}

export default Spinner