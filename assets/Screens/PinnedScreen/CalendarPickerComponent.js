import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { differenceInCalendarDays } from 'date-fns';
import { pinnedStyles } from '../../../pinnedStyles'; // Import the styles
import Header from './Header'; // Import the Header component

const CalendarPickerComponent = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [diffInDays, setDiffInDays] = useState(0);
  const [calendarVisible, setCalendarVisible] = useState(false);

  useEffect(() => {
    if (selectedStartDate && selectedEndDate) {
      const diff = differenceInCalendarDays(selectedEndDate, selectedStartDate);
      setDiffInDays(diff);
    }
  }, [selectedStartDate, selectedEndDate]);

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedStartDate(date);
    }
  };

  const toggleCalendarVisibility = () => {
    // Reset selected dates when hiding the CalendarPicker
    if (!calendarVisible) {
      setSelectedStartDate(null);
      setSelectedEndDate(null);
    }
    setCalendarVisible(!calendarVisible);
  };

  return (
    <View style={pinnedStyles.container}>
      <Header />

      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#007300' : '#007300', // Green color when pressed
            borderRadius: 8,
            padding: 5,
            marginLeft: 10,
          },
        ]}
        onPress={toggleCalendarVisibility}
      >
        <Text style={pinnedStyles.arrowButtonText}>
          {calendarVisible ? 'Hide Calendar' : 'Show Calendar'}
        </Text>
      </Pressable>

      {calendarVisible && (
        <CalendarPicker
          startFromMonday={false}
          allowRangeSelection={true}
          selectedStartDate={selectedStartDate}
          selectedEndDate={selectedEndDate}
          onDateChange={onDateChange}
        />
      )}

      {selectedStartDate && selectedEndDate && calendarVisible && (
        <Text style={pinnedStyles.dateText}>
          {`Start: ${selectedStartDate.toLocaleDateString('en-US')} - End: ${selectedEndDate.toLocaleDateString('en-US')}`}
        </Text>
      )}

      {calendarVisible && (
        <Text style={pinnedStyles.daysText}>
          Difference in Days: {diffInDays}
        </Text>
      )}
    </View>
  );
};

export default CalendarPickerComponent;
