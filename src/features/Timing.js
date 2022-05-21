import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components';
import { spacings } from '../utils';

const timings = [5, 10, 15];

function Timing({ onChangeTime }) {
  return timings.map((timing, i) => (
    <View style={styles.timingButton} key={i}>
      <RoundedButton size={spacings.xxxl} title={timing.toString()} onPress={() => onChangeTime(timing)} />
    </View>
  ));
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});

Timing.propTypes = {
  onChangeTime: PropTypes.func.isRequired,
};

export default Timing;
