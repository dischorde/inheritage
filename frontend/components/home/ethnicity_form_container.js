import { connect } from 'react-redux';
import EthnicityForm from './ethnicity_form';
import { requestEthnicities } from '../../actions/ethnicity_actions';
import { createProfile } from '../../actions/profile_actions';

const mapStateToProps = state => ({
  ethnicities: state.ethnicities
});

const mapDispatchToProps = dispatch => ({
  requestEthnicities: () => dispatch(requestEthnicities()),
  createProfile: (profile) => dispatch(createProfile(profile))
});

export default connect(mapStateToProps, mapDispatchToProps)(EthnicityForm);
