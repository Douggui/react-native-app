import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, Text} from 'react-native';
import axios from 'axios';
import { View , FlatList ,StyleSheet } from 'react-native';
import Row from '../Weather/Row';

class SearchResult extends Component {
     city = this.props.city;
     
    constructor(props) {
        super(props);
        this.state={
            city:this.city,
            isLoading:false,
            data:[],
            error:false,
            codeStatus:null,
        }
    }
    fetchApi(){
        
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&appid=d472503309f2e8e5afa79ba826dd6231`)
        .then(res=>{
            this.setState({data:res.data})
        })
        .catch((err) =>{
        
            this.setState({error : true,codeStatus: err.response.status});
        })
        .finally(()=>{
            this.setState({isLoading:false})
        })
    }
    componentDidMount(){
        this.setState({isLoading:true});
        setTimeout(() => {
            this.fetchApi();
        }, 1000);
    }
    
    render() {
        const {data,isLoading,city,error,codeStatus} = this.state;
        
       if(!isLoading){
            if(error){
                if(codeStatus == 404){

                    return(
                        <View style={styles.view}><Text>cette ville n'existe pas</Text></View>
                    )
                }
                return(
                    <View style={styles.view}><Text>une erreur s'est produite</Text></View>
                )
            }
            return (
                
                <View style={styles.container}>
                
                <FlatList
                data={data.list}
        
                renderItem={({item,index}) => <Row row={item} index={index}></Row>}
                />
            </View>
            )
        }
       return(
        <ActivityIndicator color={"white"} size="large"/>
       )
    }
}

SearchResult.propTypes = {

};
const styles=StyleSheet.create({
    view:{
        flex:1,
        flexDirection:"row",
        justifyContent:'center',
        marginTop:10,
        
    }
})
export default SearchResult;