import React from "react";

export class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      editedText: this.props.item.amt,
    };
  }

  handleEdit = (e) => {
    this.setState({ editedText: e.target.value });
  };

  render() {
    const { item, del, edit } = this.props;
    return (
      <div>
        {this.state.edit ? (
          <div>
            <input
              type="number"
              value={this.state.editedText}
              onChange={this.handleEdit}
            />
            <button
              onClick={(e) => {
                edit(this.state.editedText, item.id);
                this.setState({ edit: false });
              }}
            >
              Update
            </button>
          </div>
        ) : (
          <p className={item.amt >= 0 ? "inc" : "exp"}>
            ${Math.abs(item.amt)} - {item.history}
            <i
              className="fas fa-edit"
              onClick={(e) => {
                this.setState({ edit: true });
              }}
            />
            <i className="fas fa-trash-alt" onClick={(e) => del(e, item.id)} />
          </p>
        )}
      </div>
    );
  }
}
