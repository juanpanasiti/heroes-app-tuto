import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
  return (
    <div className='container mt-2'>
      <h1>DC Heroes</h1>
      <hr/>
      <HeroList publisher={'DC Comics'} />
    </div>
  )
}
