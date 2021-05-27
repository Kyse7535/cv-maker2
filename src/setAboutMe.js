import React from "react";

class SetAboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
      isChanging: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateState(this.state);
    this.props.setIsChanging();
  }

  componentDidMount() {
    this.setState(this.props.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          className="w-100"
          onChange={this.handleChange}
          value={this.state.text}
        ></textarea>
        <input type="submit" value="valider" />
      </form>
    );
  }
}

export default SetAboutMe;
