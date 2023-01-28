import React from 'react'

const CountBox = ({ title, value }) => {
  return (
    <div className="">
      <h4 className="">{value}</h4>
      <p className="">{title}</p>
    </div>
  )
}

export default CountBox