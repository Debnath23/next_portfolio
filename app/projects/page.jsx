"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    id: 1,
    image: "/work/3.png",
    category: "react.js",
    name: "Food Delivery Application",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, non.",
    link: "/",
    github: "/",
  },
  {
    id: 2,
    image: "/work/4.png",
    category: "Next.js",
    name: "Authentication Application",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, non.",
    link: "https://github.com/Debnath23/nextauthapp",
    github: "/",
  },
  {
    id: 3,
    image: "/work/1.png",
    category: "Next.js",
    name: "Music School Application",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, non.",
    link: "https://github.com/Debnath23/next_js",
    github: "/",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

export default function page() {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg;max-w-[640px]">
            {categories.map((category) => (
              <TabsTrigger
                onClick={() => setCategory(category)}
                value={category}
                key={category.id}
                className="capitalize w-[162px] md:w-auto"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <TabsContent value={category} key={project.id}>
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
