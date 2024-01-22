// import './App.css'
import "./stylesheets/theme.css"
import "./stylesheets/alignments.css"
import "./stylesheets/custom.css"
import "./stylesheets/form-elements.css"
import "./stylesheets/sizes.css"

import AppRouter from './routes/AppRouter'
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {


  return (<Provider store={store}>
          <AppRouter/>
        </Provider>
  )
}

export default App
