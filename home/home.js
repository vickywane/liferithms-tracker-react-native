import * as React from 'react';
import { View, Text, TextInput } from 'react-native';

const Home = (props) => {
  const [Name, setName] = React.useState('');
  const [Description, setDescription] = React.useState('');
  const [Start, setStart] = React.useState('');
  const [End, setEnd] = React.useState('');
  
  return (
    <View>
      <Text style={{ textAlign: 'center' }}> Welcome </Text>
      <br />
      <Text> Create An Activity </Text> <br />
      <TextInput
        type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your activity name"
      />{' '}
      <br />
      <TextInput
        type="text"
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Your activity description"
      />{' '}
      <br />
      <TextInput
        type="text"
        value={Start}
        onChange={(e) => setStart(e.target.value)}
        placeholder="Your activity start"
      />{' '}
      <br />
      <TextInput
        type="text"
        value={End}
        onChange={(e) => setEnd(e.target.value)}
        placeholder="Your activity end"
      />{' '}
      <br />
    </View>
  );
};

export default Home;
