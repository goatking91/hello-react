# 리액트를 다루는 기술
###1. 리액트 시작
###2. JSX
- 2.4 JSX 문법
###3. 컴포넌트
- 3.1 첫 컴포넌트 생성 
- 3.2 props
    - defaultProps와 propTypes는 꼭 사용해야 하나요?
    - 이 두 가지 설정은 필수 사항은 X
    - 단 협업을 진행 시 어떤 props가 쉽게 필요한지 알 수 있어 개발 능률이 올라감
- 3.3 state
###4. 이벤트 핸들링
- 4.2 예제로 이벤트 핸들링 익히기
###5. ref: DOM에 이름 달기
- 5.1 ref는 어떤 상황에서 사용해야 할까?
    - DOM을 꼭 직접적으로 건드려야 할 때
    - DOM을 꼭 사용해야 하는 상황
        - 특정 input에 포커스 주기
        - 스크롤 박스 조작하기
        - Canvas 요소에 그림 그리기 등
- 5.2 ref 사용
- 5.3 컴포넌트에 ref 달기
###6. 컴포넌트 반복
- 6.2 데이터 배열을 컴포넌트 배열로 map하기
- 6.3 key
- 6.4 응용
###7. 컴포넌트의 라이플사이클 메서드
- 7.1 이해
    - 마운트
        - DOM이 생성되고 웹 브라우저상에 나타나는 것을 마운트라 함
        - constructor: 컴포넌트를 새로 만들 때 마다 호출되는 클래스 생성자 메서드
        - getDerivedStateFromProps: props에 있는 값을 state에 동기화 하는 메서드
        - render: 우리가 준비한 UI를 렌더링하는 메서드
        - componentDidMount 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드
    - 업데이트
        - 컴포넌트가 업데이트 할 때
            1. props가 바뀔 때
            2. state가 바뀔 때
            3. 부모 컴포넌트가 리렌더링될 때
            4. this.forceUpdate로 강제로 렌더링을 트리거 할 때
        - getDerivedStateFromProps: 이 메서드는 마운트 과정에도 호출, props가 바뀌어서 업데이트할 때도 호출
        - shouldComponentUpdate: 컴포넌트가 리렌더링을 해야할 지말지 결정하는 메서드, false를 반환하면 아래 메서드들을 호출하지 않음
        - render: 컴포넌트를 리렌더링
        - getSnapshotBeforeUpdate: 컴포넌트의 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드
        - componentDidUpdate: 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드
    - 언마운트: 마운트의 반대 과정, 컴포넌트를 DOM에서 제거하는 것
        - componentWillUnmount: 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드
- 7.3 사용  
