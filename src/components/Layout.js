import React from "react";
import Sidebar from "./Sidebar";
import Analytics from "./Analytics";
function Layout(){
return(
    <div className="flex flex-row h-screen w-screen">
       <Sidebar/>
             
         <Analytics/>
        </div>
   
)
}
export default Layout;