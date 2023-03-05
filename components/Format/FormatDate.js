import {Text , StyleSheet} from 'react-native';
import React from 'react';

export default  FormattedDate=(props)=>{
    const date = new Date(props.date * 1000);
    const month = date.getMonth();
    const day = date.getDay();
    const year = date.getFullYear();
    const d = date.getDate();
    const hour = date.getHours()
    const months = ['Jan','Fev','Mars','Avr','May','Jui','Juin','Août','Sep','Oct','Nov','Dec'];
    const days   = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];
    return(
        <Text> <Text style={style.bold}>{days[day]}</Text> {d} {months[month]} {year} à {hour}h</Text>
    )
}
const style=StyleSheet.create(
   {
       
        bold:{
            fontWeight:"bold",
            fontSize:18,
        }
   }
)