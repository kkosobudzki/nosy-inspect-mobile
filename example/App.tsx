import { StyleSheet, Text, View } from 'react-native';

import * as NosyInspect from '@nosytools/inspect-mobile';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{NosyInspect.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
