import React from "react";
import { Picker } from "@react-native-picker/picker";

function createPickerItem(label, value) {
    return (
        <Picker.Item label={label} value={value}/>
    )
}

function createPicker(selectedValue, onValueChange, style, items) {
    return (
        <Picker
            selectedValue={selectedValue}
            onValueChange={onValueChange}
            style={style}
        >
            {items.map(item => {
                createPickerItem(item[0], item[1]);
            })}
        </Picker>
    )
}

export { createPicker, createPickerItem }