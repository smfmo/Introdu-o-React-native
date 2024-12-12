import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Estilo from '../style';

export default props => {
    return (
        <View style={style.Display}>
            <Text style={[Estilo.txtG, style.DisplayText]}>
                {props.num}
            </Text>
        </View>
    );
};

const style = StyleSheet.create({
    Display: {
        backgroundColor: 'green',
        padding: 15,
        width: 200,
    },
    DisplayText: {
        color: '#FFF',
    },
});
