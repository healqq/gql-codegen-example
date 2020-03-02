export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
}

export enum GQLCacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export interface GQLMutation {
  __typename?: 'Mutation';
  simple: GQLSimpleType;
}


export interface GQLMutationSimpleArgs {
  value: Scalars['String'];
}

export interface GQLQuery {
  __typename?: 'Query';
  simple: GQLSimpleType;
}


export interface GQLQuerySimpleArgs {
  id: Scalars['Int'];
  value?: Maybe<Scalars['String']>;
}

export interface GQLSimpleType {
  __typename?: 'SimpleType';
  value: Scalars['String'];
  id: Scalars['Int'];
}


export interface GQLInlineMutationVariables {
  value: Scalars['String'];
}


export type GQLInlineMutation = (
  { __typename?: 'Mutation' }
  & { simple: (
    { __typename?: 'SimpleType' }
    & Pick<GQLSimpleType, 'id' | 'value'>
  ); }
);

export interface GQLExternalQueryVariables {
  id: Scalars['Int'];
  value?: Maybe<Scalars['String']>;
}


export type GQLExternalQuery = (
  { __typename?: 'Query' }
  & { simple: (
    { __typename?: 'SimpleType' }
    & Pick<GQLSimpleType, 'id' | 'value'>
  ); }
);
