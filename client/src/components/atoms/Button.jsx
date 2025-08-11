import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.variant === 'outline' ? 'transparent' : '#F97316'};
  color: ${props => props.variant === 'outline' ? '#14B8A6' : 'white'};
  border: ${props => props.variant === 'outline' ? '1px solid #14B8A6' : 'none'};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${props => props.variant === 'outline' ? '#e0f2f1' : '#d97706'};
  }
`;

export default Button;