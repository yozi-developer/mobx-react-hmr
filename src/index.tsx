import * as mobx from "mobx";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import { App } from "./App";

mobx.useStrict(true);
declare const module: any;

let AppComponent = App;

function renderApp() {
    ReactDOM.render((
            <AppContainer>
                <AppComponent/>
            </AppContainer>
        ),
        document.getElementById("react-anchor"),
    );
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept("./App", async () => {
        const temp = await import("./App");
        AppComponent = temp.App;
        renderApp();
    });
}
