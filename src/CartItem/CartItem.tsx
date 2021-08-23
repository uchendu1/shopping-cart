import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";

import { CartItemType } from "../App";

//styles
import { Wrapper } from "./CartItem.styles";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

export const CartItem: React.FC<Props> = ({
  item,
  addToCart,
  removeFromCart,
}) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="info">
          <p>Price : ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="button">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>Qty : {item.amount}</p>

          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
};
