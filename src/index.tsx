import * as React from 'react';
import { useEffect, useState } from 'react';
import WidgetContainer from './components/WidgetContainer';
import axios from 'axios';

interface attribute {
  accessKey: string;
  secretKey: string;
  theme?: string;
}

interface clientResult {
  serviceName: string;
}

export const Client = React.createContext<clientResult | undefined>(undefined);
const App = (obj: attribute) => {
  const [client, setClient] = useState<clientResult>();
  const clientInit = async (obj: attribute) => {
    try {
      return await axios.get('http://3.34.7.189/api/users/client', {
        headers: {
          Accept: 'application/json; version=1',
          'X-PinTalk-Access-Key': obj.accessKey,
          'X-PinTalk-Secret-Key': obj.secretKey,
        },
      });
    } catch (error) {
      console.log(error);
      if (error.response.data.code === 401) {
        throw new Error(error.response.data.detail);
      }
      throw new Error(error.response.data.detail);
    }
  };

  useEffect(() => {
    void clientInit(obj).then((r) => {
      setClient(r.data);
    });
  }, []);

  return (
    <Client.Provider value={client}>
      <WidgetContainer />
    </Client.Provider>
  );
};

export default App;
