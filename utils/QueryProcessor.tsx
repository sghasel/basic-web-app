export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  return "";

  export default function QueryProcessor(query: string): string {
    if (query.toLowerCase().includes("What is your name")) {
      return (
        "My name is Saada"
      );
    }
  
    return "";
  }
}
