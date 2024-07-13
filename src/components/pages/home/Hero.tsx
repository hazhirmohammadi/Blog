"use client"
import {Container} from "@/lib/styledComponents";

import {HeroIcon} from "@/components/icons";

const Hero = () => {
    return (
      <Container $bg={"header"} className="z-10 h-screen mb-12 " >
          <div className="flex flex-col md:grid grid-cols-2 w-full h-full" >
              <div  className="w-full items-center flex justify-center">
                  <HeroIcon  className="size-[250px] md:size-[400px]"/>
              </div >
              <div ></div >
          </div >
      </Container >
    );
};

export default Hero;
