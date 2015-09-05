import React, { Component } from 'react';

// This is TypeScript's implementation of Extend:
var __extends = function (d, b) {
  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  function __() { this.constructor = d; }
  __.prototype = b.prototype;
  d.prototype = new __();
};

function decorate (BaseComponent) {
  function DecoratedComponent (...args) {
    console.log("Running decorated constructor!");
    BaseComponent.apply(this, ...args)
  }

  __extends(DecoratedComponent, BaseComponent);

  return DecoratedComponent;
}

@decorate
class Number extends Component {
  static defaultProps = {
    value: 1,
  };

  render() {
    return <h1>{this.props.value} (defaultProps={'' + Number.defaultProps})</h1>;
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <Number />
        <Number value={42} />
      </div>
    );
  }
}