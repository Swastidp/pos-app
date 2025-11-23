import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useCartStore } from '../store/useCartStore';
import { ArrowLeft, Plus, ChevronDown, Tag, Send } from 'lucide-react-native';

export const CartSidebar: React.FC = () => {
    const { cart, getTotal } = useCartStore();
    const { subtotal, tax, total } = getTotal();

    return (
        <View className="flex-1 bg-zinc-900 p-4 border-r border-zinc-800">
            {/* Header */}
            <View className="flex-row items-center mb-6">
                <TouchableOpacity className="bg-white p-2 rounded-lg mr-3">
                    <ArrowLeft size={20} color="black" />
                </TouchableOpacity>
                <Text className="text-white text-xl font-bold">Back to Menu</Text>
            </View>

            {/* Customer & Order Type */}
            <View className="flex-row space-x-2 mb-6">
                <View className="flex-1">
                    <Text className="text-zinc-400 text-xs mb-1 ml-1">Customer</Text>
                    <TouchableOpacity className="bg-zinc-800 p-3 rounded-lg flex-row items-center justify-between border border-zinc-700">
                        <View className="flex-row items-center">
                            <Plus size={16} color="#a1a1aa" className="mr-2" />
                            <Text className="text-zinc-300">Add Customer</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View className="flex-1">
                    <Text className="text-zinc-400 text-xs mb-1 ml-1">Order Type</Text>
                    <TouchableOpacity className="bg-zinc-800 p-3 rounded-lg flex-row items-center justify-between border border-zinc-700">
                        <Text className="text-white">Takeaway</Text>
                        <ChevronDown size={16} color="#a1a1aa" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Cart Info */}
            <View className="flex-row justify-between items-end mb-2">
                <View>
                    <Text className="text-zinc-500 text-xs">order_1763661833981</Text>
                    <Text className="text-white text-2xl font-bold">Cart</Text>
                </View>
                <Text className="text-zinc-400">{cart.reduce((acc, item) => acc + item.quantity, 0)} Items</Text>
            </View>

            <View className="h-[1px] bg-blue-600 w-10 mb-4" />

            {/* Course & Tags */}
            <View className="flex-row justify-between items-center mb-4">
                <View className="bg-zinc-800 px-3 py-1 rounded-full border border-zinc-700">
                    <Text className="text-zinc-400 text-xs">Course 1</Text>
                </View>
                <View className="flex-row space-x-2">
                    <View className="border border-red-900 px-2 py-1 rounded-full bg-red-900/20">
                        <Text className="text-red-500 text-xs">Unpaid</Text>
                    </View>
                    <View className="border border-blue-900 px-2 py-1 rounded-full bg-blue-900/20">
                        <Text className="text-blue-500 text-xs">Building</Text>
                    </View>
                    <View className="border border-purple-900 px-2 py-1 rounded-full bg-purple-900/20">
                        <Text className="text-purple-500 text-xs">Opened</Text>
                    </View>
                </View>
            </View>

            {/* Cart Items */}
            <ScrollView className="flex-1 mb-4">
                {cart.map((item, index) => (
                    <View key={`${item.id}-${index}`} className="flex-row justify-between items-center py-3 border-b border-zinc-800">
                        <View className="flex-1">
                            <Text className="text-white font-medium text-lg">{item.name}</Text>
                            {item.notes ? <Text className="text-zinc-500 text-sm italic">{item.notes}</Text> : null}
                        </View>
                        <View className="flex-row items-center">
                            <Text className="text-zinc-400 mr-4">{item.quantity} x</Text>
                            <Text className="text-white font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* Totals */}
            <View className="mb-4 space-y-2">
                <View className="flex-row justify-between">
                    <Text className="text-zinc-400">Subtotal</Text>
                    <Text className="text-white font-medium">${subtotal.toFixed(2)}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-zinc-400">Tax</Text>
                    <Text className="text-white font-medium">${tax.toFixed(2)}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-zinc-400">Voucher</Text>
                    <Text className="text-white font-medium">$0.00</Text>
                </View>
                <View className="flex-row justify-between mt-2 pt-2 border-t border-zinc-800">
                    <Text className="text-white font-bold text-lg">Total</Text>
                    <Text className="text-white font-bold text-xl">${total.toFixed(2)}</Text>
                </View>
            </View>

            {/* Actions */}
            <View className="flex-row space-x-2 mb-3">
                <TouchableOpacity className="flex-1 bg-zinc-800 py-3 rounded-lg flex-row justify-center items-center border border-zinc-700">
                    <Tag size={18} color="#a1a1aa" className="mr-2" />
                    <Text className="text-zinc-300 font-medium">Discounts</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 bg-zinc-800 py-3 rounded-lg flex-row justify-center items-center border border-zinc-700">
                    <Text className="text-zinc-300 font-medium mr-2">Send to Kitchen ({cart.length})</Text>
                    <Send size={18} color="#a1a1aa" />
                </TouchableOpacity>
            </View>

            <View className="flex-row space-x-2">
                <TouchableOpacity className="flex-[0.3] bg-zinc-800 py-4 rounded-xl items-center justify-center border border-zinc-700">
                    <Text className="text-white font-bold">More</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-[0.7] bg-blue-600 py-4 rounded-xl items-center justify-center">
                    <Text className="text-white font-bold text-lg">Pay ${total.toFixed(2)}</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};
