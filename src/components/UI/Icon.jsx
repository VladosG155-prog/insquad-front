import React from 'react';
import { Icons } from '../../Icons.js';
export const Icon = ({ name }) => {
	return <i dangerouslySetInnerHTML={{ __html: Icons[name] }}></i>;
};
