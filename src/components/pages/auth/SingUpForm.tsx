"use client"
import { Container, Flex } from "@/lib/styledComponents";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SingUpForm() {
  return (
    <Container $bg={"none"} >
      <div className="w-full text-center mx-auto" >
        <h4 className="font-bold text-base md:text-2xl" >Welcome  </h4 >
        <p className="text-paragraph text-xs mt-1">Welcome to my collection</p>
      </div >
      <Flex $display={"col"} className="gap-y-6 justify-center max-w-[400px] mx-auto  py-10 px-8 bg-neutral-200 mt-4 mb-10  rounded-xl" >

        <div className="w-full text-center" >
          <h4 className="font-semibold" > Sing Up </h4 >
        </div >

        <div className="w-full h-[1px] bg-gray-500" ></div >
        <div >
          <Label htmlFor="userName" >Username</Label >
          <Input id="userName" type="text" />
        </div >
        <div >
          <Label htmlFor="Lastname" >Lastname</Label >
          <Input id="Lastname" type="text" />
        </div >
        <div >
          <Label htmlFor="email" >email Or number phone</Label >
          <Input id="email" type="email" />
        </div >
        <div >
          <Label htmlFor="password" >password</Label >
          <Input id="password" type="password" />
        </div >
        <div >
          <Label htmlFor="confirmPassword" >Confirm password</Label >
          <Input id="confirmPassword" type="password" />
        </div >
        <Button >Create Account</Button >
        <div >
          <span className="text-black text-xs" >Already hava an account ?</span >
          <span className="text-xs text-blue-600 hover:underline" >
            {" "} <Link href="/sing-in">Sing In </Link>
          </span >
        </div >
      </Flex >
    </Container >
  );
}