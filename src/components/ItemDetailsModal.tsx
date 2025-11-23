import React, { useState, useEffect } from 'react';
import { Modal, View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Product } from '../data/data';
import { X, Minus, Plus, Check } from 'lucide-react-native';

interface ItemDetailsModalProps {
    visible: boolean;
    product: Product | null;
    onClose: () => void;
    onAddToCart: (product: Product, quantity: number, notes: string) => void;
}

export const ItemDetailsModal: React.FC<ItemDetailsModalProps> = ({ visible, product, onClose, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);
    const [notes, setNotes] = useState('');

    useEffect(() => {
        if (visible) {
            setQuantity(1);
            setNotes('');
        }
    }, [visible]);

    if (!product) return null;

    const handleAddToCart = () => {
        onAddToCart(product, quantity, notes);
        onClose();
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View className="flex-1 justify-center items-center bg-black/70">
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="w-[60%] max-w-[600px]">
                    <View className="bg-zinc-900 rounded-2xl border border-zinc-700 overflow-hidden">
                        {/* Header */}
                        <View className="flex-row justify-between items-center p-4 border-b border-zinc-800">
                            <Text className="text-white text-xl font-bold">Order Line</Text>
                            <View className="flex-row">
                                <TouchableOpacity onPress={onClose} className="bg-red-500 p-2 rounded-md mr-2">
                                    <X size={20} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleAddToCart} className="bg-green-500 p-2 rounded-md flex-row items-center">
                                    <Text className="text-white font-bold mr-1">Done</Text>
                                    <Check size={20} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View className="p-6">
                            {/* Product Info */}
                            <View className="flex-row items-center mb-6">
                                <Image source={{ uri: product.image }} className="w-16 h-16 rounded-full mr-4" />
                                <View>
                                    <Text className="text-white text-2xl font-bold">{product.name}</Text>
                                    <Text className="text-blue-400 text-lg">Base ${product.price.toFixed(2)}</Text>
                                </View>
                            </View>

                            {/* Quantity */}
                            <View className="mb-6">
                                <Text className="text-zinc-400 mb-2">Quantity</Text>
                                <View className="flex-row items-center justify-center">
                                    <TouchableOpacity
                                        onPress={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-12 h-12 rounded-full bg-zinc-800 items-center justify-center border border-zinc-700"
                                    >
                                        <Minus size={24} color="#a1a1aa" />
                                    </TouchableOpacity>
                                    <View className="w-16 h-12 items-center justify-center bg-zinc-800 mx-4 rounded-lg border border-zinc-700">
                                        <Text className="text-white text-xl font-bold">{quantity}</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => setQuantity(quantity + 1)}
                                        className="w-12 h-12 rounded-full bg-blue-600 items-center justify-center"
                                    >
                                        <Plus size={24} color="white" />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* Notes */}
                            <View>
                                <Text className="text-zinc-400 mb-2">Notes</Text>
                                <TextInput
                                    className="bg-zinc-800 text-white p-4 rounded-lg h-24 border border-zinc-700"
                                    placeholder="No onions..."
                                    placeholderTextColor="#52525b"
                                    multiline
                                    textAlignVertical="top"
                                    value={notes}
                                    onChangeText={setNotes}
                                    maxLength={80}
                                />
                                <Text className="text-right text-zinc-500 text-xs mt-1">{notes.length}/80</Text>
                            </View>

                            {/* Total for Item */}
                            <View className="mt-6 bg-zinc-800 p-4 rounded-lg flex-row justify-between items-center">
                                <Text className="text-white font-bold text-lg">Total</Text>
                                <Text className="text-white font-bold text-xl">${(product.price * quantity).toFixed(2)}</Text>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </Modal>
    );
};
