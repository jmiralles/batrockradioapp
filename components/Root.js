import React, { Component } from 'react';
import PodcastList from '../components/podcastList';

import {
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import clrs from '../utils/clrs';

class batrockradio extends Component {
  render() {
    return (
      <View style={clrs.container}>
        <Text style={clrs.instructions}>
          Welcome to Batrock Radio!
        </Text>
        <PodcastList />
        <StatusBar backgroundColor={clrs.black} barStyle='light-content'/>
      </View>
    );
  }
}

export default batrockradio;