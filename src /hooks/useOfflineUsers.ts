import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import { saveData, getData } from "../storage/asyncStorage";
import { User } from "../types/user";

export const useOfflineUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log("inside useEffect ")
        const fetchUsers = async () => {
            try {
                setLoading(true);
                setError(null);

                const netInfo = await NetInfo.fetch();
                console.log("is net connected: ", netInfo.isConnected)
                console.log("internet reachable:", netInfo.isInternetReachable);
                if (netInfo.isInternetReachable) {
                    const response = await fetch("https://jsonplaceholder.typicode.com/users");
                    console.log(JSON.stringify(response));
                    const data: User[] = await response.json();

                    setUsers(data);
                    await saveData("users", JSON.stringify(data));
                } else {
                    const storedUsers = await getData("users");
                    console.log("inside offline data")
                    if (storedUsers) {
                        setUsers(JSON.parse(storedUsers));
                    } else {
                        setError("No cached users available. Please connect to the internet first.");
                    }
                }
            } catch (err) {
                setError("Error fetching users. Please try again.");
                console.error("Error fetching users:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return { users, loading, error };
};
