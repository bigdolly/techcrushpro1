import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function RateExperienceScreen() {
  const router = useRouter();
  const [collectorRating, setCollectorRating] = useState(4);
  const [collectorComment, setCollectorComment] = useState('');
  const [householdRating, setHouseholdRating] = useState(5);
  const [householdComment, setHouseholdComment] = useState('');

  const handleSubmitRating = () => {
    Alert.alert(
      'Thank You!',
      'Your feedback has been recorded successfully.',
    );
    router.replace('/dashboard/create-post' as any);
  };

  const renderStars = (
    currentRating: number,
    setRating: (rating: number) => void,
  ) => (
    <View style={styles.starRow}>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity
          key={star}
          accessibilityRole="button"
          accessibilityLabel={`Rate ${star} out of 5 stars`}
          onPress={() => setRating(star)}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.starIcon,
              star <= currentRating ? styles.starFilled : styles.starEmpty,
            ]}
          >
            ★
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerRow}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Go back"
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rate your experience!</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.graphicBox}>
          <View style={styles.phoneShape}>
            <View style={styles.avatarPill} />
            <Text style={styles.miniStars}>★★★★★</Text>
          </View>
          <View style={styles.smileyBadge}>
            <Text style={styles.smiley}>😊</Text>
          </View>
          <Text style={styles.leafDecor}>🍃 🌿</Text>
        </View>

        <Text style={styles.sectionTitle}>Rate the collector</Text>
        <View style={styles.ratingCard}>
          <View style={styles.userInfoRow}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarEmoji}>🧢</Text>
            </View>
            <View style={styles.userInfoText}>
              <Text style={styles.profileName}>John Olamide</Text>
              {renderStars(collectorRating, setCollectorRating)}
            </View>
          </View>
          <TextInput
            style={styles.commentInput}
            value={collectorComment}
            onChangeText={setCollectorComment}
            placeholder="Add a comment..(optional)"
            placeholderTextColor="#94a3b8"
          />
        </View>

        <Text style={styles.sectionTitle}>Rate the household</Text>
        <View style={styles.ratingCard}>
          <View style={styles.userInfoRow}>
            <View style={[styles.avatarCircle, styles.householdAvatar]}>
              <Text style={styles.avatarEmoji}>👩🏾</Text>
            </View>
            <View style={styles.userInfoText}>
              <Text style={styles.profileName}>You</Text>
              {renderStars(householdRating, setHouseholdRating)}
            </View>
          </View>
          <TextInput
            style={styles.commentInput}
            value={householdComment}
            onChangeText={setHouseholdComment}
            placeholder="Add a comment..(optional)"
            placeholderTextColor="#94a3b8"
          />
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitRating}
        >
          <Text style={styles.submitButtonText}>Done</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9fdfa',
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingBottom: 30,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 28,
  },
  backButton: {
    width: 35,
    height: 40,
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 36,
    color: '#1e293b',
    fontWeight: '300',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginLeft: 14,
  },
  graphicBox: {
    width: '100%',
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginVertical: 10,
  },
  phoneShape: {
    width: 65,
    height: 105,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2.5,
    borderColor: '#0f7643',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.02,
    shadowRadius: 3,
    elevation: 1,
  },
  avatarPill: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#e2e8f0',
    marginBottom: 6,
  },
  miniStars: {
    fontSize: 9,
    color: '#eab308',
    letterSpacing: -0.5,
  },
  smileyBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#a3e2c3',
    position: 'absolute',
    bottom: 15,
    right: '36%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  smiley: {
    fontSize: 20,
  },
  leafDecor: {
    position: 'absolute',
    left: '26%',
    bottom: 30,
    fontSize: 18,
    opacity: 0.4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f7643',
    textAlign: 'center',
    marginBottom: 14,
    marginTop: 10,
  },
  ratingCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#eef5f1',
    shadowColor: '#000',
    shadowOpacity: 0.01,
    shadowRadius: 5,
    elevation: 1,
  },
  userInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#64748b',
    overflow: 'hidden',
  },
  householdAvatar: {
    borderColor: '#10b981',
  },
  avatarEmoji: {
    fontSize: 36,
    marginTop: 2,
  },
  userInfoText: {
    marginLeft: 18,
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  starRow: {
    flexDirection: 'row',
    gap: 4,
  },
  starIcon: {
    fontSize: 26,
    letterSpacing: -1,
  },
  starFilled: {
    color: '#eab308',
  },
  starEmpty: {
    color: '#cbd5e1',
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    height: 50,
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#334155',
    backgroundColor: '#fafdfb',
  },
  submitButton: {
    backgroundColor: '#0f7643',
    height: 54,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#0f7643',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
