import {
  QueryFunctionContext,
  UseInfiniteQueryOptions,
  UseMutationOptions,
  UseQueryOptions,
} from 'react-query'

export type QueryFunctionArgs<T extends (...args: any) => any> =
  QueryFunctionContext<ReturnType<T>>

export type QueryConfig<Data, Error> = Pick<
  UseQueryOptions<Data, Error>,
  | 'cacheTime'
  | 'enabled'
  | 'keepPreviousData'
  | 'staleTime'
  | 'select'
  | 'suspense'
  | 'onError'
  | 'onSettled'
  | 'onSuccess'
>

export type InfiniteQueryConfig<Data, Error> = Pick<
  UseInfiniteQueryOptions<Data, Error>,
  | 'cacheTime'
  | 'enabled'
  | 'getNextPageParam'
  | 'keepPreviousData'
  | 'select'
  | 'staleTime'
  | 'suspense'
  | 'onError'
  | 'onSettled'
  | 'onSuccess'
>

export type MutationConfig<Data, Error, Variables = void> = {
  /** Function fires if mutation encounters error */
  onError?: UseMutationOptions<Data, Error, Variables>['onError']
  /**
   * Function fires before mutation function and is passed same variables mutation function would receive.
   * Value returned from this function will be passed to both onError and onSettled functions in event of a mutation failure.
   */
  onMutate?: UseMutationOptions<Data, Error, Variables>['onMutate']
  /** Function fires when mutation is either successfully fetched or encounters error */
  onSettled?: UseMutationOptions<Data, Error, Variables>['onSettled']
  /** Function fires when mutation is successful and will be passed the mutation's result */
  onSuccess?: UseMutationOptions<Data, Error, Variables>['onSuccess']
}
