import React, { Component } from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductActions } from 'store/ducks/product';

import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
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
    setProductFilter: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.onChangeTextDelayed = _.debounce(this.searchProduct, 500);
  }

  state = {
    searchInput: '',
  };

  searchProduct = (name) => {
    this.props.setProductFilter(name);
  };

  handleProduct = item => (
    <TouchableOpacity
      style={styles.containerItem}
      activeOpacity={0.6}
      onPress={() => {
        this.props.navigation.navigate('details');
      }}
    >
      <Text style={styles.txtName}>{item.name}</Text>
      <View style={styles.line}>
        <Text style={styles.txtPrice}>R$ {item.price.toFixed(2).replace('.', ',')}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.primaryDarker} barStyle="light-content" />
        <View style={styles.searchSection}>
          <View>
            <IconAwesome style={styles.searchIcon} name="search" size={20} />
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder=""
              underlineColorAndroid="transparent"
              placeholderTextColor={colors.whiteTransparent}
              value={this.state.searchInput}
              onChangeText={(input) => {
                this.onChangeTextDelayed(input);
                this.setState({ searchInput: input });
              }}
            />
          </View>
        </View>
        <ScrollView style={styles.scroll}>
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

const getProducts = (todos, filter) => {
  if (filter) {
    return todos.filter(t => t.name.startsWith(filter));
  }

  return todos;
};

const mapStateToProps = state => ({
  products: getProducts(state.product.data, state.product.filter),
  loading: state.product.loading,
  filter: state.product.filter,
});
const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
