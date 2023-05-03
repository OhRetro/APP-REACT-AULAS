import React from "react";
import { Picker } from "@react-native-picker/picker";

const createPickerItem = (label, value, key) => (
    <Picker.Item label={label} value={value} key={key} />
);

function createPickersItems(pickersItems) {
    return pickersItems.map((pickerItem) =>
        createPickerItem(pickerItem[0], pickerItem[1], pickerItem[2])
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

export { createPicker, createPickerItem, createPickersItems }