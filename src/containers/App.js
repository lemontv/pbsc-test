import { connect } from 'react-redux'
import { fetchUserProfile } from 'store/user'
import App from 'components/App'

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = {
  fetchUserProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
