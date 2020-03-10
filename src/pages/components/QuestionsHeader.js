import * as React from 'react';
import {Header} from 'react-native-elements';
import { View, Button } from 'react-native';
import s from './styles';
function QuestionsHeader({navigation}) {
    return (
        <>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.toggleDrawer() }}
                centerComponent={{ text: 'FAQs', style: { color: '#fff', fontSize: 25, flex: 1, fontWeight: 'bold' } }}
                rightComponent={{ icon: 'notifications', color: '#fff', onPress: () => navigation.navigate('Notifications') }}
            />
        </>
    );
}

export default QuestionsHeader
