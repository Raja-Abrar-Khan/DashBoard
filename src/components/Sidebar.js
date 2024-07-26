import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar(){
  
    return(
<div className="bg-gray-200 h-screen h-full p-4 w-1/4">
    <div className="flex flex-row justify-between mb-4">
        <div>
        <button className="bg-indigo-700 text-white text-xs pt-1 pb-1 pl-2 pr-2">
          <div>24</div>
          <div>fixed Camera</div> 
        </button>
       <button className="bg-gray-400 text-xs pt-1 pb-1 pl-1 pr-1 ml-4 ">
         <div>10</div>
         <div>Movable Camera</div> 
       </button>
       </div>
       <div className="bg-cyan-300  p-2 rounded-full ml-2">
       <i class="fa-solid fa-magnifying-glass"></i>
       
    </div>
   
       </div>
        
    <div>
    
        <ul className="bg-white p-1 m-1 w-full text-left mb-2 text-base shadow-md rounded">Cam ID - Camera #1</ul>
        <ul className="bg-white p-1 m-1 w-full text-left mb-2 text-base shadow-md rounded">Cam ID - Camera #2</ul>
        <ul className="bg-white p-1 m-1 w-full text-left mb-2 text-base shadow-md rounded">Cam ID - Camera #3</ul>
        <ul className="bg-violet-400 p-1 m-1 w-full text-white text-left mb-2 text-base shadow-md rounded">Cam ID - Camera #4</ul>
        <ul className="bg-white p-1 m-1 w-full text-left mb-2 text-base shadow-md rounded">Cam ID - Camera #5</ul>
        < ul className="bg-white p-1 m-1 w-full text-left mb-2 text-base shadow-md rounded">Cam ID - Camera #6</ul>
        <ul className="bg-white p-1 m-1 w-full text-left mb-2 text-base shadow-md rounded">Cam ID - Camera #7</ul>
        <ul className="bg-white p-1 m-1 w-full text-left mb-2 text-base shadow-md rounded">Cam ID - Camera #8</ul>
        <ul className="bg-white p-1 m-1 w-full text-left mb-2 text-base shadow-md rounded" >Cam ID - Camera #9</ul>
        <ul className="bg-white p-1 m-1 w-full text-left mb-2 text-base shadow-md rounded">Cam ID - Camera #10</ul>
        <ul className="bg-white p-1 m-1 w-full text-left mb-2 text-base shadow-md rounded">Cam ID - Camera #11</ul>
        <ul className="bg-white p-1 m-1 w-full text-left mb-2 text-base shadow-md rounded">Cam ID - Camera #12</ul>
        <ul className="bg-white p-1 m-1 w-full text-left mb-2 text-base shadow-md rounded">Cam ID - Camera #13</ul>
        <ul className="bg-white p-1 m-1 w-full text-left mb-2 text-base shadow-md rounded">Cam ID - Camera #14</ul>
        <ul className="bg-white p-1 m-1 w-full text-left mb-2 text-base shadow-md rounded">Cam ID - Camera #15</ul>
        <ul className="bg-white p-1 m-1 w-full text-left mb-2 text-base shadow-md rounded">Cam ID - Camera #16</ul>
        <ul className="bg-white p-1 m-1 w-full text-left mb-2 text-base shadow-md rounded">Cam ID - Camera #17</ul>
        <ul className="bg-white p-1 m-1 w-full text-left mb-2 text-base shadow-md rounded">Cam ID - Camera #18</ul>
    </div>
</div>


    );
}
export default Sidebar;
