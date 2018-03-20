import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  // componentWillMount() {
  //   this.props.employeesFetch();
  // }

  renderRow({ item }) {
    const { name, phone, shift } = item;

    return (
      <View>
        <Text>{name}</Text>
        <Text>{phone}</Text>
        <Text>{shift}</Text>
      </View>
    );
  }

  render() {
    console.log(this.props.employees);
    return (
      // <Text>'dd'</Text>
      <FlatList
        data={this.props.employees}
        renderItem={this.renderRow}
        keyExtractor={(employee) => employee.item}
      />
    );
  }
}

const mapStateToProps = (state) => ({ employees: state.employees });

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
