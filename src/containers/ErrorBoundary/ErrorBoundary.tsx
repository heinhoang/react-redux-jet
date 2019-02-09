import React, {ReactNode} from 'react';

export interface IState {
    error : string | null;
}

export class ErrorBoundary extends React.Component {
  public state = {
    error: ''
  };
  public componentDidCatch(error : Error) {
    this.setState({
      error: error.message || "Unexpected error"
    });
  }
  public render() {
    if (this.state.error) {
      return <div style={{
          color: 'red'
      }}>
          ERROR: {this.state.error || 'Unexpected Error'}
      </div>;
    }
    return this.props.children;
  }
}

export const withErrorBoundary = (component : ReactNode) => <ErrorBoundary>
  {component}
</ErrorBoundary>;
