/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetBrandNameBySlug($slug: String) {\n  brand(where: {slug: $slug}) {\n    brandName\n  }\n}": types.GetBrandNameBySlugDocument,
    "query GetBrandsOfSoldOffers {\n  brands(\n    orderBy: brandName_ASC\n    stage: PUBLISHED\n    where: {offers_some: {sold: true}}\n    first: 100\n  ) {\n    brandName\n    slug\n    offers(where: {sold: true}, first: 100) {\n      id\n    }\n  }\n}": types.GetBrandsOfSoldOffersDocument,
    "query GetOfferBySlug($slug: String) {\n  offer(where: {slug: $slug}) {\n    id\n    invoice\n    price\n    slug\n    sold\n    title\n    gallery(first: 20) {\n      url\n      height\n      width\n      alt\n    }\n    brand {\n      id\n      brandName\n    }\n    features {\n      kolor\n      moc\n      pojemnoscSilnika\n      przebieg\n      rocznik\n      typ\n    }\n    description {\n      html\n    }\n  }\n}": types.GetOfferBySlugDocument,
    "query GetOffers($sold: Boolean = false, $first: Int = 3, $skip: Int = 0, $order: OfferOrderByInput = price_DESC) {\n  offers(\n    stage: PUBLISHED\n    where: {sold: $sold}\n    orderBy: $order\n    first: $first\n    skip: $skip\n  ) {\n    id\n    invoice\n    price\n    slug\n    sold\n    title\n    gallery(first: 1) {\n      url\n      height\n      width\n      alt\n    }\n    brand {\n      id\n      brandName\n    }\n    features {\n      kolor\n      moc\n      pojemnoscSilnika\n      przebieg\n      rocznik\n      typ\n    }\n    description {\n      html\n    }\n    sold\n  }\n  offersConnection(stage: PUBLISHED, where: {sold: $sold}) {\n    aggregate {\n      count\n    }\n  }\n}": types.GetOffersDocument,
    "query GetSoldOffersByBrandSlug($slug: String, $sold: Boolean, $first: Int, $skip: Int, $order: OfferOrderByInput = price_DESC) {\n  offers(\n    stage: PUBLISHED\n    where: {sold: $sold, brand: {slug: $slug}}\n    first: $first\n    skip: $skip\n    orderBy: $order\n  ) {\n    id\n    invoice\n    price\n    slug\n    sold\n    title\n    gallery(first: 1) {\n      url\n      height\n      width\n      alt\n    }\n    brand {\n      id\n      brandName\n    }\n    features {\n      kolor\n      moc\n      pojemnoscSilnika\n      przebieg\n      rocznik\n      typ\n    }\n    description {\n      html\n    }\n  }\n  offersConnection(where: {sold: $sold, brand: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.GetSoldOffersByBrandSlugDocument,
    "query GetOffersCount($sold: Boolean) {\n  offersConnection(where: {sold: $sold}, stage: PUBLISHED) {\n    aggregate {\n      count\n    }\n  }\n}": types.GetOffersCountDocument,
    "query GetOffersSlugs {\n  offers(stage: PUBLISHED, first: 100) {\n    slug\n  }\n}": types.GetOffersSlugsDocument,
    "query getRecomendedOffers($first: Int = 3, $skip: Int = 0, $currentSlug: String) {\n  offers(\n    stage: PUBLISHED\n    orderBy: createdAt_DESC\n    where: {sold: false, NOT: {slug: $currentSlug}}\n    first: $first\n    skip: $skip\n  ) {\n    id\n    invoice\n    price\n    slug\n    sold\n    title\n    gallery(first: 1) {\n      url\n      height\n      width\n      alt\n    }\n    brand {\n      id\n      brandName\n    }\n    features {\n      kolor\n      moc\n      pojemnoscSilnika\n      przebieg\n      rocznik\n      typ\n    }\n    description {\n      html\n    }\n    sold\n  }\n}": types.GetRecomendedOffersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetBrandNameBySlug($slug: String) {\n  brand(where: {slug: $slug}) {\n    brandName\n  }\n}"): typeof import('./graphql').GetBrandNameBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetBrandsOfSoldOffers {\n  brands(\n    orderBy: brandName_ASC\n    stage: PUBLISHED\n    where: {offers_some: {sold: true}}\n    first: 100\n  ) {\n    brandName\n    slug\n    offers(where: {sold: true}, first: 100) {\n      id\n    }\n  }\n}"): typeof import('./graphql').GetBrandsOfSoldOffersDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetOfferBySlug($slug: String) {\n  offer(where: {slug: $slug}) {\n    id\n    invoice\n    price\n    slug\n    sold\n    title\n    gallery(first: 20) {\n      url\n      height\n      width\n      alt\n    }\n    brand {\n      id\n      brandName\n    }\n    features {\n      kolor\n      moc\n      pojemnoscSilnika\n      przebieg\n      rocznik\n      typ\n    }\n    description {\n      html\n    }\n  }\n}"): typeof import('./graphql').GetOfferBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetOffers($sold: Boolean = false, $first: Int = 3, $skip: Int = 0, $order: OfferOrderByInput = price_DESC) {\n  offers(\n    stage: PUBLISHED\n    where: {sold: $sold}\n    orderBy: $order\n    first: $first\n    skip: $skip\n  ) {\n    id\n    invoice\n    price\n    slug\n    sold\n    title\n    gallery(first: 1) {\n      url\n      height\n      width\n      alt\n    }\n    brand {\n      id\n      brandName\n    }\n    features {\n      kolor\n      moc\n      pojemnoscSilnika\n      przebieg\n      rocznik\n      typ\n    }\n    description {\n      html\n    }\n    sold\n  }\n  offersConnection(stage: PUBLISHED, where: {sold: $sold}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').GetOffersDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetSoldOffersByBrandSlug($slug: String, $sold: Boolean, $first: Int, $skip: Int, $order: OfferOrderByInput = price_DESC) {\n  offers(\n    stage: PUBLISHED\n    where: {sold: $sold, brand: {slug: $slug}}\n    first: $first\n    skip: $skip\n    orderBy: $order\n  ) {\n    id\n    invoice\n    price\n    slug\n    sold\n    title\n    gallery(first: 1) {\n      url\n      height\n      width\n      alt\n    }\n    brand {\n      id\n      brandName\n    }\n    features {\n      kolor\n      moc\n      pojemnoscSilnika\n      przebieg\n      rocznik\n      typ\n    }\n    description {\n      html\n    }\n  }\n  offersConnection(where: {sold: $sold, brand: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').GetSoldOffersByBrandSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetOffersCount($sold: Boolean) {\n  offersConnection(where: {sold: $sold}, stage: PUBLISHED) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').GetOffersCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetOffersSlugs {\n  offers(stage: PUBLISHED, first: 100) {\n    slug\n  }\n}"): typeof import('./graphql').GetOffersSlugsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getRecomendedOffers($first: Int = 3, $skip: Int = 0, $currentSlug: String) {\n  offers(\n    stage: PUBLISHED\n    orderBy: createdAt_DESC\n    where: {sold: false, NOT: {slug: $currentSlug}}\n    first: $first\n    skip: $skip\n  ) {\n    id\n    invoice\n    price\n    slug\n    sold\n    title\n    gallery(first: 1) {\n      url\n      height\n      width\n      alt\n    }\n    brand {\n      id\n      brandName\n    }\n    features {\n      kolor\n      moc\n      pojemnoscSilnika\n      przebieg\n      rocznik\n      typ\n    }\n    description {\n      html\n    }\n    sold\n  }\n}"): typeof import('./graphql').GetRecomendedOffersDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
