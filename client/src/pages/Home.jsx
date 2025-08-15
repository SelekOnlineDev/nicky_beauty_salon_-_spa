import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FaMugHot } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import Home1 from '../assets/Home1.jpg';
import Home2 from '../assets/Home2.jpg';
import Home3 from '../assets/Home3.jpg';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #FDF8F2, #f5fdf8);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 1224px) {
    padding: 4.5rem 2rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1100px;
  width: 100%;

  @media (min-width: 1024px) {
    display: grid;
    max-width: 1100px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const TextBlock = styled.div`
  margin: 2rem;
`;

const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: oklch(95.4% .038 75.164);
  color: #0f766e;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;

  span {
    color: #F97316;
  }

  @media (min-width: 778px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: 1.15rem;
  color: #555;
  margin-bottom: 2rem;
  max-width: 32rem;
  font-family: 'Poppins', sans-serif;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 540px) {
    flex-direction: column;
    width: 100%;

    button {
      width: 100%;
      justify-content: center;
    }
  }
`;

const OrangeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #F97316;
  color: white;
  font-weight: 700;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #ea580c;
  }
`;

const WhiteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: white;
  color: #0f766e;
  font-weight: 600;
  border: 2px solid #0f766e;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #f0fdfa;
  }
`;

const ImageBlock = styled.div`
  position: relative;
  display: flex;
  margin: 2rem;
  justify-content: center;
  align-items: center;

    @media (max-width: 1224px) {
    flex-direction: column;
    gap: 1.5rem;

    img {
      position: static !important;
      width: 100%;
      height: 260px;
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1.5rem;

    img {
      position: static !important;
      width: 90%;
      height: 260px;
    }
  }
`;

const Img = styled.img`
  width: 250px;
  height: 260px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  &:nth-child(1) {
    position: absolute;
    left: -60px;
    top: -40px;
    z-index: 1;
  }
  &:nth-child(2) {
    position: relative;
    z-index: 3;
  }
  &:nth-child(3) {
    position: absolute;
    right: -60px;
    bottom: -40px;
    z-index: 1;
  }
`;

const Rating = styled.div`
  position: absolute;
  bottom: -40px;
  left: -40px;
  margin-left: 7px;
  background-color: oklch(95.4% .038 75.164);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 0.875rem;
  font-family: 'Poppins', sans-serif;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <TextBlock>
          <Tag>
            <span>✦</span> Authentic Balinese Experience
          </Tag>
          <Title>
            Your Tranquil Escape in the Heart of <span>Kuta</span>
          </Title>
          <Description>
            Experience authentic Balinese beauty and relaxation, enhanced by a refreshing touch. 
            Discover our hidden oasis where traditional treatments meet modern comfort.
          </Description>
          <ButtonRow>
            <OrangeButton onClick={() => navigate('/services')}>
              <FaHeart /> Book Your Experience
            </OrangeButton>
            <WhiteButton onClick={() => navigate('/contact')}>
              <FaMugHot /> Try Our Drinks
            </WhiteButton>
          </ButtonRow>
        </TextBlock>

        <ImageBlock>
          <Img src={Home1} alt="Spa Experience 1" />
          <Img src={Home2} alt="Spa Experience 2" />
          <Img src={Home3} alt="Spa Experience 3" />
          <Rating>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color="#FBBF24" />
            ))}
            5.0 Rating
          </Rating>
        </ImageBlock>
      </Content>
    </Container>
  );
};

export default Home;
