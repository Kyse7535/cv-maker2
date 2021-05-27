import React from "react";
import SetAboutMe from "./setAboutMe";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
      isChanging: false
    };

    this.setIsChanging = this.setIsChanging.bind(this);
    this.updateState = this.updateState.bind(this);
  }
  setIsChanging() {
    this.setState((state) => ({ isChanging: !state.isChanging }));
  }

  updateState(newState) {
    this.setState(newState);
  }
  render() {
    let getAboutMe = (
      <p
        className="hover-border-blue cursor-pointer ff-Inconsolata"
        onClick={this.setIsChanging}
      >
        {this.state.text}
      </p>
    );
    return (
      <div className="my-3 text-left">
        <h3 className="text-danger ff-Inconsolata-Bold">About Me</h3>
        {!this.state.isChanging ? (
          getAboutMe
        ) : (
          <SetAboutMe
            state={this.state}
            updateState={this.updateState}
            setIsChanging={this.setIsChanging}
          />
        )}
      </div>
    );
  }
}

export default AboutMe;
