const root = document.getElementById('root')!;

const liTags = () => {
  let result = '<li>목록</li>';
  return result;
}

root.innerHTML = `
  <ul>
    <li>${liTags()}</li>
  </ul>
`;