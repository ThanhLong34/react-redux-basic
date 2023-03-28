import { useState } from "react";
import styles from "./Home.module.css";
import JobList from "../../components/JobList/JobList";

function Home() {
	const jobList = ["Job 1", "Job 2", "Job 3"];
	const [jobName, setJobName] = useState('');

	const handleChangeJobName = (e) => {
		setJobName(e.target.value);
	}

	const handleAddJob = () => {
		console.log(jobName);
	};

	return (
		<div className={styles.wrapper}>
			<h1 className="page-title">JOB LIST</h1>
			<JobList jobList={jobList} />

			{/* Add job */}
			<label className={styles.label} htmlFor="jobName">
				Job name:
			</label>
			<input id="jobName" className={styles.input} type="text" value={jobName} onChange={handleChangeJobName} />
			<button onClick={handleAddJob}>Add job</button>
		</div>
	);
}

export default Home;
