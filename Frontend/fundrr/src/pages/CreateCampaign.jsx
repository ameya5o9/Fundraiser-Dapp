import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { ethers } from 'ethers';
import { money } from '../assets';

// import { createCampaign } from "../context";
import { useStateContext } from '../context';
import { CustomButton, FormField, Loader, Navbar, Sidebar} from '../components';
import { checkIfImage } from '../utils';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const {createCampaign} = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: "", 
    deadline: '',
    image: '',
  });

  const handleFormFieldChange = (fieldName, e) =>{
    setForm({...form, [fieldName] : e.target.value})

  }


  // prevents the pages from reloading on submitting while an event
  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if(exists) {
        setIsLoading(true)
        await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18)})
        setIsLoading(false);
        navigate('/');
      } else {
        alert('Provide valid image URL')
        setForm({ ...form, image: '' });
      }
    })
  }


  return (
    <div>
      <Sidebar/>
      <Navbar/>
      
    <Wrapper>
      

      <form onSubmit={handleSubmit}>
        <Box2>
      <div className="box1">
        <h1>Create a Campaign
        </h1>
      </div>
          <FormField className='field'
          labelName="Your Name "
          placeholder="John Doe"
          inputType="text"
          value={form.name}
          handleChange={(e) => handleFormFieldChange('name', e)}/>

          <FormField className='field'
          labelName="Campaign Title "
          placeholder="Write a title"
          inputType="text"
          value={form.title}
          handleChange={(e) => handleFormFieldChange('title', e)}/>

        

        
          <FormField className='field'
          labelName="Story "
          placeholder="Write a story"
          inputType="text"
          value={form.description}
          handleChange={(e) => handleFormFieldChange('description', e)}/>

          <FormField className='field'
          labelName="Goal "
          placeholder="50 eth"
          inputType="number"
          value={form.target}
          handleChange={(e) => handleFormFieldChange('target', e)}/>

       

        
          <FormField className='field'
          labelName="End Date "
          placeholder="dd-mm-yyyy"
          inputType="date"
          value={form.deadline}
          handleChange={(e) => handleFormFieldChange('deadline', e)}/>

          <FormField className='field'
          labelName="Image Link "
          placeholder="Paste link"
          inputType="url"
          value={form.image}
          handleChange={(e) => handleFormFieldChange('image', e)}/>

        
        <Box3>
          <CustomButton btnType='submit' title="Submit"
          />
        </Box3>
        
        </Box2>

      </form>


    </Wrapper>
    </div>
  )
}

export default CreateCampaign

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 20px;
h1{
  color: #1e1e1e;
  font-family: Arial, Helvetica, sans-serif;
  
}


.box1{
  border-style: none;
  border-radius: 5px;

  padding: 0px 70px;
}
`

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  background-color: #fffffff8;
  border-style: none;
  border-radius: 7px;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px; */

  .field{
  padding: 20px;
}
`

const Box3 = styled.div`
    display: flex;
    padding: 20px;


`
