"use client"
import {Container} from "@/lib/styledComponents";

const Header = () => {

    return (
          <header className="flex flex-row items-center justify-between w-full py-4 px-4 md:px-5 lg:px-11 xl:px-14 2xl:px-24" >
              <h1 >LOGO Web Site</h1 >
              <ul className="md:flex flex-row gap-x-5 hidden ">
                  <li >link 1 </li >
                  <li >link 2</li >
                  <li >link 3</li >
              </ul>

              <button >Ckclick me !!</button >
          </header >
    );
};

export default Header;
