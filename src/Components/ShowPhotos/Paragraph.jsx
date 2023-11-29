import useFetch from "../CustomHook/useFetch";

export default function Paragraph() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
      {data && data.slice(1, 2).map((item) => <p key={item.id}>{item.body}</p>)}
    </>
  );
}
