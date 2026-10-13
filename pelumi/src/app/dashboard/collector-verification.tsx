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

const verificationSteps = [
  { title: 'ID Document', status: 'Submitted · Sep 23, 2026', complete: true },
  { title: 'Background Check', status: 'Done', complete: true },
  { title: 'Training Certificate', status: 'Pending', complete: false },
];

export default function CollectorVerificationScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.titleRow}>
          <Text style={styles.pageTitle}>Identity Verification</Text>
          <View style={styles.verifiedBadge}>
            <Text style={styles.verifiedCheck}>✓</Text>
          </View>
        </View>

        <View style={styles.idCard}>
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarIcon}>👤</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>
              Name: <Text style={styles.infoValue}>John Olamide</Text>
            </Text>
            <Text style={styles.infoLabel}>
              NIN: <Text style={styles.infoValue}>15271220488</Text>
            </Text>
            <Text style={styles.infoLabel}>
              Nationality: <Text style={styles.infoValue}>Nigerian</Text>
            </Text>
            <Text style={styles.infoLabel}>
              Phone Number: <Text style={styles.infoValue}>+243 801 234 5678</Text>
            </Text>
            <Text style={styles.infoLabel}>
              Date Of Birth: <Text style={styles.infoValue}>April 12, 2001</Text>
            </Text>
            <Text style={styles.infoLabel}>
              EXP Date: <Text style={styles.infoValue}>November 29, 2028</Text>
            </Text>
          </View>
        </View>

        <Text style={styles.reviewMainText}>
          Your documents are under review.
        </Text>
        <Text style={styles.reviewSubText}>
          This usually takes 1-2 business days.
        </Text>

        <Text style={styles.sectionTitle}>Verification Status</Text>
        <View style={styles.timelineCard}>
          {verificationSteps.map((step, index) => (
            <View style={styles.timelineItem} key={step.title}>
              <View style={styles.nodeColumn}>
                <View
                  style={[
                    styles.timelineNode,
                    step.complete ? styles.nodeSuccess : styles.nodeWarning,
                  ]}
                >
                  <Text style={styles.nodeIcon}>
                    {step.complete ? '✓' : '⏳'}
                  </Text>
                </View>
                {index < verificationSteps.length - 1 && (
                  <View
                    style={[
                      styles.timelineLine,
                      step.complete ? styles.lineSuccess : styles.linePending,
                    ]}
                  />
                )}
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.stepTitle}>{step.title}</Text>
                <Text style={styles.stepMetaText}>{step.status}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.notificationBanner}>
          <Text style={styles.bannerIcon}>↻</Text>
          <Text style={styles.bannerText}>
            You will be notified once your verification is complete.
          </Text>
        </View>

        <TouchableOpacity
          accessibilityRole="button"
          style={styles.nextButton}
          onPress={() => router.replace('/dashboard/collector-profile' as any)}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5faf6',
  },
  scrollContainer: {
    padding: 24,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  verifiedBadge: {
    backgroundColor: '#10b981',
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  verifiedCheck: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  idCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 24,
  },
  avatarPlaceholder: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#f3f4f6',
    borderWidth: 1,
    borderColor: '#d1d5db',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarIcon: {
    fontSize: 30,
  },
  infoContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#6b7280',
    marginBottom: 5,
    lineHeight: 16,
  },
  infoValue: {
    color: '#1f2937',
    fontWeight: '500',
  },
  reviewMainText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  reviewSubText: {
    fontSize: 15,
    color: '#4a5550',
    marginTop: 4,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 18,
  },
  timelineCard: {
    backgroundColor: '#eef7f2',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  timelineItem: {
    flexDirection: 'row',
    minHeight: 65,
  },
  nodeColumn: {
    alignItems: 'center',
    marginRight: 16,
    width: 24,
  },
  timelineNode: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nodeSuccess: {
    backgroundColor: '#0f7643',
  },
  nodeWarning: {
    backgroundColor: '#f59e0b',
  },
  nodeIcon: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  timelineLine: {
    width: 2,
    flex: 1,
    marginVertical: 4,
  },
  lineSuccess: {
    backgroundColor: '#0f7643',
  },
  linePending: {
    backgroundColor: '#cbd5e1',
  },
  timelineContent: {
    flex: 1,
    paddingTop: 1,
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  stepMetaText: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 2,
  },
  notificationBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 24,
  },
  bannerIcon: {
    fontSize: 18,
    color: '#0f7643',
    marginRight: 14,
  },
  bannerText: {
    flex: 1,
    fontSize: 14,
    color: '#334155',
    fontWeight: '500',
    lineHeight: 20,
  },
  nextButton: {
    backgroundColor: '#0f7643',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
