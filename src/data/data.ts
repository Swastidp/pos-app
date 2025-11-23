export interface Product {
    id: string;
    name: string;
    price: number;
    categoryId: string;
    image: string;
    stock: boolean;
}

export interface Category {
    id: string;
    name: string;
}

export const categories: Category[] = [
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'main-course', name: 'Main Course' },
    { id: 'dessert', name: 'Dessert' },
    { id: 'drinks', name: 'Drinks' },
];

export const products: Product[] = [
    {
        id: '1',
        name: 'Chicken Caesar Salad',
        price: 7.50,
        categoryId: 'appetizers',
        image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=500&q=60',
        stock: false,
    },
    {
        id: '2',
        name: 'Buffalo Wings',
        price: 8.99,
        categoryId: 'appetizers',
        image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=500&q=60',
        stock: true,
    },
    {
        id: '3',
        name: 'Loaded Nachos',
        price: 7.99,
        categoryId: 'appetizers',
        image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=500&q=60',
        stock: true,
    },
    {
        id: '4',
        name: 'Tomato Basil Soup',
        price: 5.99,
        categoryId: 'appetizers',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=60',
        stock: true,
    },
    {
        id: '5',
        name: 'Grilled Salmon',
        price: 18.50,
        categoryId: 'main-course',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: true,
    },
    {
        id: '6',
        name: 'Steak Frites',
        price: 22.00,
        categoryId: 'main-course',
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=500&q=60',
        stock: true,
    },
    {
        id: '7',
        name: 'Cheeseburger',
        price: 12.99,
        categoryId: 'main-course',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=60',
        stock: true,
    },
    {
        id: '8',
        name: 'Chocolate Lava Cake',
        price: 6.50,
        categoryId: 'dessert',
        image: 'https://images.unsplash.com/photo-1700448293876-07dca826c161?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: true,
    },
    {
        id: '9',
        name: 'Cheesecake',
        price: 5.50,
        categoryId: 'dessert',
        image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=500&q=60',
        stock: true,
    },
    {
        id: '10',
        name: 'Iced Tea',
        price: 2.99,
        categoryId: 'drinks',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=60',
        stock: true,
    },
    {
        id: '11',
        name: 'Garlic Bread',
        price: 4.99,
        categoryId: 'appetizers',
        image:'https://images.unsplash.com/photo-1573140401552-3fab0b24306f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        
        
        stock: true,
    },
    {
        id: '12',
        name: 'Onion Rings',
        price: 5.99,
        categoryId: 'appetizers',
        image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=500&q=60',
        stock: true,
    },
    {
        id: '13',
        name: 'Pasta Carbonara',
        price: 14.99,
        categoryId: 'main-course',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=500&q=60',
        stock: true,
    },
    {
        id: '14',
        name: 'Grilled Chicken Sandwich',
        price: 11.50,
        categoryId: 'main-course',
        image: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&w=500&q=60',
        stock: true,
    },
    {
        id: '15',
        name: 'Tiramisu',
        price: 7.50,
        categoryId: 'dessert',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&q=60',
        stock: true,
    },
    {
        id: '16',
        name: 'Ice Cream Sundae',
        price: 6.99,
        categoryId: 'dessert',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=60',
        stock: true,
    },
    {
        id: '17',
        name: 'Lemonade',
        price: 3.50,
        categoryId: 'drinks',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=60',
        stock: true,
    },
    {
        id: '18',
        name: 'Coffee',
        price: 2.50,
        categoryId: 'drinks',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=60',
        stock: true,
    },
    {
        id: '19',
        name: 'Panna Cotta',
        price: 6.50,
        categoryId: 'dessert',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=60',
        stock: true,
    },
];
