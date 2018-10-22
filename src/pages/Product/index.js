import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, TextInput, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { colors } from 'styles';
import Buttom from 'components/Button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductActions } from 'store/ducks/product';

import styles from './styles';

class Product extends Component {
  static navigationOptions = () => ({
    title: 'Cadastro de Produto',
    headerTitleStyle: styles.headerTitle,
    headerStyle: styles.header,
  });
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    createProductRequest: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    price: 0,
  };

  validateFields = () => {
    if (this.state.name === '') {
      Alert.alert('Informe um nome!');
      return false;
    } else if (this.state.price === '') {
      Alert.alert('Informe um preço válido!');
      return false;
    }
    return true;
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.containerDados}>
          <TextInput
            style={styles.input}
            autoCapitalize="words"
            autoCorrect={false}
            placeholder="Nome"
            underlineColorAndroid="transparent"
            placeholderTextColor={colors.whiteTransparent}
            value={this.state.name}
            onChangeText={nameInput => this.setState({ name: nameInput })}
          />
          <TextInputMask
            ref={(ref) => {
              this.txtPrice = ref;
            }}
            type="money"
            options={{
              format: 'R$ 0,00',
            }}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Preço"
            underlineColorAndroid="transparent"
            placeholderTextColor={colors.whiteTransparent}
            value={this.state.price}
            onChangeText={() => this.setState({ price: this.txtPrice.getRawValue() })}
          />
          <Buttom
            title="Gravar"
            type="full"
            loading={this.props.loading}
            onPress={() => {
              if (this.validateFields() === true) {
                this.props.createProductRequest(this.state);
                this.setState({ name: '', price: '0' });
              }
            }}
          />
          <View style={styles.footer} />
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Product);
