import React from "react";
import SetInfoPerso from "./setInfoPerso";
import GetInfoPerso from "./getInfoPerso";

class InfoPerso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Jean",
      prenom: "Dupont",
      tel: "07 55 40 78 44",
      adresse: "2 rue des chariot",
      isChanging: false
    };

    this.setIsChanging = this.setIsChanging.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  setIsChanging() {
    this.setState((state) => ({ isChanging: !state.isChanging }));
  }

  updateState(newState) {
    this.setState(() => newState);
  }

  render() {
    return !this.state.isChanging ? (
      <GetInfoPerso state={this.state} setIsChanging={this.setIsChanging} />
    ) : (
      <SetInfoPerso
        infos={this.state}
        updateState={this.updateState}
        setIsChanging={this.setIsChanging}
      />
    );
  }
}

export default InfoPerso;
