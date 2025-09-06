export const generateMockData = (count = 5000) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        title: `Product ${i + 1}`,
        price: Math.round(Math.random() * 100),
        image: `https://picsum.photos/seed/${i}/200/200`,
    }));
};