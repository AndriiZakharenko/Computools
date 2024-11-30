import React, { useState } from "react";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constans";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true)
    setRefreshing(false)
  }

  return (
    <SafeAreaView className="bg-primary-black h-full">
      <FlatList
        data={[{id:1}, {id:2}, {id:3}]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text className="text-3xl color-secondary-white font-arial_bold">
            {item.id}
          </Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="text-sm color-secondary-grey font-arial_regular">
                  Welcome Back
                </Text>
                <Text className="test-2xl font-arial_regular color-secondary-white">
                  Computools
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="color-secondary-grey text-lg font-arial_regular mb-3">
                Latest Images
              </Text>
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No images Found"
            subtitle="Be the first one to upload an image"
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  );
};

export default Home;
