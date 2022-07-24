import React from 'react';
import styles from './Button.module.scss';
export const Button = ({ children, outlined, size }) => {
	const styleButton = outlined ? styles.outlined : styles.filled;
	return (
		<button data-size={size} className={[styles.button, styleButton].join(' ')}>
			{children}
		</button>
	);
};
