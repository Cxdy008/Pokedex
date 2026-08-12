export function cleanInput(input: string): string[] {
    const cleanedInput = input.trim().split(" ").map((line) => line.toLocaleLowerCase());
    const filteredInput = cleanedInput.filter((line) => line !== "");
    return filteredInput;
}