import React, { Component } from "react";
import { FlatList, Text } from "react-native";
class EventList extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    const allEvents = require("./db.json").events;
    this.setState(prevState => ({
      events: allEvents
    }));
  }

  render() {
    return (
      <FlatList
        data={this.state.events}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default EventList;
