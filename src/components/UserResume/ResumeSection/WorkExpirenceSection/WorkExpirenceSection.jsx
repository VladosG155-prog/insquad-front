import React from 'react';
import { WorkExpirenceCard } from './WorkExpirenceCard/WorkExpirenceCard';
import styles from './WorkExpirenceSection.module.scss';
const WorkExpirenceSection = () => {
	const workExpirence = [
		{
			id: 1,
			vacancy: 'Senior Frontend Developer',
			place: 'Sberbank',
			date: { first: '2 years 2 month', second: 'June 2019 - October 2021 ' },
			description:
				'Imperdiet tellus neque nunc, etiam vitae risus quis semper. Tempus egestas mauris fringilla iaculis feugiat tincidunt auctor tellus. Faucibus enim condimentum est adipiscing varius id fermentum tincidunt nisl. Aliquam.  Tempus egestas mauris fringilla iaculis feugiat tincidunt auctor tellus. Faucibus enim condimentum est adipiscing varius id fermentum tincidunt nisl. Aliquam.',
			sections: [
				{
					title: 'Languages',
					items: [
						{ title: 'Java Script', image: 'js' },
						{ title: 'Java Sping', image: 'spring' },
					],
				},
				{
					title: 'Technologies',
					items: [
						{ title: 'React', image: 'React' },
						{ title: 'Node.js', image: 'Noda' },
					],
				},
			],
		},
		{
			id: 2,
			vacancy: 'Senior Frontend Developer',
			place: 'Sberbank',
			date: { first: '2 years 2 month', second: 'June 2019 - October 2021 ' },
			description:
				'Imperdiet tellus neque nunc, etiam vitae risus quis semper. Tempus egestas mauris fringilla iaculis feugiat tincidunt auctor tellus. Faucibus enim condimentum est adipiscing varius id fermentum tincidunt nisl. Aliquam.  Tempus egestas mauris fringilla iaculis feugiat tincidunt auctor tellus. Faucibus enim condimentum est adipiscing varius id fermentum tincidunt nisl. Aliquam.',
			sections: [
				{
					title: 'Languages',
					items: [
						{ title: 'Java Script', image: 'js' },
						{ title: 'Java Sping', image: 'spring' },
					],
				},
				{
					title: 'Technologies',
					items: [
						{ title: 'React', image: 'React' },
						{ title: 'Node.js', image: 'Noda' },
					],
				},
			],
		},
	];

	return (
		<div className={styles.root}>
			{workExpirence.map((obj) => (
				<WorkExpirenceCard
					key={obj.id}
					vacancy={obj.vacancy}
					place={obj.place}
					date={obj.date}
					description={obj.description}
					sections={obj.sections}
				/>
			))}
		</div>
	);
};
export default WorkExpirenceSection;
