import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';

type RequestStatus = 'New' | 'Ongoing' | 'Completed';

type RequestItem = {
  id: string;
  prCode: string;
  materials: string;
  distance: string;
  weight: string;
  time: string;
  status: RequestStatus;
};

const ALL_REQUESTS: RequestItem[] = [
  {
    id: '1',
    prCode: '#PR-1024',
    materials: 'Plastic, Paper, Glass',
    distance: '3.2 km',
    weight: '8.4 kg',
    time: '10:24 AM',
    status: 'New',
  },
  {
    id: '2',
    prCode: '#PR-1023',
    materials: 'Metal, E-waste',
    distance: '5.7 km',
    weight: '6.2 kg',
    time: '10:50 AM',
    status: 'New',
  },
  {
    id: '3',
    prCode: '#PR-1022',
    materials: 'Plastic, Paper',
    distance: '7.1 km',
    weight: '9.5 kg',
    time: '11:20 AM',
    status: 'New',
  },
  {
    id: '4',
    prCode: '#PR-1019',
    materials: 'Glass, Bottles',
    distance: '1.4 km',
    weight: '12.0 kg',
    time: 'Yesterday',
    status: 'Ongoing',
  },
  {
    id: '5',
    prCode: '#PR-0998',
    materials: 'Cardboard Box',
    distance: '4.0 km',
    weight: '15.1 kg',
    time: '2 days ago',
    status: 'Completed',
  },
];

export default function CollectorDashboardFeed() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<RequestStatus>('New');

  const filteredData = ALL_REQUESTS.filter((item) => item.status === activeTab);
  const newCount = ALL_REQUESTS.filter((item) => item.status === 'New').length;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pickup Requests</Text>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Continue to collection complete"
          style={styles.nextButton}
          onPress={() => router.push('/dashboard/rate-experience' as any)}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabSegmentBar}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'New' && styles.tabButtonActive]}
          onPress={() => setActiveTab('New')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'New' && styles.tabButtonTextActive]}>
            New ({newCount})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Ongoing' && styles.tabButtonActive]}
          onPress={() => setActiveTab('Ongoing')}
        >
          <Text
            style={[styles.tabButtonText, activeTab === 'Ongoing' && styles.tabButtonTextActive]}
          >
            Ongoing
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Completed' && styles.tabButtonActive]}
          onPress={() => setActiveTab('Completed')}
        >
          <Text
            style={[styles.tabButtonText, activeTab === 'Completed' && styles.tabButtonTextActive]}
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContentContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.requestCard}>
            <View style={styles.cardHeaderRow}>
              <Text style={styles.prCodeText}>{item.prCode}</Text>
              <Text style={styles.timestampText}>{item.time}</Text>
            </View>

            <Text style={styles.materialsText}>{item.materials}</Text>

            <View style={styles.cardFooterRow}>
              <Text style={styles.metricsText}>
                {item.distance}
                <Text style={styles.bulletDivider}> • </Text>
                {item.weight}
              </Text>

              <TouchableOpacity
                style={styles.detailsBtn}
                onPress={() => router.push('/dashboard/create-post' as any)}
              >
                <Text style={styles.detailsBtnText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={styles.bottomTabBar}>
        <TouchableOpacity style={styles.tabBarItem}
         onPress={() => router.replace('/dashboard/create-post' as any)}>
          <Text style={styles.tabBarIcon}>🏠</Text>
          <Text style={styles.tabBarLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabBarItem, styles.tabBarItemActive]}>
          <Text style={[styles.tabBarIcon, styles.tabBarIconActive]}>📅</Text>
          <Text style={[styles.tabBarLabel, styles.tabBarLabelActive]}>Request</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabBarItem}
          onPress={() => router.push('/dashboard/collector-availability' as any)}
        >
          <Text style={styles.tabBarIcon}>📍</Text>
          <Text style={styles.tabBarLabel}>Map</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabBarItem}
          onPress={() => router.push('/dashboard/collector-profile' as any)}
        >
          <Text style={styles.tabBarIcon}>👤</Text>
          <Text style={styles.tabBarLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9fdfa',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 10,
  },
  backButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 34,
    color: '#1e293b',
    fontWeight: '300',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginLeft: 12,
  },
  nextButton: {
    marginLeft: 'auto',
    backgroundColor: '#0f7643',
    paddingHorizontal: 16,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  tabSegmentBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 14,
    gap: 10,
  },
  tabButton: {
    flex: 1,
    backgroundColor: '#f1f5f3',
    height: 46,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButtonActive: {
    backgroundColor: '#0f7643',
  },
  tabButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#64748b',
  },
  tabButtonTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  listContentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  requestCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#edf4f0',
    shadowColor: '#000',
    shadowOpacity: 0.01,
    shadowRadius: 4,
    elevation: 1,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  prCodeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  timestampText: {
    fontSize: 14,
    color: '#94a3b8',
    fontWeight: '500',
  },
  materialsText: {
    fontSize: 16,
    color: '#64748b',
    fontWeight: '500',
    marginBottom: 14,
  },
  cardFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metricsText: {
    fontSize: 15,
    color: '#94a3b8',
    fontWeight: '600',
  },
  bulletDivider: {
    fontSize: 18,
    color: '#cbd5e1',
  },
  detailsBtn: {
    backgroundColor: '#0f7643',
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 10,
  },
  detailsBtnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bottomTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f3',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
  },
  tabBarItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabBarItemActive: {
    borderTopWidth: 0,
  },
  tabBarIcon: {
    fontSize: 22,
    color: '#94a3b8',
  },
  tabBarIconActive: {
    color: '#0f7643',
  },
  tabBarLabel: {
    fontSize: 12,
    color: '#94a3b8',
    fontWeight: '600',
    marginTop: 4,
  },
  tabBarLabelActive: {
    color: '#0f7643',
    fontWeight: 'bold',
  },
});