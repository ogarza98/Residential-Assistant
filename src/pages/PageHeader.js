import * as React from 'react';
import {Header} from 'react-native-elements';

function PageHeader({navigation, text}) {

    if (text == 'Community Wall') {
        Community = true;
    }
    else {
        Community = false;
    }
    

    return (
        Community ?
        <>
            
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.toggleDrawer() }}
                centerComponent={{ text: text, style: { color: '#fff', fontSize: 25, flex: 1, fontWeight: 'bold' } }}
                rightComponent={{ icon: 'notifications', color: '#fff', onPress: () => navigation.navigate('Notifications') }}

            />
        </>
        :
        <>
            
        <Header
            leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.toggleDrawer() }}
            centerComponent={{ text: text, style: { color: '#fff', fontSize: 25, flex: 1, fontWeight: 'bold' } }}
        />
    </>
    );
}

export default PageHeader;


