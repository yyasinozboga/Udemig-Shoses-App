type Props = {
  isNew: boolean;
  discount: number;
  designs?: string;
};

const Badge = ({ isNew, discount, designs }: Props) => {
  return (
    (discount || isNew) && (
      <span
        className={`${designs} absolute top-0 left-0 text-white rounded-br-[12px] lg:rounded-br-[18px] px-2 py-1 lg:px-4 lg:py-3 ${
          discount ? "bg-yellow" : "bg-blue"
        }`}
      >
        {discount ? `%${discount} indirim` : isNew && "Yeni"}
      </span>
    )
  );
};

export default Badge;
