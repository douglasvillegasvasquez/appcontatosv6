/*import React from 'react';

import { View,TouchableOpacity, Text, StyleSheet } from 'react-native';
import Cartao from './Cartao';
import cores from '../cores/cores';

const ContatoItem = (props) => {
    const { contato } = props;

    return (
        <TouchableOpacity onLongPress={() => props.onDelete(contato.item.key)} 
        onPress={props.onAbrirAtualizar}>
        <View style = { styles.itemNaLista}>
                <View style = { styles.Titulo}>
                    <Text style ={styles.contato}>
                        
                        {contato.item.value.contatoNome}
                    </Text>
                </View>
        
                    <Text  style = { styles.Nome}>
                        {contato.item.value.contatoTelefone} 
                    </Text>
                <Text style={{color:'#000',fontSize:10}}>  Celular</Text>       
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contato:{color:'#FFFAFA',
    fontSize:18,
    marginLeft:16
},
    Titulo:{
        paddingTop: 190,
        paddingBottom: 10,
        backgroundColor: cores.fundo,
        marginLeft:-12,
        marginRight:-12,
        marginTop:-20,
        marginBottom:10,        
        borderRadius: 3,
        
       
    },
    itemNaLista:{
        height:345,
        paddingTop: 20,
        paddingBottom:10,
        padding: 12,
        backgroundColor: cores.branco,
        borderBottomColor: '#000',
        borderWidth: 1,
        marginBottom:20,
        borderRadius: 3
    },
    Nome:{
        paddingTop:6,
        marginBottom:10,
        fontSize:16,
        color:'#000',
        marginLeft:4
    }
});

export default ContatoItem;
*/

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import Cartao from './Cartao';
import cores from '../cores/cores';

const ContatoItem = (props) => {
    const contato = props.contato.item;
    return (
        <TouchableOpacity onLongPress={() => props.onDelete(contato.key)} onPress={props.onAbrirAtualizar}>
            <Cartao style={styles.contatoInfo}>
                <Image
                    style={styles.imagem}
                    source={{ uri: contato.imagem }}
                />
                <View style={styles.infoContainer}>
                    <Text>{"Nome: " + contato.nome}</Text>
                    <Text>{"Telefone: " + contato.telefone}</Text>
                </View>
            </Cartao>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#CCC'
    },
    contatoInfo: {
        flexDirection: 'row',
        backgroundColor: cores.backgroundCartaoSecundary
    }
});

export default ContatoItem;