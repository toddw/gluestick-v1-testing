/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import Todos from "../components/Todos";
import { addTodo, removeTodo, fetchTodos } from "../actions/todos";

export class TodosApp extends Component {
  /**
   * Called by ReactRouter before loading the container. Called prior to the
   * React life cycle so doesn't have access to component's props or state.
   *
   * @param {Object} store redux store object
   * @param {Object} renderProps render properties returned from ReactRouter
   * @param {Object} query location data
   * @param {Object} serverProps server specific properties
   * @param {Boolean} serverProps.isServer method running on server or not
   * @param {Request} [serverProps.request] express request if isServer
   *
   * @return {(Promise|undefined)} If this method returns a promise, the router
   * will wait for the promise to resolve before the container is loaded.
   */
  static gsBeforeRoute ({dispatch}) {
    return dispatch(fetchTodos());
  }

  props: {
    todos: Array<string>,
    addTodo: Function,
    removeTodo: Function,
    fetchTodos: Function
  };

  componentDidMount () {
    // @NOTE: shouldn't have to do this, it should already be pre-fetched in
    // gsBeforeRoute if it were working
    this.props.fetchTodos();
  }

  render () {
    const { todos, addTodo } = this.props;
    return (
      <div>
        <Helmet title="TodosApp"/>
        <Todos todos={todos} addTodo={addTodo} />
      </div>
    );
  }
}

export default connect(
  (state) => ({todos: state.todos}),
  (dispatch) => bindActionCreators({addTodo, removeTodo, fetchTodos}, dispatch)
)(TodosApp);

