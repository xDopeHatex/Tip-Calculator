import { NewItemForm } from "../components/NewItemForm";
import { connect } from "react-redux";
import { addNewItem } from "../store/items/actions";
import { bindActionCreators } from "redux";

const mapDispatchToProps = {
  onSubmit: (name, price) => addNewItem(name, price),
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
