
// this function is serialised to a string and executed in a webview,
// don't import any other modules or refer to variables defined outside of
// the function body except for 'window'

const harness = ({ el, init, data, scriptUris, globalNames }) => {
  window.onerror = function (e, x) {
    alert(e);
  }
  try {
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
      script.addEventListener("load", checkLoad);
    }
    checkLoad();
  } catch (e) {
    handleError(e);
  }

  let loaded = false;

  function checkLoad() {
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
      handleLoad();
    } catch (e) {
      handleError(e);
    }
  }

  function handleLoad() {
    loaded = true;
    const globals = {};
    for (let i = 0; i < globalNames.length; i++) {
      const globalName = globalNames[i];
      globals[globalName] = window[globalName];
    }
    init(el, data, globals);
  }

  function handleError(e) {
    window.postMessage(e.toString(), "*");
  }
}

export default harness;
