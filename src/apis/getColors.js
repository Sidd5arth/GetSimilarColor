import { toast } from "react-hot-toast";
export async function getColors() {
    try {
        const response = await fetch(
            "https://raw.githubusercontent.com/NishantChandla/color-test-resources/main/xkcd-colors.json",
            {
                method: "GET",
                cache: "no-cache",
            },
        );

        if (!response.ok) {
            throw new Error("error in getting profiles");
        }
        console.log(response);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        toast.error("Error fetching Colors");
        throw error;
    }
}
