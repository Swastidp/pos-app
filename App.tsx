import './global.css';
import React from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import { CartSidebar } from './src/components/CartSidebar';
import { MenuSection } from './src/components/MenuSection';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-zinc-900">
      <StatusBar barStyle="light-content" />
      <View className="flex-1 flex-row">
        <View className="flex-[0.35] border-r border-zinc-800">
          <CartSidebar />
        </View>
        <View className="flex-[0.65]">
          <MenuSection />
        </View>
      </View>
    </SafeAreaView>
  );
}
