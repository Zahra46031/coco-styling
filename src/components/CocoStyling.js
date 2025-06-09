import React, {useState} from "react";
import styled from "styled-components";
import BookingModal from "./BookingModal";
import AuthModal from "./AuthModal";
import JobApplicationModal from "./JobApplicationModal";

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  color: #000;
  background: #fff;
  min-height: 100vh;
`;

const Hero = styled.section`
  background-color: #f5f5f5;
  padding: 4rem 2rem;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #222;
`;

const Tagline = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;
`;

const Section = styled.section`
  padding: 3rem 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const Card = styled.div`
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 1rem;
  padding: 2rem;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  text-align: left;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  font-size: 0.875rem;
  color: #666;
  background: #f9f9f9;
`;

const HomePageButton = styled.button`
background-color: #f9f9f9;
  color: #000000;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavLink = styled.a`
  color: #000;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #777;
  }
`;


export default function CocoStyling() {
  const [showModal, setShowModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showJobApplicationModal, setShowJobApplicationModal] = useState(false);
  const [form, setForm] = useState({ fullName: "", email: "", date: "", time: "" });
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks! We'll contact you at ${form.email} for your consultation on ${form.date} at ${form.time}.`);
    setShowModal(false);
    setForm({ fullName: "", email: "", date: "", time: "" });
  };
  const handlePortfolioClick = () => {
    alert("New looks coming soon! Stay Tuned!");
  };

  return (
    <Container>
      <Nav>
  <NavLink href="#home">Home</NavLink>
  <NavLink href="#services">Services</NavLink>
  <NavLink href="#about">About</NavLink>
  <NavLink href="#portfolio">Portfolio</NavLink>
  <NavLink onClick={() => setShowAuthModal(true)}>Login / Sign up</NavLink>
  <NavLink onClick={() => setShowJobApplicationModal(true)}>Apply</NavLink>
</Nav>

  {showJobApplicationModal && (
  <JobApplicationModal
    isOpen={showJobApplicationModal}
    onClose={() => setShowJobApplicationModal(false)}
  />
)}
      <Hero id="home">
        <Heading>Coco Styling</Heading>
        <Tagline>Luxury style curation inspired by designer elegance</Tagline>
      </Hero>

      <Section id="about">
        <SectionTitle>About</SectionTitle>
        <p>
          Coco Styling blends high fashion with individual expression, offering
          luxurious styling services for modern icons.
        </p>
      </Section>
      
      <Section id="services">
        <SectionTitle>Our Services</SectionTitle>
        <CardContainer>
          <Card>
            <h3>Personal Styling</h3>
            <p>Tailored looks that reflect your personal brand.</p>
          </Card>
          <Card>
            <h3>Closet Revamp</h3>
            <p>Elevate your wardrobe with curated designer pieces.</p>
          </Card>
          <Card>
            <h3>Event Styling</h3>
            <p>Look stunning for galas, shoots, and special occasions.</p>
          </Card>
        </CardContainer>
        <HomePageButton onClick={() => setShowModal(true)}>Book a consultation!</HomePageButton>
      </Section>
      <BookingModal
        show={showModal}
        onClose={() => setShowModal(false)}
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Section id="portfolio">
        <SectionTitle>Portfolio</SectionTitle>
        <p>
          Check out our portfolio showcasing signature looks carefully curated by CocoStyling
        </p>
        <HomePageButton onClick={handlePortfolioClick}>Portfolio</HomePageButton>
      </Section>

      <Footer id="footer">
        <p>Contact:</p>
         <p>Email us at: <a href="mailto:hello@cocostyling.com">hello@cocostyling.com</a></p>
         <p>Follow our Instagram page @cocostyling</p>
        &copy; {new Date().getFullYear()} Coco Styling. All rights reserved.
      </Footer>
      <AuthModal show={showAuthModal} onClose={() => setShowAuthModal(false)} />
     
    </Container>
  );
}
