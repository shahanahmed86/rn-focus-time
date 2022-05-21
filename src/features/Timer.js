import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown, RoundedButton } from '../components';
import { changeKeepAwake, colors, spacings } from '../utils';
import Timing from './Timing';
import { withAppContext, actions } from '../context';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

function Timer({ currentSubject, dispatch }) {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = () => {
    Vibration.vibrate(PATTERN);
    dispatch({ type: actions.ADD });
  };

  useEffect(() => {
    changeKeepAwake(true);
    return () => changeKeepAwake(false);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown minutes={minutes} isPaused={!isStarted} onProgress={setProgress} onEnd={onEnd} />
        <View style={{ paddingTop: spacings.xxl }}>
          <Text style={styles.title}>Focusing on</Text>
          <Text style={styles.task}>{currentSubject}</Text>
        </View>
      </View>

      <View style={{ paddingTop: spacings.sm }}>
        <ProgressBar progress={progress} color={colors.progressBar} style={{ height: spacings.sm }} />
      </View>

      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>

      <View style={styles.buttonWrapper}>
        {isStarted && <RoundedButton title="pause" onPress={() => setIsStarted(false)} />}
        {!isStarted && <RoundedButton title="start" onPress={() => setIsStarted(true)} />}
      </View>

      <View style={styles.clearSubjectWrapper}>
        <RoundedButton size={spacings.xxl} title="-" onPress={() => dispatch({ type: actions.CLEAR })} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: spacings.xxl,
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacings.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearSubjectWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
});

export default withAppContext(Timer);
