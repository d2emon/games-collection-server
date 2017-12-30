const mongoose = require('mongoose')
const db = require('../db')

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
 * Properties from CreativeWork
 * 
 * about		Thing 			The subject matter of the content. Inverse property: subjectOf.
 * accessMode		Text 			The human sensory perceptual system or cognitive faculty through which a person may process or perceive information. Expected values include: auditory, tactile, textual, visual, colorDependent, chartOnVisual, chemOnVisual, diagramOnVisual, mathOnVisual, musicOnVisual, textOnVisual.
 * accessModeSufficient	Text	 		A list of single or combined accessModes that are sufficient to understand all the intellectual content of a resource. Expected values include: auditory, tactile, textual, visual.
 * accessibilityAPI	Text 			Indicates that the resource is compatible with the referenced accessibility API (WebSchemas wiki lists possible values).
 * accessibilityControl	Text 			Identifies input methods that are sufficient to fully control the described resource (WebSchemas wiki lists possible values).
 * accessibilityFeature	Text	 		Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility (WebSchemas wiki lists possible values).
 * accessibilityHazard	Text 			A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3 (WebSchemas wiki lists possible values).
 * accessibilitySummary	Text 			A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as "short descriptions are present but long descriptions will be needed for non-visual users" or "short descriptions are present and no long descriptions are needed."
 * accountablePerson	Person	 		Specifies the Person that is legally accountable for the CreativeWork.
 * aggregateRating	AggregateRating 	The overall rating, based on a collection of reviews or ratings, of the item.
 * alternativeHeadline	Text 			A secondary title of the CreativeWork	.
 * associatedMedia	MediaObject 		A media object that encodes this CreativeWork. This property is a synonym for encoding.
 * audience		Audience	 	An intended audience, i.e. a group for whom something was created. Supersedes serviceAudience.
 * audio		AudioObject 		An embedded audio object.
 * author		Organization/Person 	The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
 * award		Text 			An award won by or for this item.	 Supersedes awards.
 * character		Person 			Fictional person connected with a	 creative work.
 * citation		CreativeWork/Text 	A citation or referenc	e to another creative work, such as another publication, web page, scholarly article, etc.
 * comment		Comment 		Comments, typically from users.
 * commentCount		Integer 		The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere.
 * contentLocation	Place 			The location depicted or described in the content.	 For example, the location in a photograph or painting.
 * contentRating	Text 			Official rating of a piece of content—for example,'MPAA PG-13'.
 * contentReferenceTime	DateTime	 	The specific time described by a creati	ve work, for works (e.g. articles, video objects etc.) that emphasise a particular moment within an Event.
 * contributor		Organization/Person 	A secondary c	ontributor to the CreativeWork or Event.
 * copyrightHolder	Organization/Person 	The party holding the legal copyright to the CreativeWork.
 * copyrightYear	Number 			The year during which the claimed copyright for the C	reativeWork was first asserted.
 * creator		Organization/Person 	The c	reator/author of this CreativeWork. This is the same as the Author property for CreativeWork.
 * dateCreated		Date/DateTime 		The date on which the Crea	tiveWork was created or the item was added to a DataFeed.
 * dateModified		Date/DateTime 		The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.
 * datePublished	Date		 	Date of first broadcast/publication.
 * discussionUrl	URL 			A lin		k to the page containing the comments of the CreativeWork.
 * editor		Person		 	Specifies the Person who edited the CreativeWork.
 * educationalAlignmentAlignmentObject 	An alignment to an established educational framework	.
 * educationalUseText 	The purpose of a work in the context of educatio	n; for example, 'assignment', 'group work'.
 * encodingMediaObject 	A med	ia object that encodes this CreativeWork. This property is a synonym for associatedMedia. Supersedes encodings.
 * exampleOfWorkCreativeWork 	A creati	ve work that this work is an example/instance/realization/derivation of.
 * Inverse property: workExample.
* expiresDate 	Date the content expires and is	 no longer useful or available. For example a VideoObject or NewsArticle whose availability or relevance is time-limited, or a ClaimReview fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date.
* fileFormatText  or 	
* URL 	Media type, typically MIME format (see IANA site) of the content e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry.
* funderOrganization  or 
* Person 	A person or o	rganization that supports (sponsors) something through some kind of financial contribution.
* genreText  or 
* URL 	Genre of the creative work, broadcast chan	nel or group.
* hasPartCreativeWork 	Indicates a CreativeWork that is (i	n some sense) a part of this CreativeWork.
* Inverse property: isPartOf.
* headlineText 	Headline of the article.
* inLanguageLanguage  or 
* Text 	The language of 		the content or performance or used in an action. Please use one of the language codes from the IETF BCP 47 standard. See also availableLanguage. Supersedes language.
* interactionStatisticInteractionCounter 	Th	e number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used. Supersedes interactionCount.
* interactivityTypeText 	The predominant mode of learning supported by the learning	 resource. Acceptable values are 'active', 'expositive', or 'mixed'.
* isAccessibleForFreeBoolean 	A flag to signal that the item, event, or place is accessible for	 free. Supersedes free.
* isBasedOnCreativeWork  or 
* Product  or 
* URL 	A	 resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html. Supersedes isBasedOnUrl.
* isFamilyFriendlyBoolean 	Indicates whether this content is family friendly.
* isPartOf		CreativeWork 	Indicates a CreativeWork that this CreativeWork is (in some sense) part of.
* Inverse property: hasPart.
* keywordsText 	Keywords or tags used to descri	be this content. Multiple entries in a keywords list are typically delimited by commas.
* learningResourceTypeText 	The predominant type or kind characteri	zing the learning resource. For example, 'presentation', 'handout'.
* licenseCreativeWork  or 
* URL 	A license document that applies to this content, typically	 indicated by URL.
* locationCreatedPlace 	The location where the Creati	veWork was created, which may not be the same as the location depicted in the CreativeWork.
* mainEntityThing 	Indicates the primary entity described in so	me page or other CreativeWork.
* Inverse property: mainEntityOfPage.
* materialProduct  or 
* Text  or 
* URL 	A material that something is made from, e.g. leather, w	ool, cotton, paper.
* mentionsThing 	Indicates that the CreativeWork con	tains a reference to, but is not necessarily about a concept.
* offersOf	fer 	An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event.
* positionInteger  or 
* Text 	The position of an item in a 	series or sequence of items.
* producerOrganization  or 
* Person 	The per	son or organization who produced the work (e.g. music album, movie, tv/radio series etc.).
* providerOrganization  or 
* Person 	The service provider, servi	ce operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. Supersedes carrier.
* publicationPubl	icationEvent 	A publication event associated with the item.
* publisherO	rganization  or 
* Person 	The publisher of the creative work.
* publisherImprintOrganization 	The publishing division which published the comic.	
* publishingPrinciplesCreativeWork  or 
* URL 	The publishingPrinciples p	roperty indicates (typically via URL) a document describing the editorial principles of an Organization (or individual e.g. a Person writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a CreativeWork (e.g. NewsArticle) the principles are those of the party primarily responsible for the creation of the CreativeWork.
* While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a funder) can be expressed using schema.org terminology.
*
* recordedAtEv	ent 	The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event.
* Inverse property: recordedIn.
* releasedEventPublicationEvent 	The place and time the release was issued, e	xpressed as a PublicationEvent.
* reviewReview 	A review of the item. Su	persedes reviews.
* schemaVersionText  or 
* URL 	Indicates (by URL or str	ing) a particular version of a schema used in some CreativeWork. For example, a document could declare a schemaVersion using an URL such as http://schema.org/version/2.0/ if precise indication of schema version was required by some application.
* sourceOrganizationOrganization 	The Or	ganization on whose behalf the creator was working.
* spatialCoveragePla	ce 	The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York. Supersedes spatial.
* sponsorOrganization  or 
* Person 		A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
* temporalCoverageDateTime  or 
* 	Text  or 
* 	URL 	The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in ISO 8601 time interval format. In the case of a Dataset it will typically indicate the relevant time period in a precise notation (e.g. for a 2011 census dataset, the year 2011 would be written "2011/2012"). Other forms of content e.g. ScholarlyArticle, Book, TVSeries or TVEpisode may indicate their temporalCoverage in broader terms - textually or via well-known URL. Written works such as books may sometimes have precise temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO 8601 interval format format via "1939/1945". Supersedes datasetTimeInterval, temporal.
* 	Text .text(The textual URL 	A thumbnail image relevant to the Thing.
		* 	timeRequiredDurati	on 	Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'P30M', 'P1H25M'.
		* 	translationOfWorkCreativeWork 	The work that this work has been	 translated from. e.g. 物种起源 is a translationOf “On the Origin of Species”
		* 	Inverse property: workTranslation.
		* 	translatorOrganization  or 
		* 	Person	 	Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.
		* 	typicalAgeRangeText	 	The typical expected age range, e.g. '7-9', '11-'.
		* 	versionNumber  or	 
		* 	Text 	The version of the CreativeWork embodied by a specified resource.
		* 	videoVideoObject 	An embedded video object.
		* 	workExampleCreativeWork 			Example/instance/realization/derivation of the concept of this creative work. eg. The paperback edition, first edition, or eBook.
		* 	Inverse property: exampleOfWork.
		* 	workTranslationCreativeWork 	A wo	rk that is a translation of the content of this work. e.g. 西遊記 has an English workTranslation “Journey to the West”,a German workTranslation “Monkeys Pilgerfahrt” and a Vietnamese translation Tây du ký bình khảo.
		* 	Inverse property: translationOfWork.
		* 	Properties from SoftwareApplication
		* 	applicationCategoryText  or 
		* 	URL 	T	ype of software application, e.g. 'Game, Multimedia'.
		* 	applicationSubCategoryText  or 
		* 	URL 	Subcategory of the application, e.g. 'Arcade Game'.
		* 	app	licationSuiteText 	The name of the application suite to which the appl	ication belongs (e.g. Excel belongs to Office).
		* 	availableOnDeviceText 		Device required to run the application. Used in cases where a specific make/model is required to run the application. Supersedes device.
* 	countriesNotSupportedText 	Countries for which the application is not support	ed. You can also provide the two-letter ISO 3166-1 alpha-2 country code.
* 	countriesSupportedText 	Countries for which the application is supported. You can also	 provide the two-letter ISO 3166-1 alpha-2 country code.
* 	downloadUrlUR	L 	If the file can be downloaded, URL to download the binary.
* 	featureListText  or 
* 	URL 	Features or modules provided by this application (and	 possibly required by other applications).
* 	fileSizeText 	Size of the a	pplication / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed.
* 	installUrlURL 	URL at which the app may be installed,	 if different from the URL of the item.
* 	memoryRequirementsText  or 
* 	UR	L 	Minimum memory requirements.
* 	operatingSystemText 	Operating systems	 supported (Windows 7, OSX 10.6, Android 1.6).
* 	permissionsText 	Permis	sion(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi).
* 	processorRequirementsText 		Processor architecture required to run the application (e.g. IA64).
* 	releaseNotesText  or 
* 	URL 	Description of what changed in this version.
* 	scr	eenshotImageObject  or 
* 	URL 	A link to a screenshot image of the app.
* 		softwareAddOnSoftwareApplication 	Additional content for a software ap	plication.
* 		softwareHelpCreativeWork 	Software application help.
* 		softwa	reRequirementsText  or 
* 		URL 	Component dependency requirements for app	lication. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime). Supersedes requirements.
* 		softwareVersionText 	Version of the software instance.
* 		storageRequi	rementsText  or 
* 		URL 	Storage requirements (free space required).
* 		supp	ortingDataDataFeed 	Supporting data for a SoftwareApplication.
 */

/*
 * Properties from Thing
 *
 * additionalType	URL 			An additional type for the item,
 * 						typically used for adding more
 * 						specific types from external
 * 						vocabularies in microdata
 * 						syntax. This is a relationship
 * 						between something and a class
 * 						that the thing is in. In RDFa
 * 						syntax, it is better to use the
 * 						native RDFa syntax - the
 * 						'typeof' attribute - for
 * 						multiple types. Schema.org
 * 						tools may have only weaker
 * 						understanding of extra types,
 * 						in particular those defined
 * 						externally.
 * mainEntityOfPage	CreativeWork/URL 	Indicates a page (or other
 * 						CreativeWork) for which this
 * 						thing is the main entity being
 * 						described. See background notes
 * 						for details.
 * 						Inverse property: mainEntity.
 * subjectOf		CreativeWork/Event	A CreativeWork or Event about
 * 						this Thing.
 * 						Inverse property: about.
 */
  // potentialAction	Action 			Indicates a potential Action,
  // 						which describes an idealized
  // 						action in which this thing
  //  						would play an 'object' role.

var gameSchema = mongoose.Schema({
  // identifier		PropertyValue/Text/URL 	The identifier property
  //						represents any kind of
  //						identifier for any kind of
  //						Thing, such as ISBNs, GTIN 
  //						codes, UUIDs etc. Schema.org 
  //						provides dedicated properties
  //						for representing many of these,
  //						either as textual strings or
  //						as URL (URI) links. See
  //						background notes for more
  //						details.
  name: String,			// The name of the item.
  alternateName: [String],	// An alias for the item.
  image: String,		// ImageObject/URL
  //						An image of the item. This can
  //  						be a URL or a fully described
  //  	 					ImageObject.
  url: String,			// URL
  // 						URL of the item.
  // sameAs		URL 			URL of a reference Web page
  //  						that unambiguously indicates
  //  						the item's identity. E.g. the
  // 						URL of the item's Wikipedia
  //						page, Wikidata entry, or
  // 						official website.
  description: String		// A description of the item.
  // disambiguatingDescription	Text 		A sub property of description.
  //                                            A short description of the
  //                                            item used to disambiguate from
  //                                            other, similar items.
  //         		                        Information from other
  //       	  		                properties (in particular,
  // 		      	  		        name) may be necessary for the
  // 			      	  		description to be useful for
  //	 			      	  	disambiguation.
})

var Game = mongoose.model('Game', gameSchema)

module.exports = {
  Game: Game
}
