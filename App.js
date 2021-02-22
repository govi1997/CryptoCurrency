import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function App(){
 return(
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} />
</Stack.Navigator>
</NavigationContainer>

 )};


// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="light-content" backgroundColor='blue'/>
//       <SafeAreaView>
//         <ScrollView>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };


export default App;
