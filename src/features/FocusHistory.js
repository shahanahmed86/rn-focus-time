import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { withAppContext } from '../context';
import { colors, fontSizes, spacings } from '../utils';

function FocusHistory({ history }) {
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacings.md,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingLeft: spacings.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    padding: spacings.md,
    fontWeight: 'bold',
  },
});

export default withAppContext(FocusHistory);
