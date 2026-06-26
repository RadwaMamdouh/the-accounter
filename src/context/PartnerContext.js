import { createContext, useContext, useState } from "react";

const PartnerContext = createContext();

export function PartnerProvider({ children }) {
	const [partner, setPartner] = useState(null);

	return (
		<PartnerContext.Provider value={{ partner, setPartner }}>
			{children}
		</PartnerContext.Provider>
	);
}

export function usePartner() {
	return useContext(PartnerContext);
}
