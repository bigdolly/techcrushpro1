import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import QRCode from 'react-native-qrcode-svg';

const collectorData = {
  name: 'John Olamide',
  id: 'RC-4587',
  phone: '+244 801 234 5678',
  qrValue: 'RecycleConnect-Collector-RC-4587',
};

export default function VerifiedCollectorProfileScreen() {
  const router = useRouter();

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
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.pageTitle}>Verified Collector</Text>

        <View style={styles.profileHeaderCard}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarEmoji}>🧢</Text>
          </View>
          <View style={styles.profileTextInfo}>
            <Text style={styles.collectorName}>{collectorData.name}</Text>
            <Text style={styles.collectorIdText}>{collectorData.id}</Text>
            <View style={styles.verifiedBadge}>
              <Text style={styles.verifiedBadgeText}>Verified</Text>
            </View>
          </View>
        </View>

        <View style={styles.idCardContainer}>
          <View style={styles.idCardLayout}>
            <View style={styles.qrCodeWrapper}>
              <QRCode
                value={collectorData.qrValue}
                size={95}
                color="#000"
                backgroundColor="#eef7f2"
              />
            </View>
            <View style={styles.idCardDetails}>
              <Text style={styles.brandTitle}>RecycleConnect</Text>
              <Text style={styles.fieldLabel}>Collector ID</Text>
              <Text style={styles.fieldValue}>{collectorData.id}</Text>
              <Text style={styles.fieldLabel}>Name</Text>
              <Text style={styles.fieldValue}>{collectorData.name}</Text>
              <Text style={styles.fieldLabel}>Phone</Text>
              <Text style={styles.fieldValue}>{collectorData.phone}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Verification Documents</Text>
        <View style={styles.documentRow}>
          <Text style={styles.documentIcon}>📄</Text>
          <View style={styles.documentText}>
            <Text style={styles.documentTitle}>ID Card</Text>
            <Text style={styles.documentVerified}>✓ Verified</Text>
          </View>
        </View>
        <View style={styles.documentRow}>
          <Text style={styles.documentIcon}>🕵️‍♂️</Text>
          <View style={styles.documentText}>
            <Text style={styles.documentTitle}>Background Check</Text>
            <Text style={styles.documentVerified}>✓ Verified</Text>
          </View>
        </View>
        <View style={styles.documentRow}>
          <Text style={styles.documentIcon}>📜</Text>
          <View style={styles.documentText}>
            <Text style={styles.documentTitle}>Training Certificate</Text>
            <Text style={styles.documentVerified}>✓ Verified</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5faf6',
  },
  headerRow: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 32,
    color: '#334155',
    fontWeight: '300',
    marginRight: 4,
    marginTop: -4,
  },
  backText: {
    fontSize: 16,
    color: '#334155',
    fontWeight: '500',
  },
  scrollContainer: {
    padding: 24,
    paddingTop: 10,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 20,
  },
  profileHeaderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 26,
  },
  avatarCircle: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    backgroundColor: '#cbd5e1',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0f7643',
    overflow: 'hidden',
  },
  avatarEmoji: {
    fontSize: 44,
    marginTop: 4,
  },
  profileTextInfo: {
    marginLeft: 20,
    flex: 1,
  },
  collectorName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  collectorIdText: {
    fontSize: 15,
    color: '#64748b',
    marginTop: 2,
    fontWeight: '500',
  },
  verifiedBadge: {
    backgroundColor: '#00703c',
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 10,
  },
  verifiedBadgeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  idCardContainer: {
    backgroundColor: '#eef7f2',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#d1e7dd',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 28,
  },
  idCardLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qrCodeWrapper: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  idCardDetails: {
    flex: 1,
    paddingLeft: 20,
  },
  brandTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
    letterSpacing: 0.3,
  },
  fieldLabel: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '500',
  },
  fieldValue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 1,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  documentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e2e8f0',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
  },
  documentIcon: {
    fontSize: 22,
    marginRight: 16,
    marginLeft: 4,
  },
  documentText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  documentTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#334155',
  },
  documentVerified: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#15803d',
  },
});
