import React from 'react';
import styled from 'styled-components';

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  /* 16:9 video */
  height: 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const VideoContainer = styled.div`
  max-width: 640px;
  margin: 5rem auto;
`;

export default function EmbedYoutube({ videoId }) {
  return (
    <VideoContainer>
      <VideoWrapper>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?start=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          title={videoId}
        ></iframe>
      </VideoWrapper>
    </VideoContainer>
  );
}
