/* @flow */

import React, { Component } from "react";

type Props = {
  todos: Array<string>,
  addTodo: Function
};

export default class Todos extends Component {
  props: Props;
  input: HTMLInputElement;

  render () {
    const { todos } = this.props;
    return (
      <div>
        <ul>
          {todos && todos.map((todo, i) => <li key={i}>{todo}</li>)}
        </ul>
        <form onSubmit={(e) => this._addTodo(e)}>
          <input type="text" placeholder="enter todo list item" ref={(el) => this.input = el} />
        </form>
      </div>
    );
  }

  _addTodo (e:Event) {
    e.preventDefault();
    const text = this.input.value;
    this.props.addTodo(text);
    this.input.value = "";
  }
}

