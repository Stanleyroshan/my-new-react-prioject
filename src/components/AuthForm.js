// src/components/AuthForm.js
import React from 'react';
import { useForm } from '@mantine/hooks';
import { TextInput, PasswordInput, Button, Checkbox, RadioGroup, Radio } from '@mantine/core';
import useAuthStore from '../store/auth';

const AuthForm = ({ type, onSubmit }) => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      name: '',
      gender: '',
      terms: false,
    },
    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => value.length >= 6,
      name: (value) => value.trim().length > 0,
      terms: (value) => value === true,
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form.values);
  };

  return (
    <form onSubmit={handleSubmit}>
      {type === 'signUp' && (
        <TextInput label="Name" placeholder="Your name" {...form.getInputProps('name')} required />
      )}
      <TextInput label="Email" placeholder="Your email" {...form.getInputProps('email')} required />
      <PasswordInput label="Password" placeholder="Password" {...form.getInputProps('password')} required />
      {type === 'signUp' && (
        <>
          <RadioGroup label="Gender" {...form.getInputProps('gender')} required>
            <Radio value="male" label="Male" />
            <Radio value="female" label="Female" />
          </RadioGroup>
          <Checkbox label="I agree to terms and conditions" {...form.getInputProps('terms')} required />
        </>
      )}
      <Button type="submit">{type === 'signUp' ? 'Sign Up' : 'Sign In'}</Button>
    </form>
  );
};

export default AuthForm;
