import { connect } from 'react-redux';
import SnpDetail from './snp_detail';
import { requestSnp } from '../../actions/snp_actions';

const mapStateToProps = state => ({
  snp: state.snp
});

const mapDispatchToProps = dispatch => ({
  requestSnp: (id) => dispatch(requestSnp(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SnpDetail);
