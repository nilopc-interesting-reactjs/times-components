/* eslint-env browser */
import nativeStories from "./ad.stories.native.js";
import webStories from "./ad.stories.web.js";

import React from "react";
import NativeDOMContext from "./dom-context.native"
import WebDOMContext from "./dom-context.web"

// will pick either web or native stories

let stories, DOMContext;
if (window.document) {
  stories = webStories();
  DOMContext = WebDOMContext;
} else {
  stories = nativeStories();
  DOMContext = NativeDOMContext;
  DOMbContext = NativeDOMContext;
}

stories.add("DOMContext", () => {
  // script content: `window.global1 = "external value";`
  const script = "data:text/javascript;charset=utf-8;base64,d2luZG93Lmdsb2JhbDEgPSAiZXh0ZXJuYWwgdmFsdWUiOw==";

  return (
    <DOMContext
      scriptUris={[script]}
      globalNames={["global1"]}
      data={{ message: "Hello Web! Our script says: ", bgColor: "#F08" }}
      init={(el, { message, bgColor }, { global1 }) => {
        let widget = document.createElement("div");
        widget.style.width = "100%";
        widget.style.height = "100%";
        widget.style.backgroundColor = bgColor;
        widget.style.fontSize = "30px";
        widget.style.padding = "10px";
        // foo = bar + baz;
        widget.textContent = `${message}${global1}`;
        el.appendChild(widget);
      }}
      width={300}
      height={200}
    />
  );
}
);
