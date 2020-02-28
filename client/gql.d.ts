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

export interface GQLQuery {
  __typename?: 'Query';
  simpleOperation?: Maybe<GQLSimpleOperationResult>;
}


export interface GQLQuerySimpleOperationArgs {
  id: Scalars['Int'];
  value?: Maybe<Scalars['String']>;
}

export interface GQLSimpleOperationResult {
  __typename?: 'SimpleOperationResult';
  value: Scalars['String'];
  id: Scalars['Int'];
}


export interface GQLSimpleQueryQueryVariables {
  id: Scalars['Int'];
  value?: Maybe<Scalars['String']>;
}


export type GQLSimpleQueryQuery = (
  { __typename?: 'Query' }
  & { simpleOperation: Maybe<(
    { __typename?: 'SimpleOperationResult' }
    & Pick<GQLSimpleOperationResult, 'id' | 'value'>
  )>; }
);
