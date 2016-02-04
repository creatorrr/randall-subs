import NLP from "nlp_compromise";

// Utils

function copyTerm(term) {
  return new term.constructor(term.text);
}

// Predicates

// is_plural exists
// function is_plural() {
//   return this.pluralize() == this.text;
// }

function is_singular() {
  return copyTerm(this).singularize() == this.text;
}

function is_past() {
  return copyTerm(this).to_past() == this.text;
}

function is_present() {
  return copyTerm(this).to_present() == this.text;
}

function is_future() {
  return copyTerm(this).to_future() == this.text;
}

function is_american() {
  return copyTerm(this).americanize() == this.text;
}

function is_british() {
  return copyTerm(this).britishize() == this.text;
}

function is_comparative() {
  return copyTerm(this).to_comparative() == this.text;
}

function is_superlative() {
  return copyTerm(this).to_superlative() == this.text;
}

// Converters
function adjToNoun(adj) {
  return (new NLP.adjective(adj)).to_noun();
}

function adjToAdverb(adj) {
  return (new NLP.adjective(adj)).to_adverb();
}

function advToAdjective(adv) {
  return (new NLP.adverb(adv)).to_adjective();
}

// Mixin
const
  Text = {
    is_past,
    is_present,
    is_future
  },

  Sentence = Text,

  Term = {
    is_british,
    is_american
  },

  Verb = Text,

  Adjective = {
    is_comparative,
    is_superlative
  },

  Noun = Object.assign( Text, {
    is_singular
  }),

  UtilsMixin = {
    Text,
    Sentence,
    Term,
    Verb,
    Adjective,
    Noun
  };

export {
  UtilsMixin,
  is_singular,
  is_superlative,
  is_comparative,
  is_american,
  is_british,
  is_future,
  is_present,
  is_past,
  advToAdjective,
  adjToAdverb,
  adjToNoun
};
