import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atelierLakesideLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const App: React.FC = () => {
  const csvExample = `company_name,base_url
Google,https://www.google.com
Facebook,https://www.facebook.com
Twitter,https://www.twitter.com
`;

  return (
    <SyntaxHighlighter language="csv" style={atelierLakesideLight}>
      {csvExample}
    </SyntaxHighlighter>
  );
};

export default App;
