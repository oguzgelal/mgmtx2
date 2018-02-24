import dva from 'dva';
import { Router } from 'dva/router';
import { persistStore, autoRehydrate } from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';
import localForage from 'localforage';
import { FocusStyleManager } from "@blueprintjs/core";
import { Provider } from 'react-redux'

// misc
import Routes from './routes';
import history from './config/history';

// models
import theme from './models/theme'

// styles
import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import './index.css';

// Initialize
const app = dva({
  history,
  extraEnhancers: [autoRehydrate()],
});

// Models
app.model(theme);

// Router
app.router(() => {
  return (
    <Provider store={app._store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
});

// Set focus manager behaviour for blueprint.js
FocusStyleManager.onlyShowFocusOnTabs();

// Start
app.start('#root');

// Persist redux store
let themeFilter = createFilter('theme', ['active']);

persistStore(app._store, {
  storage: localForage,
  whitelist: ['theme'],
  transforms: [
    themeFilter
  ]
});
