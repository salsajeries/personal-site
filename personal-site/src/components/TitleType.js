import Typewriter from 'typewriter-effect';

// Generate typing effect for titles
function TitleType(props) {
    return (
        <div style={{fontSize: '65px'}}>
            <Typewriter
                options={{
                    delay: 150
                }}
                onInit={(typewriter) => {
                    typewriter.typeString(props.title).start();
                }}
            />
        </div>
    );
}

export default TitleType;