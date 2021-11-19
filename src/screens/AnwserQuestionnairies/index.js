import React, { Component } from 'react';
import { FlatList, Alert } from 'react-native';
import { View, ListItem, Text, FloatingButton, Button, Icon } from 'react-native-ui-lib';
import anwserQuestionnairesService from '../../database/services/anwserQuestionnairesService';
import { Style } from './Style';

const exportButton = require('../../assets/export.png')

export default class AnwserQuestionnaires extends Component {

  keyExtractor = (item) => item.id;

  state = {
    showMenu: false,
    anwsers: []
  };

  componentDidMount() {
    anwserQuestionnairesService.findAll().then((anwsers) => {
      this.setState({anwsers: anwsers['_array']});
    });
  }

  notNow = () => {
    Alert.alert('Not Now!');
    this.setState({ showMenu: false });
  };

  close = () => {
    Alert.alert('Closed.');
    this.setState({ showMenu: false });
  };

  renderRow(row, id) {
    return (
      <View>
        <ListItem style={Style.listItem}>
          <ListItem.Part middle column containerStyle={Style.border}>
            <ListItem.Part containerStyle={{ marginBottom: 3 }}>
              <Text grey10 text70 style={{ flex: 1, marginRight: 10 }} numberOfLines={1}>
                {row.name}
              </Text>
              <Text grey10 text100 style={{ marginTop: 2 }}>
                {`ID: #${row.student_id}`}
              </Text>
            </ListItem.Part>
            <ListItem.Part>
              <Text
                style={{ flex: 1, marginRight: 10 }}
                text90
                grey40
                numberOfLines={1}
              >{`Questionário #${row.id}`}</Text>
            </ListItem.Part>
          </ListItem.Part>
        </ListItem>
      </View>
    );
  }

  renderNoAnwsers() {
    return (
      <View style={[Style.container, { alignItems: 'center', justifyContent: 'center' }]}>
        <Text>{"Nenhum questionário respondido até o momento!"}</Text>
      </View>
    )
  }

  renderLista() {
    return (
      <View style={Style.container}>
        <FlatList
          data={this.state.anwsers}
          renderItem={({ item, index }) => this.renderRow(item, index)}
          keyExtractor={this.keyExtractor}
        />

        <Button 
          onPress={() => this.state.showMenu = !this.state.showMenu}
          style={Style.floatingButton} 
          iconSource={exportButton} 
          iconStyle={Style.floatingButtonIcon} />

        <FloatingButton
          visible={this.state.showMenu}
          button={{
            label: 'Approve',
            onPress: this.close
          }}

          bottomMargin={80}
          hideBackgroundOverlay
          withoutAnimation
        />
      </View>
    )
  }

  render() {
    return this.state.anwsers ? this.renderLista() : this.renderNoAnwsers()
  }
}