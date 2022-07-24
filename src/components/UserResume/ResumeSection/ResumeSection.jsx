import React from 'react';
import { Icon } from '../../UI/Icon';
import styles from './ResumeSection.module.scss';
export const ResumeSection = ({ iconName, title, element }) => {
	return (
		<div className={styles.root}>
			<div className={styles.start}>
				<Icon name={iconName} />
				<h3>{title}</h3>
			</div>
			{element}
		</div>
	);
};
