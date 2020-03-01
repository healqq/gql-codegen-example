export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Upload: any,
};

export enum GQLCacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type GQLMutation = {
   __typename?: 'Mutation',
  simple: GQLSimpleType,
};


export type GQLMutationSimpleArgs = {
  value: Scalars['String']
};

export type GQLQuery = {
   __typename?: 'Query',
  simple: GQLSimpleType,
};


export type GQLQuerySimpleArgs = {
  id: Scalars['Int'],
  value?: Maybe<Scalars['String']>
};

export type GQLSimpleType = {
   __typename?: 'SimpleType',
  value: Scalars['String'],
  id: Scalars['Int'],
};


export type GQLInlineMutationVariables = {
  value: Scalars['String']
};


export type GQLInlineMutation = (
  { __typename?: 'Mutation' }
  & { simple: (
    { __typename?: 'SimpleType' }
    & Pick<GQLSimpleType, 'id' | 'value'>
  ) }
);

export type GQLExternalQueryVariables = {
  id: Scalars['Int'],
  value?: Maybe<Scalars['String']>
};


export type GQLExternalQuery = (
  { __typename?: 'Query' }
  & { simple: (
    { __typename?: 'SimpleType' }
    & Pick<GQLSimpleType, 'id' | 'value'>
  ) }
);
