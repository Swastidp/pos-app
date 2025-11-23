import React from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { categories } from '../data/data';

interface CategoryFilterProps {
    selectedCategory: string;
    onSelectCategory: (id: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onSelectCategory }) => {
    return (
        <View className="mb-4">
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category.id}
                        onPress={() => onSelectCategory(category.id)}
                        className={`px-4 py-2 rounded-full mr-3 border ${selectedCategory === category.id
                                ? 'bg-zinc-700 border-zinc-600'
                                : 'bg-transparent border-transparent'
                            }`}
                    >
                        <Text
                            className={`font-medium ${selectedCategory === category.id ? 'text-blue-400' : 'text-zinc-400'
                                }`}
                        >
                            ● {category.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};
