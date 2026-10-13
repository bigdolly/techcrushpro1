import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { pelumistyles as styles } from '../styles/pelumistyles';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
      ScrollView,
  SafeAreaView,
} from 'react-native';

export default function Register() {
    const router = useRouter();
  const [selectedRole, setSelectedRole] = useState('Household');

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <Text style={styles.title}>Create Account</Text>

        <Text style={styles.subtitle}>
          Join our network of household recyclers and make us an impact
        </Text>

        {/* Role Selector */}
        <View style={styles.roleContainer}>
          <TouchableOpacity
            style={[
              styles.roleButton,
              selectedRole === 'Household' && styles.activeRole,
            ]}
            onPress={() => setSelectedRole('Household')}
          >
            <Text
              style={[
                styles.roleText,
                selectedRole === 'Household' && styles.activeRoleText,
              ]}
            >
              Household
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roleButton,
              selectedRole === 'Collector' && styles.activeRole,
            ]}
            onPress={() => setSelectedRole('Collector')}
          >
            <Text
              style={[
                styles.roleText,
                selectedRole === 'Collector' && styles.activeRoleText,
              ]}
            >
              Collector
            </Text>
          </TouchableOpacity>
        </View>

        {/* Full Name */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            placeholderTextColor="#999"
          />
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email address"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
          />
        </View>

{/* Confirm Password */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#999"
            secureTextEntry
          />
        </View>

        {/* Create Account */}
        <TouchableOpacity style={styles.loginButton}
onPress={() => router.push(
  selectedRole === 'Household'
    ? ('/dashboard/create-post' as any)
    : ('/dashboard/collector-availability' as any),
)}>
          <Text style={styles.loginText}>Create Account</Text>
        </TouchableOpacity>

        {/* Login */}
        <View style={styles.signupContainer}>
          <Text style={styles.loginText}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity
              onPress={() => router.push('/' as any)}>
              <Text style={styles.signup}>Login</Text>
            </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
    </ScrollView>
  );
}