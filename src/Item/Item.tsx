import Button from "@material-ui/core/Button";
//types
import { CartItemType } from "../App";
//styles
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

export const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button
        style={{
          backgroundColor: "#12824C",
          color: "#FFFFFF",
          fontSize: "16px",
        }}
        onClick={() => handleAddToCart(item)}
      >
        Add To Cart
      </Button>
    </Wrapper>
  );
};
