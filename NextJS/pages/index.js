import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "../component/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPost } from "../store/action/postAction";
export default function Home() {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => {
    return state.post;
  });
  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <h1>Welcome Next JS</h1>
        {Object.values(post).length &&
          post.map((item) => <h1 key={item}>{item}</h1>)}
      </div>
    </div>
  );
}
