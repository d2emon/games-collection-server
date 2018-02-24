import Options from './options.js'

const mongoose = require('mongoose')
const host = 'http://localhost:3000'

var Schema = mongoose.Schema({
  id: String,
  name: String,			// The name of the item.
  /**
   * additionalType	URL
   *   An additional type for the item, typically used for adding more
   *   specific types from external vocabularies in microdata syntax. This is
   *   a relationship between something and a class that the thing is in. In
   *   RDFa syntax, it is better to use the native RDFa syntax - the 'typeof'
   *   attribute - for multiple types. Schema.org tools may have only weaker
   *   understanding of extra types, in particular those defined externally.
   */
  alternateName: [String],	// An alias for the item.
  /**
   * description	Text
   *   A description of the item.
   */
  /**
   * disambiguatingDescription	Text
   *   A sub property of description. A short description of the item used to
   *   disambiguate from other, similar items. Information from other
   *   properties (in particular, name) may be necessary for the description
   *   to be useful for disambiguation.
   */
  /**
   * identifier		PropertyValue/Text/URL
   *   The identifier property represents any kind of identifier for any kind
   *   of Thing, such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides
   *   dedicated properties for representing many of these, either as textual
   *   strings or as URL (URI) links. See background notes for more details.
   */
  image: String,		// ImageObject/URL
  //	An image of the item. This can be a URL or a fully described
  //	ImageObject.
  description: String,		// A description of the item.
  // disambiguatingDescription	Text
  //  	sub property of description. A short description of the item used to
  //  	disambiguate from other, similar items. Information from other
  //  	properties (in particular, name) may be necessary for the description
  //  	to be useful for disambiguation.
  /**
   * mainEntityOfPage	CreativeWork/URL
   *   Indicates a page (or other CreativeWork) for which this thing is the
   *   main entity being described. See background notes for details.
   *   Inverse property: mainEntity.
   */
  /**
   * potentialAction	Action
   *   Indicates a potential Action, which describes an idealized action in
   *   which this thing would play an 'object' role.
   */
  /**
   * sameAs	URL
   *   URL of a reference Web page that unambiguously indicates the item's
   *   identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or
   *   official website.
   */
  /**
   * subjectOf	CreativeWork/Event
   *   A CreativeWork or Event about this Thing..
   *   Inverse property: about.
   */
}, Options)


Schema.virtual('imageURL').get(function () {
  if (this.image) return this.image
  // return host + '/images/games/' + this._id + '.jpg'
  return host + '/images/games/default.jpg'
})
Schema.virtual('url').get(function () {
  // URL of the item.	
  return host + '/game/' + this._id
})

var Thing = mongoose.model('Company', Schema)

module.exports = {
  Thing: Thing
}

