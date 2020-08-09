import { connect } from 'react-redux';
import ItemList from '../components/ItemList';

const mapStateToProps = state => {
  return {
    itemList: state.itemList
  };
};

const ItemListContainer = connect(mapStateToProps)(ItemList);

export default ItemListContainer;