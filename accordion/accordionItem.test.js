import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import AccordionItem from "./accordionitem";


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with a list", () => {
    act(() => {
        render(<AccordionItem label="buttonOne"><p>sample</p></AccordionItem>,container)
    })
    expect(container.querySelector("button").textContent).toBe("buttonOne")
    expect(container.querySelector("p").textContent).toBe("sample")
})

