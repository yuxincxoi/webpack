const root = document.getElementById('root') as HTMLDivElement;

const anchorTags = (href : string, textNode : string) : string => {
  let result = `<a href="${href}">${textNode}</a>`
  return result;
}

const liTags = (children : string) : string => {
  let result = `<li>${children}</li>`;
  return result;
}

const basicData = {
  jaemin : "재민",
  hoyoung : "호영",
  yujin : "유진",
  jiyoon : "지윤"
}

const totalElement = () => {
  let result = liTags(anchorTags("#yujin", "유진"));
  return result;
}

root.innerHTML = `
  <ul>
    <li>${totalElement()}</li>
  </ul>
`;