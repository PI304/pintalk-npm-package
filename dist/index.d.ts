import * as React from 'react';
interface attribute {
    accessKey: string;
    secretKey: string;
    theme?: string;
}
interface clientResult {
    serviceName: string;
}
export declare const Client: React.Context<clientResult | undefined>;
declare const App: (obj: attribute) => JSX.Element;
export default App;
