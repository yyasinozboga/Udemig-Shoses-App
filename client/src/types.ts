interface ParamsType {
  sort?: string;
  size?: string;
  color?: string;
  gender?: string;
  price?: string;
}

interface ShoseType {
  _id: string;
  name: string;
  picture: string[];
  discount: number;
  price: number;
  isNew: boolean;
}

interface ShoeDetailType extends ShoseType {
  color: string;
  description: string;
  size: string;
  gender: string;
}

interface initialValues {
  name: string;
  picture: string[];
  discount: number;
  price: number;
  amount: number;
  size: string | null;
  color: string | null;
}

interface ShoeFromBagType extends initialValues {
  _id: string;
}

export {
  ParamsType,
  ShoseType,
  ShoeDetailType,
  ShoeFromBagType,
  initialValues,
};
