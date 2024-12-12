import React, { useState } from 'react';
import Filho from './Filho';
import { Text } from 'react-native';
import Estilo from '../style';

export default props => {

    const [text, setText] = useState('');
    const [num, setNum] = useState(0);

    // eslint-disable-next-line no-shadow
    const exibirValor = (numero, text) => {
        setNum(numero);
        setText(text);
    };

    return (
        <>
            <Text style={Estilo.txtG}>
                {text}  {num}
            </Text>
            <Filho min={1}
                max={60}
                funcao={exibirValor}
            />

        </>
    );
};
