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
    nagivate("/about")

  };

  return (isOn?
  <>
    <Container id={`form`} className='span'>
      <form  onSubmit={handleSubmit} className='flex flex-col gap-5  mt-0 items-center '>
        <h1 className='font-bold t' >COMPLETE THE FORM</h1>
        <Input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          label="Name"
          max="25"
        />
        <Input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          label="Email"
          max="25"
        />
        <Button type="submit" />
      </form>
    </Container>
    </>:null 
  );
};

export default Form;
