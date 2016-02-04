import subs1 from "./subs1";
import subs2 from "./subs2";
import { advToAdjective, adjToNoun, adjToAdverb } from "../src/utils";

// Data
let data = subs1.concat(subs2);

// Add alternate forms
data.forEach( ({ type, original, substitution }) => {
  switch ( type ) {
    case "adjective":
      data.push({
        type: "adverb",
        original: adjToAdverb( original ),
        substitution: adjToAdverb( substitution )
      });

      data.push({
        type: "noun",
        original: adjToNoun( original ),
        substitution: adjToNoun( substitution )
      });

      break;

    case "adverb":

      data.push({
        type: "adjective",
        original: advToAdjective( original ),
        substitution: advToAdjective( substitution )
      });

      break;
  }
});

export default data;
