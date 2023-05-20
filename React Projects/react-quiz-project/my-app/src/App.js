import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";

function App() {
	return (
		<div className="app">
			<Counter
				render={(counter, incrementCount) => (
					<ClickCounter counter={counter} incrementCount={incrementCount} />
				)}
			/>
			<Counter
				render={(counter, incrementCount) => (
					<HoverCounter counter={counter} incrementCount={incrementCount} />
				)}
			/>
		</div>
	);
}

export default App;
