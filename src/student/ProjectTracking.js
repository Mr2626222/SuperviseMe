import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProjectTracking = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Project Tracking Module</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {  // ✅ Yeh "header" ke jagah "text" hona chahiye
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ProjectTracking;
