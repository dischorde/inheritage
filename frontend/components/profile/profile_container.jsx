import { connect } from 'react-redux';
import Profile from './profile';
import {requestProfile} from '../../actions/profile_actions';

const mapStateToProps = state => ({
    profile: state.profile
  });

const mapDispatchToProps = dispatch => ({
    requestProfile: (id) => dispatch(requestProfile(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
