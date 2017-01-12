import React, {Component} from 'react'
import store from '../store'
import Login from '../components/Login'

export default class extends Component {

  constructor() {
    super();
    this.state = store.getState().login;
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().login);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return <Login />;
  }

}