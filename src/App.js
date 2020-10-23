/* Curriculo Patolino Mago
* autor: Jade Guerra - 2020
* ## Código de treino ## */

import React from 'react';
import {StyleSheet,
        View, 
        Image,
        Text, 
        SafeAreaView,
        Alert,
        TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import foto from './assets/foto_show.jpg';
import Card from './components/Card';

const App = () => {

  function handleRedeSocial(rede_social){
    switch(rede_social){
      case 'linkedin':
        Alert.alert('LinkedIn', 'https://linkedin.com')
      break
      case 'github':
        Alert.alert('Github', 'https://github.com')
      break
      case 'facebook':
        Alert.alert('facebook', 'https://www.facebook.com/omagoimplacavel/?ref=page_internal')
      break
    }
  }

  return (
    <>
    <View style={style.page}>

      <SafeAreaView>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto}/>
          <Text style={style.nome}>Patolino</Text>
          <Text style={style.funcao}>Mago Implacável</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name ="github" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
              <Icon name ="facebook" size={30}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name ="linkedin" size={30}/>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

    


      <Card titulo="Formação Acadêmica">
        <Text style={style.card_content_text}>Floresta Encantada de Voldrini</Text>
        <Text style={style.card_content_text}>Academia Mágica Encantada e Voldrini</Text>
        <Text style={style.card_content_text}>Primeiro Aprendiz de Merlin</Text>
      </Card>

      <Card titulo="Experiência Profissional">
        <Text style={style.card_content_text}>Telecinésia avançada, nível mestre</Text>
        <Text style={style.card_content_text}>Pirocinésia avançada, nível mestre</Text>
        <Text style={style.card_content_text}>Técnicas avançadas de combate</Text>
      </Card>

    </View>  
    </>

  );
}

const style = StyleSheet.create({
  page:{
    backgroundColor: '#E7E7E7',
    flex: 1,
  },

  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },


  foto: {
    width: 150,
    height: 150,
    borderRadius: 125,
  },

  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },

  funcao: {
    color:'#939393',
    marginBottom: 10,
  },

  redes_sociais:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },

    card_content_text:{
      color: '#939393',
      marginBottom: 10,
  },

});

export default App;
