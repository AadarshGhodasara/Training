import styles from "../styles/hello_next_js.module.css";
import Header from "../component/Header";
export function hello_next_js({ todos }) {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <h1>Fetch DATA in Next JS</h1>
        <div className={styles.userTag}>
          {todos.map((user) => {
            return (
              <div key={user.name} className={styles.detailsTag}>
                <p> {user.id} </p>
                <p> {user.name} </p>
                <p> {user.email} </p>
                <p> {user.phone} </p>
                <p> {user.website} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const apiResponse = await fetch("https://jsonplaceholder.typicode.com/users");
  let todos = await apiResponse.json();
  console.log("todos.length=>", todos.length);
  if (!todos.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      todos,
    },
  };
};

export default hello_next_js;
