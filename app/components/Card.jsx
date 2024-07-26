import React from "react";
import Image from "next/image";
const Card = ({ info }) => {
  const { title, subTitle, imgSrc, description } = info;
  return (
    <div className="min-h-48 flex flex-col p-5 bg-slate-800 opacity-45 rounded-md">
        {
      imgSrc ? (
      <Image src={imgSrc} alt="card_image" width={100} height={100} />
      ) : <></>
    }
      <div>
        <p className="text-white text-left text-2xl">{title}</p>
        <p className="text-blue-500">{subTitle}</p>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Card;
