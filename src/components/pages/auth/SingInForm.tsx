"use client";
import { Container, Flex } from "@/lib/styledComponents";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";

import { useForm } from "react-hook-form";


const SingInForm = () => {

  return (
    <Container $bg={"none"} >
      <form >
        <Flex $display={"col"} className="gap-y-6 justify-center max-w-[400px] mx-auto  py-10 px-8 bg-neutral-200 my-16  rounded-xl" >
          <div className="w-full text-center" >
            <h4 className="font-semibold" >Login / Register</h4 >
          </div >
          <div className=" flex-col gap-y-2 md:flex-row md:justify-between flex w-full " >
            <Button className="text-xs" >
              <span className="mr-2" >Login with Email</span >
              <Icons.mail size={16} />
            </Button >
            <Button className="text-xs" >
              <span className="mr-2 " >Login with Github</span >
              <Icons.github size={16} />
            </Button >
          </div >
          <div className="w-full h-[1px] bg-gray-500" ></div >
          <div >
            <Label htmlFor="email" className="  " >email Or number phone</Label >
            <Input
              id="email"
              type="email"
            />
          </div >
          <div >
            <Label htmlFor="password" className=" " >password</Label >
            <Input id="password" type="password" />
          </div >
          <Button >Login Account</Button >

          <div >
            <span className="text-black text-xs" >Don`t have account?</span ><br className="flex md:hidden" />
            <span className="text-xs text-blue-600 hover:underline cursor-pointer" >
            {" "} <Link href="/sing-up" > create an Account</Link >
          </span >
          </div >
        </Flex >
      </form >
    </Container >
  );
};

export default SingInForm;
