import React from 'react';

import { Button } from 'react-native';

export default props =>{

    const gerarNumero = (min, max) => {
        const fator = max - min + 1;
        return parseInt(Math.random() * fator, 10) + min;
    };

    return(
       <Button
            title="Executar"
            onPress={() => {
                const n = gerarNumero(props.min, props.max);
                props.funcao(n, 'O valor gerado é :');
            }}
       />
    );
};
