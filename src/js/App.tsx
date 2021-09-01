import React, {useState} from "react";
import logo from "../assets/images/logo.svg";
import * as eel from "./eel/eel";

const App:React.FC = () => {
    const [imgUrl, setImgURL] = useState<string>('');
    const [error, setError] = useState<string>('');
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to Eel React</h1>
            </header>
            <p className="App-intro">
                <button onClick={async () => {
                    var response = await eel.getRandomImage();
                    if(response.error){
                        setError(response.error)
                        setImgURL('')
                    }
                    else{
                        setError('')
                        setImgURL(response.data)
                    }
                }}>Load Image from Eel</button>
            </p>
            {error &&
                <p>Server Error: {error}</p>
            }
            {imgUrl &&
                <>
                    <div>
                        <img src={imgUrl} alt={''}/>
                    </div>
                    <a href={imgUrl} download>Save Image</a>
                    <p>Img URL: {imgUrl}</p>
                </>
            }
        </div>
    );
}
export default App;