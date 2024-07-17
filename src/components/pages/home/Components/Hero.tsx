"use client"
import {Container, Flex} from "@/lib/styledComponents";

import {HeroIcon, Icons} from "@/components/icons";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export function Hero() {
    return (
      <Container $bg={"header"} className="z-10 h-screen mb-12 " >
          <Flex $display="col" className="">
              <div className="flex flex-col justify-center items-center md:grid grid-cols-2 w-full h-full" >
                  <div className="w-full flex  flex-col justify-center items-center md:justify-start md:items-start" >
                      {/*Title hero*/}
                      <h1 className="text-title mt-10 lg:mt-0 text-center md:text-start text-3xl md:text-4xl lg:text-6xl leading-10 font-bold" >
                          Hi, i’m Hazhir<br />
                          Front end dev
                      </h1 >
                      {/*description*/}
                      <div className="flex flex-row items-center justify-start gap-x-2 " >
                          <div className="rounded-3xl w-[6px] h-9 bg-gray-500 md:flex hidden mt-6" ></div >
                          <div className="max-w-[500px] lg:mt-6" >
                              <p className=" text-xs lg:text-sm text-center md:text-start text-paragraph mt-4 md:mt-0" >
                                  On this blog I share tips and tricks, frameworks, projects, tutorials, etc
                                  Make sure you subscribe to get the latest updates
                              </p >
                          </div >
                      </div >
                      {/*input & button*/}
                      <div className="flex flex-row mt-4 lg:mt-12 w-fit gap-x-2" >
                          <Input className="outline-none placeholder:text-paragraph lg:w-[400px]" placeholder="Enter Email" />
                          <Button >Subscribe</Button >
                      </div >
                  </div >
                  {/*COl IMAGE*/}
                  <div className="w-full items-center flex justify-center" >
                      <HeroIcon className="size-[250px] md:size-[370px] lg:size-[420px] xl:size-[520px]" />
                  </div >
              </div >
              <div className="w-full flex items-end justify-center h-[30px] " >
                  <Icons.chevronDown className="size-14 text-paragraph" />
              </div >
          </Flex >
      </Container >
    );
};


