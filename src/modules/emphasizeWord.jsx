export default function emphasizeWord(textData) {
    const text = textData.text;
    const spans = textData.spans;

    const characters = text.split('');

    const wrappedCharacters = characters.map((char, index) => {
        const matchingIndex = spans.find(({ start, end }) => index >= start && index <= end);
        if (matchingIndex) {
            return <span className="text-secondaryColor" key={index}>{char}</span>;
        }

        return char;
    });

    return <>{wrappedCharacters}</>;
}