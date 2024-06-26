import React from 'react';
import Rating from '../Rating';
import Image from 'next/image';

export default function TestimonialStyle3({
  text,
  ratingNumber,
  avatarImgUrl,
  avatarName,
}) {
  return (
    <div className="cs_testimonial cs_style_3 cs_radius_20 cs_white_bg text-center">
      <div className="cs_testimonial_img">
        <Image src={avatarImgUrl} alt={avatarName} height={150} width={150} />
      </div>
      <h2 className="cs_testimonial_avatar cs_fs_24 cs_semibold">
        {avatarName}
      </h2>
      <Rating ratingNumber={ratingNumber} />
      <div className="cs_testimonial_text cs_fs_20">{text}</div>
    </div>
  );
}
