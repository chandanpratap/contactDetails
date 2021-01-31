import React from "react";
import logo from "../images/icon.png";
const List = (props) => {
  return (
    <div className="container" style={{ width: "30%" }}>
      <input
        type="text"
        className="input-field"
        placeholder="Search"
        value={props.query}
        onChange={props.handleSearchBar}
      />
      {props.data.map((item, key) =>
        item.title !== "" ? (
          <div
            id="accordionCO0137098"
            className="panel-group"
            style={{ width: "90%" }}
          >
            <br />
            <div className="panel panel-default">
              <a
                href={`#collapseCO0137098_${key}`}
                data-toggle="collapse"
                data-parent="#accordionCO0137098"
              >
                <div className="panel-heading image">
                  <img src={logo} width="50" height="50" />
                  <div className="heading">
                    <input
                      className="panel-title title"
                      type="text"
                      title="title"
                      value={item.title}
                      onChange={(e) =>
                        props.onChangeHandler(e.target.value, item.key)
                      }
                    />
                  </div>
                  <h4 onClick={() => props.deleteItems(item.key)}>Delete</h4>
                </div>
              </a>
              <div
                id={`collapseCO0137098_${key}`}
                className="panel-collapse collapse"
              >
                <div className="panel-body">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default List;
