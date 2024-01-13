import React from 'react';
import { Button, Container, Input } from '.';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { newState } from '../store/userSlice';

const Form = ({isOn=true}) => {
  const [userData, setUserData] = React.useState({ name: '', email: '' });
  const nagivate =useNavigate();
  const dispatch =useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newState(userData))
    nagivate("/")

  };

  return (isOn?
  <>
    <Container id={`form`} className='span'>
      <form  onSubmit={handleSubmit} className='flex flex-col gap-5   items-center '>
        <h1 className='font-bold font-mono text-white' >COMPLETE THE FORM</h1>
        <Input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          label="Name"
          max="25"
          isLabel={false}
        />
        <Button  className='glassBox p-1'type="submit" />
      </form>
    </Container>
    </>:null 
  );
};

export default Form;
