import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ActivityState, ActivityReducer } from './state/index';

const Activity = ({ route, navigation }) => {
  const [Editing, isEditing] = React.useState(false);
  const { id, title, description, time, status, date } = route.params;
  
  const [Name, setName] = React.useState(title);
  const [Description, setDescription] = React.useState(description);
  const [Start, setStart] = React.useState('');
  const [End, setEnd] = React.useState('');

  const [state, dispatch] = React.useReducer(ActivityReducer, ActivityState);

  React.useEffect(() => {
    navigation.setOptions({ title: title });
  }, [title]);

  const handleUpdate = (id) => {
    let Time = [];
    Time.push(Start, End);

    dispatch({
      type: 'UPDATE_ACTIVITY',
      id: id,
      title: Name,
      description: Description,
      isCompleted: false,
      date: Date(),
      time: Time,
    });
  };

  return (
    <View style={Styles.body}>
      {!Editing ? (
        <View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ padding: 8, flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ paddingRight: 8 }}> {time[0]} </Text>
                <Text> {time[1]} </Text>
              </View>
              {status ? (
                <Text style={{ textAlign: 'center', padding: 5 }}>
                  Completed{' '}
                </Text>
              ) : (
                <Text style={{ textAlign: 'center', padding: 5 }}>
                  Pending{' '}
                </Text>
              )}
            </View>

            <TouchableOpacity onPress={() => isEditing(!Editing)}>
              <Icon name="pencil" size={19} />
            </TouchableOpacity>
          </View>
          <Text style={{ textAlign: 'center' }}> {description} </Text>

          <View style={{ flexDirection: 'row', paddingTop: 10 }}>
            <Text style={{ paddingRight: 7, color: 'grey' }}>
              Created at :{' '}
            </Text>
            <Text style={{ textAlign: 'center' }}> {date} </Text>
          </View>

          <br />
          <Button title={'Mark as Completed'} onPress={() => {}} />
        </View>
      ) : (
        <View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Edit activities</Text>

            <TouchableOpacity onPress={() => isEditing(!Editing)}>
              <Icon name="window-close" size={18} />
            </TouchableOpacity>
          </View>
          <br />
          <TextInput
            style={Styles.input}
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your activity name"
          />
          <br />
          <Text style={Styles.label}> Description </Text>
          <TextInput
            type="text"
            style={Styles.input}
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Your activity description"
          />
          <br />
          <Text style={Styles.label}> Start time </Text>
          <TextInput
            type="text"
            style={Styles.input}
            value={Start}
            onChange={(e) => setStart(e.target.value)}
            placeholder="Your  activity start"
          />
          <br />
          <Text style={Styles.label}> Activity End time </Text>
          <TextInput
            type="text"
            style={Styles.input}
            value={End}
            onChange={(e) => setEnd(e.target.value)}
            placeholder="Your activity end"
          />
          <br />
          <Button
            disabled={Name.length < 8}
            onPress={() => handleUpdate(id)}
            title="Update Activity"
          />
        </View>
      )}
    </View>
  );
};

export default Activity;

const Styles = StyleSheet.create({
  body: {
    padding: 10,
  },
  input: {
    backgroundColor: '#fff',
    border: '1px solid grey',
    boxShadow: '0px 1px 2px grey',
    display: 'flex',
    flex: 1,
    height: 35,
    padding: 10,
  },
});
