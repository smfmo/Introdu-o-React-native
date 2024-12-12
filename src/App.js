import React from 'react';
import { View, StyleSheet } from 'react-native';

//import MinMax from './components/MinMax';
//import Aleatorio from './components/Aleatorio';
//import Primeiro from './components/primeiro';
//import CompPadrao, {Comp1, Comp2} from './components/Multi';
//import Titulo from './components/Titulo';
//import Botao from './components/botao';
//import Contador from './components/contador';
//import Pai from './components/indireta/Pai';
//import Pai from './components/direta/Pai';
import ContadorV2 from './components/Contador/contadorv2';


export default () => (
        <View style={style.App}>
                <ContadorV2/>
                {/*<Pai />
                <Pai />
                <Contador inicial={100} passo={13} />
                <Contador/>
               <Botao/>
                <Titulo principal="Cadastro Produto"
                secundario="Tela de Cadastro do Produto"/>
                <Aleatorio min={1} max={1000}/>
                <MinMax min={3} max={20}/>
                <MinMax min={1} max={94}/>*/
                /*<CompPadrao/>
                <Comp1/>
                <Comp2/>
                <Primeiro/>*/}
        </View>
);

const style = StyleSheet.create({
        App: {
              flexGrow: 1,
              justifyContent: 'center',
              alignItems:'center',
              padding:20,
        },
});


