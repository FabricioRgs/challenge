/* core */
import { createStackNavigator } from 'react-navigation';
import { colors } from 'styles';

/* Screens */
import Login from 'pages/Login';
import Home from 'pages/Home';
import Product from 'pages/Product';

const Routes = createStackNavigator(
  {
    login: { screen: Login },
    home: { screen: Home },
    product: { screen: Product },
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
