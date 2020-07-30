import React from 'react';
import keycode from 'keycode';
import { Tabs } from 'antd';

export default () => {
  const [keys, setKeys] = React.useState([]);
  const [value, setValue] = React.useState('');
  const [allKeyValue, setAllKeyValue] = React.useState('');
  const [regxBarcode, setRegxBarcode] = React.useState(
    'NumLockAlt([0-3]|Alt)+NumLock|AltInsertInsertEndPageDown|Alt(0013)?|ClearAlt([0-3]|Alt)+Clear|Controlm|enter'
  );

  const caseList = [
    [
      '|010754500016105Alt001396199027846681Alt001329130601916925Alt00131457871Enter',
      '|01075450001610596199027846681291306019169251457871',
    ],
    [
      '|010754500016105Controlm96199027846681Controlm29130601916925Controlm1457871Enter',
      '|01075450001610596199027846681291306019169251457871',
    ],
    [
      '|010754500016105AltInsertInsertEndPageDown96199027846681AltInsertInsertEndPageDown29130601916925AltInsertInsertEndPageDown1457871Enter',
      '|01075450001610596199027846681291306019169251457871',
    ],
    [
      '|010754500016105Enter96199027846681Enter29130601916925Enter1457871Enter',
      '|01075450001610596199027846681291306019169251457871',
    ],
    [
      '|010754500016105Alt96199027846681Alt29130601916925Alt1457871Enter',
      '|01075450001610596199027846681291306019169251457871',
    ],
    [
      '|010754500016105ClearAlt0013Clear96199027846681ClearAlt0013Clear29130601916925ClearAlt0013Clear1457871Enter',
      '|01075450001610596199027846681291306019169251457871',
    ],
    [
      '|010754500016105NumLockAlt0013NumLock96199027846681NumLockAlt0013NumLock29130601916925NumLockAlt0013NumLock1457871Enter',
      '|01075450001610596199027846681291306019169251457871',
    ],
    [
      '|010754500016105NumLockAlt0Alt0Alt13NumLock96199027846681NumLockAlt0Alt0Alt13NumLock29130601916925NumLockAlt0Alt0Alt13NumLock1457871Enter',
      '|01075450001610596199027846681291306019169251457871',
    ],
  ];

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

  const regx = new RegExp(regxBarcode, 'ig');

  return (
    <div className="container barcode-page">
      <h2>Barcode</h2>
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
      <hr />
      <h2>Test Case</h2>
      <textarea rows="2" value={regxBarcode} onChange={e => setRegxBarcode(e.target.value)} />
      <ul>
        {caseList.map((value) => {
          const isSuccess = value[0].replace(regx, '') === value[1];
          return (
            <li key={value[0]}>
              {isSuccess ? <span className="icon success">&#10003;</span> : <span className="icon error">&#8856;</span>}
              <span>{value[0]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
