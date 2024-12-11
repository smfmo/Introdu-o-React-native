import React from 'react';
import {Button} from 'react-native';

export default props => {

    const Executar = () => console.warn('exec #01!!!');

    return (
        <>
        <Button
        title= 'executar #01 !'
        onPress={Executar} //referência de uma função.
        />
        <Button
        title='executar #02 !'
        onPress={function(){
            console.warn('exec #02!!!');
        }} //uma função diretamente no Onpress.
        />
        <Button
        title='executar #03!'
        onPress={() => console.warn('exec #03!!!')} //Arrow function
        />
        </>
    );

};
