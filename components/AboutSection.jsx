"use client";

import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    id: 1,
    icon: <User2 size={20} />,
    text: "Debnath Mahapatra",
  },
  {
    id: 2,
    icon: <PhoneCall size={20} />,
    text: "(+91) 7319358180",
  },
  {
    id: 3,
    icon: <MailIcon size={20} />,
    text: "debnathmahapatra740@gmail.com",
  },
  {
    id: 4,
    icon: <Calendar size={20} />,
    text: "Born on 02 December, 2003",
  },
  {
    id: 5,
    icon: <GraduationCap size={20} />,
    text: "Graduation on Computer Science",
  },
  {
    id: 1,
    icon: <HomeIcon size={20} />,
    text: "Kolkata, India",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        id: 1,
        university: "Midnapore College",
        qualification: "Bachelor of Science",
        years: "2021-2024",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        id: 1,
        name: "HTML CSS",
      },
      {
        id: 2,
        name: "Front-end Development",
      },
      {
        id: 3,
        name: "Javascript",
      },
      {
        id: 4,
        name: "Back-end Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        id: 1,
        imgPath: "/about/vscode.svg",
      },
    ],
  },
];

export default function AboutSection() {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container max-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>

        <div className="flex flex-col xl:flex-row">
          <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat relative hidden xl:flex flex-1">
            <DevImg
              containerStyles="w-[400px] h-[400px] ml-6 mt-6 bg-no-repeat relative bg-bottom"
              imgSrc="/hero/profile.png"
            />
          </div>

          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList
                className="w-full grid xl:grid-cols-3 xl:max-w-[520px]
              xl:border dark:border-none"
              >
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Lorem ipsum dolor sit amet.</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit voluptatibus beatae nisi laudantium necessitatibus
                      atque minus doloremque natus sit saepe?
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Hindi, Bengali</div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 text-3xl mb-8 text-center xl:text-left">
                      My Journey
                    </h3>

                    <div className="flex gap-x-8 justify-center xl:justify-start">
                      <div className="">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary mb-4">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>

                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item) => {
                              const { university, qualification, years } = item;
                              return (
                                <div
                                  key={item.id}
                                  className="flex gap-x-8 group"
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 text-2xl mb-8">What I Use Everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-2xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillData, "skills").data.map((item) => {
                          const { name } = item;
                          return (
                            <div
                              key={item.id}
                              className="w-2/4 text-center xl:text-left mx-auto xl:mx-0 py-1"
                            >
                              <div className="font-medium">{name}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>

                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map((item) => {
                          const { imgPath } = item;
                          return (
                            <div key={item.id}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt="tool"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
