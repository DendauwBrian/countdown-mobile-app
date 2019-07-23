import React from "react";
import EventList from "./EventList";
import EventForm from "./EventForm";
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: "Your events"
    })
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: "Add an event"
    })
  }
});

export default createAppContainer(AppNavigator);
