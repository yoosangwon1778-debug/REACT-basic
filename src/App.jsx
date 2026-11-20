import PostItem from "./components/PostItem";
import Button from "./components/Button";

export default function App() {
  const posts = [
    { id: 1, title: "React 시작하기", author: "홍길동" },
    { id: 2, title: "JS 문법 정리", author: "김철수" },
    { id: 3, title: "CSS 레이아웃", author: "이영희" },
  ];

  return (
    <div>
      <h1>게시글</h1>
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}

      <Button text={'메일'} color={'red'} />
      <Button text={'카페'} color={'blue'} />
      <Button text={'블로그'} color={'orange'} />
      <Button text={'기본값 설정'} />
      <Button text={'자식요소 설정'} color={'pink'}>
        <strong>중요</strong>
      </Button>
    </div>
  );
}
