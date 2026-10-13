import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';

// Material type categories matching your design reference
const CATEGORIES = [
  { id: 'plastic', label: 'Plastic', icon: '🧴' },
  { id: 'paper', label: 'Paper', icon: '📄' },
  { id: 'glass', label: 'Glass', icon: '🍾' },
  { id: 'metal', label: 'Metal', icon: '🛢️' },
  { id: 'ewaste', label: 'E-waste', icon: '💻' },
  { id: 'others', label: 'Others', icon: '♻️' },
];

export default function RequestPickupScreen() {
    const router = useRouter ();
  const [selectedCategory, setSelectedCategory] = useState<string>('plastic');
  const [location, setLocation] = useState<string>('');
  const [note, setNote] = useState<string>('');
  
  // Date Picker States
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const onChangeDate = (event: DateTimePickerEvent, selectedDate?: Date) => {
    // Hide the calendar dialog once a date is selected
    setShowDatePicker(false);
    
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleNext = () => {
    const postData = {
      category: selectedCategory,
      location,
      note,
      pickupDate: date.toDateString(),
    };
    console.log('Form Submitted:', postData);
    router.replace('/dashboard/request-received' as any);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Block */}
        <Text style={styles.title}>Request Pickup</Text>
        <Text style={styles.subtitle}>What recyclable materials would you need to dispose of?</Text>

        {/* Categories 2-Column Grid */}
        <View style={styles.grid}>
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <TouchableOpacity
                key={category.id}
                style={[styles.gridItem, isSelected && styles.gridItemSelected]}
                onPress={() => setSelectedCategory(category.id)}
              >
                <Text style={styles.iconText}>{category.icon}</Text>
                <Text style={[styles.gridLabel, isSelected && styles.gridLabelSelected]}>
                  {category.label}
                </Text>
                {isSelected && (
                  <View style={styles.checkmarkBadge}>
                    <Text style={styles.checkmarkText}>✓</Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Input: Pickup Location */}
        <Text style={styles.inputLabel}>Pickup Location</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputIcon}>📍</Text>
          <TextInput
            style={styles.textInput}
            value={location}
            onChangeText={setLocation}
            placeholder="Enter pick up address"
          />
        </View>

        {/* Input: Pickup Date (Triggers Dialog) */}
        <Text style={styles.inputLabel}>Preferred Pickup Date</Text>
        <TouchableOpacity style={styles.inputWrapper} onPress={() => setShowDatePicker(true)}>
          <Text style={styles.inputIcon}>📅</Text>
          <Text style={styles.dateSelectorText}>{date.toDateString()}</Text>
        </TouchableOpacity>

        {/* Calendar Android Dialog Component */}
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="calendar"
            minimumDate={new Date()} // Prevents choosing past dates
            onChange={onChangeDate}
          />
        )}

        {/* Input: Add Note (Optional) */}
        <Text style={styles.inputLabel}>Add note (Optional)</Text>
        <TextInput
          style={[styles.textInput, styles.textArea]}
          value={note}
          onChangeText={setNote}
          placeholder="e.g large items, special instructions..."
          multiline
          numberOfLines={3}
        />

        {/* Form CTA Action Button */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f7faf8' },
  scrollContainer: { padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#111', marginBottom: 8 },
  subtitle: { fontSize: 15, color: '#4a5550', lineHeight: 22, marginBottom: 24 },
  
  // Grid Styles
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 24 },
  gridItem: { width: '48%', backgroundColor: '#fff', borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 12, paddingVertical: 20, alignItems: 'center', marginBottom: 14, position: 'relative' },
  gridItemSelected: { borderColor: '#0f7643', backgroundColor: '#f0fdf4', borderWidth: 1.5 },
  iconText: { fontSize: 28, marginBottom: 6 },
  gridLabel: { fontSize: 15, fontWeight: '500', color: '#475569' },
  gridLabelSelected: { color: '#0f7643', fontWeight: '700' },
  checkmarkBadge: { position: 'absolute', top: 8, right: 8, backgroundColor: '#0f7643', width: 18, height: 18, borderRadius: 9, justifyContent: 'center', alignItems: 'center' },
  checkmarkText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
  
  // Field Elements
  inputLabel: { fontSize: 16, fontWeight: 'bold', color: '#111', marginBottom: 10, marginTop: 4 },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 10, paddingHorizontal: 14, height: 50, marginBottom: 18 },
  inputIcon: { fontSize: 16, marginRight: 10 },
  textInput: { flex: 1, fontSize: 15, color: '#334155' },
  dateSelectorText: { fontSize: 15, color: '#334155' },
  textArea: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 10, padding: 14, height: 80, textAlignVertical: 'top', marginBottom: 26 },
  
  // Button Block
  nextButton: { backgroundColor: '#0f7643', height: 52, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  nextButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});