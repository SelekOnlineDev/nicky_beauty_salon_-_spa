import React from 'react';
import styled from 'styled-components';
import AboutImage from '../assets/About.jpg';

const Container = styled.div`
  background: linear-gradient(to bottom right, #FDF8F2, #f5fdf8);
  padding: 4rem;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  color: #333;

  span {
    color: #F97316;
  }
`;

const Paragraph = styled.p`
  color: #333;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Stats = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
`;

const Stat = styled.div`
  text-align: center;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
    color: ${props => props.color || '#f97316'};
  }

  p {
    font-size: 0.875rem;
    color: #4a4a4a;
  }
`;

const ImageCard = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  overflow: hidden;
  margin-top: 1.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: scale(1);

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    margin-top: 4rem;
  }

  @media (min-width: 1024px) {
    aspect-ratio: 1 / 1; 
    height: auto;
  }

  @media (max-width: 1023px) {
    aspect-ratio: 1 / 1; 
    height: auto;
  }
`;


const Testimonials = styled.section`
  max-width: 1200px;
  margin: 4rem auto 0;
  padding: 0 1rem;
  max-width: 1100px;
`;

const TestimonialHeading = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`;

const TestimonialGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  }

  p {
    font-size: 0.95rem;
    color: #555;
    line-height: 1.5;
    margin-bottom: 0.75rem;
  }

  strong {
    font-weight: 600;
  }
`;

const Stars = styled.div`
  color: #facc15;
  margin-bottom: 0.5rem;
`;

const About = () => {
  return (
    <Container>
      <TopSection>
        <TextContent>
          <Heading>Meet Nicky - <span>Your Beauty Expert</span></Heading>
          <Paragraph>
            Welcome to my sanctuary of beauty and relaxation. I'm Nicky, a passionate Indonesian beauty therapist with years of experience in traditional Balinese treatments and modern beauty techniques.
          </Paragraph>
          <Paragraph>
            Born and raised in Indonesia, I've been immersed in the island's rich wellness traditions from a young age. My salon combines authentic Balinese healing practices with contemporary beauty services, creating a unique experience that honors our cultural heritage while meeting modern expectations.
          </Paragraph>
          <Paragraph>
            Located in a peaceful courtyard away from the bustling street, our salon offers a tranquil escape where you can truly unwind. The journey begins at our street-side refreshment station, where we welcome you with traditional Balinese hospitality and refreshing drinks.
          </Paragraph>
          <Stats>
            <Stat color="#f97316">
              <h3>10+</h3>
              <p>Years Experience</p>
            </Stat>
            <Stat color="#14B8A6">
              <h3>1500+</h3>
              <p>Happy Clients</p>
            </Stat>
          </Stats>
        </TextContent>

        <ImageCard>
          <img src={AboutImage} alt="Nicky" />
        </ImageCard>
      </TopSection>

      <Testimonials>
        <TestimonialHeading>What Our Clients Say</TestimonialHeading>
        <TestimonialGrid>
          <TestimonialCard>
            <Stars>★★★★★</Stars>
            <p>
              "Amazing experience! Nicky is so skilled and the atmosphere is incredibly relaxing. The hidden location makes it feel like a secret oasis."
            </p>
            <strong>- Sarah M.</strong>
          </TestimonialCard>

          <TestimonialCard>
            <Stars>★★★★★</Stars>
            <p>
              "Best massage I've had in Bali! The traditional Balinese techniques are authentic and the service is exceptional."
            </p>
            <strong>- David L.</strong>
          </TestimonialCard>

          <TestimonialCard>
            <Stars>★★★★★</Stars>
            <p>
              "Love the personal touch and attention to detail. The drinks at the entrance are a nice welcome touch!"
            </p>
            <strong>- Emma K.</strong>
          </TestimonialCard>
        </TestimonialGrid>
      </Testimonials>
    </Container>
  );
};

export default About;
