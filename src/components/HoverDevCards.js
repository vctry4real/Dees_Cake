import React from "react";
import { GiStairsCake} from "react-icons/gi";
import { FaHands } from "react-icons/fa6";
import { TbEggs } from "react-icons/tb";
import { TbBrandCakephp } from "react-icons/tb";


const HoverDevCards = () => {
  return (
    <div className="p-4">
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        <Card
          title="Artisanal Craftsmanship"
          subtitle="Each cake is handcrafted with meticulous attention to detail"
          href="#"
          Icon={TbBrandCakephp}
        />
        <Card title="Premium Ingredients" subtitle="We source the finest local and imported ingredients" href="#" Icon={TbEggs} />
        <Card title="Innovative Design" subtitle="Pushing boundaries while honoring traditional techniques" href="#" Icon={GiStairsCake} />
        <Card
          title="Personal Touch"
          subtitle="Your vision guides our creation process"
          href="#"
          Icon={FaHands}
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;