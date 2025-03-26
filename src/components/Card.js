"use client";

const Card = (props) => {
  return (
    <div className="w-full h-full bg-primary-second rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col gap-y-3">
      {props.children}
    </div>
  );
};

export default Card;
