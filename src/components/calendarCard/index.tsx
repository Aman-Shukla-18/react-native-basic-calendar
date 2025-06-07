import React from 'react'
import { View, Text } from 'react-native'
import { CalendarCardPropsType } from './types'

export const CalendarCard = (props: CalendarCardPropsType) => {
  return (
    <View style = {{backgroundColor: "green"}}>
      <Text>calendarCard</Text>
    </View>
  )
}