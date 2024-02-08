import Link from "next/link";
import styles from "./page.module.css";

export default function Example() {
  return (
    <main>
      <h1>Example</h1>
      <p>
        <Link href="/example/more">Show more</Link>
      </p>
    </main>
  );
}
