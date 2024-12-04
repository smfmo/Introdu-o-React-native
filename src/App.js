import React from 'react';
import { View } from 'react-native';

import Primeiro from './components/primeiro';
import CompPadrao, {Comp1, Comp2} from './components/Multi';


export default () => (
        <View>
                <CompPadrao/>
                <Comp1/>
                <Comp2/>
                <Primeiro />
        </View>
);




