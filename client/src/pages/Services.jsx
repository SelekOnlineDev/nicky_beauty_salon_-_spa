import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Services
import Service1 from '../assets/Service1.jpg';
import Service2 from '../assets/Service2.jpg';
import Service3 from '../assets/Service3.jpg';
import Service4 from '../assets/Service4.jpg';

// Drinks
import Drink1 from '../assets/Drink1.jpg';
import Drink2 from '../assets/Drink2.jpg';
import Drink3 from '../assets/Drink3.jpg';
import Drink4 from '../assets/Drink4.jpg';
import Drink5 from '../assets/Drink5.jpg';
import Drink6 from '../assets/Drink6.jpg';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #FDF8F2, #f5fdf8);
  padding: 4.5rem 1rem;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.15rem;
  color: #555;
  text-align: center;
  max-width: 600px;
  margin: 0.5rem auto 2rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    transform: scale(1.03);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ServiceName = styled.h3`
  color: #F97316;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const ServiceDescription = styled.p`
  font-size: 0.875rem;
  color: #555;
  flex-grow: 1;
`;

const Price = styled.div`
  font-weight: bold;
  color: #14B8A6;
  margin-top: 0.5rem;
`;

const Duration = styled.div`
  font-size: 0.75rem;
  color: #333;
`;

const BookButton = styled(Link)`
  background-color: #F97316;
  color: white;
  text-align: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  margin-top: 0.75rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ea580c;
  }
`;

// Drinks
const DrinksSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  max-width: 1100px;
  margin: 3rem auto 0;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`;

const DrinksTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #14B8A6;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const DrinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const DrinkCard = styled.div`
  background: #f0fdfa;
  border-radius: 0.5rem;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    transform: scale(1.03);
  }
`;

const Drink5Card = styled(DrinkCard)`
  display: none;

  @media (min-width: 1px) and (max-width: 844px) {
    display: block;
  }

  @media (min-width: 1036px) {
    display: block;
  }
`;

const Drink6Card = styled(DrinkCard)`
  display: none;

  @media (min-width: 462px) and (max-width: 844px) {
    display: block;
  }
`;

const DrinkImage = styled.img`
  width: 100%;
  height: 115px;
  object-fit: cover;
`;

const DrinkInfo = styled.div`
  padding: 0.5rem;
  font-size: 0.85rem;
  color: #111827;

  strong {
    display: block;
    color: #14B8A6;
  }
`;

const Services = () => {
  return (
    <Container>
      <Title>Our Beauty & Spa Services</Title>
      <Description>
        Indulge in our carefully curated selection of traditional Balinese treatments and modern beauty services in our serene, private setting.
      </Description>

      <CardGrid>
        <Card>
          <CardImage src={Service1} alt="Traditional Balinese Massage" />
          <CardContent>
            <ServiceName>Traditional Balinese Massage</ServiceName>
            <ServiceDescription>Authentic Balinese massage using traditional techniques and aromatic oils</ServiceDescription>
            <BookButton to="/contact">Book Now</BookButton>
          </CardContent>
        </Card>

        <Card>
          <CardImage src={Service2} alt="Relaxing Facial Treatment" />
          <CardContent>
            <ServiceName>Relaxing Facial Treatment</ServiceName>
            <ServiceDescription>Deep cleansing and hydrating facial with natural Balinese ingredients</ServiceDescription>
            <BookButton to="/contact">Book Now</BookButton>
          </CardContent>
        </Card>

        <Card>
          <CardImage src={Service3} alt="Manicure & Pedicure" />
          <CardContent>
            <ServiceName>Manicure & Pedicure</ServiceName>
            <ServiceDescription>Complete nail care with professional polish and nail art options</ServiceDescription>
            <BookButton to="/contact">Book Now</BookButton>
          </CardContent>
        </Card>

        <Card>
          <CardImage src={Service4} alt="Hair Styling & Treatment" />
          <CardContent>
            <ServiceName>Hair Styling & Treatment</ServiceName>
            <ServiceDescription>Professional hair care including wash, cut, and styling</ServiceDescription>
            <BookButton to="/contact">Book Now</BookButton>
          </CardContent>
        </Card>
      </CardGrid>

      <DrinksSection>
        <DrinksTitle>Refreshing Drinks</DrinksTitle>
        <DrinksGrid>
          <DrinkCard>
            <DrinkImage src={Drink1} alt="Tropical Fruit Juice" />
            <DrinkInfo>
              <strong>Tropical Fruit Juice</strong>
            </DrinkInfo>
          </DrinkCard>
          <DrinkCard>
            <DrinkImage src={Drink2} alt="Balinese Coffee" />
            <DrinkInfo>
              <strong>Balinese Coffee</strong>
            </DrinkInfo>
          </DrinkCard>
          <DrinkCard>
            <DrinkImage src={Drink3} alt="Chocolate" />
            <DrinkInfo>
              <strong>Chocolate</strong>
            </DrinkInfo>
          </DrinkCard>
          <DrinkCard>
            <DrinkImage src={Drink4} alt="Iced Tea" />
            <DrinkInfo>
              <strong>Iced Tea</strong>
            </DrinkInfo>
          </DrinkCard>
          <Drink5Card>
            <DrinkImage src={Drink5} alt="Good mood" />
            <DrinkInfo>
              <strong>Good Mood</strong>
            </DrinkInfo>
          </Drink5Card>
          <Drink6Card>
            <DrinkImage src={Drink6} alt="Bali" />
            <DrinkInfo>
              <strong>Bali</strong>
            </DrinkInfo>
          </Drink6Card>
        </DrinksGrid>
      </DrinksSection>
    </Container>
  );
};

export default Services;
