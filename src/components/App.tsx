import IProps from './common/IProps';
import * as React from "react";
import Header from "./common/Header";

class App extends React.Component<IProps, {}> {
    public render(): JSX.Element {
        return (
            <div className='container-fluid'>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default App;
