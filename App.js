import {createStackNavigator, createAppContainer} from 'react-navigation';
import IndexScreen from './src/screens/indexScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  },
);
export default createAppContainer(navigator);
