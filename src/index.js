import React, {Component} from 'react';

import('./config/ReactotronConfig').then(() =>
  console.tron.log('Reactotron Configurado!'),
);
import './config/DevToolsConfig';

import {StyleSheet, Text, View, Button, Platform} from 'react-native';

import Todo from './components/Todo';

export default class App extends Component {
  state = {
    usuario: null,
    todos: [],
  };
  constructor(props) {
    super(props);

    this.state = {
      usuario: 'Gregory',
      todos: [
        {id: 0, text: 'Fazer café'},
        {id: 1, text: 'Estudar o GoNative'},
      ],
    };
  }

  // ...this.state.todos -> Copia toda a informação que estiver no array e adiciona o novo valor que está na frente!
  addTodo = () => {
    console.tron.log('NOVO TODO!');
    this.setState({
      usuario: this.state.usuario + '3',
      todos: [...this.state.todos, {id: Math.random(), text: 'Novo todo'}],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.groupOfBoxes}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box}>
            <Text style={styles.boxText}>
              {Platform.OS === 'ios' ? 'iOS' : 'android'}
            </Text>
          </View>
        </View>
        <View style={styles.botaoETexto}>
          <Text>{this.state.usuario}</Text>
          {this.state.todos.map(todo => (
            <Todo key={todo.id} title={todo.text} />
          ))}
          <Button title="Adicionar todo" onPress={this.addTodo} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    flexDirection: 'column',
  },

  groupOfBoxes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 20,
  },

  box: {
    width: 80,
    height: 80,
    backgroundColor: '#F00',
    margin: 10,
    transform: [{rotateZ: '20deg'}],
  },

  boxText: {
    ...Platform.select({
      ios: {
        color: '#000',
      },
      android: {
        color: '#FFF',
      },
    }),
  },

  botaoETexto: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    textAlign: 'center',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
  },
});
