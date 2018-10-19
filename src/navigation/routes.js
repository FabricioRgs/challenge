/* core */
import { createStackNavigator } from 'react-navigation';

/* Screens */
import Login from 'pages/Login';
import Home from 'pages/Home';

const Routes = createStackNavigator({
  login: { screen: Login },
  home: { screen: Home },
});

export default Routes;
