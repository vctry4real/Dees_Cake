"use client";

import Image from "next/image";
import Card from "./Card";

const CardContents = (props) => {
    return (
      <Card>
        <div>
          <Image src={props.src} alt={props.alt} width={500} height={500} />
        </div>
        <p>{props.title}</p>
      </Card>
    );
  };
  

export default CardContents;
