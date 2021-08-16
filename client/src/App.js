import { PredictiveTextContainer } from './containers/PredictiveTextContainer';
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <PredictiveTextContainer />
    </Provider>
  );
}

export default App;
