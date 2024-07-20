"use client";
import { Container } from "@/lib/styledComponents";
import { Icons } from "@/components/icons";

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

        <div className='flex flex-col lg:flex-row gap-16 w-full justify-center'>

          <div  className='flex flex-col lg:flex-row'>
            {/*CO1*/}
            <div className="mb-6" >
              <span className="font-semibold text-base text-title " >Category</span >
              <ul className="text-sm text-title font-light  " >
                <li className="hover:underline cursor-pointer mt-3" >CSS</li >
                <li className="hover:underline cursor-pointer" >Javascript</li >
                <li className="hover:underline cursor-pointer" >Tailwind</li >
                <li className="hover:underline cursor-pointer" >React JS</li >
                <li className="hover:underline cursor-pointer" >More Category</li >
              </ul >
            </div >
            {/*CO2*/}
            <div className="mb-6" >
              <span className="font-semibold text-base text-title " >About Me</span >
              <ul className="text-sm text-title font-light  " >
                <li className="hover:underline cursor-pointer mt-3" >About Me</li >
                <li className="hover:underline cursor-pointer" >Projects</li >
                <li className="hover:underline cursor-pointer" >Achievement</li >
              </ul >
            </div >
          </div >

          <div  className='flex flex-col lg:flex-row gap-10'>
            <div className="mb-6" >
              <span className="font-semibold text-base text-title " >Get in touch</span >
              <ul className="text-sm text-title font-light  " >
                <li className="hover:underline cursor-pointer mt-3" >+62-8XXX-XXX-XX</li >
                <li className="hover:underline cursor-pointer" >demo@gmail.com</li >
              </ul >
            </div >

            <div >
              <span className="font-semibold text-base text-title " >Follow Us</span >
              <ul className="text-sm text-title font-light  " >
                <li className="hover:underline cursor-pointer mt-3" >Medium</li >
                <li className="hover:underline cursor-pointer" >Instagram</li >
                <li className="hover:underline cursor-pointer mt-3" >Twitter</li >
                <li className="hover:underline cursor-pointer" >Twitter</li >
              </ul >
            </div >
          </div >

        </div >
      </div >
    </Container >
  );
};

export default Footer;
