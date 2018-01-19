
// NOTE: this function is serialised to a string and executed in a webview,
// don't import any other modules or refer to variables defined outside of
// the function body. Note that use of ES6 features like iteration and classes
// will end up transpiling into code that uses helper functions like
// _createClass, so keep this code ES5.


const makeHarness = ({ document, window, el, init, data, scriptUris, globalNames }) => {

  window.onerror = function (e, x) {
    alert(e);
  }

  let loaded = false;

  return {
    execute() {
      try {
        this.injectScripts();
        this.checkLoad();
      } catch (e) {
        this.handleError(e);
      }
    },

    injectScripts() {
      for (let i = 0; i < scriptUris.length; i++) {
        const scriptUri = scriptUris[i];
        const scriptId = `dom-context-script-${scriptUri.replace(/\W/g, '')}`;
        let script = document.getElementById(scriptId);
        if (!script) {
          script = document.createElement("script");
          script.id = scriptId;
          script.src = scriptUri;
          script.defer = true;
          document.head.appendChild(script);
        }
        script.addEventListener("load", this.handleScriptLoad.bind(this));
      }
    },

    handleScriptLoad() {
      this.checkLoad();
    },

    checkLoad() {
      try {
        if (loaded) {
          return;
        }
        for (let i=0; i<globalNames.length; i++) {
          const globalName = globalNames[i];
          if (typeof window[globalName] === "undefined") {
            return;
          }
        }
        this.handleLoad();
      } catch (e) {
        this.handleError(e);
      }
    },

    handleLoad() {
      loaded = true;
      const globals = {};
      for (let i = 0; i < globalNames.length; i++) {
        const globalName = globalNames[i];
        globals[globalName] = window[globalName];
      }
      init(el, data, globals);
    },

    handleError(e) {
      window.postMessage(e.toString(), "*");
    }
  }
}

export default makeHarness;
