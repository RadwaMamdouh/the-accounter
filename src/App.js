import { PrimeReactProvider } from "primereact/api";
import "./App.css";
import AppRouter from "routes";

function App() {
	const value = {
		ripple: true,
	};

	return (
		<PrimeReactProvider value={value}>
			<AppRouter />
		</PrimeReactProvider>
	);
}

export default App;
