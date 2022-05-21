import React, { Fragment } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { colors } from './utils';
import { Focus, FocusHistory, Timer } from './features';
import { withAppContext } from './context';

function Main({ currentSubject, history }) {
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Fragment>
          <Focus />
          {history.length ? <FocusHistory /> : null}
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

export default withAppContext(Main);
