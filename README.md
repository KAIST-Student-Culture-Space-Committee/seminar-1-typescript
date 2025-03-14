# seminar-1-typescript
공간위 개발 세미나 1주차 실습 및 과제용 레포지토리

# ts 환경 구성
``` bash
npm init -y
npm install typescript ts-node @types/node --save-dev
npx tsc --init
npm install -D jest @types/jest ts-jest
npm install @types/jest --save-dev
```

# 테스트 환경 구성
``` bash
npm install
```

# 브랜치 만들기
``` bash
git checkout -b <이름 영어로>
```

# 과제 파일 실행
``` bash
npx ts-node assignment.ts
```

# 테스트 파일 실행
``` bash
npx jest assignment.test.ts
```