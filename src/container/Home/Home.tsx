import {Link} from "react-router-dom";
import React from "react";
import {Page} from "../../type.ts";
import PageOne from "../../companents/Page/PageOne.tsx";

interface Props {
    pages:Page[];
}

const Home:React.FC<Props> = ({pages}) => {
    return (
        <>
            <div className="row">
                {pages.map((page) => (
                    <PageOne page={page}/>
                ))}
            </div>
        </>
    );
};

export default Home;