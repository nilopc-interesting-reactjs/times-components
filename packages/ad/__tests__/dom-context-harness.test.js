
import makeHarness from "../dom-context-harness";
import { jsdom } from "jsdom"

describe("DOMContext harness", () => {

  let document, window;

  beforeEach(() => {
    document = jsdom('<html></html>');
    window = document.defaultView;
  })

  test("injects scripts into the document head", () => {
    const harness = makeHarness({
      document, window,
      scriptUris: ["a", "b"]
    });
    harness.execute();
    const scripts = document.head.getElementsByTagName("script");
    expect(scripts.length).toEqual(2);
    expect([...scripts].map(s => s.src)).toEqual(["a", "b"]);
  });

  test("does not inject script twice in document head", () => {
    const harness = makeHarness({
      document, window,
      scriptUris: ["a", "b"]
    });
    harness.execute();
    const anotherHarness = makeHarness({
      document, window,
      scriptUris: ["a", "c"]
    });
    anotherHarness.execute();
    const scripts = document.head.getElementsByTagName("script");
    expect(scripts.length).toEqual(3);
    expect([...scripts].map(s => s.src)).toEqual(["a", "b", "c"]);
  });

});
