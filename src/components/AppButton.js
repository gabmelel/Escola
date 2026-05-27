import React from 'react';
import { Button, View, } from 'react-native';

export default function AppButton({title, onPress, color, disabled}) {
    return (
    <View>
      <Button
          title={title}
          onPress={onPress}
          disabled={disabled}
          />
    </View>
    )
}