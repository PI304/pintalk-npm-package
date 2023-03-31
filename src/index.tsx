import * as React from 'react';
import WidgetContainer from './components/WidgetContainer';

const App = (accessKey: string, secretKey: string) => {
  const access = accessKey;
  const secret = secretKey;
  console.log(access, secret);
  return <WidgetContainer />;
};

export default App;
