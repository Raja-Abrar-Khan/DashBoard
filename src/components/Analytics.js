import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Linegrapha2 from './compo/Linegrapha2';
import { Line, Bar } from "react-chartjs-2";
import { LineChartData } from "./compo/Daata";
import Bargraph1 from './compo/Bargraph1';
import Bargraph2 from './compo/Bargraph2';
import Linegraphb1 from './compo/Linegraphb1';
import Linegraphc1 from './compo/Linegraphc1';
import Linegraphc2 from './compo/Linegraphc2';
import Linegraphc3 from './compo/Linegraphc3';
import Linegraphaa  from './compo/Linegraphaa';




function Analytics() {
    return (

        <div className=" w-full flex flex-col h-full p-2">
            <div className="flex flex-row justify-between mb-1">
                <div className=" font-bold"><a> Analytics</a></div>
                <div className="mr-3 pr-3 rounded-full text-violet-500 border-indigo-500 border-2 " ><a className='pl-3 text-xs font-bold'>Heat Map</a></div>
            </div>

            <div className='bg-black w-full h-px'></div>
            {/* 1 */}
            <div className="flex flex-row p-2">
                <div className='flex-1 border shadow-md '>
                    <div className=' w-full flex flex-col'>
                        <div className="flex flex-row justify-between mb-1">
                            <div className="pl-2 font-bold"><a> PPE-No Hard Hat</a></div>
                            <div className="mt-1 mr-3 pr-3 rounded-full text-violet-500 border-indigo-500 border-2 text-center" ><a className='pl-3 text-xs '>Year</a>
                            </div>
                        </div>
                        <div><Linegraphaa /></div>
                    </div>
                </div>
                <div className='ml-1 flex-1 border shadow-md'> <div className=' w-full flex flex-col'>
                    <div className="flex flex-row justify-between mb-1">
                        <div className="pl-2 font-bold"><a> PPE-No Safety Vest</a></div>
                        <div className="mt-1 mr-3 pr-3 rounded-full text-violet-500 border-indigo-500 border-2 text-center" ><a className='pl-3 text-xs '>Year</a>
                        </div>
                    </div>
                    <div><Linegrapha2 /></div>
                </div></div>
                <div className='ml-1 flex-1 border shadow-md mr-3'> <div className=' w-full flex flex-col'>
                    <div className="flex flex-row justify-between mb-1">
                        <div className="pl-2 font-bold"><a> PPE-No Safety Goggles</a></div>
                        <div className="mt-1 mr-3 pr-3 rounded-full text-violet-500 border-indigo-500 border-2 text-center" ><a className='pl-3 text-xs '>Year</a>
                        </div>
                    </div>
                    <div><Linegraphc2 /></div>
                </div></div>

            </div>

            {/* 2 */}

            <div className="flex flex-row p-2">
                <div className='flex-1 border shadow-md '>
                    <div className=' w-full flex flex-col'>
                        <div className="flex flex-row justify-between mb-1">
                            <div className="pl-2 font-bold"><a> PPE-No Safety Gloves</a></div>
                            <div className="mt-1 mr-3 pr-3 rounded-full text-violet-500 border-indigo-500 border-2 text-center" ><a className='pl-3 text-xs '>Year</a>
                            </div>
                        </div>
                        <div className='w-full'><Bargraph1 /></div>
                    </div>
                </div>
                <div className='ml-1 flex-1 border shadow-md'> <div className=' w-full flex flex-col'>
                    <div className="flex flex-row justify-between mb-1">
                        <div className="pl-2 font-bold"><a> PPE-No Mask</a></div>
                        <div className="mt-1 mr-3 pr-3 rounded-full text-violet-500 border-indigo-500 border-2 text-center" ><a className='pl-3 text-xs '>Year</a>
                        </div>
                    </div>
                    <div><Bargraph2 /></div>
                </div></div>
                <div className='ml-1 flex-1 border shadow-md mr-3'> <div className=' w-full flex flex-col'>
                    <div className="flex flex-row justify-between mb-1">
                        <div className="pl-2 font-bold"><a> Intrusion Alert</a></div>
                        <div className="mt-1 mr-3 pr-3 rounded-full text-violet-500 border-indigo-500 border-2 text-center" ><a className='pl-3 text-xs '>Year</a>
                        </div>
                    </div>
                    <div><Linegraphb1 /></div>
                </div></div>

            </div>

            {/* 3 */}
            <div className="flex flex-row p-2">
                <div className='flex-1 border shadow-md '>
                    <div className=' w-full flex flex-col'>
                        <div className="flex flex-row justify-between mb-1">
                            <div className="pl-2 font-bold"><a> Person of Interest</a></div>
                            <div className="mt-1 mr-3 pr-3 rounded-full text-violet-500 border-indigo-500 border-2 text-center" ><a className='pl-3 text-xs '>Year</a>
                            </div>
                        </div>
                        <div className='w-full'><Linegraphc1 /></div>
                    </div>
                </div>
                <div className='ml-1 flex-1 border shadow-md'> <div className=' w-full flex flex-col'>
                    <div className="flex flex-row justify-between mb-1">
                        <div className="pl-2 font-bold"><a> Unknown Person</a></div>
                        <div className="mt-1 mr-3 pr-3 rounded-full text-violet-500 border-indigo-500 border-2 text-center" ><a className='pl-3 text-xs '>Year</a>
                        </div>
                    </div>
                    <div><Linegraphc2/></div>
                </div></div>
                <div className='ml-1 flex-1 border shadow-md mr-3'> <div className=' w-full flex flex-col'>
                    <div className="flex flex-row justify-between mb-1">
                        <div className="pl-2 font-bold"><a> Object Left Behind</a></div>
                        <div className="mt-1 mr-3 pr-3 rounded-full text-violet-500 border-indigo-500 border-2 text-center" ><a className='pl-3 text-xs '>Year</a>
                        </div>
                    </div>
                    <div><Linegraphc3 /></div>
                </div></div>

            </div>



        </div>

    );
}
export default Analytics;
//