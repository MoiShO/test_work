import { connect } from 'react-redux';
import { articleFetchData } from '../../actions/index';
import ItemList from "./List.jsx"
import "./list-style.css"

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.arcticleHasErrored,
        isLoading: state.arcticleIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(articleFetchData(url))
    };
};

const List = connect(mapStateToProps, mapDispatchToProps)(ItemList);

export default List