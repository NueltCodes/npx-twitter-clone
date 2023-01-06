import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widget from "../components/Widget";
import { async } from "@firebase/util";
import { getProviders, getSession, useSession } from "next-auth/react";
import Login from "../components/Login";
import Modal from "../components/Modal";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

export default function Home({ newsResults, randomUsersResults, providers }) {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  if (!session) return <Login providers={providers} />;

  return (
    <>
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen bg-black max-w-[1500px]">
        <Sidebar />
        <Feed newsResults={newsResults.articles} />
        <Widget
          newsResults={newsResults.articles}
          randomUsersResults={randomUsersResults?.results || null}
        />
        {isOpen && <Modal />}
      </main>{" "}
    </>
  );
}

export async function getServerSideProps(context) {
  const newsResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  ).then((res) => res.json());
  // Who to follow section
  let randomUsersResults = [];

  try {
    const res = await fetch(
      "https://randomuser.me/api/?results=30&inc=name,login,picture"
    );

    randomUsersResults = await res.json();
  } catch (e) {
    randomUsersResults = [];
  }

  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      newsResults,
      randomUsersResults,
      providers,
      session,
    },
  };
}

// https://saurav.tech/NewsAPI/top-headlines/category/business/us.json
