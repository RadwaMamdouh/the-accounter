import { createClient } from "@sanity/client";

export const sanityClient = createClient({
	projectId: "n9ecac27",
	dataset: "production",
	apiVersion: "2025-02-19",
	useCdn: true, // true للقراءة فقط (أسرع)
});
