
import React from 'react';

function VideoSection() {
  return (
    <div className="mb-[80px] w-full max-w-[550px]">
      <video controls className="w-full rounded-3xl">
        <source src="/files/homepageVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
export default VideoSection;
