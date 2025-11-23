import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Product } from '../data/data';
import { Utensils, Settings } from 'lucide-react-native';

interface ProductCardProps {
    product: Product;
    onPress: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
    return (
        <TouchableOpacity
            className="bg-zinc-800 rounded-xl p-4 m-2 flex-1 min-w-[180px] border border-zinc-700"
            onPress={() => onPress(product)}
            activeOpacity={0.7}
        >
            <View className="items-center mb-3 relative">
                <View className="absolute top-0 right-0 z-10">
                    {/* Placeholder for settings icon if needed, or just decoration */}
                    {/* <Settings size={16} color="#71717a" /> */}
                </View>
                <View className="w-full h-32 rounded-lg overflow-hidden bg-zinc-700 mb-2 items-center justify-center">
                    {product.image ? (
                        <Image source={{ uri: product.image }} className="w-full h-full" resizeMode="cover" />
                    ) : (
                        <Utensils size={32} color="#a1a1aa" />
                    )}
                </View>
            </View>

            <View>
                <Text className="text-white font-bold text-lg mb-1" numberOfLines={1}>{product.name}</Text>
                <Text className="text-white font-semibold text-base mb-2">${product.price.toFixed(2)}</Text>

                <View className="flex-row items-center">
                    <View className={`w-2 h-2 rounded-full mr-2 ${product.stock ? 'bg-green-500' : 'bg-red-500'}`} />
                    <Text className={`text-xs ${product.stock ? 'text-green-500' : 'text-red-500'}`}>
                        {product.stock ? 'In Stock' : 'Out of Stock'}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
