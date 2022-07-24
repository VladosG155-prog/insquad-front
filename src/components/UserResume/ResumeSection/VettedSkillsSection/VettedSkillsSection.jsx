import React from 'react';
import styles from './VettedSkillsSection.module.scss';
import { Tooltip } from '../../../UI/Tooltip/Tooltip';
import { SkillCard } from './SkillCard/SkillCard';
const VettedSkillsSection = () => {
	const skills = [
		{
			skillName: 'React',
			skillRate: 4.8,
			isVetted: true,
			otherSkills: [
				{
					name: 'Quiz',
					skills: [
						{ name: 'DOM', rate: 4.5 },
						{ name: 'HTML', rate: 4.2 },
						{ name: 'CSS', rate: 4 },
						{ name: 'JavaScript', rate: 3 },
						{ name: 'React Components', rate: 3.5 },
					],
				},
				{
					name: 'Coding Challenge',
					skills: [
						{ name: 'Sorting algorithm', rate: 4.5 },
						{ name: 'Strings and arrays', rate: 4.2 },
						{ name: 'Complexity', rate: 4 },
					],
				},
			],
		},
		{
			skillName: 'React-2',
			skillRate: 4.2,
			isVetted: true,
			otherSkills: [
				{
					name: 'Quiz',
					skills: [
						{ name: 'DOM', rate: 1.5 },
						{ name: 'HTML', rate: 2.2 },
						{ name: 'CSS', rate: 3.4 },
						{ name: 'JavaScript', rate: 5 },
						{ name: 'React Components', rate: 4.5 },
					],
				},
				{
					name: 'Coding Challenge',
					skills: [
						{ name: 'Sorting algorithm', rate: 4.5 },
						{ name: 'Strings and arrays', rate: 4.2 },
						{ name: 'Complexity', rate: 3 },
					],
				},
			],
		},
	];

	return (
		<div className={styles.root}>
			<h4>This developer passed 3+ hours of rigorous for the following skills</h4>
			<div className={styles.question}>
				<Tooltip title="test tooltip" />
				<p>What is a Vetted skill? Learn more about our skill assessment methodology </p>
			</div>
			{skills.map((skill) => (
				<SkillCard
					key={skill.skillName}
					skillName={skill.skillName}
					skillRate={skill.skillRate}
					isVetted={skill.isVetted}
					otherSkills={skill.otherSkills}
				/>
			))}
		</div>
	);
};

export default VettedSkillsSection;
