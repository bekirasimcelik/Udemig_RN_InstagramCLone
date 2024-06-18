import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

export default function LikesTabs() {
  const [activeTab, setActiveTab] = useState('Following');

  const handleTabPress = tab => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.tab, activeTab === 'Following' && styles.activeTab]}
        onPress={() => handleTabPress('Following')}>
        <Text style={styles.tabText}>Following</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.tab, activeTab === 'You' && styles.activeTab]}
        onPress={() => handleTabPress('You')}>
        <Text style={styles.tabText}>You</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: '#000',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
