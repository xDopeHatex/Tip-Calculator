import { MenuItem } from "../components/MenuItem";
import { connect } from "react-redux";
import {
  removeItem,
  updatePriceItem,
  updateQuantityItem,
} from "../store/items/actions";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => {
      dispatch(removeItem(ownProps.uuid));
    },
    updatePrice: (price) => dispatch(updatePriceItem(ownProps.uuid, price)),
    updateQuantity: (quantity) =>
      dispatch(updateQuantityItem(ownProps.uuid, quantity)),
  };
};

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
