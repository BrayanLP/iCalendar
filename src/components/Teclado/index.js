import React, { Component } from 'react';
import { TecladoWrapper } from './style';
class TecladoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  onChange = index => {
    console.log('TCL: TecladoComponent -> index', index);
    const { value } = this.state;
    if (index === '<') {
      this.setState({
        value: ''
      });
    } else {
      this.setState({
        value: value + index
      });
    }
  };
  render() {
    const { value } = this.state;

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '<'];
    return (
      <TecladoWrapper>
        <form>
          <input
            type="text"
            value={value}
            placeholder="00000000"
            disabled={true}
          ></input>
        </form>
        <ul>
          {array.map((res, index) => {
            return (
              <>
                <li onClick={() => this.onChange(res)}>
                  {res !== '<' ? (
                    res
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
                    >
                      <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                      <line x1="18" y1="9" x2="12" y2="15"></line>
                      <line x1="12" y1="9" x2="18" y2="15"></line>
                    </svg>
                  )}
                </li>
              </>
            );
          })}
          {/* <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>0</li> */}
        </ul>
      </TecladoWrapper>
    );
  }
}

export default TecladoComponent;
