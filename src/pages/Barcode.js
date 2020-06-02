import React from 'react';
import keycode from 'keycode';
import { Tabs } from 'antd';

export default () => {
  const [keys, setKeys] = React.useState([]);
  const [value, setValue] = React.useState('');
  const [allKeyValue, setAllKeyValue] = React.useState('');
  const regx = /NumLockAlt([0-3]|Alt)+NumLock|AltInsertInsertEndPageDown|ClearAlt([0-3]|Alt)+Clear|enter/gi;

  const handleReset = () => {
    setKeys([]);
    setAllKeyValue('');
    setValue('');
  };

  const handleKeyCode = (e) => {
    const keyCode = e.keyCode || e.which;
    let key = /Unidentified/i.test(e.key) ? keycode(keyCode) : e.key;
    if (keyCode === 220) key = '|';
    const keyValue = `${allKeyValue}${key.replace(/numpad\s/gi, '')}`;
    setKeys([...keys, key]);
    setAllKeyValue(keyValue);
  };

  return (
    <div className="container barcode-page">
      <h1>Barcode</h1>
      <div className="wrap-input">
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Barcode"
          onKeyDown={handleKeyCode}
        />
        <button onClick={handleReset}>Clear</button>
      </div>

      <Tabs>
        <Tabs.TabPane tab={<span>Format</span>} key="1">
          <p style={{ whiteSpace: 'pre' }}>{allKeyValue.replace(regx, '\n')}</p>
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span>Key Code</span>} key="2">
          <p>{keys.join(',')}</p>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
