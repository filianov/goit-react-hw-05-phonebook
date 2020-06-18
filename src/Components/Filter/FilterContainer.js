import { connect } from 'react-redux';
import Filter from './Filter';


const mapStateToProps = (state, props) => ({
    value: state.filter,
});

export default connect(mapStateToProps, null)(Filter);
