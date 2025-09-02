import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Facts from './components/Facts';
import Symptoms from './components/Symptoms';
import FactorsRisk from './components/FactorsRisk';
import SectionInfo from './components/SectionInfo';
import Coments from './components/Coments';
import SelfExam from './components/SelfExam';
import Treatment from './components/Treatment';
import ScreeningForm from './components/ScreeningForm';
import PolitcsPage from './pages/PolitcsPage';
import TreatmentHeader from './components/TreatmentHeader';
import ConsentModal from './components/ConsentModal';
import Clarity from '@microsoft/clarity';

function App() {
    const projectId = process.env.CLARITY_PROJECT_ID;

    useEffect(() => {
        Clarity.init(projectId);
    }, []);
    
    return (
        <div>
            <Routes>
                <Route path="/" element={
                    <>
                        <Header />
                        <div id="início"><Slider /></div>
                        <div id="conhecimento"><SectionInfo /></div>
                        <div id="dados"><Facts /></div>
                        <div id="sintomas"><Symptoms /></div>
                        <div id="autoexame"><SelfExam /></div>
                        <div id="formulario"><ScreeningForm /></div>
                        <div id="depoimentos"><Coments /></div>
                        <div id="fatoresderisco"><FactorsRisk /></div>
                        <div id="fatoresderisco"><Treatment /></div>
                        <div id="formulario"><ScreeningForm /></div>
                    </>
                } />

                <Route path="/politicas" element={
                    <>
                        <TreatmentHeader />
                        <PolitcsPage />
                    </>
                } />
            </Routes>

            <Footer />
            <ConsentModal />
        </div>
    );
}

export default App;
