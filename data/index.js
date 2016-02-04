import subs1 from "./subs1";
import subs2 from "./subs2";
import { wrap } from "../src/utils";

// Data
let data = subs1.concat(subs2);

// Add alternate forms
data.forEach( ({ type, original, substitution }) => {
  switch ( type ) {
    case "adjective":
      data.push({
        type: "adverb",
        original: wrap( original, type ).to_adverb(),
        substitution: wrap( substitution, type ).to_adverb()
      });

      data.push({
        type: "noun",
        original: wrap( original, type ).to_noun(),
        substitution: wrap( substitution, type ).to_noun()
      });

      break;

    case "adverb":

      data.push({
        type: "adjective",
        original: wrap( original, type ).to_adjective(),
        substitution: wrap( substitution, type ).to_adjective()
      });

      break;
  }
});

export default data;
