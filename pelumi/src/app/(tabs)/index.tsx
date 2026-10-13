import React, { useState } from 'react';
import { Link } from 'expo-router';
import { pelumistyles as styles } from '../styles/pelumistyles';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';



export default function HomePage() {
  const [selectedRole, setSelectedRole] = useState('Household');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* Header */}
        <Text style={styles.title}>Welcome Back</Text>

        <Text style={styles.subtitle}>
          Let’s make a greener tomorrow, together
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

        {/* Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.icon}>✉</Text>

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
          <Text style={styles.icon}>♙</Text>

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={styles.eye}>
              {showPassword ? '◉' : '◎'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or continue with</Text>
          <View style={styles.line} />
        </View>

        {/* Social Buttons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.google}>G</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.apple}>●</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.facebook}>f</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don’t have an account? </Text>
          <Link href="/registration/register" asChild>
            <TouchableOpacity>
              <Text style={styles.signup}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>

      </View>
    </SafeAreaView>
  </ScrollView>
  );
}