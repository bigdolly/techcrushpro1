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

export default function RequestReceivedScreen() {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push('/dashboard' as any);
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
        <View style={styles.graphicCard}>
          <View style={styles.phoneShape}>
            <View style={styles.phoneScreenLine} />
            <Text style={styles.phoneStar}>⭐</Text>
          </View>
          <View style={styles.smileyBadge}>
            <Text style={styles.smiley}>😊</Text>
          </View>
          <Text style={styles.leafDecor}>🍃 🌿</Text>
        </View>

        <Text style={styles.mainTitle}>Request Received!</Text>
        <Text style={styles.subtitle}>
          Your pickup request has been successfully received. We&apos;re now matching
          you with a verified collector.
        </Text>

        <View style={styles.timelineCard}>
          <View style={styles.timelineRow}>
            <View style={styles.timelineNodeColumn}>
              <View style={[styles.timelineNode, styles.nodeSuccess]}>
                <Text style={styles.nodeCheck}>✓</Text>
              </View>
              <View style={[styles.connectingLine, styles.lineSuccess]} />
            </View>
            <View style={styles.timelineContent}>
              <Text style={[styles.stepTitle, styles.stepTitleSuccess]}>
                Request received
              </Text>
              <Text style={styles.stepTimestamp}>
                Sep 24, 2026 - 10:24 AM
              </Text>
            </View>
          </View>

          <View style={styles.timelineRow}>
            <View style={styles.timelineNodeColumn}>
              <View style={[styles.timelineNode, styles.nodePending]} />
              <View style={[styles.connectingLine, styles.linePending]} />
            </View>
            <View style={styles.timelineContent}>
              <Text style={styles.stepTitle}>Matching collector</Text>
              <Text style={styles.stepInProgress}>In progress...</Text>
            </View>
          </View>

          <View style={styles.timelineRow}>
            <View style={styles.timelineNodeColumn}>
              <View style={[styles.timelineNode, styles.nodePending]} />
            </View>
            <View style={styles.timelineContent}>
              <Text style={styles.stepTitle}>Pickup scheduled</Text>
              <Text style={styles.stepWaiting}>Waiting for collector</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.viewDetailsButton}
          onPress={handleViewDetails}
        >
          <Text style={styles.viewDetailsButtonText}>Next</Text>
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
  graphicCard: {
    width: 220,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 10,
    marginBottom: 15,
  },
  phoneShape: {
    width: 75,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#0f7643',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  phoneScreenLine: {
    width: 45,
    height: 4,
    backgroundColor: '#e2e8f0',
    borderRadius: 2,
    position: 'absolute',
    top: 10,
  },
  phoneStar: {
    fontSize: 24,
    color: '#22c55e',
    marginTop: 10,
  },
  smileyBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#a3e2c3',
    position: 'absolute',
    bottom: 15,
    right: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  smiley: {
    fontSize: 24,
  },
  leafDecor: {
    position: 'absolute',
    left: 20,
    bottom: 40,
    fontSize: 20,
    opacity: 0.5,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 15,
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#4b5563',
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 28,
    paddingHorizontal: 12,
  },
  timelineCard: {
    backgroundColor: '#f4fbf7',
    width: '100%',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#edf7f2',
    marginBottom: 35,
  },
  timelineRow: {
    flexDirection: 'row',
    minHeight: 80,
  },
  timelineNodeColumn: {
    alignItems: 'center',
    marginRight: 18,
    width: 26,
  },
  timelineNode: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: '#94a3b8',
    backgroundColor: '#fff',
  },
  nodeSuccess: {
    backgroundColor: '#0f7643',
    borderColor: '#0f7643',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nodePending: {
    borderColor: '#475569',
    borderWidth: 2,
  },
  nodeCheck: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: -1,
  },
  connectingLine: {
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
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0f7643',
  },
  stepTitleSuccess: {
    color: '#0f7643',
  },
  stepTimestamp: {
    fontSize: 13,
    color: '#94a3b8',
    fontWeight: '500',
    marginTop: 5,
  },
  stepInProgress: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
    marginTop: 5,
  },
  stepWaiting: {
    fontSize: 14,
    color: '#94a3b8',
    fontWeight: '500',
    marginTop: 5,
  },
  viewDetailsButton: {
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
  viewDetailsButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
