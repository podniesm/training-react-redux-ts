import * as React from "react";
import Timer = NodeJS.Timer;

interface ILoadingDotsProps {
    interval: number;
    dots: number;
}

class LoadingDots extends React.Component<ILoadingDotsProps, any> {
    private _interval: Timer;
    constructor(props, context) {
        super(props, context);
        this.state = {frame: 1};
    }

    private componentDidMount() {
        this._interval = setInterval(() => {
            this.setState({
                frame: this.state.frame + 1
            });
        }, this.props.interval);
    }

    private componentWillUnmount() {
        clearInterval(this._interval);
    }

    public render(): JSX.Element {
        let dots = this.state.frame % (this.props.dots + 1);
        let text = '';
        while (dots > 0) {
            text += '.';
            dots--;
        }
        return <span>{text}&nbsp;</span>;
    }
}

export default LoadingDots;