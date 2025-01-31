"use client";

import React from "react";
import Image from "next/image";
import avatar from "@/public/images/career-avatar.png";

type CareerCardProps = {
  position: string;
  location: string;
};

const CareerCard: React.FC<CareerCardProps> = ({ position, location }) => {
  return (
    <div className="col-12 col-md-6 col-xl-4 py-5 border rounded-lg shadow-lg p-6">
      <div className="flex flex-col items-center gap-5">
        <Image
          src={avatar}
          alt="Career Avatar"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="text-center">
          <h3 className="flex justify-center items-center gap-3 text-xl font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-6 w-6 text-blue-600"
            >
              <path
                fill="currentColor"
                d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"
              />
            </svg>
            {position}
          </h3>
          <h4 className="flex justify-center items-center gap-2 text-lg text-gray-700 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-5 w-5 text-red-600"
            >
              <path
                fill="currentColor"
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
              />
            </svg>
            {location}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
