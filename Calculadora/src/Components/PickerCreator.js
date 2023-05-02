import React from "react";
import { Picker } from "@react-native-picker/picker";

function createPickerItem(label, value) {
    return <Picker.Item label={label} value={value}/>
}

function createPickersItems(pickersItems) {
    return pickersItems.map((pickerItem) =>
        createPickerItem(pickerItem[0], pickerItem[1])
    );
}

function createPicker(selectedValue, onValueChange, style, items) {
    return (
        <Picker
            selectedValue={selectedValue}
            onValueChange={onValueChange}
            style={style}
        >
            {createPickersItems(items)}
        </Picker>
    )
}

export { createPicker, createPickerItem }