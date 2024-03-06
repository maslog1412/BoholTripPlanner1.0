import React, { useState } from 'react';
import CalendarPickerComponent from './CalendarPickerComponent';
import NumberInput from './NumberInput';
import { View } from 'react-native-web';

const PinnedScreen = () => {
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [calendarVisible, setCalendarVisible] = useState(true); // Set to true to display CalendarPickerComponent initially

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <View>
      {/* Display the CalendarPickerComponent */}
      {calendarVisible && (
                <CalendarPickerComponent
                  onStartDateChange={handleStartDateChange}
                  onEndDateChange={handleEndDateChange}
                />
         )}
      <NumberInput
        label="Number of People"
        value={numberOfPeople}
        onValueChange={(value) => setNumberOfPeople(value)}
      />

      {/* Other components for description and additional features go here */}
    </View>
  );
};
export default PinnedScreen;
