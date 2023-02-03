import React from 'react'
import styled from 'styled-components'

const FormField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange }) => {
  return (
    <Wrapper>
    <label className='label'>
        {labelName &&   (<span>{labelName}</span>)}


        {isTextArea ? (
        <textarea 
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className="textarea"
        />
      ) : (
        <input className='input'
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.01"
          placeholder={placeholder}
        />
      )}
    </label>
    </Wrapper>
  )
}

export default FormField

const Wrapper = styled.div`
    padding: 20px;

.label{
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0.6px;
    font-weight: bold;
    color: #1a1a1aad;
    
}    

.input{
    outline: none;
    background-color: #ffffffc2;
    border-style: none;
    border-radius: 5px;
    width: 100%;
    margin-top: 8px;
    padding: 7px;

}

span{

}
`