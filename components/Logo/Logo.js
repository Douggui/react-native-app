import React from 'react';
import {View} from 'react-native';
import logo from '../../assets/splash.png';

export default class Logo extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                {logo}
            </View>
        )
    }
}