import mongoose, {
  Document,
  Model,
  Schema,
} from 'mongoose';
import options from './options';
import config from '../config';

/*eslint-disable */
/*
 * Properties from Organization
 *
 * actionableFeedbackPolicy	CreativeWork / URL
 * 	For a NewsMediaOrganization or other news-related Organization, a
 * 	statement about public engagement activities (for news media, the
 * 	newsroom’s), including involving the public - digitally or
 * 	otherwise -- in coverage decisions, reporting and activities after
 * 	publication.
 * address			PostalAddress / Text
 * 	Physical address of the item.
 * aggregateRating		AggregateRating
 * 	The overall rating, based on a collection of reviews or ratings, of
 * 	the item.
 * alumni			Person
 * 	Alumni of an organization.
 * 	Inverse property: alumniOf.
 * areaServed			AdministrativeArea / GeoShape / Place / Text
 * 	The geographic area where a service or offered item is provided.
 * 	Supersedes serviceArea.
 * award			Text
 * 	An award won by or for this item.
 * 	Supersedes awards.
 * brand			Brand  / Organization
 * 	The brand(s) associated with a product or service, or the brand(s)
 * 	maintained by an organization or business person.
 * contactPoint			ContactPoint
 * 	A contact point for a person or organization.
 * 	Supersedes contactPoints.
 * correctionsPolicy		CreativeWork  / URL
 * 	For an Organization (e.g. NewsMediaOrganization), a statement
 * 	describing (in news media, the newsroom’s) disclosure and correction
 * 	policy for errors.
 * department			Organization
 * 	A relationship between an organization and a department of that
 * 	organization, also described as an organization (allowing different
 * 	urls, logos, opening hours). For example: a store with a pharmacy, or
 * 	a bakery with a cafe.
 * dissolutionDate		Date
 * 	The date that this organization was dissolved.
 * diversityPolicy		CreativeWork / URL
 * 	Statement on diversity policy by an Organization e.g. a
 * 	NewsMediaOrganization. For a NewsMediaOrganization, a statement
 * 	describing the newsroom’s diversity policy on both staffing and
 * 	sources, typically providing staffing data.
 * duns				Text
 * 	The Dun & Bradstreet DUNS number for identifying an organization or
 * 	business person.
 * email			Text
 * 	Email address.
 * employee			Person
 * 	Someone working for this organization.
 * 	Supersedes employees.
 * ethicsPolicy			CreativeWork  / URL
 * 	Statement about ethics policy, e.g. of a NewsMediaOrganization
 * 	regarding journalistic and publishing practices, or of a Restaurant,
 * 	a page describing food source policies. In the case of a
 * 	NewsMediaOrganization, an ethicsPolicy is typically a statement
 * 	describing the personal, organizational, and corporate standards of
 * 	behavior expected by the organization.
 * event 			Event
 * 	Upcoming or past event associated with this place, organization, or
 * 	action.
 * 	Supersedes events.
 * faxNumber			Text
 * 	The fax number.
 * founder			Person
 * 	A person who founded this organization.
 * 	Supersedes founders.
 * foundingDate			Date
 * 	The date that this organization was founded.
 * foundingLocation		Place
 * 	The place where the Organization was founded.
 * funder			Organization / Person
 * 	A person or organization that supports (sponsors) something through
 * 	some kind of financial contribution.
 * globalLocationNumber		Text
 * 	The Global Location Number (GLN, sometimes also referred to as
 * 	International Location Number or ILN) of the respective organization,
 * 	person, or place. The GLN is a 13-digit number used to identify
 * 	parties and physical locations.
 * hasOfferCatalog		OfferCatalog
 * 	Indicates an OfferCatalog listing for this Organization, Person, or
 * 	Service.
 * hasPOS			Place
 * 	Points-of-Sales operated by the organization or person.
 * isicV4			Text
 * 	The International Standard of Industrial Classification of All
 * 	Economic Activities (ISIC), Revision 4 code for a particular
 * 	organization, business person, or place.
 * legalName			Text
 * 	The official name of the organization, e.g. the registered company
 * 	name.
 * leiCode			Text
 * 	An organization identifier that uniquely identifies a legal entity as
 * 	defined in ISO 17442.
 * location			Place  / PostalAddress / Text
 * 	The location of for example where  the event is happening, an
 * 	organization is located, or where an action takes place.
 * logo				ImageObject  / URL
 * 	An associated logo.
 * makesOffer			Offer
 * 	A pointer to products or services offered by the organization or
 * 	person.
 * 	Inverse property: offeredBy.
 * member			Organization  / Person
 * 	A member of an Organization or a ProgramMembership. Organizations can
 * 	be members of organizations; ProgramMembership is typically for
 * 	individuals.
 * 	Supersedes members, musicGroupMember.
 * 	Inverse property: memberOf.
 * memberOf			Organization  / ProgramMembership
 * 	An Organization (or ProgramMembership) to which this Person or
 * 	Organization belongs.
 * 	Inverse property: member.
 * naics			Text
 * 	The North American Industry Classification System (NAICS) code for a
 * 	particular organization or business person.
 * numberOfEmployees		QuantitativeValue
 * 	The number of employees in an organization e.g. business.
 * owns				OwnershipInfo  / Product
 * 	Products owned by the organization or person.
 * parentOrganization		Organization
 * 	The larger organization that this organization is a subOrganization
 * 	of, if any.
 * 	Supersedes branchOf.
 * 	Inverse property: subOrganization.
 * publishingPrinciples		CreativeWork  / URL
 * 	The publishingPrinciples property indicates (typically via URL) a
 * 	document describing the editorial principles of an Organization (or
 *	individual e.g. a Person writing a blog) that relate to their
 *	activities as a publisher, e.g. ethics or diversity policies. When
 *	applied to a CreativeWork (e.g. NewsArticle) the principles are those
 *	of the party primarily responsible for the creation of the
 *	CreativeWork.
 * 	While such policies are most typically expressed in natural language,
 * 	sometimes related information (e.g. indicating a funder) can be
 * 	expressed using schema.org terminology.
 * review			Review
 * 	A review of the item.
 * 	Supersedes reviews.
 * seeks			Demand
 * 	A pointer to products or services sought by the organization or
 * 	person (demand).
 * sponsor			Organization  / Person
 * 	A person or organization that supports a thing through a pledge,
 * 	promise, or financial contribution. e.g. a sponsor of a Medical Study
 * 	or a corporate sponsor of an event.
 * subOrganization		Organization
 * 	A relationship between two organizations where the first includes the
 * 	second, e.g., as a subsidiary.
 * 	See also: the more specific 'department' property.
 * 	Inverse property: parentOrganization.
 * taxID			Text
 * 	The Tax / Fiscal ID of the organization or person, e.g. the TIN in
 * 	the US or the CIF/NIF in Spain.
 * telephone			Text
 * 	The telephone number.
 * unnamedSources		PolicyCreativeWork / URL
 * 	For an Organization (typically a NewsMediaOrganization), a statement
 * 	about policy on use of unnamed sources and the decision process
 * 	required.
 * vatID			Text
 * 	The Value-added Tax ID of the organization or person.
 */

export interface ICompanyDocument extends Document {
  // Properties for Thing
  companyId: string,
  name: string,
  alternateName: string[],
  image: string,
  description: string,

  imageUrl: string,
  url: string,
}

export interface ICompanyModel extends Model<ICompanyDocument> {}

const CompanySchema = new Schema({
  companyId: String,
  name: String,			// The name of the item.
  alternateName: [String],	// An alias for the item.
  /**
   * description	Text
   *   A description of the item.
   */
  image: String,		// ImageObject/URL
  // 	An image of the item. This can be a URL or a fully described
  // 	ImageObject.
  description: String,		// A description of the item.
}, options)


CompanySchema.virtual('imageURL').get(function () {
  if (!this.image) return `${config.HOST}/images/games/default.jpg`;
  if (this.image[0] === '/') return `${config.HOST}/images/companies/${this.image}`;
  return this.image
})
CompanySchema.virtual('url').get(function () {
  return `${config.HOST}/api/v1.0/companies/${this._id}`;
})
/* eslint-enable */

const Company = mongoose.model<ICompanyDocument, ICompanyModel>('Company', CompanySchema);

export default Company;
