import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Pleasure from '../Pages/PleasurePage/Pleasure';
import FooterNavBar from '../FooterNavBar/FooterNavBar';
import HeaderNavBar from '../HeaderNavBar/HeaderNavBar';
import MainPage from '../Pages/MainPage/MainPage';
import CoffeePage from '../Pages/CoffeePage/CoffeePage';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Hamburger from '../Hamburger/Hamburger';

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
		{ id: 4, src: Aromisto, src1: BigAromisto, target: 'aromisto', value: Aromisto, item: 'AROMISTICO Coffee 1 kg', price: '6.99$', price1: '6.99$', made: 'Brazil', category: 'general', href: '#aromistico', adress: 'aromistico' },
		{ id: 5, src: Solimo, src1: BigSolimo, target: 'solimo', value: Solimo, item: 'SOLIMO Coffee Beans 2 kg', price: '10.73$', price1: '10.73$', made: 'Kenya', category: 'general', href: '#solimo', adress: 'solimo' },
		{ id: 6, src: Presto, src1: BigPresto, target: 'presto', value: Presto, item: 'PRESTO Coffee Beans 1 kg', price: '115.99$', price1: '115.99$', made: 'Columbia', category: 'general', href: '#presto', adress: 'presto' },
		{ id: 7, src: Arabika, src1: BigArabika, target: 'arabika', value: Arabika, item: 'ARABIKA Coffee Beans 1 kg', price: '15.99$', price1: '15.99$', made: 'Kenya', category: 'general', href: '#arabika', adress: 'arabika' },
		{ id: 8, src: AltaRoma, src1: BigAltaRoma, target: 'altaroma', value: AltaRoma, item: 'ALTA ROMA Coffee 1 kg', price: '12.59$', price1: '12.59$', made: 'Brazil', category: 'general', href: '#altaroma', adress: 'altaroma' },
		{ id: 9, src: Egoiste, src1: BigEgoist, target: 'egoiste', value: Egoiste, item: 'EGOISTE Coffee Beans 1 kg', price: '100.99$', price1: '100.99$', made: 'Columbia', category: 'general', href: '#egoiste', adress: 'egoiste' }
	]

	const [blockVisible, SetBlockVisible] = useState(false);
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

	const [filteredItems, setFilteredItems] = useState(chooseProducts);

	const onFilterChange = (target) => {
		const filtered = items.filter((item) => item.target === target);
		setFilteredItems(filtered);
	};

	const defoltChooseCoffee = () => {
		if (!blockVisible) {
			SetBlockVisible(blockVisible)
		} else {
			SetBlockVisible(!blockVisible)
		}
	}

	return (
		<Router>
			<div className='app'>
				<HeaderNavBar navActive={state} setNavActive={setState} defoltChooseCoffee={defoltChooseCoffee} />
				<HamburgerMenu menuActive={state} setMenuActive={setState} defoltChooseCoffee={defoltChooseCoffee} />
				<Hamburger menuActive={state} setMenuActive={setState} />
				<Switch>
					<Route exact path='/'>
						<MainPage bestCoffee={filteredBestItems} />
					</Route>
					<Route exact path='/ourcoffee'>
						<CoffeePage itemadd={filteredItems} onFilterChange={onFilterChange} onChainge={inputTexttoFilter} chooseProducts={chooseProducts} errorMessage={errorMessage} setErrorMessage={setErrorMessage} inputValue={inputValue} setInputValue={setInputValue} blockVisible={blockVisible} SetBlockVisible={SetBlockVisible} />
					</Route>
					<Route exact path='/pleasure'>
						<Pleasure itemadd={filteredItems} onFilterChange={onFilterChange} chooseProducts={chooseProducts} blockVisible={blockVisible} SetBlockVisible={SetBlockVisible} />
					</Route>
				</Switch>
				<FooterNavBar defoltChooseCoffee={defoltChooseCoffee} />
			</div>
		</Router>
	);
}

export default App;
