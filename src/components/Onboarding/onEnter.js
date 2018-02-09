import SInfo from 'react-native-sensitive-info';
import { Actions } from 'react-native-router-flux';

export default function onEnter() {
  SInfo.getItem('accessToken', {}).then((token) => (token ? Actions.profile() : null));
}
