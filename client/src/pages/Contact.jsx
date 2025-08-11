import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import GoogleMap from "../components/GoogleMap";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #FDF8F2, #f5fdf8);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #555;
  font-size: 1.15rem;
  max-width: 40rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 70rem;
  max-width: 1100px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  padding: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 16px rgba(0,0,0,0.15);
  }
`;

const CardTitle = styled.h3`
  color: #F97316;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const CardContent = styled.div`
  color: #333;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const IconRow = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`;

const IconLink = styled.a`
  font-size: 1.2rem;
  color: #14B8A6;
  transition: color 0.3s ease;
  &:hover {
    color: #F97316;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.3rem;
`;

const Input = styled.input`
  padding: 0.9rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: #14B8A6;
  }
`;

const TextArea = styled.textarea`
  padding: 0.9rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  resize: none;
  outline: none;
  min-height: 120px;
  &:focus {
    border-color: #14B8A6;
  }
`;

const SubmitButton = styled.button`
  background-color: #F97316;
  color: white;
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  margin-top: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-start;
  &:hover {
    background-color: #ea580c;
  }
`;

const MapLink = styled.a`
  display: inline-block;
  margin-top: 0.75rem;
  padding: 0.5rem 0.75rem;
  background-color: #14B8A6;
  color: white;
  font-size: 0.9rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0d9488;
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    window.location.href = `mailto:moccaguguk10@gmail.com?subject=Message from ${name} (${email})&body=${encodeURIComponent(message)}`;
  };

  return (
    <Container>
      <Title>Visit Our Hidden Oasis</Title>
      <Subtitle>
        Find us in the heart of Kuta. Look for our refreshing drinks stall on the street, and we'll guide you to our tranquil salon just a few steps away.
      </Subtitle>
      
      <CardGrid>
        {/* Contact Information */}
        <Card>
          <CardTitle>
            <FaPhoneAlt /> Contact Information
          </CardTitle>
          <CardContent>
            <strong>WhatsApp:</strong><br />
            +62 859 2141 1684
            <IconRow>
              <IconLink href="https://www.facebook.com/profile.php?id=61579167930124" target="_blank"><FaFacebookF /></IconLink>
              <IconLink href="https://www.instagram.com/nicky_beauty_salon_spa/" target="_blank"><FaInstagram /></IconLink>
              <IconLink href="https://tiktok.com" target="_blank"><FaTiktok /></IconLink>
            </IconRow>

            <div style={{ marginTop: '1rem' }}>
              <GoogleMap />
              <MapLink 
                href="https://www.google.com/maps/place/Jln+Kubu+Anyar+Kuta+No+8,+Busana+Ayu+Gita,+Kuta,+Bali,+Indonesia" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View on Google Maps
              </MapLink>
            </div>
          </CardContent>
        </Card>

        {/* Booking Form */}
        <Card>
          <CardTitle>Book Your Visit</CardTitle>
          <CardContent>
            Ready to experience authentic Balinese beauty and relaxation? Contact us to book your appointment or simply visit our drinks stall to start your journey.
          </CardContent>
          <Form onSubmit={handleSubmit}>
            <Input type="text" name="name" placeholder="Your Name" required />
            <Input type="email" name="email" placeholder="Your Email" required />
            <TextArea name="message" placeholder="Your Message" required />
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </Card>

        {/* Location & Directions */}
        <Card>
          <CardTitle>
            <FaMapMarkerAlt /> Location & Directions
          </CardTitle>
          <CardContent>
            <strong>Address:</strong><br />
            Jln Kubu Anyar Kuta No 8, Busana Ayu Gita, Room 3<br />
            Kuta, Bali, Indonesia<br /><br />
            <strong>How to find us:</strong><br />
            Look for our colorful drinks stall on Jln Kubu Anyar Kuta. Our friendly staff will welcome you and guide you to our salon, located just a few meters deeper in the peaceful courtyard.
          </CardContent>
        </Card>

        {/* Opening Hours */}
        <Card>
          <CardTitle>
            <FaClock /> Opening Hours
          </CardTitle>
          <CardContent>
            Monday - Saturday<br />
            10:00 AM - 10:00 PM<br />
            Walk-ins welcome, but appointments recommended for guaranteed availability.
          </CardContent>
        </Card>
      </CardGrid>
    </Container>
  );
};

export default Contact;
