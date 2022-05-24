import React from 'react'
import './Error.css'

const Error = ({ errorMessage }) => {
console.log(errorMessage)
  return (

    <section className='errorBox'>
      <p>{`${errorMessage}`}</p>
    </section>
  )
}

export default Error
