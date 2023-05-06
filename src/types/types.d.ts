type clientResult = {
  uuid: string;
  serviceName: string;
  profileImage: string;
  description: string;
};

type attribute = {
  accessKey: string;
  secretKey: string;
  theme: string | 'basic';
};

type chatResult = {
  name: string;
};

type receivedMsg = {
  type: string;
  message: string;
  is_host: boolean;
  datetime: string;
};
