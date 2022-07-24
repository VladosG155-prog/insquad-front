import React from 'react';
import { EducationCard } from './EducationCard/EducationCard';
import styles from './EducationSection.module.scss';
const EducationSection = () => {
	const educations = [
		{
			id: 1,
			vacancy: 'Computer science',
			place: 'Boston Academy',
			date: { first: '2 years 2 month', second: 'June 2019 - October 2021' },
		},
		{
			id: 2,
			vacancy: 'Computer science',
			place: 'Boston Academy',
			date: { first: '2 years 2 month', second: 'June 2019 - October 2021' },
		},
	];

	return (
		<div className={styles.root}>
			{educations.map((obj) => (
				<EducationCard vacancy={obj.vacancy} key={obj.id} place={obj.place} date={obj.date} />
			))}
		</div>
	);
};

export default EducationSection;
