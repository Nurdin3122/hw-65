import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ApiPage} from "../../type.ts";
import axiosApi from "../../axiosApi.ts";


const GetInformationPages:React.FC = () => {
    const {id} = useParams()
    const [page, setPage] = useState<ApiPage | null>(null);

    const newDish = useCallback(async () => {
        const {data:page} = await axiosApi.get<ApiPage | null>(`/pages/${id}.json`);
        setPage(page)

    },[id]);

   useEffect(() => {
       void newDish();
   },[newDish])
    return (
        <>
            <div className="row text-center mt-5">
                <h3 className="">This page is {page?.title}</h3>
                <div className="col">
                    <p className="mb-2">{page?.title}</p>
                    <p className="mb-2">{page?.text}</p>
                </div>
            </div>

        </>
    );
};

export default GetInformationPages;