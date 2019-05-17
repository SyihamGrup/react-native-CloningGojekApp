
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'pink'}}>
          <View>
            <TextInput placeholder="what do you want to eat?" style={{borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20}}/>
            <Image/>
          </View>
          <View></View>
        </View>
        <View style={{height: 54,flexDirection: 'row', backgroundColor: 'white'}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./icons/home-active.png')} style={{width: 26, height: 26}}/>
            <Text style={{fontSize: 10, color: '#39B54A', marginTop: 4}}> Home</Text>
          </View >
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./icons/orders.png')} style={{width: 26, height: 26}}/>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}> Orders</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./icons/chat.png')} style={{width: 26, height: 26}}/>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}> Chat</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./icons/inbox.png')} style={{width: 26, height: 26}}/>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Inbox</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./icons/account.png')} style={{width: 26, height: 26}}/>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}> Account</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
