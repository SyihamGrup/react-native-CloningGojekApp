
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>

        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
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

          {/* Main Features */}
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 0, marginTop: 18}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}}>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 65, height: 65, borderWidth: 1, borderColor: '#efefef', borderRadius:18, justifyContent: 'center', alignItem: 'center'}}>
                  <Image source={require('./icons/go-ride.png')} style={{width: 55, height: 55, alignSelf: 'center'}}/>
                </View>
                <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-RIDE</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 65, height: 65, borderWidth: 1, borderColor: '#efefef', borderRadius:18, justifyContent: 'center', alignItem: 'center'}}>
                  <Image source={require('./icons/go-food.png')} style={{width: 55, height: 55, alignSelf: 'center'}}/>
                </View>
                <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-FOOD</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 65, height: 65, borderWidth: 1, borderColor: '#efefef', borderRadius:18, justifyContent: 'center', alignItem: 'center'}}>
                  <Image source={require('./icons/go-box.png')} style={{width: 55, height: 55, alignSelf: 'center'}}/>
                </View>
                <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-BOX</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 65, height: 65, borderWidth: 1, borderColor: '#efefef', borderRadius:18, justifyContent: 'center', alignItem: 'center'}}>
                  <Image source={require('./icons/go-massage.png')} style={{width: 55, height: 55, alignSelf: 'center'}}/>
                </View>
                <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-MASSAGE</Text>
              </View>
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}}>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 65, height: 65, borderWidth: 1, borderColor: '#efefef', borderRadius:18, justifyContent: 'center', alignItem: 'center'}}>
                  <Image source={require('./icons/go-tix.png')} style={{width: 55, height: 55, alignSelf: 'center'}}/>
                </View>
                <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-TIX</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 65, height: 65, borderWidth: 1, borderColor: '#efefef', borderRadius:18, justifyContent: 'center', alignItem: 'center'}}>
                  <Image source={require('./icons/go-clean.png')} style={{width: 55, height: 55, alignSelf: 'center'}}/>
                </View>
                <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-CLEAN</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 65, height: 65, borderWidth: 1, borderColor: '#efefef', borderRadius:18, justifyContent: 'center', alignItem: 'center'}}>
                  <Image source={require('./icons/go-car.png')} style={{width: 55, height: 55, alignSelf: 'center'}}/>
                </View>
                <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-CAR</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 65, height: 65, borderWidth: 1, borderColor: '#efefef', borderRadius:18, justifyContent: 'center', alignItem: 'center'}}>
                  <Image source={require('./icons/more-main-section.png')} style={{width: 55, height: 55, alignSelf: 'center'}}/>
                </View>
                <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>MORE</Text>
              </View>
            </View>
            
          </View>

          <View style={{height: 17, backgroundColor: '#F2F2F5', marginTop: 20}}></View>

          {/* News Section */}
          <View style={{paddingTop: 17, paddingHorizontal: 17}}>
            <View style={{position: 'relative'}}>
              <Image source={require('./dummy/sepak-bola.jpg')} style={{height: 170, width: '100%', borderRadius: 6}}/>
              <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6}}></View>
              <Image source={require('./logo/gojek-white.png')} style={{height: 15, width: 55, position: 'absolute', top: 16, left: 16}}/>
            </View>
            <View style={{paddingTop: 16, paddingBottom: 20, borderBottomColor: '#E8E9EC', borderBottomWidth: 1}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>GO-NEWS</Text>
              <Text style={{fontSize: 14, fontWeight:'normal', color: '#7A7A7A', marginBottom: 11}}>Liverpool sneak win at Huddersfield to continue unbeaten run - Premier League 2018-2019</Text>
              <TouchableOpacity style={{backgroundColor: '#45AB4A', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', alignItems: 'center'}}>READ</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Go-Food Banner */}
          <View style={{padding: 17}}>
            <View style={{position: 'relative'}}>
              <Image source={require('./dummy/food-banner.jpg')} style={{height: 170, width: '100%', borderRadius: 6}}/>
              <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.1, borderRadius: 6}}></View>
              <Image source={require('./logo/gojek-white.png')} style={{height: 15, width: 55, position: 'absolute', top: 16, left: 16}}/>
              <View style={{position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16}}>
                <View style={{position: 'relative'}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8}}> FREE GO-FOOD voucher</Text>
                  <Text style={{fontSize: 13, fontWeight: '400', color: 'white'}}> Quick, before they run out!</Text>
                </View>
                <View style={{flex: 1, paddingLeft: 16}}>
                  <TouchableOpacity style={{backgroundColor: '#45AB4A', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'stretch', borderRadius: 4}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white', alignSelf: 'center'}}>GET VOUCHER</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{borderBottomColor: '#E8E9EC', borderBottomWidth: 1, marginTop: 16, marginBottom: 20}}></View>
          </View>

        </ScrollView>

        {/* Bottom NAvigation */}
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
