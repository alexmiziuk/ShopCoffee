import React from 'react';

import './Separator.scss';

import Beans from '../../Image/Icons/about-beens.svg'

const Separator = () => {
	return (
		<div className="separator">
						<div className="separator__line"></div>
						<div className='separator__beans'><img src={Beans} alt="" /></div>
						<div className="separator__line"></div>
					</div>
	);
};

export default Separator;