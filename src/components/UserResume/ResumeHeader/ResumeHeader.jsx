import React from 'react';
import { Button } from '../../UI/Button/Button';
import { Icon } from '../../UI/Icon';
import styles from './ResumeHeader.module.scss';
import { useMediaQuery } from 'react-responsive';
export const ResumeHeader = ({ image, user, params, description }) => {
	const isTablet = useMediaQuery({ query: '(max-width: 1100px)' });

	return (
		<div className={styles.header}>
			<div className={styles.infoWrapper}>
				<img src={image} alt="" />
				<div className={styles.info}>
					<div className={styles.infoHeader}>
						<div className={styles.userInfo}>
							<h2>{`${user.firstName} ${user.lastName}`}</h2>
							<p>{user.vacancy}</p>
						</div>
						{!isTablet && (
							<div className={styles.buttons}>
								<Button outlined={true} size="small">
									<Icon name="iconShare" />
									<span>Share</span>
								</Button>
								<Button outlined={false} size="medium">
									<span>Book a call</span>
								</Button>
							</div>
						)}
					</div>
					<div className={styles.params}>
						{params.map((param) => (
							<p key={param.name} className={styles.param}>
								<Icon name={param.name} />
								<span>{param.info}</span>
							</p>
						))}
					</div>
					<p className={styles.description}>{description}</p>
					{isTablet && (
						<div className={styles.buttons}>
							<Button outlined={true} size="small">
								<Icon name="iconShare" />
								<span>Share</span>
							</Button>
							<Button outlined={false} size="medium">
								<span>Book a call</span>
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
