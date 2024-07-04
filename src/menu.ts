const root = document.getElementById('root') as HTMLDivElement;

const anchorTags = (href : string, textNode : string) : string => {
  let result = `<a href="#${href}">${textNode}</a>`
  return result;
}

const liTags = (children : string) : string => {
  let result = `<li>${children}</li>`;
  return result;
}

interface BasicData {
  jaemin : "재민",
  hoyoung : "호영",
  yujin : "유진",
  jiyoon : "지윤"
}

const basicData : BasicData = {
  jaemin : "재민",
  hoyoung : "호영",
  yujin : "유진",
  jiyoon : "지윤"
}

const totalElement = (obj : BasicData) : string => {
  let result = '';
  for (let key in obj) {
    // TypeScript가 key가 BasicData의 키인 것을 알게 함
    const value = obj[key as keyof BasicData];
    result += liTags(anchorTags(key, value));
  }
  return result;
}

root.innerHTML = `
  <ul>
    <li>${totalElement(basicData)}</li>
  </ul>
  <main id="main-target"></main>
`;

// * --------------------------------- 
// * HTML을 대신해서 만든 HTML 작성 코드
// * React, CSR

const mainTarget = document.getElementById("main-target")!;
console.log(window.location.hash);