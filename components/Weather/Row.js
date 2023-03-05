import React  from 'react';
import PropTypes from 'prop-types';
import { StyleSheet ,View,Text ,Image} from 'react-native';

import FormattedDate from '../Format/FormatDate';
import AnimatedComponent from '../Animation/AnimatedComponent';
export default class Row extends React.Component{

    render(){
        console.log(this.props.index);
        const index=this.props.index
        const url = `http://openweathermap.org/img/w/${this.props.row.weather[0].icon}.png`
        
        if(index ===0 ){

            return(
                <AnimatedComponent delay={index*100}>
                    <View style={[styles.row,styles.first]}>
                        <View >
                            <Text><FormattedDate date={this.props.row.dt}/></Text>
                            <Image source={{uri : url}} style={{width:120,height:120}}/>
                        </View>
                        <Text style={[styles.temp,styles.firstSize]}>{Math.round(this.props.row.main.temp)}°C </Text>
                    </View>
                </AnimatedComponent>
            )
        }
        return(
            <AnimatedComponent delay={index*100}>
                <View style={styles.row}>
                        <View style={styles.flex}>
                            <Image source={{uri : url}} style={{width:50,height:50}}/>
                            <Text><FormattedDate date={this.props.row.dt}/></Text>
                        </View>
                        <Text style={styles.temp}>{Math.round(this.props.row.main.temp)}°C </Text>
                </View>
            </AnimatedComponent>
        )
    }
}


const styles=StyleSheet.create({
    flex:{
        flex:1,
        flexDirection:'row',
       alignItems:"center"

    },
    first:{
        backgroundColor:'#000',
    },
    firstSize:{
        fontSize:30,
    },
    row:{
        backgroundColor: "purple",
        color: "white",
        // marginVertical:10,
        padding:15,
        borderWidth:0,
        borderBottomWidth:2,
        borderBottomColor:"white",
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    temp:{
        color:"white",
        fontSize:18,
        fontWeight:'bold'
    }
})

Row.prototype={
    row : PropTypes.object,

}
