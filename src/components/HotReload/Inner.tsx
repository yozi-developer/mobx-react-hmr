import {
    observable,
    runInAction,
} from "mobx";
import {
    inject,
    observer,
} from "mobx-react";
import * as React from "react";

class Inner extends React.Component<{}, {}> {
    @observable private counter: number = 0;

    public render() {
        return (
            <div>
                <button onClick={this.onClick}> Inner counter :{this.counter}</button>
            </div>
        );
    }

    private onClick = () => {
        runInAction(() => {
            this.counter++;
        });
    }
}

const WrappedComponent1 = observer(Inner);
const WrappedComponent = inject("appStore")(WrappedComponent1);

export {
    WrappedComponent as Inner,
};
