import React, { useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  width: 90%;
  max-width: 500px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  background: black;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const JobApplicationModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    portfolio: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted:", form);
    alert("Thank you for applying! We will get back to you in 2-4 weeks. In the mean time sign up to our website to receive fashion updates!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <h2>Job Application</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            type="url"
            name="portfolio"
            placeholder="Portfolio / Instagram / Website"
            value={form.portfolio}
            onChange={handleChange}
          />
          <Textarea
            name="message"
            rows="4"
            placeholder="Tell us why you want to join Coco Styling"
            value={form.message}
            onChange={handleChange}
          />
          <Button type="submit">Submit Application</Button>
        </form>
        <Button onClick={onClose} style={{ marginTop: '1rem', background: 'grey' }}>
          Cancel
        </Button>
      </ModalContainer>
    </Overlay>
  );
};

export default JobApplicationModal;
