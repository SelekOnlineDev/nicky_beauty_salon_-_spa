import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 0.5rem;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const GoogleMap = () => {
  return (
    <MapContainer>
      <iframe
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAZVyZfL1UwbZ-Zo7HKXCaRwUu4zGPWjV8&q=Jln+Kubu+Anyar+Kuta+No+8,+Busana+Ayu+Gita,+Room+3,+Kuta,+Bali,+Indonesia"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </MapContainer>
  );
};

export default GoogleMap;
