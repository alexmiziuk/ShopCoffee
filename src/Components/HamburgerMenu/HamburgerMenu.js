import React from 'react';
import { NavLink } from 'react-router-dom';
import './HamburgerMenu.scss'
import NavBeans from '../../Image/Icons/nav-beens.svg'

const HamburgerMenu = ({ menuActive, setMenuActive, SetBlockVisible, blockVisible }) => {
	const defoltChooseCoffee = () => {
		if (!blockVisible) {
			SetBlockVisible(blockVisible)
		} else {
			SetBlockVisible(!blockVisible)
	}
}
	return (
		<div className={menuActive ? 'layer active' : 'layer'}>
			<img src={NavBeans} alt="Coffee_beans" className="layer__beans" />
			{/* <img src={NavBeans} alt="Coffee_beans" className="layer__beans" />
			<img src={NavBeans} alt="Coffee_beans" className="layer__beans" /> */}
			<div className='layer__menu'>
				<div className="layer__box">
					<ul className="layer__items">
						<li className="layer__item"  onClick={() => defoltChooseCoffee()}>
							<NavLink exact activeStyle={{ 'fontWeight': '700' }} to='/' className="layer__link text-fz12" onClick={() => setMenuActive(false)}>
								Coffee house
							</NavLink>
						</li>
						<li className="layer__item" onClick={() => defoltChooseCoffee()}>
							< NavLink exact activeStyle={{ 'fontWeight': '700' }} to='/ourcoffee' className="layer__link text-fz12" onClick={() => setMenuActive(false)}>
								Our coffee
							</NavLink>
						</li>
						<li className="layer__item" onClick={() => defoltChooseCoffee()}>
							<NavLink exact activeStyle={{ 'fontWeight': '700' }} to='/pleasure' className="layer__link text-fz12" onClick={() => setMenuActive(false)}>
								For your pleasure
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div >

	);
};

export default HamburgerMenu;