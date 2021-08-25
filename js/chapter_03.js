// 반복문

for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

for (let i = 0; i < 20; i += 2) {
  console.log(10 / i);
}

let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
  console.log(sum);
}
console.log(sum);

// while  구문에 condition 결과가  True로 고정되면 무한 반복
let a = 0;
while (true) {
  a++;
  if (a >= 10) {
    break;
  }
}
console.log(a);

// 로그인 간단한 시나리오(while 구무을 사용하는 경우)
// 로그인을 할 때 서버에서는 계속 입력을 기다려야함
// 사용자가 아이디. 비밀번호를 입력
// 입력된 아이디와 비번이 잘못되었을 때 오류메세지를 생성
// 다시 입력을 기다려야함
//* 사용자가 올바른 아이디와 비번을 입력할 때까지 반복적으로 오류메세지 발생과 입력 대기가 실행

while (true) {
  //1. 사용자 입력을 기다리는 실행구문
  //2. 입력된 아이디/비번을 비교 => true/false
  //3-1. 비교 결과가 true => break를 사용해서 반복을 종료하고 다음 구문을 실행
  //3-2. 비교 결과가 false => 다시 입력을 기다리는 구문 실행(반복실행)
}
