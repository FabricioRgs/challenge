/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/user';

/* Presentational */
import { Modal as ModalNative, View } from 'react-native';

import Button from 'components/Button';
import Input from 'components/Input';

import styles from './styles';

class Modal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    createUserRequest: PropTypes.func.isRequired,
  };

  state = {
    login: '',
    password: '',
  };

  componentWillMount() {}

  saveUser = () => {
    this.props.createUserRequest({ login: this.state.login, password: this.state.password });
    this.clean();
  };

  clean = () => this.setState({ login: '', password: '' });

  closeModal = () => {
    this.props.onCloseModal();
  };

  render() {
    return (
      <ModalNative
        animationType="slide"
        visible={this.props.visible}
        transparent
        onRequestClose={() => {}}
      >
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Input
              placeholder="Login"
              type="none"
              secondary
              value={this.state.login}
              onChangeText={(login) => {
                this.setState({ login });
              }}
            />
            <Input
              placeholder="Senha"
              type="none"
              secondary
              value={this.state.password}
              onChangeText={(password) => {
                this.setState({ password });
              }}
            />
            <Button title="Salvar" type="full" onPress={this.saveUser} />
            <Button onPress={this.closeModal} type="clean" title="Cancelar" />
          </View>
        </View>
      </ModalNative>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Modal);
