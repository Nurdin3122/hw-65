import React, {useCallback, useEffect, useState} from 'react';
import {ApiPage,  Page } from "../../type.ts";
import axiosApi from "../../axiosApi.ts";

interface Props {
    pages:Page[];
}


const Redactor:React.FC<Props> = ({pages,existing}) => {
    const [page, setPage] = useState<Page[]>([])
    const [selected, setSelected] = useState<string>('');


    const fetchOnePage= useCallback(async () => {
        const {data:dish} = await axiosApi.get<ApiPage | null>(`/dishes/${selected}.json`);
        setPage(dish)

    },[selected]);

    useEffect(() => {
        void fetchOnePage();
    }, [fetchOnePage]);


    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    const changeSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(event.target.value);
    }


    return (

        <form onSubmit={onFormSubmit}>
            <h2 className="text-center">Redactor</h2>
            <div className="container">
                <h1>Admin Panel</h1>
                <select className="form-select" value={selected} onChange={changeSelected}>
                    <option>Select a page</option>
                    {pages.map(page => (
                        <option>{page.id}</option>
                    ))}
                </select>
                <p>Вы выбрали: {selected}</p>
                <div>
                    <input
                        type="text"
                        name="title"
                        id="text"
                        required
                        className="form-control"

                    />
                    <textarea
                        className="form-control my-2"
                        placeholder="Content"
                        name="text"
                        id="text"
                    />
                    <button className="btn btn-primary">Save</button>
                </div>
            </div>

        </form>

    );
};

export default Redactor;