import React, { Component } from 'react';
import {View, Text, StyleSheet, ActivityIndicator ,TextInput,Button} from 'react-native';

class About extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View >
                <Text style={styles.aPropos}>A propos de l'application</Text>
                <Text style={styles.text}>Cette application a été développer dans le cadre de l'apprentissage du langage React native</Text>
                <View style={{marginTop:10}}>

                <Button
                color="#f194ff"
                title="Rechercher une ville"
                onPress={()=> this.props.navigation.navigate('Home',{screen:'HomePage'})}
                />
                </View>
            </View>
        );
    }
}
styles=StyleSheet.create({
    aPropos:{
        fontSize: 28 ,
        color : 'purple',
        textAlign: 'center',
        margin: 10,
        textDecorationLine: "underline",
    },
    text:{
        fontSize: 18,
        textAlign : 'left',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})
About.propTypes = {

};

export default About;