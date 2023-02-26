import {ReactComponent as Play} from "../../starter_files/images/icon-play.svg";

export const Phonetic = ({ result }) => {

    const playSound = () => {
        const audio = new Audio(result.phonetics.find(phonetic => phonetic.audio.length > 0)?.audio);
        audio.play();
    }

    const phonetic = result.phonetic || result.phonetics.find(phonetic => phonetic.text)?.text;

    return (
        <>
            <div className="phoneticWrapper">
                <div className='wordText'>
                    <span className="mainWord">{result.word}</span>
                    <span className="phonetic">{phonetic}</span>
                </div>
                <div className='wordAudio'>
                    <button className="playButton">
                        <Play onClick={playSound} />
                    </button>
                </div>
            </div>
        </>
    )
}