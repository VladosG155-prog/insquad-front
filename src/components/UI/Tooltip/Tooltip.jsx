import React from 'react';
import ReactTooltip from 'react-tooltip';
import { Icon } from '../Icon';
export const Tooltip = ({ title }) => {
	return (
		<div style={{ display: 'inline-block' }}>
			<p data-tip={title}>
				<Icon name="tooltip" />
			</p>
			<ReactTooltip />
		</div>
	);
};
