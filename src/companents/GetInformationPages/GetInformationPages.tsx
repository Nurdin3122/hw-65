import React from 'react';
import {Page} from "../../type.ts";

interface Props {
    page:Page[];
}

const GetInformationPages:React.FC<Props> = ({page}) => {
    return (
        <div>
            <h3>it is page</h3>
            
        </div>
    );
};

export default GetInformationPages;