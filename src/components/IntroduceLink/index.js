import React from 'react';
import { useState, useEffect } from 'react';
import { getBlogLink } from '@api/BlogLinkApi';
import styled from 'styled-components';

const IntroduceLink = () => {
  const [blogLink, setBlogLink] = useState([]);

  useEffect(() => {
    getBlogLink().then(res => {
      setBlogLink(res);
    });
  }, []);

  return (
    <>
      <Title>프룻파머 인터뷰</Title>
      <LinkContainer>
        {blogLink?.map(data => (
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            <LinkImage key={data.id} src={data.src} alt={data.name} />
          </a>
        ))}
      </LinkContainer>
    </>
  );
};

const Title = styled.div`
  margin: 25px;
  font-size: 22px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 90%;
  min-width: 1080px;
  text-align: center;
  height: 300px;
`;

const LinkImage = styled.img`
  width: 80%;
  max-width: 280px;
  height: 100%;
`;

export default IntroduceLink;
