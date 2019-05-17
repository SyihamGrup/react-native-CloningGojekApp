
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {/* SearchBar */}
          <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 15}}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput placeholder="what do you want to eat?" style={{borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18}}/>
              <Image source={require('./icons/search.png')} style={{ position: 'absolute', height:30, width: 30, left: 12, top: 5}}/>
            </View>
            <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={ require('./icons/promo.png')} style={{width: 30, height: 30}}/>
            </View>
          </View>
          {/* Gopay Section */}
          <View style={{marginHorizontal: 17, marginTop: 10}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2E63BB', borderTopLeftRadius:4, borderTopRightRadius: 4, padding: 14}}>
              <Image source={require('./icons/gopay.png')} style={{height: 18, width: 100}}/>
              <Text style={{fontSize:16, fontWeight: 'bold', color: 'white'}}>Rp50.000</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#3064BD', borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('./icons/pay.png')} style={{width: 40, height:40}}/>
                <Text style={{fontSize:14, fontWeight:'bold', color: 'white', marginTop: 15}}>Pay</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('./icons/nearby.png')} style={{width: 40, height:40}}/>
                <Text style={{fontSize:14, fontWeight:'bold', color: 'white', marginTop: 15}}>Nearby</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('./icons/topup.png')} style={{width: 40, height:40}}/>
                <Text style={{fontSize:14, fontWeight:'bold', color: 'white', marginTop: 15}}>Top Up</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('./icons/more.png')} style={{width: 40, height:40}}/>
                <Text style={{fontSize:14, fontWeight:'bold', color: 'white', marginTop: 15}}>More</Text>
              </View>
            </View>
          </View>

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
