import * as React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';

import { ActivityContext, ActivityReducer, ActivityState } from './state';

const Empty = () => {
  return (
    <Text style={{ color: 'grey', textAlign: 'center', paddingTop: 20 }}>
      You currently have no activities for you{' '}
    </Text>
  );
};

const Activites = ({ navigation }) => {
  const [modalVisibility, setModalVisibility] = React.useState(false);
  const [fiterOption, showFiterOption] = React.useState(false);
  const [filterType, setFilterType] = React.useState('New');
  const [state, dispatch] = React.useReducer(ActivityReducer, ActivityState);

  const filtered =
    state !== null &&
    state.sort((a, b) => {
      return filterType === 'New' ? a.id - b.id : b.id - a.id;
    });

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE_ACTIVITY',
      id: id,
    });
  };

  const renderActivities = ({ item }) => {
    const { id, description, time, title, status } = item;
    return (
      <View key={id} style={Styles.card}>
        <View style={Styles.cardStatus}>
          <Text style={{ marginRight: '3px' }}>11 , Tues , 2020</Text>

          <TouchableOpacity onPress={() => handleDelete(id)}>
            <Text style={{ color: 'red' }}> Delete </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.cardItems}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: '60px',
                width: '60px',
                backgroundColor: 'grey',
                borderRadius: '5px',
                border: '1px solid grey',
              }}
            />
          </View>

          <View
            style={{
              marginLeft: '5px',
              width: '14rem',
              textAlign: 'center',
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Activity', {
                  id: id,
                  title: title,
                  description: description,
                  status: status,
                  time: time,
                })
              }>
              <Text style={{ fontSize: '1.05rem', color: 'rgb(23, 206, 106)' }}>
                {title}
              </Text>
            </TouchableOpacity>
            <Text style={{ marginTop: '5px', fontSize: '0.9rem' }}>
              {description}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <Text style={{ marginRight: '3px' }}>{time[0]}</Text> -
              <Text style={{ marginLeft: '3px' }}> {time[1]} </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            textAlign: 'center',
            marginTop: '7px',
            paddingTop: '7px',
            paddingBottom: '5px',
            borderTop: '1px solid grey',
          }}>
          <Text> {status ? 'Completed' : 'Not Yet Completed'} </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={Styles.body}>
      <View style={Styles.flexContent}>
        <TouchableOpacity onPress={() => showFiterOption(!fiterOption)}>
          <Text>Filter</Text>
        </TouchableOpacity>

        <Text>Search </Text>
      </View>

      {fiterOption && (
        <View style={{ margin: 8, display: 'flex', flexDirection: 'column' }}>
          <TouchableOpacity onPress={() => setFilterType('New')}>
            <Text>Ascending</Text>
          </TouchableOpacity>
          <br />
          <TouchableOpacity onPress={() => setFilterType('Old')}>
            <Text>Descending</Text>
          </TouchableOpacity>
        </View>
      )}
      <br />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{ display: 'flex', flexDirection: 'row', color: 'grey' }}>
          <Text>Showing :</Text>
          <Text style={{ color: 'grey', marginLeft: '5px' }}>
            All {filterType} Activites ({state === null ? 0 : state.length})
          </Text>
        </View>

        {state !== null && (
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Text> New Activity </Text>
          </TouchableOpacity>
        )}
      </View>

      <br />

      {state === [] ? (
        <View style={{ textAlign: 'center' }}>
          <br />
          <Text style={{ color: 'grey' }}>
            You currently do not have any created Activities.
          </Text>
          <br />
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Text> Create New Activity </Text>
            <Icon size={26} name="plus-circle" />
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filtered}
          ListEmptyComponent={<Empty />}
          renderItem={renderActivities}
          keyExtractor={(state) => state.id}
        />
      )}
    </View>
  );
};

export default Activites;

const Styles = StyleSheet.create({
  body: {
    padding: '8px',
    backgroundColor: '#fff',
    height: '90vh',
  },
  flexContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  card: {
    padding: 5,
    width: 'auto',
    height: 'auto',
    boxShadow: '0px 2px 4px grey',
    borderRadius: '3px',
    marginTop: '15px',
    marginRight: '5px',
    marginLeft: '5px',
    marginBottom: '15px',
    display: 'flex',
  },
  cardStatus: {
    padding: '2px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardItems: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '10px',
    paddingRight: '7px',
    paddingLeft: '7px',
  },
});
