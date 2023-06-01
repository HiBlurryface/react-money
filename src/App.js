import styles from 'assets/styles/Main.module.scss';
import 'assets/styles/reset.scss'
import 'assets/styles/fonts.scss'
import Category from 'components/UI/category/Category';
import Header from 'components/ordinary/header/Header';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Expenses from 'components/smart/expenses/Expenses';
import Gains from 'components/smart/gains/Gains';

function App() {
  const [mode, setMode] = useState('expenses');
  return <>
    <Header />
    {mode === 'expenses' && <Expenses setMode={setMode}/>}
    {mode === 'gains' && <Gains setMode={setMode}/>}
  </>
}

export default App;