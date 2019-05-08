import React from "react";
import ChatInput from "./ChatInput";

// in production, use: 'wss://nameofyourherokuoapp.herokuapp.com'
const wsUrl = "ws://localhost:5000";

class Chat extends React.Component {
  state = {
    messages: [],
    name: ""
  };

  ws = new WebSocket(wsUrl);

  componentDidMount() {
    this.ws.onopen = () => {
      console.log("connection opened");
    };

    this.ws.onmessage = event => {
      const message = JSON.parse(event.data);

      this.setState({ messages: [message, ...this.state.messages] });
    };

    this.ws.onclose = () => {
      console.log("ws disconnected");
    };
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  submitMessage = data => {
    const message = {
      name: this.state.name,
      message: data
    };
    this.ws.send(JSON.stringify(message));
    this.setState({ messages: [message, ...this.state.messages] });
  };

  render() {
    return (
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <ChatInput submitMessage={this.submitMessage} />
        {this.state.messages.map((message, i) => {
          return (
            <p key={i}>
              {message.name}: {message.message}
            </p>
          );
        })}
      </div>
    );
  }
}

export default Chat;
