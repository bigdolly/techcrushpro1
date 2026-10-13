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

export default function CollectorStatsProfileScreen() {
  const router = useRouter();
  const [bioText, setBioText] = useState(
    "I'm John, a verified collector based in Lagos. I'm passionate about keeping our environment clean and green.",
  );
  const [onlineStatus, setOnlineStatus] = useState(true);

  const handleSaveChanges = () => {
    Alert.alert(
      'Profile Updated',
      'Your biography and stats records have been updated successfully.',
    );
    router.replace('/dashboard' as any);
  };

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
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileHeader}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarEmoji}>🧢</Text>
          </View>
          <View style={styles.profileDetails}>
            <Text style={styles.collectorName}>John Olamide</Text>
            <Text style={styles.collectorId}>RC-4578</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.starCluster}>⭐⭐⭐⭐⭐</Text>
              <Text style={styles.ratingMetrics}>4.5 (128 PickUps)</Text>
            </View>
          </View>
        </View>

        <View style={styles.badgeRow}>
          <View style={styles.statusBadge}>
            <Text style={styles.badgeText}>🛡️ Verified Collector</Text>
          </View>
          <View style={styles.statusBadge}>
            <Text style={styles.badgeText}>⭐ Top Rated</Text>
          </View>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.analyticsBox}>
            <Text style={styles.analyticsNumber}>124</Text>
            <Text style={styles.analyticsLabel}>Completed</Text>
            <Text style={styles.analyticsLabel}>Collections</Text>
          </View>
          <View style={styles.analyticsBox}>
            <Text style={styles.analyticsNumber}>98%</Text>
            <Text style={styles.analyticsLabel}>On-Time</Text>
            <Text style={styles.analyticsLabel}>Rate</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>About</Text>
        <TextInput
          style={styles.biographyInput}
          multiline
          value={bioText}
          onChangeText={setBioText}
          placeholder="Write a brief profile description..."
        />

        <View style={styles.availabilityHeader}>
          <Text style={styles.sectionTitle}>Availability</Text>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => setOnlineStatus(!onlineStatus)}
            style={[
              styles.statusToggle,
              onlineStatus ? styles.statusOnline : styles.statusOffline,
            ]}
          >
            <Text style={styles.statusToggleText}>
              {onlineStatus ? 'Online' : 'Offline'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.scheduleCard}>
          <View style={styles.scheduleRow}>
            <Text style={styles.scheduleIcon}>📅</Text>
            <View style={styles.scheduleText}>
              <Text style={styles.scheduleDays}>Mon - Sat</Text>
              <Text style={styles.scheduleHours}>8:00am - 6:00pm</Text>
            </View>
          </View>
          <View style={styles.serviceAreaRow}>
            <Text style={styles.scheduleIcon}>📞</Text>
            <View style={styles.scheduleText}>
              <Text style={styles.scheduleDays}>Service Area</Text>
              <Text style={styles.scheduleHours}>
                Lagos, Ikeja and nearby areas
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSaveChanges}
        >
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4fbf7',
  },
  headerRow: {
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 36,
    color: '#334155',
    fontWeight: '300',
  },
  scrollContainer: {
    padding: 24,
    paddingTop: 10,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#cbd5e1',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0f7643',
    overflow: 'hidden',
  },
  avatarEmoji: {
    fontSize: 48,
    marginTop: 4,
  },
  profileDetails: {
    marginLeft: 18,
    flex: 1,
  },
  collectorName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  collectorId: {
    fontSize: 15,
    color: '#64748b',
    marginTop: 2,
    fontWeight: '500',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  starCluster: {
    fontSize: 13,
    marginRight: 6,
    letterSpacing: -1,
  },
  ratingMetrics: {
    fontSize: 13,
    color: '#475569',
    fontWeight: '500',
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statusBadge: {
    backgroundColor: '#e2ede7',
    width: '48%',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#c3ded0',
  },
  badgeText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#0f7643',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  analyticsBox: {
    backgroundColor: '#eef7f2',
    width: '48%',
    borderRadius: 16,
    paddingVertical: 22,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d1e7dd',
  },
  analyticsNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 6,
  },
  analyticsLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  biographyInput: {
    fontSize: 15,
    color: '#334155',
    lineHeight: 22,
    backgroundColor: 'transparent',
    padding: 0,
    marginBottom: 24,
    textAlignVertical: 'top',
  },
  availabilityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  statusToggle: {
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 20,
  },
  statusOnline: {
    backgroundColor: '#0f7643',
  },
  statusOffline: {
    backgroundColor: '#cbd5e1',
  },
  statusToggleText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  scheduleCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#edf4f0',
    marginBottom: 28,
  },
  scheduleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceAreaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f3',
    marginTop: 12,
    paddingTop: 12,
  },
  scheduleIcon: {
    fontSize: 20,
    marginRight: 16,
  },
  scheduleText: {
    flex: 1,
  },
  scheduleDays: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1f2937',
  },
  scheduleHours: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
    fontWeight: '500',
  },
  saveButton: {
    backgroundColor: '#0f7643',
    height: 54,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0f7643',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
