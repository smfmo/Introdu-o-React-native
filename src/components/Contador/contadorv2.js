import React, { useState } from 'react';
import { Text } from 'react-native';
import Estilo from '../style';

import ContadorDisplay from './contadorDisplay';
import Actions from './contadorActions';

export default props => {
    const [num, setNum] = useState(0);

    const inc = () =>{
        setNum(num + 1);
    };
    const dec = () => {
        setNum(num - 1);
    };

    return (
        <>
            <Text style={Estilo.txtG}>
                Contador
            </Text>
            <ContadorDisplay num={num} />
            <Actions inc={inc} dec={dec}/>
        </>
    );
};
