import React, {useRef, useState, useMemo, useCallback} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper'
import './App.css'
import Counter from './Counter';
import InputSample from './InputSample';
import InputSample2 from './InputSample2';
import UserList from './UserList';
import CreateUser from './CreateUser';

  // function countActiveUsers(users) {
  //   console.log('user counting..');
  //   return users.filter(user => user.active).length;
  // }

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

    const onCreate = useCallback(() => {
      const user = {
        id: nextId.current,
        username,
        email,
      };
      setUsers(users.concat(user));

      setInputs({
        username: '',
        email: '',
      });

      nextId.current += 1;
    }, [users, username, email]);


    const onRemove = useCallback(
      id => {
        // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // = user.id 가 id 인 것을 제거함
        setUsers(users.filter(user => user.id !== id));
      },
      [users]
    );
    const onToggle = useCallback(
      id => {
        setUsers(
          users.map(user =>
            user.id === id ? { ...user, active: !user.active } : user
          )
        );
      },
      [users]
    );


    const countActiveUsers =  () => {
      console.log('counting users..');
      return users.filter( user => 
        user.active
      ).length;
    }
   

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const count = useMemo( () => countActiveUsers(users), [users])


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
        <div>onUsers : {count}</div>
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



// useMemo -> 성능 최적화 할 때 사용 (특정 결과값을 재사용)
// 불필요할 때에는 해당 함수를 호출하지 않게 해야함. 이럴때 useMemo라는 Hook 함수를 사용한다.
// useMemo의 첫번째 파라미터에는 어떻게 연산할지 정의하는 함수, 두번째 파라미터에는 deps 배열을 넣어주면 된다.
// 이 배열 안에 넣는 내용이 바뀌면, 우리가 등록한 함수를 호출해서 값을 연산해주고 만약 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용한다.



// useCallback -> 특정함수를 새로 만들지 않고 재사용하고 싶을때 사용
// 나중에 컴포넌트에서 props 가 바뀌지 않았으면 Virtual DOM 에 새로 렌더링하는 것 조차 하지 않고 컴포넌트의 결과물을 재사용 하는 최적화 작업을 하는데, 이 작업을 하려면, 함수를 재사용하는것이 필수
// 주의 할 점
// 함수 안에서 사용하는 상태 혹은 props가 있다면 deps 배열 안에 포함시켜야 한다. 만약 deps 배열안에 함수에서 사용하는 값을 넣지 않으면 함수 내에서 해당 값들을 참조할 때 가장 최신값을 참조하는걸 보장할 수 없다.



// React.memo를 사용한 컴포넌트 리렌더링 방지
// 컴포넌트의 props가 바뀌지 않았다면, 리렌더링을 방지하여 컴포넌트 리렌더링 성능 최적화
// 컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링