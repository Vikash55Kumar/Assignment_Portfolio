import React from 'react';
import { Card, CardHeader, CardBody, Divider, Image, Link } from "@nextui-org/react";
import project from "../../assets/project.png";
import sevasetu from "../../assets/sevasetu.png";
import regisphare from "../../assets/regisphare.png";
import degiclean from "../../assets/degiclean.png";
import weather from "../../assets/weather.png";


export default function Project() {
  
  const projects = [
    {
      image:sevasetu,
      title:"Seva Setu",
      description:"Designed a real-time monitoring system for efficient management of certificate issuance across subdivisions. ",
      link:"https://seva-setu.netlify.app/"
    },
    {
      image:degiclean,
      title:"Digi Clean",
      description:"Degiclean is a sustainability-focused platform that connects individuals and businesses with companies interested in recycling and repurposing waste materials.",
      link:"https://digi-clean.onrender.com"
    },
    {
      image:regisphare,
      title:"Regisphare",
      description:"Developed a web-based application using React.js for streamlined course management in academic institutions.",
      link:"https://regisphare.netlify.app/"
    },
    {
      image:weather,
      title:"Weather Todo List",
      description:"Develop TodoList in which it display current weather condition for outdor",
      link:"https://weathertodolist.netlify.app/"
    },
  ]
  return (
    <>
      <span className="flex text-4xl font-bold text-center justify-center mt-6">Projects</span>
      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-8 md:p-12 p-4">
      {/* Left - Project Image */}

      <div className="w-full md:w-[50%] justify-center hidden lg:block">
        <img src={project} className=" rounded-lg shadow-lg object-cover" alt="Project" />
      </div>

      {/* Right - Cards */}
      <div className="w-full lg:w-[50%] grid md:grid-cols-2 justify-center gap-6">
          {projects.map((project) => (
            <Card key={project} className="max-w-[400px] p-2 md:0 shadow-lg">
            <CardHeader className="flex gap-3">
              <img
                alt="heroui logo"
                height={40}
                radius="sm"
                src={project.image}
                width={40}
              />
              <div className="flex flex-col">
                <Link href={project.link} className='cursor-pointer'>
                  <p className="text-md font-semibold text-black">{project.title}</p>             
                </Link>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>{project.description}</p>
            </CardBody>
            <Divider />
            </Card>
          ))}        
      </div>
    </div>
    </>

  );
}
