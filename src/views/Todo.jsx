import React, { Component } from "react";
import axios from "axios";

import Header from "../components/Header";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

const URL = "http://localhost:3003/api/todos";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", list: [] };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.refresh();
  }

  refresh(description = "") {
    const search = description ? `&description__regex=/${description}/` : "";
    axios
      .get(`${URL}?sort=-createdAt${search}`)
      .then((response) =>
        this.setState({ ...this.state, description, list: response.data })
      );
  }

  handleSearch() {
    this.refresh(this.state.description);
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(URL, { description }).then((response) => this.refresh());
  }

  handleRemove(todo) {
    axios
      .delete(`${URL}/${todo._id}`)
      .then((response) => this.refresh(this.state.description));
  }

  handleMarkAsDone(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then((response) => this.refresh(this.state.description));
  }

  handleMarkAsPending(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then((response) => this.refresh(this.state.description));
  }

  handleClear() {
    this.refresh();
  }

  render() {
    return (
      <>
        <Header name="Tarefas" small="Cadastro" />
        <ToDoForm
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
          handleClear={this.handleClear}
        />
        <ToDoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />
      </>
    );
  }
}
