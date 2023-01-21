import classes from "../styles/cssModules/login.module.scss";
import { useRouter } from 'next/router'

export default function login() {

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="container center">
      <form action="" onSubmit={handleSubmit} className={`${classes.form}`}>
        <div className={classes.row}>
          <label htmlFor="rollno">Enrollment no : </label>
          <input
            id="rollno"
            className={classes.search__input}
            placeholder=""
            type="text"
          />
        </div>
        <div className={classes.row}>
          <label htmlFor="password">Password : </label>
          <input
            id="password"
            className={classes.search__input}
            placeholder=""
            type="password"
          />
        </div>
        <div className={classes.row}>
          <button className={classes.submit_btn} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
