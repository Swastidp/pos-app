import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Product, products } from '../data/data';
import { ProductCard } from './ProductCard';
import { CategoryFilter } from './CategoryFilter';
import { ItemDetailsModal } from './ItemDetailsModal';
import { useCartStore } from '../store/useCartStore';
import { Search, Grid, List, User, Plus, ChevronLeft } from 'lucide-react-native';

export const MenuSection: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('appetizers');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const addToCart = useCartStore((state) => state.addToCart);

    const filteredProducts = products.filter(
        (p) => p.categoryId === selectedCategory
    );

    const handleProductPress = (product: Product) => {
        setSelectedProduct(product);
        setModalVisible(true);
    };

    const handleAddToCart = (product: Product, quantity: number, notes: string) => {
        addToCart(product, quantity, notes);
    };

    return (
        <View className="flex-1 bg-zinc-900 p-4">
            {/* Top Bar */}
            <View className="flex-row justify-between items-center mb-6">
                <View>
                    <Text className="text-white text-xl font-bold">Order Line</Text>
                </View>
                <View className="flex-row items-center space-x-3">
                    <View className="bg-blue-600 px-4 py-2 rounded-full flex-row items-center">
                        <View className="w-6 h-6 bg-blue-400 rounded-full items-center justify-center mr-2">
                            <Text className="text-xs font-bold text-white">PE</Text>
                        </View>
                        <Text className="text-white font-medium">Philippe</Text>
                    </View>
                    <TouchableOpacity className="w-10 h-10 bg-zinc-800 rounded-full items-center justify-center border border-zinc-700">
                        <Plus size={20} color="#a1a1aa" />
                    </TouchableOpacity>
                    <TouchableOpacity className="w-10 h-10 bg-zinc-800 rounded-full items-center justify-center border border-zinc-700">
                        <ChevronLeft size={20} color="#a1a1aa" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Controls Bar */}
            <View className="flex-row justify-between items-center mb-4">
                <View className="flex-row items-center">
                    <Text className="text-zinc-400 mr-2">Menu</Text>
                    <View className="bg-zinc-800 px-3 py-1 rounded-md border border-zinc-700">
                        <Text className="text-blue-400 text-xs">Order Type: Takeaway</Text>
                    </View>
                </View>
                <View className="flex-row space-x-2">
                    <TouchableOpacity className="p-2 bg-blue-600/20 border border-blue-600 rounded-md">
                        <Grid size={20} color="#3b82f6" />
                    </TouchableOpacity>
                    <TouchableOpacity className="p-2 bg-zinc-800 border border-zinc-700 rounded-md">
                        <Search size={20} color="#a1a1aa" />
                    </TouchableOpacity>
                    <TouchableOpacity className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md">
                        <Text className="text-zinc-400">Main Menu</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            <FlatList
                data={filteredProducts}
                renderItem={({ item }) => (
                    <ProductCard product={item} onPress={handleProductPress} />
                )}
                keyExtractor={(item) => item.id}
                numColumns={3} // Adjust based on screen width if needed
                columnWrapperStyle={{ justifyContent: 'flex-start' }}
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
            />

            <ItemDetailsModal
                visible={modalVisible}
                product={selectedProduct}
                onClose={() => setModalVisible(false)}
                onAddToCart={handleAddToCart}
            />
        </View>
    );
};
