import React from "react";
import { FaRegFile } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import './card.css';

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={1.1}
      dragTransition={{bounceStiffness:152,bounceDamping:20}}
      className="relative flex-shrink-0 w-60 h-72 rounded-[41px] bg-zinc-900 text-white py-10 px-5 overflow-hidden border-zinc-100 "
    >
    <div className="flex p-1 w-full border-no rounded-full ">
      <FaRegFile color="yellow"/>
    </div>
      <p className=" font-bold leading-4 mt-9 text-1xl data_desc text-justify hover:text-sky-400 cursor-pointer">{data.desc}</p>
      <div className=" left-0 footer absolute bottom-0 w-full ">
        <div className="flex items-center justify-between mb-1 px-8 py-2">
          <h4>{data.filesize}</h4>
          <span className="w-8 h-8 flex items-center justify-center rounded-full  bg-white">
            {!data.close ? (
              <FaDownload size={".7em"} color="black" />
            ) : (
              <FaLinkedin color="blue"/>
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-3 ${data.tag.tagcolor} flex items-center justify-center`}
          >
            <h3 className="text-sm font-sans font-semibold uppercase">Download Now</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
