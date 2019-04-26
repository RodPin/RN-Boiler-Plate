import React, { Component } from "react";
import { Button, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../reducers/Reducer";
class TabBar extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <Button
          title="-"
          color="#ff4d4d"
          onPress={() => {
            this.props.minus();
          }}
        />
        <Button
          title="+"
          color="#53c68c"
          onPress={() => {
            this.props.plus();
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ root }) => {
  return {
    counter: root.counter
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      plus: actions.plus,
      minus: actions.minus
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabBar);
