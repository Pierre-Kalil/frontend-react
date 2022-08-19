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

export interface ICardProductProps {
  product: IProductsProps;
}

export interface IInputProps {
  placeholder?: string;
  value?: string | number;
  onChange?: (e: any) => void;
}
