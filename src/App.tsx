import { Provider } from "mobx-react";
import * as React from "react";

import { HotReload } from "./components/HotReload";
import { AppStore } from "./stores/AppStore";


export class App extends React.Component<{}, {}> {
    private appStore: AppStore;

    constructor(props: {}) {
        super(props);
        this.appStore = new AppStore();
    }

    public render() {
        return (
            <div>
                <Provider appStore={this.appStore}>
                    <HotReload/>
                </Provider>
            </div>
        );
    }
}
