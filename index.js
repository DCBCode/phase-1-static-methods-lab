class Formatter {
  static capitalize(string) {
    // First, we check if the string is empty
    if (string.length === 0) {
      return string;
    }

    // Capitalize the first letter of the string
    const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

    return capitalizedString;
  }

  static sanitize(string) {
    const sanitizedString = string.replace(/[^a-zA-Z0-9-' ]/g, '');

    return sanitizedString;
  }

  static titleize(string) {
    const words = string.split(" ");

    const titleizedWords = words.map((word, index) => {
      if (
        index === 0 || // Always capitalize the first word
        !["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"].includes(word)
      ) {
        return this.capitalize(word);
      } else {
        return word.toLowerCase();
      }
    });

    const titleizedString = titleizedWords.join(" ");

    return titleizedString;
  }
}
