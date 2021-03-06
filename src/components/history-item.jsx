import React from 'react'

import CodeMirror from '@skidding/react-codemirror'

class HistoryItem extends React.Component {
  render() {
    const options = {
      lineNumbers: true,
      readOnly: true,
      mode: this.props.cell.cellType,
      theme: 'eclipse',
    }
    const mainElem = (<CodeMirror
      ref="editor" // eslint-disable-line
      value={this.props.cell.content}
      options={options}
    />)

    return (
      <div
        id={`cell-${this.props.cell.id}`}
        className={`cell-container ${this.props.display ? '' : 'hidden-cell'}`}
      >
        <div className="cell history-cell">
          <div className="history-content">{mainElem}</div>
          <div className="history-date">{this.props.cell.lastRan.toUTCString()}</div>
        </div>
        <div className="cell-controls" />
      </div>
    )
  }
}


export { HistoryItem }
