import Options from './options.js'

const mongoose = require('mongoose')
const host = 'http://localhost:3000'

/*
 * Properties from VideoGame
 * 
 * actor	Person 			An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. Supersedes actors.
 * cheatCode	CreativeWork 		Cheat codes to the game.
 * director	Person 			A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. Supersedes directors.
 * gamePlatform	Text/Thing/URL	 	The electronic systems used to play video games.
 * gameServer	GameServer 		The server on which it is possible to play the game. Inverse property: game.
 * gameTip	CreativeWork 		Links to tips, tactics, etc.
 * musicBy	MusicGroup/Person 	The composer of the soundtrack.
 * playMode	GamePlayMode 		Indicates whether this game is multi-player, co-op or single-player. The game can be marked as multi-player, co-op and single-player at the same time.
 * trailer	VideoObject 		The trailer of a movie or tv/radio series, season, episode, etc.
 * 
 * Properties from Game
 * 
 * characterAttribute	Thing 			A piece of data that represents a particular aspect of a ficti	onal character (skill, power, character points, advantage, disadvantage).
 * gameItem		Thing 			An item is an object within the game world that can be collected by a playe	r or, occasionally, a non-player character.
 * gameLocation		Place/PostalAddress/URL	Real or fictional location of the game (or part of game).
 * numberOfPlayers	QuantitativeValue 	Indicate how many people can pla	y this game (minimum, maximum, or range).
 * quest		Thing 			The task that a player-controlled character, or group of characters may complete in order to gain a reward.
 * 
 */
/*
 * Properties from SoftwareApplication
 *
 * applicationCategory		Text or URL	 	Type of software application, e.g. 'Game, Multimedia'.
 * applicationSubCategory	Text or URL 		Subcategory of the application, e.g. 'Arcade Game'.
 * applicationSuite		Text 			The name of the application suite to which the appl	ication belongs (e.g. Excel belongs to Office).
 * availableOnDevice		Text	 		Device required to run the application. Used in cases where a specific make/model is required to run the application. Supersedes device.
 * countriesNotSupported	Text 			Countries for which the application is not support	ed. You can also provide the two-letter ISO 3166-1 alpha-2 country code.
 * countriesSupported		Text 			Countries for which the application is supported. You can also	 provide the two-letter ISO 3166-1 alpha-2 country code.
 * downloadUrl			URL 			If the file can be downloaded, URL to download the binary.
 * featureList			Text or URL 		Features or modules provided by this application (and	 possibly required by other applications).
 * fileSize			Text 			Size of the a	pplication / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed.
 * installUrl			URL 			URL at which the app may be installed,	 if different from the URL of the item.
 * memoryRequirements		Text or URL	 	Minimum memory requirements.
 * operatingSystem		Text 			Operating systems	 supported (Windows 7, OSX 10.6, Android 1.6).
 * permissions			Text 			Permis	sion(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi).
 * processorRequirements	Text 			Processor architecture required to run the application (e.g. IA64).
 * releaseNotes			Text  or URL 		Description of what changed in this version.
 * screenshot			ImageObject  or URL	A link to a screenshot image of the app.
 * softwareAddOn		SoftwareApplication 	Additional content for a software ap	plication.
 * softwareHelp			CreativeWork 		Software application help.
 * softwareRequirements		Text  or URL 		Component dependency requirements for app	lication. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime). Supersedes requirements.
 * softwareVersion		Text		 	Version of the software instance.
 * storageRequirements		Text  or URL 		Storage requirements (free space required).
 * supportingData		DataFeed 		Supporting data for a SoftwareApplication.
 */

var Schema = mongoose.Schema({
  // Properties for Thing
  gameId: String,
  name: String,			// The name of the item.
  alternateName: [String],	// An alias for the item.
  /**
   * description	Text
   *   A description of the item.
   */
  image: String,		// ImageObject/URL
  //	An image of the item. This can be a URL or a fully described
  //	ImageObject.
  description: String,		// A description of the item.

  // Properties from CreativeWork
  rating: Number,
  // aggregateRating		AggregateRating
  // 	The overall rating, based on a collection of reviews or ratings, of
  //	the item.
  developerId: Number,
  // author			Organization/Person
  //  	The author of this content or rating. Please note that author is
  //  	special in that HTML 5 provides a special mechanism for indicating
  //  	authorship via the rel tag. That is equivalent to this and may be used
  //  	interchangeably.
  awards: [String],		// An award won by or for this item.
  comments: [String],
  // comment			Comment
  // 	Comments, typically from users.
  // commentCount		Integer
  // 	The number of comments this CreativeWork (e.g. Article, Question or
  // 	Answer) has received. This is most applicable to works published in
  // 	Web sites with commenting system; additional comments may exist
  // 	elsewhere.
  dateCreated: Date,		// The date on which the CreativeWork was
				// created or the item was added.
  dateModified: Date,		// The date on which the CreativeWork was most
       				// recently modified or when the item's entry
				// was modified within a DataFeed.
  datePublished: Date,		// Date of first broadcast/publication.
  genreID: Number,
  // Genre of the creative work, broadcast channel or group.
  languages: [String],
  // The language of the content or performance or used in an action.
  // Please use one of the language codes from the IETF BCP 47 standard.
  free: Boolean,
  keywords: [String],
  // Keywords or tags used to describe this content. Multiple entries in a
  // keywords list are typically delimited by commas.
  publisherId: Number,
  // publisher			Organization/Person
  // 	The publisher of the creative work.
  reviews: [String]		// A review of the item.
  /*
   * about			Thing
   * 	The subject matter of the content.
   * 	Inverse property: subjectOf.
   * associatedMedia		MediaObject
   * 	A media object that encodes this CreativeWork.
   * 	This property is a synonym for encoding.
   * character			Person
   * 	Fictional person connected with a creative work.
   * contentLocation		Place
   * 	The location depicted or described in the content. For example, the
   * 	location in a photograph or painting.
   * contentRating		Text
   *    Official rating of a piece of content—for example,'MPAA PG-13'.
   * contentReferenceTime	DateTime
   *    The specific time described by a creative work, for works (e.g.
   *    articles, video objects etc.) that emphasise a particular moment
   *    within an Event.
   * contributor		Organization/Person
   * 	A secondary contributor to the CreativeWork or Event.
   * discussionUrl		URL
   * 	A link to the page containing the comments of the CreativeWork.
   * editor			Person
   *  	Specifies the Person who edited the CreativeWork.
   * fileFormat			Text  or URL
   * 	Media type, typically MIME format (see IANA site) of the content e.g.
   * 	application/zip of a SoftwareApplication binary. In cases where a
   * 	CreativeWork has several media type representations, 'encoding' can be
   * 	used to indicate each MediaObject alongside particular fileFormat
   * 	information. Unregistered or niche file formats can be indicated
   * 	instead via the most appropriate URL, e.g. defining Web page or a
   * 	Wikipedia entry.
   * isBasedOn			CreativeWork  or Product or URL
   * 	A  resource that was used in the creation of this resource. This term
   * 	can be repeated for multiple sources.
   * 	For example, http://example.com/great-multiplication-intro.html.
   * 	Supersedes isBasedOnUrl.
   * isPartOf			CreativeWork
   * 	Indicates a CreativeWork that this CreativeWork is (in some sense)
   * 	part of.
   * 	Inverse property: hasPart.
   * license			CreativeWork  or URL
   * 	A license document that applies to this content, typically indicated
   * 	by URL.
   * locationCreated		Place
   * 	The location where the CreativeWork was created, which may not be the
   * 	same as the location depicted in the CreativeWork.
   * mainEntity			Thing
   * 	Indicates the primary entity described in some page or other
   * 	CreativeWork.
   * 	Inverse property: mainEntityOfPage.
   * position			Integer  or Text
   *  	The position of an item in a series or sequence of items.
   * publication		PublicationEvent
   * 	A publication event associated with the item.
   * temporalCoverage		DateTime  or Text  or URL
   * 	The temporalCoverage of a CreativeWork indicates the period that the
   * 	content applies to, i.e. that it describes, either as a DateTime or as
   * 	a textual string indicating a time period in ISO 8601 time interval
   * 	format. In the case of a Dataset it will typically indicate the
   * 	relevant time period in a precise notation (e.g. for a 2011 census
   * 	dataset, the year 2011 would be written "2011/2012"). Other forms of
   * 	content e.g. ScholarlyArticle, Book, TVSeries or TVEpisode may
   * 	indicate their temporalCoverage in broader terms - textually or via
   * 	well-known URL. Written works such as books may sometimes have precise
   * 	temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated
   * 	in ISO 8601 interval format format via "1939/1945".
   * 	Supersedes datasetTimeInterval, temporal.
   * translator			Organization  or Person
   * 	Organization or person who adapts a creative work to different
   * 	languages, regional differences and technical requirements of a target
   * 	market, or that translates during some event.
   * version			Number  or Text
   * 	The version of the CreativeWork embodied by a specified resource.
   * video			VideoObject
   * 	An embedded video object.
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

var Game = mongoose.model('Game', Schema)

/**
module.exports = {
  Game: Game
}
*/
export default Game
