import { ChatEngine } from "react-chat-engine";
import  "./App.css";
import ChatFeed from './components/ChatFeed'
function App() {
  return (
   <ChatEngine 
   height="100vh"
   projectID="06864b7f-a040-49b3-aa2e-e85ed7fdb5d4"
   userName="sirdurx"
   userSecret="idris"
   renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}   
   /> 
  );
}

export default App;
