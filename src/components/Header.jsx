import {  Search } from "lucide-react"
import { FaHeart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";




import Button from "./Buttons"


function Header() {
  return (
    <div className="flex flex-row w-5/6 ml-auto gap-10 mr-auto items-center justify-between py-5">
        <div className="flex flex-col gap-3">
            <h1 className="font-bold text-red-500 text-xl">BookUsNow</h1>
            <div className="sm:hidden flex flex-col ">
                <FaLocationDot />
                Mumbai, India
                <FaAngleRight />
            </div>

        </div>
        <div className="hidden sm:flex flex-row gap-2 flex-1">
            <div><Button /></div>
            <div className="flex w-full rounded-lg flex-row justify-between border border-gray-300 py-2 px-3">
                <input type="text" placeholder="Search..."className="w-full outline-none focus:outline-none" />
                <Search className="text-gray-400 h-5 w-5"/>
            </div>
        </div>
        <div className="flex flex-row gap-3 items-center">
            <div className="flex flex-row gap-3 text-sm items-center sm:gap-3" >
            <Search className=" sm:hidden text-gray-400 h-5 w-5"/>
            <FaHeart className="text-gray-400 sm:h-4 sm:w-4 h-5 w-5"/>
            <FaUserAlt className="sm:hidden text-gray-400 h-5 w-5" />
            <p className="hidden sm:block">Favorites</p>
            </div>
            <button className="hidden sm:block border border-gray-100 px-3 py-2 rounded-lg text-sm">
            Sign In
            </button>
        </div>
    </div>
  )
}

export default Header