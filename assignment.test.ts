import {
    introduceMyself,
    createIntroduction,
    oddNumbers,
    doubledNumbers,
    getDirectionMessage,
    getLastItem,
    getNickname,
    printUserData,
    UserService,
    spaceUsers,
  } from './assignment';
  
  describe('Typescript & JavaScript 실습 과제 테스트', () => {
    test('자기소개 객체 테스트', () => {
      expect(typeof introduceMyself.name).toBe('string');
      expect(typeof introduceMyself.batch).toBe('number');
      expect(typeof introduceMyself.isActive).toBe('boolean');
    });
  
    test('자기소개 문장 생성 함수 테스트', () => {
      expect(createIntroduction({ name: '권혁원', batch: 10, isActive: true })).toBe('안녕하세요, 저는 권혁원이고 기수는 10기입니다. 활동위원입니다!');
    });
  
    test('배열에서 홀수 필터링 테스트', () => {
      expect(oddNumbers).toEqual([1, 3, 5, 7, 9]);
    });
  
    test('배열의 숫자 2배 만들기 테스트', () => {
      expect(doubledNumbers).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    });
  
    test('방향 메시지 생성 함수 테스트', () => {
      expect(getDirectionMessage('left')).toBe('이동 방향은 left입니다.');
    });
  
    test('제네릭으로 마지막 요소 얻기 테스트', () => {
      expect(getLastItem([1, 2, 3, 4, 5])).toBe(5);
      expect(getLastItem(['a', 'b', 'c', 'd', 'e'])).toBe('e');
    });
  
    test('선택적 체이닝 및 null 병합 연산자 테스트', () => {
      const user1 = { id: 1 };
      const user2 = { id: 2, profile: { nickname: "김동윤" } };
      
      expect(getNickname(user1)).toBe('닉네임 없음');
      expect(getNickname(user2)).toBe('김동윤');
    });
  
    test('비동기 사용자 데이터 가져오기 테스트', async () => {
      await expect(printUserData()).resolves.toEqual(spaceUsers);
    });
  
    test('UserService 클래스 메서드 테스트', () => {
      const service = new UserService();
      service.createUser({ id: 1, name: '권혁원' });
      service.createUser({ id: 2, name: '김동윤' });
      service.createUser({ id: 3, name: '김서호' });
      expect(service.getUsers()).toEqual([{ id: 1, name: '권혁원' }, { id: 2, name: '김동윤' }, { id: 3, name: '김서호' }]);
      service.printUsers();
    });
  });