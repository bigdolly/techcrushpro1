import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

const GREEN = '#087C5D';

interface EyeIconProps {
  visible: boolean;
}

const EyeIcon = ({ visible }: EyeIconProps) => (
  <Text style={{ fontSize: 22, color: GREEN }}>
    {visible ? '👁️' : '🙈'}
  </Text>
);

export default function ResetPasswordScreen() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirm, setSecureConfirm] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Reset your password</Text>
            <Text style={styles.subtitle}>
              Choose a new password for your account
            </Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter New Password"
                placeholderTextColor="#7A9489"
                secureTextEntry={securePassword}
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityLabel={securePassword ? 'Show password' : 'Hide password'}
                onPress={() => setSecurePassword(!securePassword)}
              >
                <EyeIcon visible={!securePassword} />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Confirm New Password"
                placeholderTextColor="#7A9489"
                secureTextEntry={secureConfirm}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityLabel={
                  secureConfirm ? 'Show confirm password' : 'Hide confirm password'
                }
                onPress={() => setSecureConfirm(!secureConfirm)}
              >
                <EyeIcon visible={!secureConfirm} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={() => router.replace('/' as any)}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F1FAF4',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    width: '100%',
    maxWidth: 520,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: GREEN,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 20,
    color: GREEN,
    marginBottom: 36,
  },
  inputContainer: {
    minHeight: 70,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D8E1DD',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: GREEN,
  },
  button: {
    height: 70,
    backgroundColor: GREEN,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '700',
  },
});
