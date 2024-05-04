"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

export default function HeroSection() {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl;mx-0 text-center xl:text-left">
            <div className="uppercase font-semibold mb-4 text-primary tracking-[4px] text-2xl">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hi, I'am Debnath Mahapatra</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              I belive through technology we can improve our society and
              planet...
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </div>

            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>

          <div className="hidden xl:flex relative">
            <Badge
              icon={<RiBriefcase4Fill />}
              containerStyles="absolute top-[24%] -left-[8rem]"
              endCountNum={0}
              badgeText="Year Of Experience"
            />

            <Badge
              icon={<RiTodoFill />}
              containerStyles="absolute top-[80%] -left-[5rem]"
              endCountNum={6}
              endCountText=""
              badgeText="Finished my own projects"
            />

            <Badge
              icon={<RiTeamFill />}
              containerStyles="absolute top-[55%] -right-8"
              endCountNum={0}
              endCountText=""
              badgeText="Happy Clients"
            />

            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="w-[400px] h-[400px] mr-16 mt-4 bg-no-repeat relative bg-bottom"
              imgSrc="/hero/profile.png"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
}
