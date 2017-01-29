import IProps from './common/IProps';
import * as React from "react";
import Header from "./common/Header";
import IAppState from "../store/IAppState";
import {connect} from "react-redux";

interface IAppProps extends IProps {
    loading: boolean;
}

@connect(mapStateToProps)
class App extends React.Component<IAppProps, {}> {
    public render(): JSX.Element {
        return (
            <div className='container-fluid'>
                <Header loading={this.props.loading}/>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state: IAppState, ownProps: any): IAppProps {
    return {
        loading: state.ajaxCallInProgressCount > 0
    };
}

export default App;
