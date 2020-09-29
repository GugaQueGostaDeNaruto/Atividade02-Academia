import React, {useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Button,} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();

export function Calcular (props) {
  const {resultado} = props.route.params;
  function alerta(resultado){
    if (resultado < 18.5) {
      alert("Baixo Peso = " + resultado.toFixed(2))
    }
    else if (resultado >= 18.5 && resultado < 24.9) {
      alert("Peso saudável = " + resultado.toFixed(2))
    }
    else if (resultado >= 25 && resultado < 29.9) {
      alert("Sobrepeso = " + resultado.toFixed(2))
    }
    else if (resultado >= 30) {
      alert("Obesidade = " + resultado.toFixed(2))
    }
  }

    return (
        <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
        <LinearGradient
                colors = {['#FF0000','#CD0000','#8B0000']}
                style = {{
                position:'absolute',
                left:0,
                right:0,
                top:0,
                height:612,
              }}
          />
          <Text style = {{fontSize:30,color:'#191970',fontWeight:'bold'}}>Resultado do IMC{'\n'}</Text>
            <Text style>IMC: {resultado.toFixed(2)}{'\n'}</Text>
          <View style = {{ alignItems:'center',flexDirection:'row'}}>
            <Text style = {styles.tabela1}>IMC (kg/m2)</Text>
            <Text style = {styles.tabela1}>Classificação</Text>
          </View>

          <View style = {{alignItems:'center',flexDirection:'row'}}>
            <Text style = {styles.tabela2}>-18.5</Text>
            <Text style = {styles.tabela2}>Baixo Peso</Text>
          </View>

          <View style = {{alignItems:'center',flexDirection:'row'}}>
            <Text style = {styles.tabela3}>18.5-24.9</Text>
            <Text style = {styles.tabela3}>Peso Saudável</Text>
          </View>

          <View style = {{alignItems:'center',flexDirection:'row'}}>
            <Text style = {styles.tabela2}>25.0-29.9</Text>
            <Text style = {styles.tabela2}>Sobrepeso</Text>
          </View>

          <View style = {{alignItems:'center',flexDirection:'row'}}>
            <Text style = {styles.tabela3}>+30.0</Text>
            <Text style = {styles.tabela3}>Obesidade</Text>
          </View>
          <Button
        title = "Resultado"
        onPress = {() => alerta(resultado)}
      />
          <Text style = {{fontSize:12,fontWeight:'bold',fontStyle:'italic'}}>{'\n'}{'\n'}{'\n'}{'\n'}Criado por: Luiz Gustavo</Text>
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
    width:500,
  },
  caixa: {
    backgroundColor:'#FAFAFA',
    shadowColor:'#DEDEDE',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    width:150,
    height:80,
    shadowOpacity:0.2,
    shadowRadius:1.5,
    shadowOffset:{width:0,height:2},
    elevation:2,
    padding:0,
    margin:10,
  },
  teste: {
    fontSize:20,
    fontWeight:'bold',
    borderWidth:1,
    borderColor:'#DADADA',
  },
  tabela1: {
    backgroundColor:'#CD1076',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:40,
  },
  tabela2: {
    backgroundColor:'#EEE9E9',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:40,
  },
  tabela3: {
    backgroundColor:'#EEE9E9',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:40,
  },
});