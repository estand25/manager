import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    console.log(this.props.employee);
    const { name } = this.props.employee;

    return (
      <View>
        <CardSection>
          <Text style={styles.titleStyles}>
            {name}
          </Text>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  titleStyles: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
