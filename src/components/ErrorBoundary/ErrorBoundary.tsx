import React, { Children, Component } from "react";
import ErrorIndicator from "../ErrorIndicator";

export class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render(): React.ReactNode {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return Children;
    }
}