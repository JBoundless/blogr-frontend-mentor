import React from 'react';
import './style.css';
import Showcase from './components/Showcase';
import Header from './components/Header';
import Designed from './components/Designed';
import Free from './components/Free';
import Footer from './components/Footer';
import State from './components/State';

export default function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Designed />
      <State />
      <Free />
      <Footer />
    </>
  );
}
