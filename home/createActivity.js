import * as React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { ActivityState, ActivityReducer } from './state/index';

const CreateActivity = (props) => {
  const [Name, setName] = React.useState('');
  const [Description, setDescription] = React.useState('');
  const [Start, setStart] = React.useState('');
  const [End, setEnd] = React.useState('');

  const [state, dispatch] = React.useReducer(ActivityReducer, ActivityState);

  const handleSubmit = () => {
    let Time = [];
    Time.push(Start, End);

    dispatch({
      type: 'CREATE_ACTIVITY',
      data: {
        id: state.id === undefined ? 0 : state.id + 1,
        title: Name,
        description: Description,
        isCompleted: false,
        date: Date(),
        time: Time,
      },
    });
  };

  return (
    <View style={Styles.body}>
      <br />
      <Text style={{ fontSize: 14, textAlign: 'center' }}>
        Liferithm app is a great way to track your daily events{' '}
      </Text>
      <br />
      <Text style={Styles.label}> Name </Text>
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
        onPress={() => handleSubmit()}
        title="Create Activity"
      />
    </View>
  );
};

export default CreateActivity;

const Styles = StyleSheet.create({
  body: {
    padding: 10,
  },
  label: {
    padding: 5,
  },
  input: {
    backgroundColor : '#fff', 
    border: '1px solid grey',
    boxShadow : '0px 1px 2px grey',
    display: 'flex',
    flex: 1,
    height: 35,
    padding: 10,
  },
});
