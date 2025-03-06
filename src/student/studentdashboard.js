import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

const StudentDashboard = ({ navigation }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleHover = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleLeave = () => {
    setHoveredButton(null);
  };

  const buttons = [
    { title: 'Project Tracking', navigateTo: 'ProjectTracking' },
    { title: 'Document Management', navigateTo: 'DocumentManagement' },
    { title: 'Communication Tool', navigateTo: 'CommunicationTool' },
    { title: 'Prerequisite Subjects', navigateTo: 'PrerequisiteSubjects' },
    { title: 'Feedback & Evaluation', navigateTo: 'FeedbackEvaluation' },
    { title: 'Task & Reward', navigateTo: 'TaskReward' },
    { title: 'Automated Reminder', navigateTo: 'AutomatedReminder' },
  ];

  const handleLogout = () => {
    // Implement logout logic here
    console.log("User logged out");
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header}>Student Dashboard</Text>
        
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              hoveredButton === button.title && styles.buttonHovered,
            ]}
            onPress={() => navigation.navigate(button.navigateTo)}
            onPressIn={() => handleHover(button.title)}
            onPressOut={handleLeave}
          >
            <Text style={styles.buttonText}>{button.title}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15, 
    paddingHorizontal: 20, 
    borderRadius: 12, 
    marginBottom: 15, 
    width: '80%', 
    alignItems: 'center',
  },
  buttonHovered: {
    backgroundColor: '#0056b3',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StudentDashboard;