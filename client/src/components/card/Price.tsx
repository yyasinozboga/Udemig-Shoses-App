type Props = {
  price: number;
  discount: number;
};

const Price = ({ price, discount }: Props) => {
  if (discount) {
    price = (price * (100 - discount)) / 100;
  }

  return (
    <span className={discount ? "text-yellow" : "text-white"}>${price}</span>
  );
};

export default Price;
