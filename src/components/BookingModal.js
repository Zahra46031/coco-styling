import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  width: 90%;
  max-width: 400px;
  text-align: left;
  position: relative;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 0.75rem;
  border: none;
  border-radius: 0.75rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const BookingModal = ({ show, onClose, form, onChange, onSubmit }) => {
  return (
    <ModalOverlay show={show}>
      <ModalBox>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h3>Book Your Styling Session</h3>
        <Form onSubmit={onSubmit}>
            <div>
                <Label>Full Name: </Label>
                <Input type="text" name="fullName" value={form.fullName} onChange={onChange} required />
            </div>
          <div>
            <Label>Email Address: </Label>
            <Input type="email" name="email" value={form.email} onChange={onChange} required />
          </div>
          <div>
            <Label>Preferred Date: </Label>
            <Input type="date" name="date" value={form.date} onChange={onChange} required />
          </div>
          <div>
            <Label>Preferred Time: </Label>
            <Input type="time" name="time" value={form.time} onChange={onChange} required />
          </div>
          <SubmitButton type="submit">Confirm Booking</SubmitButton>
        </Form>
      </ModalBox>
    </ModalOverlay>
  );
};

export default BookingModal;
