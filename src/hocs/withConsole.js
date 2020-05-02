import React from 'react'

const withConsole = (Wrraped) => {
    class WithConsole extends React.Component{

        consoling() {
            console.log('hello')
        }
        render() {
            const {title, ...otherProps} = this.props;
            return <Wrraped consoling={this.consoling} {...otherProps}/>
        }
    }

    WithConsole.displayName = `WithSubscription(${getDisplayName(Wrraped)})`;
    return WithConsole;
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

export default withConsole;