import React from 'react';
import {useSelector} from 'react-redux';
import createRouter from './routes';
import Routes from './routes';

import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: componentWillMount is deprecated']);

export default function App() {
  const signed = useSelector(state => state.auth.signed);
  const Routes = createRouter(signed);
  return <Routes />;
}
