const root = document.getElementById('root')!;

const anchorTags = () => {
  let result = `<a href="#">메뉴</a>`
  return result;
}

const liTags = () => {
  let result = '<li>목록</li>';
  return result;
}

root.innerHTML = `
  <ul>
    <li>${liTags()}</li>
  </ul>
`;