import { HashLoader } from "react-spinners";
import useFetch from "../CustomHook/useFetch";
import "./Posts.css";

export default function Posts() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");
  return (
    <>
      <h1>Posts</h1>
      <div className="posts">
        {data ? (
          data.slice(1, 13).map((item) => (
            <div className="post" key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
          ))
        ) : (
          <div className="loader-wrap">
            <HashLoader color="#36d7b7" />
          </div>
        )}
      </div>
    </>
  );
}
