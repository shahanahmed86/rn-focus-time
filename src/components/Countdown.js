import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

import { fontSizes, spacings, colors } from '../utils';

const minutesToMilliSeconds = min => min * 1000 * 60;
const formatTime = time => (time < 10 ? `0${time}` : time);

function Countdown({ minutes, isPaused, onProgress, onEnd }) {
  const interval = useRef(null);

  const [milliSeconds, setMilliSeconds] = useState(minutesToMilliSeconds(minutes));

  const countDown = useCallback(() => {
    if (milliSeconds === null) return;
    if (!isNaN(milliSeconds) && milliSeconds !== 0) return setMilliSeconds(milliSeconds - 1000);
    if (interval.current) clearInterval(interval.current);

    onEnd();
    setMilliSeconds(null);
  }, [milliSeconds, onEnd]);

  useEffect(() => {
    onProgress(milliSeconds / minutesToMilliSeconds(minutes));
  }, [milliSeconds, minutes, onProgress]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused, countDown]);

  const minute = Math.floor(milliSeconds / 1000 / 60) % 60;
  const seconds = Math.floor(milliSeconds / 1000) % 60;
  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacings.lg,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
  },
});

Countdown.defaultProps = {
  minutes: 0.1,
};

Countdown.propTypes = {
  minutes: PropTypes.number,
  isPaused: PropTypes.bool.isRequired,
  onProgress: PropTypes.func.isRequired,
  onEnd: PropTypes.func.isRequired,
};

export default Countdown;
