import React from "react";
import { shallow } from "enzyme";

import Todos from "apps/main/components/Todos";

describe("apps/main/components/Todos", () => {
  it("renders without an issue", () => {
    const subject = <Todos />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
