/***
 * @author Shiming Chen <chen@lemontv.me>
 */

import React from 'react';
import classNames from 'classnames';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    props.fetchUserProfile();

    this.state = {
      counter: 0
    }
  }

  handleClickYes = () => {
    const { counter } = this.state
    const { user } = this.props

    if (!user.isLoading && counter < 5) {
      this.setState({
        counter: this.state.counter + 1
      })
      this.props.fetchUserProfile();
    }
  }

  handleClickNo = () => {
    const { counter } = this.state
    const { user } = this.props

    if (!user.isLoading && counter < 5) {
      this.props.fetchUserProfile();
    }
  }

  render() {
    const { user } = this.props
    const { counter } = this.state

    return (
      <div className="App">
        <Header counter={counter} />
        <Main user={user} />
        <Footer
          counter={counter}
          isLoading={user.isLoading}
          onClickNo={this.handleClickNo}
          onClickYes={this.handleClickYes}
        />
      </div>
    );
  }
}

const Header = ({counter}) => (
  <div className="header">
    <div className="nav-title">
      Gender Neutral Dating App
    </div>
    <div className={classNames("nav-badge", { actived: counter >= 5 })}>
      {counter}
    </div>
  </div>
)

const Loading = () => (
  <div className="loading">
    Loading...
  </div>
)

const Main = ({user}) => (
  <div className="main-content">
    { user.isLoading && <Loading /> }
    { !user.isLoading && <UserProfile profile={user.profile} /> }
  </div>
)

const UserProfile = ({profile}) => (
  <div className="user-profile">
    <div className="user-picture" style={{backgroundImage: `url(${profile.picture.large})`}}> </div>
    <div className="user-name">
      {profile.name.first} {profile.name.last}
    </div>
    <div className="user-age">
      ({profile.dob.age})
    </div>
  </div>
)

const Footer = ({onClickYes, onClickNo, counter, isLoading}) => (
  <div className={classNames("footer", { disabled: counter >= 5 || isLoading })}>
    <div className="btn btn-no" onClick={onClickNo}>
      No
    </div>

    <div className="btn btn-yes" onClick={onClickYes}>
      Yes
    </div>
  </div>
)
