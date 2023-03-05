import React, { useState } from "react";
import {
     View  ,
      TextInput,
      StyleSheet,
       Button,
       Text, 
       TouchableOpacity,
    } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchResult from "../SearchResult/SearchResult";
const {Navigator , Screen } =createNativeStackNavigator();
const Tab =createBottomTabNavigator();
export default class HomePage extends React.Component{

    constructor(props){
        super(props)
        
    }
    
    render(){
        
        return(
         <Navigator>
            <Screen name="HomePage" component={Home} options={{title:"Accueil"}} />
            <Screen name="Result" component={Result} 
                options={{
                    
                    title:`Meteo` ,
                     headerStyle:{
                        backgroundColor:"purple",
                    },
                    headerTintColor:'#fff',
                    }} 
            />
         </Navigator>
        );
    };
}
const Home=(props)=>{
    const [city , setCity] =useState('');

    const submit =(e)=>{
        console.log(city)
        
        props.navigation.navigate('Home',{
            params:{
                city:city
            },
            screen : "Result",
        })
    }
    return(
        <View>
            <LinearGradient 
                colors={["#B88DA5","#E7DCE2"]}
                start={{
                    x:0,
                    y:0
                }}
                end={{
                    x:1,
                    y:1
                }}
                style={{width:'100%',height:'100%'}}
            >
                <TextInput
                editable
                maxLength={40}
                style={styles.input}
                onChangeText={(text)=> setCity(text)}
                value={city}
                placeholder='monpelier'
                />
                <View style={{marginTop:5}}>
                    <LinearGradient
                        colors={["#E7DCE2","#B88DA5"]}
                        start={{
                            x:0.2,
                            y:0
                        }}
                        end={{
                            x:1,
                            y:1
                        }}
                    >
                        <TouchableOpacity onPress={submit} style={styles.touchable} >
                        
                            <Text style={styles.touchText}>Rechercher</Text>
                            
                        </TouchableOpacity>
                    </LinearGradient>

                </View>
            </LinearGradient>
        </View>
    )
}
const Result = (props) => {
    
    const {city} = props.route.params;
    return (
        <SearchResult city={city}/>
    )
}





const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
    //   borderWidth: 1,
    borderBottomWidth: 1,
      borderColor :"purple",
      padding: 10,
    
    },
    buttons:{
        flex: 1,
        flexDirection: "row",
    },
    result:{
        flex:1,
        backgroundColor:"white",
    },
    touchable:{
        padding:7,
        
    },
    touchText:{
        fontSize:16, 
        textAlign: 'center',   
    }

  });

