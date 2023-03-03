export default function BoilingVerdict({celsius = 0}) {
    if (celsius >= 100) {
        return <p>Boil</p>;
    }
    return <p>Not Boil</p>;
}
