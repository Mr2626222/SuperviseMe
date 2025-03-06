import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SupervisorDashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Supervisor Dashboard</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SupervisorProjectTracking')}>
        <Text style={styles.buttonText}>Project Tracking</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SupervisorDocumentManagement')}>
        <Text style={styles.buttonText}>Document Management</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SupervisorCommunicationTool')}>
        <Text style={styles.buttonText}>Communication Tool</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SupervisorFeedbackEvaluation')}>
        <Text style={styles.buttonText}>Feedback & Evaluation</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SupervisorTaskManagement')}>
        <Text style={styles.buttonText}>Task Management</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SupervisorAutomatedReminder')}>
        <Text style={styles.buttonText}>Automated Reminder</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SupervisorDashboard;
