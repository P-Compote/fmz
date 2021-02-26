import React from 'react';
import { VideoWrapper, VideoContainer } from './EmbedYoutube';

export default function EmbedFacebook({ fbPage, videoId }) {
  return (
    <VideoContainer>
      <VideoWrapper>
        <iframe
          src={`https://www.facebook.com/plugins/video.php?height=408&href=
          https%3A%2F%2Fwww.facebook.com%2F${fbPage}%2Fvideos%2F${videoId}%2F&show_text=false&width=560`}
          width="560"
          height="315"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder={0}
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title={`Fb video`}
        ></iframe>
      </VideoWrapper>
    </VideoContainer>
  );
}
