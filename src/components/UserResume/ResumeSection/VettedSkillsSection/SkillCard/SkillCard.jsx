import React from 'react';
import styles from './SkillCard.module.scss';
import { Icon } from '../../../../UI/Icon';
import { Stars } from '../../../../UI/Stars/Stars';
import { Button } from '../../../../UI/Button/Button';
import { useMediaQuery } from 'react-responsive';
export const SkillCard = ({ skillName, skillRate, isVetted, otherSkills }) => {
	const [isOpenBlock, setIsOpenBlock] = React.useState(false);

	const handleClick = () => {
		setIsOpenBlock((st) => !st);
	};

	const isTablet = useMediaQuery({ query: '(max-width: 1100px)' });

	return (
		<div className={styles.root}>
			{isVetted && (
				<div className={styles.lineDone}>
					<div className={styles.done}>
						<Icon name="done" />
					</div>
					<span></span>
				</div>
			)}
			<div className={styles.header}>
				<div className={styles.name}>
					<Icon name="React" />
					<h2>{skillName}</h2>
				</div>
				<div className={styles.next}>
					{!isTablet && (
						<div className={styles.stars}>
							<h5>{skillRate}</h5>
							<Stars rating={skillRate} name={skillName} />
						</div>
					)}

					<button onClick={handleClick}>
						<Icon name="angleDown" />
					</button>
				</div>
			</div>
			{isTablet && (
				<div className={styles.stars}>
					<h5>{skillRate}</h5>
					<Stars rating={skillRate} name={skillName} />
				</div>
			)}
			{isOpenBlock && (
				<div className={styles.open}>
					{otherSkills.map((obj) => (
						<div key={obj.skillName} className={styles.openBlock}>
							<div className={styles.blockFirst}>
								<h3>{obj.name}</h3>
								<Button outlined={true} size="big">
									<span>See {obj.name} results</span>
								</Button>
							</div>
							<div className={styles.lastBlock}>
								<p>Includes {obj.skills.length} questions on the following topics</p>
								{obj.skills.map((skill) => (
									<div key={skill.name} className={styles.skillBlock}>
										<span>{skill.name}</span>
										<div>
											<Stars name={`${skillName}+${skill.name}`} rating={skill.rate} />
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
