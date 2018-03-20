import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text, FlatList } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  renderRow({ item }) {
    console.log(item.name);
    return <Text> {item.name} </Text>;
  }

  render() {
    console.log(this.props);
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderRow}
        keyExtractor={(item) => item.uid}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => ({ ...val, uid }));

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
