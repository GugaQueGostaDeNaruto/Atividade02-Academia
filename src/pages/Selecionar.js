import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Picker} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();

export function Selecionar ({navigation},props){

    const [categoria,setCategoria] = React.useState();

    state = {categoria: 'CR'};
      
      return (
          <View style = {{flex:1,alignItems:'center',justifyContent: 'center'}}>
            <LinearGradient
                colors = {['#9B30FF','#912CEE','#551A8B']}
                style = {{
                  position:'absolute',
                  left:0,
                  right:0,
                  top:0,
                  height:612,
                }}
              />
            <Text style = {{fontSize:30,color:'#FFD700',fontWeight:'bold',padding:0}}>Categoria{'\n'}</Text>
            <Text style = {{fontSize:20,justifyContent:'center'}}>Selecione sua categoria{'\n'}    conforme a tabela:</Text>
            <Text style = {{fontSize:20}}>2 até 18 : Criança{'\n'}19 até 60 : Adulto{'\n'}61 ou maior : Idoso{'\n'}</Text>
            <Picker
                selectedValue = {categoria}
                style = {{height:230,width:150,borderWidth:1,borderColor:'black',}}
                onValueChange = {(itemValue,itemIndex) =>
                  setCategoria(itemValue)
                }>
                <Picker.Item label = "Criança" value = "CR" />
                <Picker.Item label = "Adulto" value = "AD" />
                <Picker.Item label = "Idoso" value = "ID" />
            </Picker>
            <View style = {{flex:1,alignItems:'center',justifyContent:'flex-end',paddingTop:30}}>
            <TouchableOpacity style = {styles.caixa} 
              onPress = {() => navigation.navigate('Digitar')}>
              <Icon name = "arrow-circle-right" size = {30} color = "#551A8B"></Icon>
              <Text style = {styles.texto}>Proximo</Text>
          </TouchableOpacity>
            <Text style = {{fontSize:12,fontWeight:'bold',fontStyle:'italic',justifyContent:'flex-end' }}>Criado por: Luiz Gustavo</Text>
          </View>
          </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#DEDEDE',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:"column",
    paddingTop:40,
  },
  views: {
    width:300,
    height:300,
    margin:15,
    borderRadius:6,
    alignItems:"center",
  },
  entrada: {
    borderWidth:1,
    borderColor:'#DADADA',
    padding:8,
    margin:10,
    width:200,
  },
  componente: {
    width:9000,
    height:200
  },
  caixa: {
    backgroundColor:'#FAFAFA',
    shadowColor:'#DEDEDE',
    alignItems:'center',
    borderRadius:10,
    width:170,
    height:150,
    shadowOpacity:0.2,
    shadowRadius:1.5,
    shadowOffset:{width: 0, height: 2},
    elevation:2,
    padding:60,
    margin:10,
  },
});