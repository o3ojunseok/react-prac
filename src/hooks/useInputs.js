import { useState, useCallback } from 'react';

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);
  // change
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset];
}

export default useInputs;


// 커스텀 hooks
// 반복되는 로직을 쉽게 재사용
// 커스텀 hooks를 만들땐 보통 use라는 키워드로 시작하는 파일을 만들고 그 안에 함수를 작성한다.
// 원하는 기능을 구현한 뒤 컴포넌트에서 사용하고 싶은 값들을 반환해주면 된다.