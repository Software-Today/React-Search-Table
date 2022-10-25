import './App.css';
import leaderboard from './leaderboard.json';
import Table from './components/Table';
import { React, useState } from "react";

function App() {
  var search_text = '';
  const columns = [
    'Name', 'Rank', 'Number Of Bananas', 'isSearchedUser?'
  ];
  const tmp_data = Object.keys(leaderboard).map((key) => leaderboard[key]).sort(function(a, b){return b.bananas-a.bananas});
  tmp_data.map((ele, index) => {
    ele.rank = index + 1;
  });
  const [users, setUsers] = useState(tmp_data.slice(0,10));
  const [value, setValue] = useState('');

  const search = function () {

    setValue(search_text);
    
    if(search_text !== '') {
      const filtered_user_1 = tmp_data.slice(0,10).filter(checkName);
      if(filtered_user_1[0]) {
        setUsers(tmp_data.slice(0,10));
      } else {
        const filtered_user_2 = tmp_data.filter(checkName);
        if(filtered_user_2[0]) {
          const data = tmp_data.slice(0,9);
          data.push(filtered_user_2[0]);
          setUsers(data);
        } else {
          setUsers(tmp_data.slice(0,10));
        }
      }
    } else {
      setUsers(tmp_data.slice(0,10));
    }
  };

  function checkName(param) {
    return param.name === search_text;
  }


  return (
    <div className="App">
      <div>
        <input type={'text'} name='search' id='search_input' placeholder='input here username' onChange={(e)=> { search_text = e.target.value }}/>
        <button onClick={search}>Search</button>
      </div>

      <div className='table-div'>
        <Table columns={columns} data={users} search={value}/>
      </div>
    </div>
  );
}

export default App;
