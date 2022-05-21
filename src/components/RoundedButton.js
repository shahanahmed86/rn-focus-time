import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { colors } from '../utils';

function RoundedButton({ style, textStyle, size, onPress, title }) {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={onPress}>
      <Text style={[styles(size).text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = size => ({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.white,
    borderWidth: 2,
  },
  text: { color: colors.white, fontSize: size / 3 },
});

RoundedButton.defaultProps = {
  style: {},
  textStyle: {},
  size: 125,
};

RoundedButton.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  size: PropTypes.number,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default RoundedButton;
