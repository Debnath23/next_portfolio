"use client";
import * as React from "react";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";
import { Button } from "./ui/button";
import "swiper/css/pagination";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    image: "/work/food_delivery.jpg",
    category: "react.js",
    name: "Food Delivery Application",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, non.",
    link: "/",
    github: "/",
  },
  {
    id: 2,
    image: "/work/authentication.jpg",
    category: "Next.js",
    name: "Authentication Application",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, non.",
    link: "/",
    github: "https://github.com/Debnath23/nextauthapp",
  },
  {
    id: 3,
    image: "/work/music_school.jpg",
    category: "Next.js",
    name: "Music School Application",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, non.",
    link: "https://next-js-phi-swart.vercel.app/",
    github: "https://github.com/Debnath23/next_js",
  },
];

export default function Work() {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto xl:flex xl:justify-between">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolor?
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>

        <div className="flex justify-center">
          <Carousel
            className="w-full max-w-[700px]"
            opts={{
              align: "start",
            }}
          >
            <CarouselContent>
              {projectData.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-0">
                    <Card>
                      <ProjectCard project={project} />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
