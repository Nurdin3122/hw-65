import React from 'react';
import {Page} from "../../type.ts";
import {Link} from "react-router-dom";

interface Props {
    page:Page;
}

const PageOne:React.FC<Props> = ({page}) => {
    return (
        <>
            <Link to={`/pages/${page.id}`}>
                <div className="card mt-3 text-center">
                    <div className="card-body">
                        <h5 className="card-title">{page.title} </h5>
                    </div>
                </div>
            </Link>

        </>
    );
};

export default PageOne;