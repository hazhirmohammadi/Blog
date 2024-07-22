"use client"
import {Flex} from "@/lib/styledComponents";
import {Button} from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet"
import {CopyRight, Icons} from "@/components/icons";
import Link from "next/link";

const Header = () => {

    return (

      <header className=" flex flex-row items-center justify-between w-full h-fit lg:py-4 py-3  z-20 px-5 lg:px-11 xl:px-14 2xl:px-24 " >
          <h1 className="font-bold cursor-pointer lg:text-2xl text-sm " >DEVBLOG<span className="text-primary lg:text-sm text-xs font-bold" >.blog</span >
          </h1 >
          <ul className="lg:flex flex-row  lg:gap-x-10 xl:gap-x-24 hidden  items-center" >
              <Flex className="lg:gap-x-6 xl:gap-x-12 cursor-pointer font-semibold text-sm" >
                  <li className="hover:bg-[#E4E5E9] py-3 px-2 rounded-lg" >Search</li >
                  <li className="hover:bg-[#E4E5E9] py-3 px-2 rounded-lg" >AboutMe</li >
                  <li className="hover:bg-[#E4E5E9] py-3 px-2 rounded-lg" >category</li >
                  <li className="hover:bg-[#E4E5E9] py-3 px-2 rounded-lg" >
                      <Link href={"/"}>
                          Home
                      </Link>
                  </li >
              </Flex >
             <div>
                 <Button className="bg-primary font-semibold text-sm px mr-2" >By me a Coffee ☕</ Button >
                 <Button className="bg-transparent hover:text-white border-primary border-2 text-primary font-semibold text-sm " >
                     <Link href="/Login">
                         Login
                     </Link>
                 </ Button >
             </div>
          </ul >
          <div className="flex lg:hidden" >
              <Sheet >
                  <SheetTrigger >
                      <Icons.alignJustify />
                  </SheetTrigger >
                  <SheetContent className="flex flex-col list-none justify-center " >
                      <SheetHeader className="mb-auto" >
                          <SheetTitle className="text-sm font-semibold" >Menu</SheetTitle >
                          <SheetDescription className="text-xs" >
                              chose your page
                          </SheetDescription >
                          <div className="w-full h-1 bg-gray-500 " ></div >
                          <li className="text-center text-sm py-2 w-full border rounded-xl bg-primary hover:opacity-80 hover:text-black text-white" >Login</li >
                          <li className="text-center text-sm py-2 w-full border rounded-xl hover:bg-primary hover:text-white" >Search</li >
                          <li className="text-center text-sm py-2 w-full border rounded-xl hover:bg-primary hover:text-white" >AboutMe</li >
                          <li className="text-center text-sm py-2 w-full border rounded-xl hover:bg-primary hover:text-white" >category</li >
                          <li className="text-center text-sm py-2 w-full border rounded-xl hover:bg-primary hover:text-white" >Home</li >
                      </SheetHeader >
                      <SheetFooter >
                          <div className="flex items-center text-xs text-gray-400 w-full" >
                          copy Right 2024<CopyRight />
                          </div >
                      </SheetFooter >
                  </SheetContent >
              </Sheet >

          </div >
      </header >


    );
};

export default Header;
