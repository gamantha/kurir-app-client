import Reactotron, {
    trackGlobalErrors,
    openInEditor,
    overlay,
    asyncStorage,
    networking
} from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

Reactotron.configure({
    name: 'Kurir ID'
})
    .use(reactotronRedux())
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(overlay())
    .use(asyncStorage())
    .use(networking())
    .connect();

// export default Reactotron;
