import React, { useRef, useState } from 'react';
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
import { router, useLocalSearchParams } from 'expo-router';

const GREEN = '#087C5D';

export default function VerifyCodeScreen() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const { email } = useLocalSearchParams<{ email?: string }>();

  const handleChangeText = (text: string, index: number) => {
    const nextCode = [...code];
    nextCode[index] = text.slice(-1);
    setCode(nextCode);

    if (text && index < code.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

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
            <Text style={styles.title}>Verify code</Text>
            <Text style={styles.subtitle}>
              Enter the 6-digit code for{' '}
              <Text style={styles.email}>
                {email || 'your email address'}
              </Text>
              .
            </Text>
            <Text style={styles.codeLabel}>Verification code</Text>
            <View style={styles.codeContainer}>
              {code.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  style={styles.codeInput}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit}
                  onChangeText={(text) => handleChangeText(text, index)}
                  onKeyPress={(event) =>
                    handleKeyPress(event.nativeEvent.key, index)
                  }
                />
              ))}
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={() => router.push('/resetpasswordscreen' as any)}
            >
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.replace('/' as any)}
            >
              <Text style={styles.backText}>Back to log in</Text>
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
    lineHeight: 27,
  },
  email: {
    color: GREEN,
    fontWeight: '700',
  },
  codeLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: GREEN,
    marginBottom: 16,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 28,
  },
  codeInput: {
    flex: 1,
    height: 62,
    maxWidth: 58,
    borderWidth: 1,
    borderColor: '#B7DCCE',
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    color: GREEN,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    height: 70,
    backgroundColor: GREEN,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '700',
  },
  backButton: {
    alignItems: 'center',
    paddingVertical: 18,
  },
  backText: {
    fontSize: 17,
    fontWeight: '600',
    color: GREEN,
  },
});
