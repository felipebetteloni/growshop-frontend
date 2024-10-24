export class Product {
    id!: string;
    userId!: string;
    categoryId!: string;
    sub_categoryId!: string;
    brandId!: string;
    name!: string;
    description!: string;
    conditionId!: string;
    price!: number;
    countryId!: string | null;
    stateId!: string | null;
    cityId!: string | null;
    neighbourhoodId!: string | null;
    zip_code!: string | null;
    createdAt!: Date;
    approvedAt!: Date | null;
    updatedAt!: Date | null;
    isActive!: boolean;
    isPromoted!: boolean;
    viewCount!: number | null;
    //user?: User;
    //category?: Category;
    //sub_category?: SubCategory;
    //brand?: Brand;
    //condition?: Condition;
    //country?: Country | null;
    //state?: State | null;
    //city?: City | null;
    //neighbourhood?: Neighbourhood | null;
    //favorites?: Array<Favorite>;
    //comments?: Array<Comment>;
    //img_urls?: Array<ProductImg>;
    //report?: Report | null;
    //shares?: Array<Share>;
    //_count?: ProductCount;
}
