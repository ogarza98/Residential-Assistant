import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import { Component } from 'react';
//import { Left, Right, Icon } from 'native-base';

class LaundryPage extends Component {
    // static navigationOptions = {
    //     drawerIcon: ({ tintColor }) => (
    //         <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
    //     )
    // }

    state = {
        key: 1
      };

    resetWebViewToInitialUrl = () => {
        this.setState({
          key: this.state.key + 1
        });
      };

    reload(){
      this.myWebView.reload()
    } 

    goBack(){
      this.myWebView.goBack()
    }

    goForward(){
      this.myWebView.goForward()
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.toggleDrawer() }}
                    centerComponent={{ text: 'Laundry', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'notifications', color: '#fff', onPress: () => this.props.navigation.navigate('Notifications') }}
                />
              <WebView 
                source={{uri: 'http://washalert.washlaundry.com/washalertweb/utsa/utsa.html'}}
                style={{flex: 1}}
                originWhitelist={['*']}
                ref={(ref) => this.myWebView = ref}
                key={ this.state.key }
              />
              <Button onPress={()=>this.reload()} title="Reload" />
              <Button onPress={()=>this.resetWebViewToInitialUrl()} title="Initial" />
              <Button onPress={()=>this.goBack()} title="Go Back" />
              <Button onPress={()=>this.goForward()} title="Go Forward" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default LaundryPage;

