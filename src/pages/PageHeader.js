import * as React from 'react';
import {Header} from 'react-native-elements';
import { View } from 'react-native';

function PageHeader({navigation, text, rightComponent}) {
    if (text == 'Community Wall') {
        Community = true;
        Welcome = false;
    }
    else if (text == 'Welcome') {
        Welcome = true;
        Community = false;
    }
    else if (text == 'Check-In Form' || text == 'Check-Out Form' || text == 'Work Order' || text == 'Laundry Status') {
        Welcome = false;
        Community = false;
        Forms = true;
    }
    else if (text == 'Create Post') {
        Welcome = false;
        Community = false;
        Forms = false;
        AddPost = true;
    }
    else {
        Welcome = false;
        Community = false;
        Forms = false;
        AddPost = false;
    }
    

    return (
        <View>
       { Community ?
        <>
            
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.toggleDrawer() }}
                centerComponent={{ text: text, style: { color: '#fff', fontSize: 25, flex: 1, fontWeight: 'bold' } }}
                rightComponent = {rightComponent}

            />
        </>
        : Welcome ?
        <>
            
            <Header
                centerComponent={{ text: text, style: { color: '#fff', fontSize: 25, flex: 1, fontWeight: 'bold' } }}

            />
        </>
        : Forms ?
        <>
            
        <Header
            leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => navigation.goBack() }}
            centerComponent={{ text: text, style: { color: '#fff', fontSize: 25, flex: 1, fontWeight: 'bold' } }}

        />
    </>
        : AddPost ?
        <>
            
        <Header
            leftComponent={{ icon: 'cancel',color: '#000', onPress: () => navigation.goBack() }}
            centerComponent={{ text: text, style: { color: '#000', fontSize: 20, flex: 1, fontWeight: 'bold' } }}
            rightComponent = {rightComponent}
            containerStyle={{
                backgroundColor: '#fff',
              }}
        />
        </>
    :
    <>
            
        <Header
            leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.toggleDrawer() }}
            centerComponent={{ text: text, style: { color: '#fff', fontSize: 25, flex: 1, fontWeight: 'bold' } }}

        />
    </>
        }
    </View>
    );
}

export default PageHeader;