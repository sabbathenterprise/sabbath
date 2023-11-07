"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/constants";


const catagories = ["All",  "Structural Design", "Interior Design", "Furniture"];

const Portfolio = () => {
  const [selectedCatagory, setSelectedCatagory] = useState("All");

  const filtered =
    selectedCatagory === "All"
      ? projects
      : projects.filter((project) => project.catagory === selectedCatagory);

  const handleCatagoryChange = (catagory: string) => {
    setSelectedCatagory(catagory);
  };

  return (
    <div className="w-full text-slate-900 bg-light">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
      <div className="mx-4 md:mx:18 lg:mx-32 py-12">
        <h1 className="font font-extrabold text-3xl font-sans mb-10">
          PROJECTS &{" "}
          <span className="font-sans border-b border-sky-300 pb-1 pr-10">
            WORKS
          </span>
        </h1>
        <div className="">
          <div className="flex justify-center mx-auto mt-12 mb-5 ">
            <div className="flex max-md:grid max-md:grid-cols-2 items-center justify-between py-2 lg:px-8 px-2 gap-3 rounded-lg">
              {catagories.map((catagory) => (
                <button
                  key={catagory}
                  onClick={() => handleCatagoryChange(catagory)}
                  className={`${
                    selectedCatagory === catagory
                      ? "bg-gray-300 text-slate-900 rounded-full"
                      : "text-slate-900  hover:bg-gray-200 ease-in-out duration-200 border border-gray-300"
                  } py-2 px-6 rounded-full  font-semibold text-md`}
                >
                  {catagory}
                </button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filtered.map((item) => (
              <div
                key={item.title}
                className="bg-gray-200 rounded-xl my-4 pb-10 flex flex-col mx-auto text-center hover:bg-gray-300 ease-in-out duration-300"
              >
                <Image
                  src={item.featuredImg}
                  width={450}
                  height={30}
                  alt="Project Image"
                  className="mx-auto md:h-[280px]"
                />
                <h2 className="font-extrabold font-sans text-gray-900 text-xl pt-7 pb-5">
                  {item.title}
                </h2>
                <p className="text-gray-600 font-sans px-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
