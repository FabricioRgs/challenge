/* core */
import { createStackNavigator } from 'react-navigation';
import { colors } from 'styles';

/* Screens */
import Login from 'pages/Login';
import Home from 'pages/Home';
import Product from 'pages/Product';
import Details from 'pages/Details';

const Routes = createStackNavigator(
  {
    login: { screen: Login },
    home: { screen: Home },
    product: { screen: Product },
    details: { screen: Details },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
    },
  },
);

export default Routes;
