import './tabPage.css'
import {useState} from "react";

export const TabPages = () => {
    const [activeTab, setActiveTab] = useState('tab-1');

    const handleTabChange = (index) => {
        setActiveTab(index.target.id);
    }
    return (
        <>
            <div className="main-container">
                <div className="container-btn">
                    <button
                        id="tab-1"
                        onClick={handleTabChange}
                        className={`btn-tab ${activeTab === 'tab-1' ? 'activeBtnTab' : ''}`}>
                        tab1
                    </button>
                    <button
                        id="tab-2"
                        onClick={handleTabChange}
                        className={`btn-tab ${activeTab === 'tab-2' ? 'activeBtnTab' : ''}`}>
                        tab2
                    </button>
                </div>
                <div className="containerTabs">
                    <div className={`tab-page ${activeTab === 'tab-1' ? 'activeTab' : ''}`}>Cambio de pestañas simple</div>
                    <div className={`tab-page ${activeTab === 'tab-2' ? 'activeTab' : ''}`}>Tab2</div>
                </div>
            </div>
        </>
    );
}


export const ReusableTabPages = ({tabNames, children}) => {
    const [activeTab, setActiveTab] = useState(tabNames[0]);
    const handleTabChange = (index) => {
        setActiveTab(index.target.id);
    }
    return (
        <>
            <div className="main-container">
                <div className="container-btn">
                    {tabNames.map((tabName, index) => (
                        <button
                            key={index}
                            id={tabName}
                            onClick={handleTabChange}
                            className={`btn-tab ${activeTab === tabName ? 'activeBtnTab' : ''}`}>
                            {tabName}
                        </button>
                    ))}
                </div>
                <div className="containerTabs">
                    {tabNames.map((tabName, index) => (
                        <div key={index} className={`tab-page ${activeTab === tabName ? 'activeTab' : ''}`}>{children[index]}</div>
                    ))}
                </div>
            </div>
        </>
    );
};

