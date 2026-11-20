export default function PostItem({ title, author }) {
  return (
    <div>
      <h3 onClick={() => console.log(title)}>{title}</h3>
      <p>{author}</p>
    </div>
  );
}
