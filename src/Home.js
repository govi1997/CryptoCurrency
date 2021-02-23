import React from 'react';
import {View, Text} from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text
          onPress={() => {
            this.props.navigation.navigate('DashBoard');
          }}>
          Home
        </Text>
      </View>
    );
  }
}

export default Home;
