"use client";
import { Container } from "@/lib/styledComponents";
import { Icons } from "@/components/icons";
import { FooterData } from "@/constants/landing";
import { useRef, useState } from "react";
//https://www.figma.com/community/file/1395418487146429983
const Footer = () => {
  return (
    <Container $bg="footer" >
      <div className=" flex flex-col lg:flex-row gap-4 py-10 " >
        <div >
          <h1 className="font-bold cursor-pointer lg:text-2xl text-sm " >DEVBLOG<span className="text-primary lg:text-sm text-xs font-bold" >.blog</span >
          </h1 >
          <span className="text-xs text-paragraph" >Digitaldastin by Dastin Darmawan</span >
          <div className="flex flex-row items-center justify-start gap-6 mt-3" >
            <Icons.twitter />
            <Icons.instagram />
            <Icons.linkedin />
          </div >
        </div >

        <div className="flex flex-col lg:flex-row gap-16 w-full justify-center" >

          <div className="flex flex-col lg:flex-row" >
            {/*CO1*/}
            <div className="mb-6" >
              <span className="font-semibold text-base text-title " >Category</span >
              <ul className="text-sm text-title font-light  " >
                {FooterData.technologyLinks.map((item, index) => (
                  <li key={item.id} className={`hover:underline cursor-pointer ${index === 0 ? "mt-3" : ""} capitalize`} >
                    {item.link}
                  </li >
                ))}
              </ul >
            </div >
            {/*CO2*/}
            <div className="mb-6" >
              <span className="font-semibold text-base text-title " >About Me</span >
              <ul className="text-sm text-title font-light  " >
                {FooterData.aboutMe.map((item, index) => (
                  <li key={item.id} className={`hover:underline cursor-pointer ${index === 0 ? "mt-3" : ""} capitalize`} >
                    {item.link}
                  </li >
                ))}
              </ul >
            </div >
          </div >

          <div className="flex flex-col lg:flex-row gap-10" >
            <div className="mb-6" >
              <span className="font-semibold text-base text-title " >Get in touch</span >
              <ul className="text-sm text-title font-light  " >
                {FooterData.aboutMe.map((item, index) => (
                  <li
                    key={item.id}
                    className={`hover:underline cursor-pointer ${index === 0 ? "mt-3" : ""} capitalize`}
                  >
                    {item.link}
                  </li >
                ))}
              </ul >
            </div >

            <div >
              <span className="font-semibold text-base text-title " >Follow Us</span >
              {FooterData.followUs.map((item, index) => (
                <div
                  key={item.id}
                  className={`hover:underline cursor-pointer font-light  text-title text-sm ${index === 0 ? "mt-3" : ""}  capitalize`}
                >
                  {item.link}
                </div >
              ))}
            </div >
          </div >

        </div >
      </div >
    </Container >
  );
};

export default Footer;
