import React, { useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

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
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 400px;
  width: 90%;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.25rem;
  background: none;
  border: none;
  cursor: pointer;
`;

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.75rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background: black;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #333;
  }
`;

const ToggleText = styled.p`
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
`;

const AuthModal = ({ show, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

     try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in successfully!");
        onClose();
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        alert("Account created successfully!");
      onClose(); // Show alert before closing
      }

     } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ModalOverlay show={show}>
      <ModalBox>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>{isLogin ? "Log In" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
            {!isLogin && (
                <Input
            type="text"
            placeholder="username"
            required
            value={username}
            onChange={(e) => setUserName(e.target.value)}
           /> )}
          <Input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitButton type="submit">{isLogin ? "Log In" : "Sign Up"}</SubmitButton>
        </form>
        {error && <p style={{ color: "red", marginTop: "0.5rem" }}>{error}</p>}
        <ToggleText>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            style={{ background: "none", border: "none", color: "blue", cursor: "pointer" }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </ToggleText>
      </ModalBox>
    </ModalOverlay>
  );
};

export default AuthModal;
