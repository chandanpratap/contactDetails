import React from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import UserForm from "./components/Form/Form";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ title: "", description: "", key: "" }],
      filterData: [{ title: "", description: "", key: "" }],
      title: "",
      description: "",
    };
  }

  onChangeHandler = (value, key) => {
    const data = this.state.data;
    data.map((item) => {
      if (item.key === key) {
        item.title = value;
      }
    });
    this.setState({ data: data });
  };

  deleteItems = (key) => {
    const data = this.state.data.filter((item) => item.key !== key);
    this.setState({ data: data });
  };

  handleSearchBar = (event) => {
    const query = event.target.value;

    this.setState((prevState) => {
      const data = prevState.filterData.filter((element) => {
        return element.title.toLowerCase().includes(query.toLowerCase());
      });

      this.setState({ data: data, query: query });
    });
  };

  addItems = (e) => {
    e.preventDefault();
    let newData = {
      title: this.state.title,
      description: this.state.description,
      key: Date.now(),
    };
    this.setState((prevState) => ({
      data: [...prevState.data, newData],
      filterData: [...prevState.filterData, newData],
    }));
    this.setState({ title: "", description: "" });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div classNameName="App">
        <UserForm
          submitHandler={this.addItems}
          title={this.state.title}
          description={this.state.description}
          changeHandler={this.changeHandler}
        />

        <ContactList
          data={this.state.data}
          onChangeHandler={this.onChangeHandler}
          deleteItems={this.deleteItems}
          handleSearchBar={this.handleSearchBar}
        />
      </div>
    );
  }
}

export default App;
