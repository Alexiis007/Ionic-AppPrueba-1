export interface DataAPI {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    results:     Result[];
}


export interface Result {
    _id:         string;
    name:        string;
    description: string;
    price:       number;
    category:    Category;
    image:       string;
    active:      boolean;
}

export enum Category {
    Hombre = "hombre",
    Mujer = "mujer",
    Niño = "niño",
}
