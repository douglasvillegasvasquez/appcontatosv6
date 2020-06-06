

/*import React from 'react';
import { StyleSheet, View } from 'react-native';

import ContatoInput from '../components/ContatoInput';
import Cartao from '../components/Cartao';
import cores from '../cores/cores';

export default function EditarContato({ route }) {
    return (
        <View style={styles.telaUpdateView}>
            <Cartao style={styles.contatoInput}>
                <ContatoInput contatoAtual={route.params.contato} onAtualizarContato={route.params.atualizarContato} />
            </Cartao>
        </View>
    );
}

const styles = StyleSheet.create({
    telaUpdateView: {
        paddingBottom: 50,
        paddingTop: 10,
        alignItems: 'center'
    },
    contatoInput: {
        backgroundColor: cores.backgroundCartaoPrimary
    }
});*/
import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import * as contatosActions from '../store/contatosActions';
import ContatoInput from '../components/ContatoInput';
import Cartao from '../components/Cartao';
import cores from '../cores/cores';

export default function EditarContato({ navigation, route }) {
    const dispatch = useDispatch();

    const atualizarContato = (contato) => {
        Alert.alert(
            'Atualizar Contato',
            'Deseja mesmo atualizar esse contato?',
            [{
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                style: 'default',
                onPress: () => {
                    dispatch(contatosActions.updateContato(contato));
                    navigation.goBack();
                }
            }]
        );
    }

    return (
        <View style={styles.telaUpdateView}>
            <Cartao style={styles.contatoInput}>
                <ContatoInput contatoAtual={route.params.contato.item} onSalvarContato={atualizarContato} />
            </Cartao>
        </View>
    );
}

const styles = StyleSheet.create({
    telaUpdateView: {
        paddingBottom: 50,
        paddingTop: 10,
        alignItems: 'center'
    },
    contatoInput: {
        backgroundColor: cores.backgroundCartaoPrimary
    }
});