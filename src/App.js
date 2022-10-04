import React, {useRef, useState} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper'
import './App.css'
import Counter from './Counter';
import InputSample from './InputSample';
import InputSample2 from './InputSample2';
import UserList from './UserList';
import CreateUser from './CreateUser';

  function App() {
    const name = 'react';
    const style = {
      backgroundColor: 'black',
      color: 'aqua',
      fontSize: 24,
      padding: '1rem'
    }
    const [inputs, setInputs] = useState({
      username: '',
      email: ''
    });
    const { username, email } = inputs;
    const onChange = e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    };
    const [users, setUsers] = useState([
      {
        id: 1,
        username: 'goku',
        email: 'goku@gmail.com',
        active: true
      },
      {
        id: 2,
        username: 'toriko',
        email: 'toriko@naver.com',
        active: false
      },
      {
        id: 3,
        username: 'luffy',
        email: 'luffy@kakao.com',
        active: false
      }
    ]);
  
    const nextId = useRef(4);
    const onCreate = () => {
      const user = {
        id: nextId.current,
        username,
        email
      };
      setUsers(users.concat(user));
  
      setInputs({
        username: '',
        email: ''
      });
      nextId.current += 1;
    };

    const onRemove = id => {
      // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만든다.
      // = user.id가 id 인것 제거
      setUsers(users.filter ( user => user.id !== id));
    }

    const onToggle = id => {
      setUsers(
        users.map (user => {
        return  user.id === id ? {...user, active: !user.active} : user
        })
      )
    }
  return (
    <>
      <div>
        <Hello />
        <div style={style}>{name}</div>
        <div className='gray-box'></div>
        <Hello name='react' color="red" />
        <Hello color="pink"/>
      </div>
      <div>
        <Wrapper>
          <Hello name='react' color="red" />
          <Hello color="pink"/>
        </Wrapper>
        <Counter></Counter>
        <InputSample></InputSample>
        <br></br>
        <InputSample2></InputSample2>
        <br></br>
        <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        ></CreateUser>
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}></UserList>
        <br></br>
      </div>
    </>
  );
}

export default App;

// 태그와 태그 사이에 내용이 들어가지 않을 때에는, Self Closing 태그 라는것을 사용해야 한다. ex) <br />
// 리액트 함수 안에는 무조건 하나의 태그로 이루어져야 한다.
// div 전체 하나로 감싸주면 되는데, div로 감싸는게 별로 좋지 않은 상황도 존재한다. 그럴땐 Fragment 라는것을 사용한다. <> </>

// JSX 내부에 자바스크립트 변수를 보여줘야 할 때에는 {} 으로 감싸서 보여준다. ex) <div>{name}</div>

// Props
