import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          (This is a sample website. Please{" "}
          <Link href="/posts/first-post">click here</Link>{" "}
          {"to navigate to next page"})
        </p>
      </section>
    </Layout>
  );
}
