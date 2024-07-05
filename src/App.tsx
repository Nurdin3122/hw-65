
import './App.css'
import {Route, Routes,} from "react-router-dom";
import Header from "./container/Header/Header.tsx";
import Redactor from "./companents/Redactor/Redactor.tsx";
import GetInformationPages from "./companents/GetInformationPages/GetInformationPages.tsx";
import {useState} from "react";
import {Page} from "./type.ts";

const App = () => {
    const [pages, setPages] = useState<Page[]>([]);


   return (
       <>
           <header>
               <Header/>
           </header>

           <main>
               <Routes>
                   <Route path="/" element={<GetInformationPages page={pages}/>}/>
                   <Route path="/about" element={<GetInformationPages page={pages}/>}/>
                   <Route path="/contacts" element={<GetInformationPages page={pages}/>}/>
                   <Route path="/divisions" element={<GetInformationPages page={pages}/>}/>
                   <Route path="/admin" element={<Redactor/>}/>
                   <Route path="*" element={<h4>Sorry not found</h4>}/>
               </Routes>
           </main>
       </>
       )
};

export default App
