import React, { ComponentClass, FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { Store } from 'redux';
import { History } from 'history';
import { Login, NotFound } from './pages';
import './App.css';
import { StaticContext } from 'react-router';
import { LanguageProvider } from './containers';

export interface IProps {
  store: Store;
  history: History;
  messages: object;
  appLayout: ComponentClass<any, any> | FunctionComponent<any> | ComponentClass<RouteComponentProps<any, StaticContext, any>, any> | FunctionComponent<RouteComponentProps<any, StaticContext, any>> | undefined;
}

const App = ({
  store,
  history,
  messages,
  appLayout
}: IProps) => {
  return (
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact={true} path='/' component={appLayout} />
                <Route exact={true} path='/login' component={Login} />
                <Route component={NotFound} />
            </Switch>
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>
  );
};

export default App;