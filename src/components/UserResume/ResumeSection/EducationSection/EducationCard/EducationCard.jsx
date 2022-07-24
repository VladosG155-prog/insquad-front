import React from 'react';
import styles from './EducationCard.module.scss';
import { Icon } from '../../../../UI/Icon';
export const EducationCard = ({ vacancy, place, date }) => {
	return (
		<div className={styles.root}>
			<h3 className={styles.title}>{vacancy}</h3>
			<p className={styles.subtitle}>{place}</p>
			<div className={styles.date}>
				<Icon name="time" />
				{date.first}
				<span>|</span>
				{date.second}
			</div>
		</div>
	);
};
