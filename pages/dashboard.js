import Link from "next/link";
import profile from "../public/profile.png";
import classes from "../styles/cssModules/dashboard.module.scss";
export default function Dashboard() {
  return (
    <div className={`container ${classes.dashboard}`}>
      <div>
        <img className={classes.profile} src="/profile.png" alt="profile" />
      </div>
      <div className={classes.services}>
        <Link className={classes.links} href="classroom">Class Room</Link>
        <Link className={classes.links} href="accounts">Account Section</Link>
        <Link className={classes.links} href="events">Events</Link>
        <Link className={classes.links} href="liberary">Liberary</Link>
        <Link className={classes.links} href="job-alert">Jobs Alert</Link>
      </div>
    </div>
  );
}
