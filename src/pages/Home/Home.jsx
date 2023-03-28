import styles from './Home.module.css';
import JobList from '../../components/JobList/JobList';

function Home() {
	const jobList = ['Job 1', 'Job 2', 'Job 3'];
	
	return (
		<div className={styles.wrapper}>
			<h1 className="page-title">Welcome to home page</h1>
			<JobList jobList={jobList} />
		</div>
	)
}

export default Home;
