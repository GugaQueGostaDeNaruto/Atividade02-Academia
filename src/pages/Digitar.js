import React, {useState} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Button} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Arrow from 'react-native-vector-icons/FontAwesome'
Arrow.loadFont();

export function Digitar({navigation}) {
  
  const [peso, setPeso] = useState(0.00);
  const [altura, setAltura] = useState(0.00);
  const [imc, setImc] = useState(0.00);

  function calcularIMC (peso, altura) {
    var resultado = peso / (altura*altura)
    setImc(resultado)
    console.log("valor IMC",resultado)

     if(resultado != 0){
      navigation.navigate('Calcular',{resultado})
    } 

  }

    return (
        
        <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
          <LinearGradient
                // Background Linear Gradient
                colors = {['#32CD32','#00FF7F','#98FB98']}
                style = {{
                  position:'absolute',
                  left:0,
                  right:0,
                  top:0,
                  height:612,
                }}
              />
          <Text style = {{fontSize:30,color:'blue',fontWeight:'bold'}}>Calculadora de IMC{'\n'}</Text>
          <Text style = {{fontSize:20,fontWeight:'bold'}}>Digite seu Peso</Text>
          <TextInput  
          style = {styles.entrada}
          keyboardType = {'numeric'}
          onChangeText = {(val)=> setPeso(val)}
          ></TextInput>
          <Text style = {{fontSize:20,fontWeight:'bold'}}>Digite sua Altura</Text>
          <TextInput  
          style = {styles.entrada}
          keyboardType = {'numeric'}
          onChangeText = {(val)=> setAltura(val)}
          ></TextInput>
          <TouchableOpacity style = {styles.caixa} 
              onPress = {() => navigation.navigate('Selecionar')}>
              <Arrow name = "arrow-circle-left" size = {30} color = "#CD6600"></Arrow>
              <Text style = {{fontSize:20,fontWeight:'bold'}}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.caixa} 
              onPress = {()=> calcularIMC(peso,altura)}>
              <Arrow name = "arrow-circle-right" size = {30} color = "#551A8B"></Arrow>
              <Text style = {{fontSize:20,fontWeight:'bold'}}>Próximo</Text>
          </TouchableOpacity>
          <Text style={{fontSize:12,fontWeight:'bold',fontStyle:'italic'}}>Criado por: Luiz Gustavo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});