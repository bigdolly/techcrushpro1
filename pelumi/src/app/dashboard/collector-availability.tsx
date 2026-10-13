import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';

type AvailabilityMode = 'Available' | 'Unavailable';

export default function CollectorAvailabilityScreen() {
  const router = useRouter();
  const [isStatusActive, setIsStatusActive] = useState(true);
  const [availabilityMode, setAvailabilityMode] =
    useState<AvailabilityMode>('Available');
  const [radiusValue, setRadiusValue] = useState(12);
  const [preferredLocation, setPreferredLocation] = useState('Lagos, Nigeria');

  const handleSaveChanges = () => {
    Alert.alert(
      'Settings Updated',
      'Your service radius and working availability have been saved.',
    );
    router.replace('/dashboard/collector-verification' as any);
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
        <Text style={styles.headerTitle}>Availability</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.subtitle}>
          Set your availability and service area so you can receive pickup
          requests.
        </Text>

        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.iconCircle}>
              <Text style={styles.icon}>🕒</Text>
            </View>
            <View style={styles.cardHeaderText}>
              <Text style={styles.cardTitle}>Working status</Text>
              <Text style={styles.cardDescription}>
                Let us know you are available
              </Text>
            </View>
            <Switch
              value={isStatusActive}
              onValueChange={setIsStatusActive}
              trackColor={{ false: '#e2e8f0', true: '#0f7643' }}
              thumbColor="#fff"
            />
          </View>

          <View style={styles.segmentContainer}>
            {(['Available', 'Unavailable'] as const).map((mode) => (
              <TouchableOpacity
                key={mode}
                accessibilityRole="button"
                accessibilityState={{ selected: availabilityMode === mode }}
                style={[
                  styles.segmentButton,
                  availabilityMode === mode && styles.segmentButtonActive,
                ]}
                onPress={() => setAvailabilityMode(mode)}
              >
                <Text
                  style={[
                    styles.segmentText,
                    availabilityMode === mode && styles.segmentTextActive,
                  ]}
                >
                  {mode}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Service area radius</Text>
          <Text style={styles.radiusDescription}>
            How far are you willing to travel?
          </Text>
          <View style={styles.radiusControl}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel="Decrease service radius"
              disabled={radiusValue <= 5}
              style={styles.radiusButton}
              onPress={() => setRadiusValue((radius) => Math.max(5, radius - 1))}
            >
              <Text style={styles.radiusButtonText}>−</Text>
            </TouchableOpacity>
            <Text style={styles.radiusValue}>{radiusValue} km</Text>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel="Increase service radius"
              disabled={radiusValue >= 15}
              style={styles.radiusButton}
              onPress={() =>
                setRadiusValue((radius) => Math.min(15, radius + 1))
              }
            >
              <Text style={styles.radiusButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.radiusLabels}>
            <Text style={styles.radiusLabel}>5 km</Text>
            <Text style={styles.radiusLabel}>15 km</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Preferred location</Text>
          <View style={styles.locationInputWrapper}>
            <Text style={styles.locationIcon}>📍</Text>
            <TextInput
              style={styles.locationInput}
              value={preferredLocation}
              onChangeText={setPreferredLocation}
              placeholder="Set preferred primary region"
            />
          </View>
        </View>

        <TouchableOpacity
          accessibilityRole="button"
          style={styles.saveButton}
          onPress={handleSaveChanges}
        >
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4fbf7',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
  },
  backButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 32,
    color: '#111',
    fontWeight: '300',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
    marginLeft: 10,
  },
  contentContainer: {
    paddingHorizontal: 22,
    paddingTop: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#4a5550',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#edf4f0',
    shadowColor: '#000',
    shadowOpacity: 0.02,
    shadowRadius: 5,
    elevation: 1,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f0fdf4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
  },
  cardHeaderText: {
    flex: 1,
    marginLeft: 14,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  cardDescription: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 2,
  },
  segmentContainer: {
    flexDirection: 'row',
    backgroundColor: '#f1f5f3',
    borderRadius: 10,
    padding: 4,
    marginTop: 18,
    height: 48,
  },
  segmentButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  segmentButtonActive: {
    backgroundColor: '#0f7643',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  segmentText: {
    fontSize: 14,
    color: '#475569',
    fontWeight: '600',
  },
  segmentTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  radiusDescription: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 6,
  },
  radiusControl: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    gap: 24,
  },
  radiusButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eaf5ef',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radiusButtonText: {
    fontSize: 24,
    color: '#0f7643',
  },
  radiusValue: {
    minWidth: 64,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f7643',
  },
  radiusLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingHorizontal: 8,
  },
  radiusLabel: {
    fontSize: 13,
    color: '#94a3b8',
    fontWeight: '500',
  },
  locationInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 25,
    height: 48,
    paddingHorizontal: 16,
    marginTop: 12,
    backgroundColor: '#fafdfb',
  },
  locationIcon: {
    fontSize: 16,
    color: '#16a34a',
    marginRight: 8,
  },
  locationInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: '#1e293b',
  },
  saveButton: {
    backgroundColor: '#0f7643',
    height: 54,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
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
