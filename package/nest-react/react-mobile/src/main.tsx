 import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import App from "./App.tsx";
import { client } from "./utils/apollo.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
