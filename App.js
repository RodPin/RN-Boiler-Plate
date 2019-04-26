import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import TabBar from "./src/components/TabBar";
import { Provider } from "react-redux";
import store from "./src/store/configStore";
import { connect } from "react-redux";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Counter</Text>
          <Text>{this.props.counter}</Text>
          <TabBar />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const mapStateToProps = ({ root }) => {
  return {
    counter: root.counter
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
