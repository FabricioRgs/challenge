import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductActions } from 'store/ducks/product';

import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

import { colors } from 'styles';
import styles from './styles';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Produtos',
    headerTitleStyle: styles.headerTitle,
    headerStyle: styles.header,
    headerRight: (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate({ routeName: 'product' });
        }}
        style={styles.headerRight}
      >
        <IconAwesome name="plus" size={22} color={colors.white} />
      </TouchableOpacity>
    ),
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    products: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
    })).isRequired,
  };

  handleProduct = (item) => {
    global.Intl = require('intl');
    // const intlMonetary = new Intl.NumberFormat('pt-BR', {
    //   style: 'currency',
    //   currency: 'BRL',
    //   minimumFractionDigits: 2,
    // });
    return (
      <TouchableOpacity
        style={styles.containerItem}
        activeOpacity={0.6}
        onPress={() => {
          this.props.navigation.navigate('details');
        }}
      >
        <Text style={styles.txtName}>{item.name}</Text>
        <View style={styles.line}>
          <Text style={styles.txtPrice}>R$ {item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.props.loading ? (
            <View>
              <ActivityIndicator size="large" color={colors.primary} />
            </View>
          ) : (
            this.props.products.map(item => this.handleProduct(item))
          )}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  products: state.product.data,
  loading: state.product.loading,
});
const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
