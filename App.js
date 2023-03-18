import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/components/HomePage.js';
import Call from './app/components/CallPage.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home"
          component={ Home }
          options={ {
            title: "Home",
            headerShown: false,
          } }
        />
        <Stack.Screen 
          name="Call"
          component={ Call }
          options={ {
            title: "Call",
            headerShown: false,
          } }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
