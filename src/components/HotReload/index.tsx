import {
    observable,
    runInAction,
} from "mobx";
import { observer } from "mobx-react";
import * as React from "react";

import { Inner } from "./Inner";

@observer
export class HotReload extends React.Component<{}, {}> {
    @observable private counter: number = 0;

    public render() {
        return (
            <div>
                <button onClick={this.onClick}> counter :{this.counter}</button>
                <Inner/>
            </div>
        );
    }

    private onClick = () => {
        runInAction(() => {
            this.counter++;
        });
    }
}
