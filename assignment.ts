// ==============================
// Typescript & JavaScript 실습 과제
// ==============================

// 과제 안내:
// 이 파일 내 각 문제에 맞게 주어진 요구사항을 코드로 구현하세요.

// ✅ 1. 기본 타입과 인터페이스
// ------------------------------
export interface Member {
    name: string;
    batch: number;
    isActive?: boolean; // 선택적 속성
  }
  
  // Member 타입을 이용해 자기소개 객체를 만들어주세요.
  export const introduceMyself: Member = {
    name: "김휘림",
    batch: 12,
    isActive: true,
  };
  
  // ✅ 2. 화살표 함수와 템플릿 리터럴
  // ------------------------------
  // introduceMyself 객체를 받아 자기소개 문장을 반환하는 함수를 화살표 함수로 만드세요.
  export const createIntroduction = (member: Member): string => {
    // 예시1: 안녕하세요, 저는 권혁원이고 기수는 10기입니다. 명예위원입니다!
    // 예시2: 안녕하세요, 저는 김동윤이고 기수는 10기입니다. 활동위원입니다!
      return `안녕하세요, 저는 ${member.name}이고 기수는 ${member.batch}기입니다. ${member.isActive ? '활동위원' : '명예위원'}입니다!`;
  };
  
  // ✅ 3. 배열 메서드
  // ------------------------------
  export const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // numbers에서 홀수만 필터링한 배열을 만드세요.
  export const oddNumbers = numbers.filter((num) => num % 2 !== 0);
  
  // numbers 배열을 이용해 모든 숫자를 2배한 새 배열을 만드세요.
  export const doubledNumbers = numbers.map((num) => num*2);
  
  // numbers 배열을 돌면서 홀수가 있으면 문자열 '홀수'를 출력하고, 짝수가 있으면 문자열 '짝수'를 출력하세요.
  numbers.forEach(number => {
    if (number % 2 === 0){
    console.log("짝수")
    }else {
    console.log("홀수")
  }
  }); // 여기에 코드 작성

  // numbers 배열의 합을 구하세요.
  export const sumOfNumbers = numbers.reduce((accumulator, curr) => accumulator + curr, 0);

  // ✅ 4. Union과 Literal 타입
  // ------------------------------
  export type Direction = 'left' | 'right' | 'up' | 'down';
  
  // 주어진 방향을 받아서 "이동 방향은 (방향)입니다."를 반환하는 함수를 작성하세요.
  export const getDirectionMessage = (direction: Direction): string => {
    return `이동 방향은 ${direction}입니다.`;
  };
  
  // ✅ 5. 제네릭 함수
  // ------------------------------
  // 배열의 마지막 요소를 반환하는 제네릭 함수를 만드세요.
  export const getLastItem = <T>(arr: T[]): T | undefined => {
    return arr[arr.length-1];
  };
  
  // ✅ 6. 선택적 체이닝과 null 병합 연산자
  // ------------------------------
  export type User = {
    id: number;
    profile?: {
      nickname?: string;
    };
  };
  

  // user의 nickname을 가져오되, nickname이 없으면 "닉네임 없음"을 반환하세요.
  export const getNickname = (user: User): string => {
    return user.profile?.nickname ?? "닉네임 없음";

  }


  // ✅ 7. 비동기 프로그래밍 (async-await)
  // ------------------------------
  // 주어진 비동기 함수 fetchUserData를 사용해 사용자 데이터를 출력한 후, return 하는 printUserData 함수를 만드세요.
  
  export const spaceUsers = [
      { id: 1, name: '권혁원' },
      { id: 2, name: '김동윤' },
      { id: 3, name: '김서호' },
    ];
  
  export const fetchUserData = async (): Promise<{ id: number; name: string }[]> => {
      return spaceUsers
  };
  
  export const printUserData = async (): Promise<{ id: number; name: string }[]> => {
    // 여기에 코드 작성 : 데이터 출력
    let users = await fetchUserData();
    console.log(users);
    // 데이터 반환
    return users
  };
  
  // ✅ 8. 클래스 기본 문법 (NestJS 스타일)
  // ------------------------------
  export interface UserInfo {
    id: number;
    name: string;
  }
  
  export class UserService {
    private users: UserInfo[] = [];
  
    // user 객체를 받아서 users 배열에 추가하는 함수
    createUser(user: UserInfo): void {
      // 여기에 코드 작성
      this.users.push(user);
    }
  
    // users 배열을 반환하는 함수
    getUsers(): UserInfo[] {
      return this.users;
    }
  
    // users 배열을 콘솔에 출력하는 함수
    printUsers(): void {
      // 여기에 코드 작성
      console.log(this.users);
    }
  }
  
