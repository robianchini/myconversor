import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Currency from './pages/Currency';
import Temperature from './pages/Temperature';
import Fuel from './pages/Fuel';
import Area from './pages/Area';
import Speed from './pages/Speed';
import Weight from './pages/Weight';
import Timezone from './pages/Timezone';
import Length from './pages/Length';
import Purchase from './pages/Purchase';
import Volume from './pages/Volume';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Currency,
    Temperature,
    Fuel,
    Area,
    Speed,
    Weight,
    Timezone,
    Length,
    Purchase,
    Volume,
  })
);

export default Routes;