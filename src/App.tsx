
import './App.css'
import {Route, Routes,} from "react-router-dom";
import Header from "./container/Header/Header.tsx";
import Redactor from "./companents/Redactor/Redactor.tsx";
import GetInformationPages from "./companents/GetInformationPages/GetInformationPages.tsx";
import {useCallback, useEffect, useState} from "react";
import {ApiPage, ApiPageList, Page} from "./type.ts";
import axiosApi from "./axiosApi.ts";
import Home from "./container/Home/Home.tsx";

const App = () => {
    const [pages, setPages] = useState<Page[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchPages = useCallback(async () => {
        try {
            const {data:page} = await axiosApi.get<ApiPageList | null>("/pages.json");
            if(!page) {
                setPages([]);
            } else {
                const newPage = Object.keys(page).map((id) => ({
                    ...page[id],
                    id,
                }))
                setPages(newPage);
            }
        } finally {
            setLoading(false)
        }
    },[]);

    useEffect(() => {
        void fetchPages();
    }, [fetchPages]);


   return (
       <>
           <header>
               <Header/>
           </header>

           <main>
               <Routes>
                   <Route path="/" element={<Home pages={pages}/>}/>
                   <Route path="/pages/:id" element={<GetInformationPages pages={pages}/>}/>
                   <Route path="/pages/:id" element={<GetInformationPages pages={pages}/>}/>
                   <Route path="/pages/:id" element={<GetInformationPages pages={pages}/>}/>
                   <Route path="/pages/:id" element={<GetInformationPages pages={pages}/>}/>
                   <Route path="/pages/:id" element={<GetInformationPages pages={pages}/>}/>
                   <Route path="/pages/admin" element={<Redactor pages={pages}/>}/>
                   <Route path="*" element={<h4>Sorry not found</h4>}/>
               </Routes>
           </main>
       </>
       )
};

export default App
