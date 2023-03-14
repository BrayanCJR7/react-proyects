import {PatataIcon} from "../media/patataIcon";

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div>
                    <ul>
                        <li>Linkedin</li>
                        <li>Crunchbase</li>
                        <li>Hackernews</li>
                    </ul></div>
                <div className="copy">
                    <PatataIcon/>
                    <span className="copy--span">
                        ® Batatabit 2020
                    </span>
                </div>
            </footer>
        </>
    );
};

