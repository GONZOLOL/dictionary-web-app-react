import {ReactComponent as Play} from "../../starter_files/images/icon-play.svg";

export const Phonetic = ({ result }) => {

    const playSound = () => {
        const audio = new Audio(result.phonetics.find(phonetic => phonetic.audio.length > 0)?.audio);
        audio.play();
    }

    const phonetic = result.phonetic || result.phonetics.find(phonetic => phonetic.text)?.text;

    return (
        <>
            <div>
                <div className='wordText'>
                    <span>{result.word}</span>
                    <span>{phonetic}</span>
                </div>
                <div className='wordAudio'>
                    <button>
                        <Play onClick={playSound} />
                    </button>
                </div>
            </div>
        </>
    )
}