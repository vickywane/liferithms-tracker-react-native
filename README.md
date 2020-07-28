# Liferithm

## Frontend Developer test challenge submission
### Time Alloted : 2 days 

<h5 style={text-align: center;} > This React Native app was bootstrapped using the Expo Cli </h5>
<p> Run **react-native run-andriod for android** devices or **react-native run-ios for ios devices**. The aim of this task is to build an Activity tracker using very minimal external libraries</p>

| Functionalities                                                     | Status    |
| ------------------------------------------------------------------- | --------- |
| CRUD operations on activities                                       | Completed |
| Filter Activities in ascending or descending order                  | Completed |
| Manage data related state                                           | Completed |
| Setup and connect to a local node express server using mongoose. () | Completed |

### State Management :

<p> Data related state is entirely managed using the React Context Api. Actions are dispatched using **useReducer**. Local app state is managed using **React Hooks** and child components are composed properly to recieve state as props</p>

<p> Data is persisted to an external local mongodb server to store the data for a longer period. </p>

**Note** : The data layer within this app is setup to support both offline(not connected to the mongodb Api) and also online storage( connected to mongodb ) 

**Note** : Due to the short duration of working on this task, there are certain things that can be improved. Some are

- Use of environment variables
- Proper design system for the app.
- Writing End-To-End Tests using Jest and React-Testing-Library
- Proper use of Icons and Visuals
