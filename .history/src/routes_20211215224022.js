import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Appstack = createStackNavigator();

import Incidents from './pages/incidents';
import Detail from './pages/details';

export default function Routes() {
  return (
    <NavigationContainer>

      <Appstack.Navigator>
        <Appstack.Screen component={Incidents}/>
        <Appstack.Screen component={Detail}/>
      </Appstack.Navigator>

    </NavigationContainer>
  )
}