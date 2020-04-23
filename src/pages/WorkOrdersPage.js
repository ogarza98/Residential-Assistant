import * as React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import WorkOrderHeader from './PageHeader';

//import { Left, Right, Icon } from 'native-base';

class WorkOrdersPage extends Component {
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
                <WorkOrderHeader navigation = {this.props.navigation} text = {'Work Order'}/>
              <WebView 
                source={{uri: 'http://webtma.utsa.edu:180/housing/'}}
                style={{flex: 1}}
                originWhitelist={['*']}
                ref={(ref) => this.myWebView = ref}
                key={ this.state.key }
              />
             
              <View style={{flex: .1, flexDirection: 'row', backgroundColor: 'd3d3d3'}}>

                <View style={{flex: 1, width: 50, height: 50, paddingLeft: 30, paddingTop: 10, paddingRight: 30}}>
                  <TouchableOpacity onPress={()=>this.goBack()}>
                    <Ionicons name="ios-arrow-back" size={40} />
                  </TouchableOpacity>
                </View>

                <View style={{flex: 1, width: 50, height: 50, paddingLeft: 30, paddingTop: 10, paddingRight: 30}}>
                  <TouchableOpacity onPress={()=>this.goForward()}>
                    <Ionicons name="ios-arrow-forward" size={40} />
                  </TouchableOpacity>
                </View>

                <View style={{flex: 1, width: 50, height: 50, paddingLeft: 30, paddingTop: 10, paddingRight: 30}}>
                  <TouchableOpacity onPress={()=>this.reload()}>
                    <Ionicons name="ios-refresh" size={40} />
                  </TouchableOpacity>
                </View>

                <View style={{flex: 1, width: 50, height: 50, paddingLeft: 30, paddingTop: 10, paddingRight: 30}}>
                  <TouchableOpacity onPress={()=>this.resetWebViewToInitialUrl()}>
                    <Ionicons name="ios-git-branch" size={40} />
                  </TouchableOpacity>
                </View>        
        
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default WorkOrdersPage;

