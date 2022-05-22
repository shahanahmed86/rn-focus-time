import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { colors } from './utils';
import { Focus, FocusHistory, Timer } from './features';
import { withAppContext } from './context';

function Main({ currentSubject }) {
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Fragment>
          <Focus />
          <FocusHistory />
        </Fragment>
      ) : (
        <Timer />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  text: {
    color: colors.white,
  },
});

Main.propTypes = {
  currentSubject: PropTypes.string,
};

export default withAppContext(Main);
