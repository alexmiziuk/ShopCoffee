import { useState } from 'react';
import Pleasure from '../Pages/PleasurePage/Pleasure';
import FooterNavBar from '../FooterNavBar/FooterNavBar';
import HeaderNavBar from '../HeaderNavBar/HeaderNavBar';
import MainPage from '../Pages/MainPage/MainPage';
import CoffeePage from '../Pages/CoffeePage/CoffeePage';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Hamburger from '../Hamburger/Hamburger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Aromisto from '../../Image/Cards/Aromistico.jpg';
import Presto from '../../Image/Cards/Presto.jpg';
import Solimo from '../../Image/Cards/Solimo.jpg';
import Arabika from '../../Image/Cards/arabika.jpeg';
import AltaRoma from '../../Image/Cards/alta-roma.jpg';
import Egoiste from '../../Image/Cards/egoist.jpg';
import BigAromisto from '../../Image/BigCards/it-aromistico.jpg';
import BigSolimo from '../../Image/BigCards/abourItSolimo.jpg';
import BigPresto from '../../Image/BigCards/aboutItPresto.png';
import BigArabika from '../../Image/BigCards/AboutItArabika.jpg';
import BigAltaRoma from '../../Image/BigCards/aboutItAltaRoma.jpg';
import BigEgoist from '../../Image/BigCards/aboutItEgoist.jpg';

function App() {

	const items = [
		{ id: 1, src: Solimo, item: 'Solimo Coffee Beans 2 kg', price: '10.73$', category: 'best' },
		{ id: 2, src: Presto, item: 'Presto Coffee Beans 1 kg', price: '115.99$', category: 'best' },
		{ id: 3, src: Aromisto, item: 'AROMISTICO Coffee 1 kg', price: '6.99$', class: 'best__img best__img-resize', category: 'best' },
		{ id: 4, src: Aromisto, src1: BigAromisto, item:'AROMISTICO Coffee 1 kg', price:'6.99$', price1: '6.99$', made:'Brazil', category: 'general' },
		{ id: 5, src: Solimo, src1: BigSolimo, item:'SOLIMO Coffee Beans 2 kg', price:'10.73$', price1: '10.73$', made:'Kenya', category: 'general' },
		{ id: 6, src: Presto, src1: BigPresto, item:'PRESTO Coffee Beans 1 kg', price:'115.99$', price1: '115.99$', made:'Columbia', category: 'general' },
		{ id: 7, src: Arabika, src1: BigArabika, item:'ARABIKA Coffee Beans 1 kg', price:'15.99$', price1: '15.99$', made:'Kenya', category: 'general' },
		{ id: 8, src: AltaRoma, src1: BigAltaRoma, item:'ALTA ROMA Coffee 1 kg', price:'12.59$', price1: '12.59$', made:'Brazil', category: 'general' },
		{ id: 9, src: Egoiste, src1: BigEgoist, item:'EGOISTE Coffee Beans 1 kg', price:'100.99$', price1: '100.99$', made:'Columbia', category: 'general' }
	]

	const [state, setState] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const best = 'best';
	const filteredBestItems = items.filter((item) => Object.values(item).some((el) => el === best));

	const general = 'general';
	const filteredGeneralItems = items.filter((item) => Object.values(item).some((el) => el === general));

	const inputTexttoFilter = (inputValue) => {
		setInputValue(inputValue);
	}
	
	const chooseProducts = filteredGeneralItems.filter((item) => {
		return Object.values(item).some((value) => value.toString().toLowerCase().includes(inputValue))
	}); // фильтрация в filter, неважен регистр в input

	console.log(chooseProducts);


	return (
		<Router>
			<div className='app'>
				<HeaderNavBar navActive={state} setNavActive={setState} />
				<HamburgerMenu menuActive={state} setMenuActive={setState} />
				<Hamburger menuActive={state} setMenuActive={setState} />
				<Switch>
					<Route exact path='/'>
						<MainPage bestCoffee={filteredBestItems}  />
					</Route>
					<Route exact path='/ourcoffee'>
						<CoffeePage moreAbout={filteredGeneralItems} onChainge={inputTexttoFilter} chooseProducts={chooseProducts} errorMessage={errorMessage} setErrorMessage={setErrorMessage} inputValue={inputValue} setInputValue={setInputValue} />
					</Route>
					<Route exact path='/pleasure'>
						<Pleasure chooseProducts={chooseProducts} />
					</Route>
				</Switch>
				<FooterNavBar />
			</div>
		</Router>
	);
}

export default App;
