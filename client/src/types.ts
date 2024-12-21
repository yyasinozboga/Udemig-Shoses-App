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

interface initialValue {
  name: string;
  picture: string[];
  discount: number;
  price: number;
  amount: number;
  size: string | null;
  color: string | null;
}

interface ShoseFromBagType extends initialValue {
  _id: string;
}

interface ShoeDetailType extends ShoseType {
  color: string;
  description: string;
  size: string;
  gender: string;
}

export {
  ParamsType,
  ShoseType,
  ShoeDetailType,
  ShoseFromBagType,
  initialValue,
};
