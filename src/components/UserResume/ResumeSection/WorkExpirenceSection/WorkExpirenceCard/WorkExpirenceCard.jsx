import React from 'react';
import styles from './WorkExpirenceCard.module.scss';
import { Icon } from '../../../../UI/Icon';
export const WorkExpirenceCard = ({ vacancy, place, date, description, sections }) => {
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
			<p className={styles.description}>{description}</p>
			{sections.map((section) => (
				<div className={styles.section} key={section.title}>
					<p>{section.title}</p>
					<div className={styles.wrap}>
						{section.items.map((item, index) => (
							<span key={`${item.title}}-${index}`}>
								<Icon name={item.image} />
								{item.title}
							</span>
						))}
					</div>
				</div>
			))}
		</div>
	);
};
