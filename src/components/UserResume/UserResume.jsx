import React from 'react';
import styles from './UserResume.module.scss';
import userImage from '../../assets/images/userImage.png';
import { ResumeHeader } from './ResumeHeader/ResumeHeader';
import { ResumeSection } from './ResumeSection/ResumeSection';
import {
	CurrentStackSection,
	VettedSkillsSection,
	WorkExpirenceSection,
	EducationSection,
} from './index';
import { Button } from '../UI/Button/Button';
export const UserResume = () => {
	const sections = [
		{
			title: 'Technologies stack',
			iconName: 'stack',
			element: <CurrentStackSection />,
		},
		{
			title: 'Vetted Skills',
			iconName: 'medal',
			element: <VettedSkillsSection />,
		},
		{
			title: 'Work Experience',
			iconName: 'bag',
			element: <WorkExpirenceSection />,
		},
		{
			title: 'Education',
			iconName: 'educations',
			element: <EducationSection />,
		},
	];

	return (
		<div className={styles.root}>
			<ResumeHeader
				image={userImage}
				user={{ firstName: 'Ivan', lastName: 'Ivanov', vacancy: 'Senior Frontend Developer' }}
				params={[
					{ name: 'expirience', info: '6 years - total work experience' },
					{ name: 'timezone', info: 'Overlap with your time zone: XX am - XX pm' },
					{ name: 'availability', info: 'Availability: Ready to start now' },
					{ name: 'fullTime', info: 'Full time - 40 hours per week' },
				]}
				description="Imperdiet tellus neque nunc, etiam vitae risus quis semper. Tempus egestas mauris fringilla iaculis feugiat tincidunt auctor tellus. Faucibus enim condimentum est adipiscing varius id fermentum tincidunt nisl. Aliquam. Faucibus enim condimentum est adipiscing varius id fermentum tincidunt nisl. Aliquam. Faucibus enim condimentum est adipiscing varius id fermentum tincidunt nisl. Aliquam."
			/>
			{sections.map((section) => (
				<ResumeSection
					key={section.title}
					iconName={section.iconName}
					title={section.title}
					element={section.element}
				/>
			))}
			<div className={styles.banner}>
				<h2>Would you like to schedule an interview with Ivan Ivanov?</h2>
				<Button size="medium">Book a call</Button>
			</div>
		</div>
	);
};
