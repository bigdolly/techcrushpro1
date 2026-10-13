import React from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';

const pickupSummary = {
  materials: 'Plastic, Paper, Glass',
  weight: '8.4 kg',
};

export default function CollectionCompleteScreen() {
  const router = useRouter();

  const handleCameraPress = () => {
    Alert.alert(
      'Camera Integration',
      'Device camera or photo library view will open here to attach pickup proof.',
    );
  };

  const handleSubmitConfirmation = () => {
    router.push('/dashboard/request-received' as any);
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
        <View style={styles.successBadge}>
          <Text style={styles.successBadgeText}>✓</Text>
        </View>

        <Text style={styles.title}>Collection Complete!</Text>
        <Text style={styles.subtitle}>
          The pickup has been completed. Thank you for making a difference!
        </Text>

        <View style={styles.mediaContainer}>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.binEmoji}>🗑️ ♻️ 🗑️</Text>
          </View>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Add a photo"
            style={styles.cameraButton}
            onPress={handleCameraPress}
          >
            <Text style={styles.cameraIcon}>📷</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.addPhotoLabel}>Add Photo (optional)</Text>

        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <Text style={styles.truckIcon}>🚚</Text>
            <View style={styles.summaryText}>
              <Text style={styles.itemCollectedHeader}>Item Collected</Text>
              <Text style={styles.itemMaterialsValue}>
                {pickupSummary.materials}
                <Text style={styles.starDivider}> * </Text>
                {pickupSummary.weight}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          accessibilityRole="button"
          style={styles.submitButton}
          onPress={handleSubmitConfirmation}
        >
          <Text style={styles.submitButtonText}>Submit Confirmation</Text>
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
  headerRow: {
    width: '100%',
    paddingVertical: 4,
    paddingHorizontal: 28,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 36,
    color: '#1e293b',
    fontWeight: '300',
  },
  scrollContainer: {
    paddingHorizontal: 24,
    alignItems: 'center',
    paddingBottom: 30,
  },
  successBadge: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#22c55e',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#16a34a',
    marginTop: 10,
    shadowColor: '#22c55e',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  successBadgeText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f7643',
    marginTop: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  mediaContainer: {
    width: '100%',
    height: 210,
    backgroundColor: '#e2e8f0',
    borderRadius: 16,
    overflow: 'visible',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  imagePlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2f0e7',
  },
  binEmoji: {
    fontSize: 36,
    opacity: 0.6,
  },
  cameraButton: {
    position: 'absolute',
    bottom: -20,
    right: 20,
    backgroundColor: '#fff',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cameraIcon: {
    fontSize: 22,
  },
  addPhotoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#64748b',
    marginTop: 28,
    marginBottom: 28,
  },
  summaryCard: {
    backgroundColor: '#f0fdf4',
    width: '100%',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#d1e7dd',
    marginBottom: 35,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  truckIcon: {
    fontSize: 24,
    marginRight: 16,
    color: '#16a34a',
  },
  summaryText: {
    flex: 1,
  },
  itemCollectedHeader: {
    fontSize: 15,
    fontWeight: '500',
    color: '#64748b',
  },
  itemMaterialsValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#334155',
    marginTop: 6,
  },
  starDivider: {
    fontSize: 14,
    color: '#94a3b8',
    marginHorizontal: 2,
  },
  submitButton: {
    backgroundColor: '#0f7643',
    height: 54,
    width: '100%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
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
