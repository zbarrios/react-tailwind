import { useState } from "react";
import {SearchBar} from "./SearchBar";

function Header({text,handleChangeText}) {
  
  return (
    <>
      <div className="w-9/12 mx-auto flex justify-between my-16">
        <div className="ml-7 w-3/12">
          <span className="text-red-600 font-extrabold">COMICS</span>
          <p className="font-extrabold text-4xl">DISCOVER ALL COMICS</p>
        </div>
        <SearchBar searchText={text} handleChangeText={handleChangeText}></SearchBar>
      </div>
    </>
  );
}

export default Header;
