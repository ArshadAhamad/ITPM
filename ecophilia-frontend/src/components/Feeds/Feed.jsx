import Post from "../Posts/Posts";
import Share from "../Share/Share";
import "./Feed.css";
import { Posts } from "../../Dummydata";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}