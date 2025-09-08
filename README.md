- use this for random photos - https://medium.com/200-response/using-lorem-picsum-in-your-projects-11f479d7409e open api for random photos 


- Tasks
1. Optimized Large List
Load 5,000 items (can generate mock data).
Display in a FlatList.
Optimize using getItemLayout, windowSize, pagination/infinite scroll.
- used optimised flatlist 
- here we have used flatlist instead of scroll view as we are fetching huge data and plus it is optimised way to do so.

2. Global State (Cart System)
Implement a cart using Zustand or Redux.
A product list screen → each item has Add to Cart button.
A cart screen → shows selected items and total count.
- I have used Redux to implement the cart flow 
I have shown all selected items and total count 

3. Offline Support
Fetch data from:
👉 https://jsonplaceholder.typicode.com/users
Store it in AsyncStorage/MMKV.
If offline, load cached data instead.
- fetched user data and displayed as per net info used react. ative lib to fetch the current net status 

4. Secure Token Storage
Store a dummy auth token in Secure Storage (not AsyncStorage).
On app restart, retrieve token and display it.
- Stored dummy token and redirect to a specific screen from splash screen 
if token exist direct to product screen else to login screen 

5. Deep Linking
Configure deep linking with React Navigation.
Opening myapp://user/1 should open a User Details Screen with user ID
= 1.
- Done using linking in react native - created path in app.tsx and then used command 
```
adb shell am start -W -a android.intent.action.VIEW -d "myapp://user/1" com.shoppingcart 
```
to retrive the data directly

7. (Optional Advanced) Native Module Concept
Create a simple native module (or explain conceptually) that returns device
OS version.
- Done using react - NativeModules, created .java files to register and then fetch that method in js file.

Display it inside the React Native app.
Requirements
Use Functional Components + Hooks.
Use React Navigation (Stack + Tabs preferred). or Expo Router
Use Zustand / Redux for state management.
Handle performance optimization & clean architecture.
Bonus points for TypeScript usage.

- Bug fix 
    - adding keyExtractor for optimizations and to keep track of unique elements 
    - destructuring the item in renderItem correctly 

```
<FlatList
  data={data}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <Text style={{ padding: 10, fontSize: 16 }}>
      {item.title}
    </Text>
  )}
/>
```