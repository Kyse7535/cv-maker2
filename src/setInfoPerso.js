import React from "react";

class SetInfoPerso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      tel: "",
      adresse: "",
      isChanging: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState(() => this.props.infos);
  }

  handleChange(e, id) {
    e.preventDefault();
    const newState = Object.assign({}, this.state);
    newState[id] = e.target.value;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateState(this.state);
    this.props.setIsChanging();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="d-block text-left">Nom</label>
        <input
          type="text"
          className="mb-2"
          onChange={(e) => this.handleChange(e, "nom")}
          value={this.state.nom}
        />
        <label className="d-block text-left">Prenom</label>
        <input
          type="text"
          className="mb-2"
          onChange={(e) => this.handleChange(e, "prenom")}
          value={this.state.prenom}
        />

        <label className="d-block text-left">Tel</label>
        <input
          type="text"
          className="mb-2"
          onChange={(e) => this.handleChange(e, "tel")}
          value={this.state.tel}
        />

        <label className="d-block text-left">Adresse</label>
        <input
          type="text"
          className="mb-2"
          onChange={(e) => this.handleChange(e, "adresse")}
          value={this.state.adresse}
        />
        <input className="d-block my-1" type="submit" value="valider" />
      </form>
    );
  }
}

export default SetInfoPerso;
