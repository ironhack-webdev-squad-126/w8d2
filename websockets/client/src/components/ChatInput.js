import React from "react";

class ChatInput extends React.Component {
  state = {
    message: ""
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.submitMessage(this.state.message);
    this.setState({ message: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>message:</label>
        <input
          name="message"
          type="text"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <input type="submit" value="send" />
      </form>
    );
  }
}

export default ChatInput;
