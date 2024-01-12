import React from 'react'
import Clock from './Clock'

const ClocksList = () => {
  return (
    <div className='flex justify-between w-2/6 capitalize'>
        <Clock market={"new york"} status={"open"} time={"22:30"}/>
        <Clock market={"london"} status={"close"} time={"22:30"}/>
        <Clock market={"asia"} status={"close"} time={"22:30"}/>
    </div>
  )
}

export default ClocksList