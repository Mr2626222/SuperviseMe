import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Student Screens
import StudentDashboard from './src/student/StudentDashboard';
import ProjectTracking from './src/student/ProjectTracking';
import DocumentManagement from './src/student/DocumentManagement';
import CommunicationTool from './src/student/CommunicationTool';
import PrerequisiteSubjects from './src/student/PrerequisiteSubjects';
import FeedbackEvaluation from './src/student/FeedbackEvaluation';
import TaskReward from './src/student/TaskReward';
import AutomatedReminder from './src/student/AutomatedReminder';
import Login from './src/student/Login';
import Signup from './src/student/Sinup';

// Supervisor Screens
import SupervisorDashboard from './src/supervisor/SupervisorDashboard';
import SupervisorProjectTracking from './src/supervisor/SupervisorProjectTracking';
import SupervisorDocumentManagement from './src/supervisor/SupervisorDocumentManagement';
import SupervisorCommunicationTool from './src/supervisor/Communication';
import SupervisorFeedbackEvaluation from './src/supervisor/FeedbackEvaluation';
import SupervisorTaskManagement from './src/supervisor/TaskManagement';
import SupervisorAutomatedReminder from './src/supervisor/AutomatedReminder';
import SupervisorLogin from './src/supervisor/SupervisorLogin';
import SupervisorSignup from './src/supervisor/Signup';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
  
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="StudentDashboard" component={StudentDashboard} options={{ headerShown: false }} />
        <Stack.Screen name="ProjectTracking" component={ProjectTracking} />
        <Stack.Screen name="DocumentManagement" component={DocumentManagement} />
        <Stack.Screen name="CommunicationTool" component={CommunicationTool} />
        <Stack.Screen name="PrerequisiteSubjects" component={PrerequisiteSubjects} />
        <Stack.Screen name="FeedbackEvaluation" component={FeedbackEvaluation} />
        <Stack.Screen name="TaskReward" component={TaskReward} />
        <Stack.Screen name="AutomatedReminder" component={AutomatedReminder} />

        
        <Stack.Screen name="SupervisorSignup" component={SupervisorSignup} options={{ headerShown: false }} />
        <Stack.Screen name="SupervisorLogin" component={SupervisorLogin} options={{ headerShown: false }} />
        <Stack.Screen name="SupervisorDashboard" component={SupervisorDashboard} options={{ headerShown: false }} />
        <Stack.Screen name="SupervisorProjectTracking" component={SupervisorProjectTracking} />
        <Stack.Screen name="SupervisorDocumentManagement" component={SupervisorDocumentManagement} />
        <Stack.Screen name="SupervisorCommunicationTool" component={SupervisorCommunicationTool} />
        <Stack.Screen name="SupervisorFeedbackEvaluation" component={SupervisorFeedbackEvaluation} />
        <Stack.Screen name="SupervisorTaskManagement" component={SupervisorTaskManagement} />
        <Stack.Screen name="SupervisorAutomatedReminder" component={SupervisorAutomatedReminder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
