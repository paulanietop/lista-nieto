import { FlatList, Text, View } from 'react-native';

import Item from './Item';
import React from 'react'

const ListItem = ({items, update, setCheck, openModal}) => {
  return (
    <FlatList
      data={items}
      renderItem={item => {
        return (
          <View>
            <Item 
              item={item.item}
              setCheck={setCheck}
              openModal={openModal}
            />
          </View>
        )
      }}
      keyExtractor={(item) => item.id}
      extraData={update}
    />
  )
}

export default ListItem