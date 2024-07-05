export interface Page {
    id:string;
    title:string;
    text:string;
}

export type ApiPage = Omit<Page, "id">

export interface ApiPageList {
[id:string]:ApiPage;
}