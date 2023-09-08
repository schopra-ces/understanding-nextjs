import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from '../../styles/utils.module.css';

//Static-site generatiion: data is stored in CDN at build time
export async function getStaticProps(){
  //dummy data
  type Props = {
    id: number,
    desc: string,
    date: string,
    title: string,
  }
  const allPostsData : Props[] = [
    {
      id: 1,
      desc: 'This has been posted a long time ago',
      date: '23/7/2019',
      title: 'Food Post'
    },
    {
      id: 2,
      desc: 'Become a master in blogging',
      date: '15/8/2020',
      title: 'Learn blogging'
    }
  ]
  return {
    props: {
      allPostsData
    }
  }
}

export default function FirstPost({allPostsData}) {
  return (
    <>
      <Layout home={undefined}>
        <Head>
          <title>SSG Post</title>
        </Head>
        
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h4 className={utilStyles.headingLg}>List of all blogs (rendered using SSG)</h4>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, desc, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {desc}
              <br />
              {date}
            </li>
          ))}
        </ul>
        </section>
      </Layout>
    </>
  );
}
