import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = async (key: string, value: string) => {
    try {
        const jsonValue = value;
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.log("Error saving data", e);
    }
}

export const getData = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? jsonValue : null;
    } catch (e) {
        console.log("Error reading data", e);
    }
}
