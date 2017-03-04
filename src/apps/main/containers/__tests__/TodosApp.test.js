/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { TodosApp } from "apps/main/containers/TodosApp";

describe("apps/main/containers/TodosApp", () => {
  it("renders without an issue", () => {
    const subject = <TodosApp todos={["one", "two"]} addTodo={() => null} fetchTodos={() => null} removeTodo={() => null} />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
