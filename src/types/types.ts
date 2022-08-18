interface IImageProductProps {
  alt: string;
  asset: {
    url: string;
  };
}

interface ICategoryProductProps {
  _id: string;
  name: string;
}

export interface IProductsProps {
  name: string;
  shortDescription: string;
  id: string;
  images: IImageProductProps[];
  category: ICategoryProductProps;
}
