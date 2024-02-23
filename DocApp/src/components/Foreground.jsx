import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref=useRef(null);
  const data = [
    {
      desc: "We cannot solve problems with the kind of thinking we employed when we came up with them.",
      filesize: "0.8MB",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now", tagcolor: "bg-indigo-600"},
    },
    {
      desc: "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.",
      filesize: "3.2MB",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now", tagcolor: "bg-lime-600"},
    },
    {
      desc: "Learn as if you will live forever, live like you will die tomorrow.",
      filesize: "5.8MB",
      close: true,
      tag: {isOpen: true, tagTitle: "upload ", tagcolor: "bg-pink-600"},
    },
    {
      desc: "Learn as if you will live forever, live like you will die tomorrow.",
      filesize: "8.8MB",
      close: true,
      tag: {isOpen: true, tagTitle: "upload ", tagcolor: "bg-green-600"},
    },
    {
      desc: "When you change your thoughts, remember to also change your world.”—Norman Vincent Peale.",
      filesize: "2.1MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagcolor: "bg-cyan-600"},
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
    {data.map((item,index)=>(
     <Card data={item} reference={ref}/> 
    ))}
    </div>
  );
};

export default Foreground;
