import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const Todo = ({ title }) => (
    <View>
        <Text>{title}</Text>
    </View>
);

Todo.defaultProps = {
    title: 'Todo padrão',
};

// Se for obrigatória -> usa isRequired -> não precisa de valor default,
// pois o reactNative avisa que deve passar um valor; da mesma forma
// avisa de quanto a tipos diferentes do definido
Todo.propTypes = {
   title: PropTypes.string,
};

export default Todo;
