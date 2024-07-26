import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
    return ( //className="navLinks"
        <div className="w-full flex flex-row justify-between items-center bg-gray-800 h-16 shadow-md">
            <div className="flex flex-row justify-between basis-10/12 space-x-9 pl-4">
                <div className="text-lg font-bold text-blue-400 ">Qualcomm AI Ops </div>
                <nav classname=" align-center">
                    <a href="#" className="p-6 text-blue-400 text-sm ">
                        <i class="fa-solid fa-bell"></i>&nbsp;
                        Alerts</a>

                    <a href="#" className="bg-blue-800 p-6 text-white text-sm ">
                        <i class="fa-solid fa-chart-simple" ></i>&nbsp;
                        Analytics</a>

                    <a href="#" className=" text-blue-400 p-6 text-sm">
                        <i class="fa-solid fa-sliders"></i>&nbsp;
                        Configurations</a>
                </nav>

            </div>
            <div className="flex flex-row space-x-3 pr-4 ">
                <div className="bg-indigo-800 text-white  p-2 rounded-full size-9 mt-1 text-center">PB</div>
                <div className="flex flex-col">
                    <div className=" text-white text-sm">Peter Bishop</div>
                    <div className=" text-white text-xs">Ops Manager</div>

                </div>

            </div>
        </div>


    );
}
export default Navbar;
