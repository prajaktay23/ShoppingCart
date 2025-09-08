- use this for random photos - https://medium.com/200-response/using-lorem-picsum-in-your-projects-11f479d7409e open api for random photos 

- Bug fix 
    - adding keyExtractor for optimizations and to keep track of unique elements 
    - destructuring the item in renderItem correctly 
    
```<FlatList
  data={data}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <Text style={{ padding: 10, fontSize: 16 }}>
      {item.title}
    </Text>
  )}
/>```

