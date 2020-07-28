import { createContext } from 'react';
import axios from 'axios';

export const ActivityState = [];

export const ActivityReducer = (state, action) => {
  let activyIndex = 0;

  const findActivityIndex = (arr) => {
    activyIndex = arr.findIndex((obj) => obj.id == 1);

    return activyIndex;
  };
 
  switch (action.type) {
    case 'DELETE_ACTIVITY':
      delete ActivityState[action.id];
      break;
    case 'DELETE_ACTIVITIY_ONLINE':
      axios
        .post('http://localhost:5050/delete-activity', {
          title: action.data.title,
        })
        .catch((e) =>
          console.log(`An error in deleting an activity. Error :  ${e}`)
        );
      break;
    case 'UPDATE_ACTIVITIY_ONLINE':
      axios
        .post('http://localhost:5050/update-activity', {
          title: action.updateData.title,
          newTitle: action.updateData.newTitle,
          newDescription: action.updateData.newDescription,
          newTime: action.updateData.newTime,
          newIscompleted: action.updateData.newIscompleted,
        })
        .then((res) => ActivityState.push(res))
        .catch((e) =>
          console.log(`An error in deleting an activity. Error :  ${e}`)
        );
      break;
    case 'UPDATE_ACTIVITY':
      findActivityIndex(ActivityState);

      state[activyIndex].title = action.data.title;
      state[activyIndex].description = action.data.description;
      state[activyIndex].time = action.data.time;
      state[activyIndex].date = action.data.date;

      return { ...state };
    case 'FETCH_ONLINE_ACTIVITIES':
      axios
        .get('http://localhost:5050/activities')
        .then((res) => ActivityState.push(res))
        .catch((e) => console.log(`An error in fetching. Error :  ${e}`));
      break;
    case 'CREATE_ACTIVITIES_ONLINE':
      axios
        .post('http://localhost:5050/create-activity', {
          title: action.data.title,
          description: action.data.description,
          isCompleted: action.data.isCompleted,
          date: action.data.date,
          time: action.data.time,
        })
        .catch((e) =>
          console.log(`An error in creating an activity. Error :  ${e}`)
        );
      break;
    case 'CREATE_ACTIVITY':
      return { ...ActivityState.push(action.data) };
    default:
      break;
  }
};

export const ActivityContext = createContext(ActivityState);
