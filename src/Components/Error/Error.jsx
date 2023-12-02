import { Link } from "react-router-dom";
import "./Error.css";

export default function Error() {
  return (
    <div className="error-wrap">
      <h2>আপনি ভুল রাস্তায় আসছেন ভাই !</h2>
      <h4>
        <Link to="">আসেন আপনাকে বাড়িতে পৌঁছে দেই</Link>
      </h4>
    </div>
  );
}
