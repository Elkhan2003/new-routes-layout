import scss from "./Feedback.module.scss";

const Feedback = () => {
	return (
		<section className={scss.Feedback}>
			<div className="container">
				<div className={scss.content}>
					<h3>Feedback</h3>
				</div>
			</div>
		</section>
	);
};

export default Feedback;
