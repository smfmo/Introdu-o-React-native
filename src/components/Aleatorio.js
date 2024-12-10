import React from 'react';
import { Text } from 'react-native';
import Estilo from './style';

const numeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const min = 1;
const max = 1000;

const num = numeroAleatorio(min, max);

export default props => {
    return <Text style={Estilo.txtG}>
        O número aleátorio entre {props.min} e {props.max} é {num}
        </Text>;
};






