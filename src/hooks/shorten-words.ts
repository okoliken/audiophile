export const useShortner = () => {
    function shortenProductName(name: string) {
        // Define the words you want to remove from the end
        const wordsToRemove = ["Headphones", "SPEAKER", "WIRELESS EARPHONES"];
      
        // Iterate through each word to remove
        for (let word of wordsToRemove) {
          if (name.endsWith(word)) {
            return name.slice(0, -word.length).trim();
          }
        }
      
        // If the name doesn't end with any of the words, return it as is
        return name;
      }

      return {
        shortenProductName
      }
}