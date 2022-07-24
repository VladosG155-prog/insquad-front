import React from 'react';
import { Icon } from '../../../UI/Icon';
import { Tooltip } from '../../../UI/Tooltip/Tooltip';
import styles from './CurrentStackSection.module.scss';
const CurrentStackSection = () => {
	const sections = [
		{
			title: 'Languages',
			items: [
				{
					title: 'Java Script',
					image: 'js',
				},
				{
					title: 'Java Script',
					image: 'js',
				},
				{
					title: 'Java Script',
					image: 'js',
				},
				{
					title: 'Java Script',
					image: 'js',
				},
				{
					title: 'Java Script',
					image: 'js',
				},
			],
		},
		{
			title: 'Technologies',
			items: [
				{ title: 'React', image: 'React' },
				{ title: 'React', image: 'React' },
			],
		},
	];

	const dopSkills = ['Redux', 'Azure'];

	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<div className="d-flex">
					<h3 className={styles.title}>Current stack</h3>
					<Tooltip title="example tooltip" />
				</div>
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
				<div className="d-flex">
					<h3 className={styles.title}>Has experience in</h3>
					<Tooltip title="example tooltip" />
				</div>
				<div className={styles.wrapExp}>
					{dopSkills.map((item) => (
						<span key={item}>{item}</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default CurrentStackSection;
