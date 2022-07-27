import mongoose, {
  Model,
  Schema,
  Types,
  model,
} from 'mongoose';
import options from './options';
import config from '../config';
import { VideoGame } from './types/videoGame';

/*eslint-disable */
export interface GameDocument extends VideoGame, Document {
  tips: Types.Array<string>;

  imageUrl: string;
  url: string;
}

export interface GameModel extends Model<GameDocument> {
  //
}

const GameSchema = new Schema<GameDocument, GameModel>({
  tips: {
    type: Schema.Types.ObjectId,
    ref: 'Tip',
  },

  /*
  // Properties for Thing
  gameId: String,
  name: String,			// The name of the item.
  alternateName: [String],	// An alias for the item.
  image: String,		// ImageObject/URL
  // 	An image of the item. This can be a URL or a fully described
  // 	ImageObject.
  description: String,		// A description of the item.
  */

  /*
  // Properties from CreativeWork
  rating: Number,
  // aggregateRating		AggregateRating
  // 	The overall rating, based on a collection of reviews or ratings, of
  // 	the item.
  developer: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
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
  publisher: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  // publisher			Organization/Person
  // 	The publisher of the creative work.
  reviews: [String]		// A review of the item.
   */
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
}, options)

GameSchema.virtual('imageUrl').get(function () {
  if (this.image) return this.image
  // return `${config.HOST}/images/games/${this._id}`;
  return `${config.HOST}/images/games/default.jpg`;
});

GameSchema.virtual('url').get(function () {
  return `${config.HOST}/api/v1.0/games/${this._id}`;
});
/*eslint-enable */

export default model<GameDocument, GameModel>('Game', GameSchema);
