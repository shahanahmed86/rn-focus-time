import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components';
import { colors, spacings } from '../utils';
import { actions, withAppContext } from '../context';

function Focus({ dispatch }) {
  const [subject, setSubject] = useState('');
  const addSubject = () => {
    dispatch({ type: actions.SELECT, payload: subject });
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on?"
          value={subject}
          onChangeText={setSubject}
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={spacings.xxl} onPress={addSubject} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacings.sm,
  },
  inputContainer: {
    padding: spacings.lg,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  text: {
    color: colors.white,
  },
});

Focus.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default withAppContext(Focus);
