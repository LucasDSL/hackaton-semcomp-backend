
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  cpf: string
  name: string
  email: string
  age: number
  phone: string
  password: string
  createdAt: Date | null
  updatedAt: Date | null
}

/**
 * Model Dependent
 * 
 */
export type Dependent = {
  id: number
  cpf: string
  name: string
  email: string | null
  password: string | null
  age: number
  responsibleId: number
  createdAt: Date | null
  updatedAt: Date | null
}

/**
 * Model Shot
 * 
 */
export type Shot = {
  id: number
  name: string
  description: string
  createdAt: Date | null
  updatedAt: Date | null
}

/**
 * Model ShotsTakenByUser
 * 
 */
export type ShotsTakenByUser = {
  userId: number
  shotId: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.dependent`: Exposes CRUD operations for the **Dependent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dependents
    * const dependents = await prisma.dependent.findMany()
    * ```
    */
  get dependent(): Prisma.DependentDelegate<GlobalReject>;

  /**
   * `prisma.shot`: Exposes CRUD operations for the **Shot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shots
    * const shots = await prisma.shot.findMany()
    * ```
    */
  get shot(): Prisma.ShotDelegate<GlobalReject>;

  /**
   * `prisma.shotsTakenByUser`: Exposes CRUD operations for the **ShotsTakenByUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShotsTakenByUsers
    * const shotsTakenByUsers = await prisma.shotsTakenByUser.findMany()
    * ```
    */
  get shotsTakenByUser(): Prisma.ShotsTakenByUserDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.3.0
   * Query Engine version: c875e43600dfe042452e0b868f7a48b817b9640b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Dependent: 'Dependent',
    Shot: 'Shot',
    ShotsTakenByUser: 'ShotsTakenByUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    dependents: number
    shotsTakenByUser: number
  }

  export type UserCountOutputTypeSelect = {
    dependents?: boolean
    shotsTakenByUser?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type ShotCountOutputType
   */


  export type ShotCountOutputType = {
    usersThatTook: number
  }

  export type ShotCountOutputTypeSelect = {
    usersThatTook?: boolean
  }

  export type ShotCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ShotCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ShotCountOutputType
    : S extends undefined
    ? never
    : S extends ShotCountOutputTypeArgs
    ?'include' extends U
    ? ShotCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ShotCountOutputType ? ShotCountOutputType[P] : never
  } 
    : ShotCountOutputType
  : ShotCountOutputType




  // Custom InputTypes

  /**
   * ShotCountOutputType without action
   */
  export type ShotCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ShotCountOutputType
     * 
    **/
    select?: ShotCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    cpf: string | null
    name: string | null
    email: string | null
    age: number | null
    phone: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    cpf: string | null
    name: string | null
    email: string | null
    age: number | null
    phone: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    cpf: number
    name: number
    email: number
    age: number
    phone: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    age?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    cpf?: true
    name?: true
    email?: true
    age?: true
    phone?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    cpf?: true
    name?: true
    email?: true
    age?: true
    phone?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    cpf?: true
    name?: true
    email?: true
    age?: true
    phone?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    cpf: string
    name: string
    email: string
    age: number
    phone: string
    password: string
    createdAt: Date | null
    updatedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    cpf?: boolean
    name?: boolean
    email?: boolean
    age?: boolean
    phone?: boolean
    dependents?: boolean | DependentFindManyArgs
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shotsTakenByUser?: boolean | ShotsTakenByUserFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    dependents?: boolean | DependentFindManyArgs
    shotsTakenByUser?: boolean | ShotsTakenByUserFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'dependents' ? Array < DependentGetPayload<S['include'][P]>>  :
        P extends 'shotsTakenByUser' ? Array < ShotsTakenByUserGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'dependents' ? Array < DependentGetPayload<S['select'][P]>>  :
        P extends 'shotsTakenByUser' ? Array < ShotsTakenByUserGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    dependents<T extends DependentFindManyArgs = {}>(args?: Subset<T, DependentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Dependent>>, PrismaPromise<Array<DependentGetPayload<T>>>>;

    shotsTakenByUser<T extends ShotsTakenByUserFindManyArgs = {}>(args?: Subset<T, ShotsTakenByUserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ShotsTakenByUser>>, PrismaPromise<Array<ShotsTakenByUserGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Dependent
   */


  export type AggregateDependent = {
    _count: DependentCountAggregateOutputType | null
    _avg: DependentAvgAggregateOutputType | null
    _sum: DependentSumAggregateOutputType | null
    _min: DependentMinAggregateOutputType | null
    _max: DependentMaxAggregateOutputType | null
  }

  export type DependentAvgAggregateOutputType = {
    id: number | null
    age: number | null
    responsibleId: number | null
  }

  export type DependentSumAggregateOutputType = {
    id: number | null
    age: number | null
    responsibleId: number | null
  }

  export type DependentMinAggregateOutputType = {
    id: number | null
    cpf: string | null
    name: string | null
    email: string | null
    password: string | null
    age: number | null
    responsibleId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DependentMaxAggregateOutputType = {
    id: number | null
    cpf: string | null
    name: string | null
    email: string | null
    password: string | null
    age: number | null
    responsibleId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DependentCountAggregateOutputType = {
    id: number
    cpf: number
    name: number
    email: number
    password: number
    age: number
    responsibleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DependentAvgAggregateInputType = {
    id?: true
    age?: true
    responsibleId?: true
  }

  export type DependentSumAggregateInputType = {
    id?: true
    age?: true
    responsibleId?: true
  }

  export type DependentMinAggregateInputType = {
    id?: true
    cpf?: true
    name?: true
    email?: true
    password?: true
    age?: true
    responsibleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DependentMaxAggregateInputType = {
    id?: true
    cpf?: true
    name?: true
    email?: true
    password?: true
    age?: true
    responsibleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DependentCountAggregateInputType = {
    id?: true
    cpf?: true
    name?: true
    email?: true
    password?: true
    age?: true
    responsibleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DependentAggregateArgs = {
    /**
     * Filter which Dependent to aggregate.
     * 
    **/
    where?: DependentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependents to fetch.
     * 
    **/
    orderBy?: Enumerable<DependentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DependentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dependents
    **/
    _count?: true | DependentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DependentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DependentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DependentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DependentMaxAggregateInputType
  }

  export type GetDependentAggregateType<T extends DependentAggregateArgs> = {
        [P in keyof T & keyof AggregateDependent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDependent[P]>
      : GetScalarType<T[P], AggregateDependent[P]>
  }




  export type DependentGroupByArgs = {
    where?: DependentWhereInput
    orderBy?: Enumerable<DependentOrderByWithAggregationInput>
    by: Array<DependentScalarFieldEnum>
    having?: DependentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DependentCountAggregateInputType | true
    _avg?: DependentAvgAggregateInputType
    _sum?: DependentSumAggregateInputType
    _min?: DependentMinAggregateInputType
    _max?: DependentMaxAggregateInputType
  }


  export type DependentGroupByOutputType = {
    id: number
    cpf: string
    name: string
    email: string | null
    password: string | null
    age: number
    responsibleId: number
    createdAt: Date | null
    updatedAt: Date | null
    _count: DependentCountAggregateOutputType | null
    _avg: DependentAvgAggregateOutputType | null
    _sum: DependentSumAggregateOutputType | null
    _min: DependentMinAggregateOutputType | null
    _max: DependentMaxAggregateOutputType | null
  }

  type GetDependentGroupByPayload<T extends DependentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DependentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DependentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DependentGroupByOutputType[P]>
            : GetScalarType<T[P], DependentGroupByOutputType[P]>
        }
      >
    >


  export type DependentSelect = {
    id?: boolean
    cpf?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    age?: boolean
    responsible?: boolean | UserArgs
    responsibleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DependentInclude = {
    responsible?: boolean | UserArgs
  }

  export type DependentGetPayload<
    S extends boolean | null | undefined | DependentArgs,
    U = keyof S
      > = S extends true
        ? Dependent
    : S extends undefined
    ? never
    : S extends DependentArgs | DependentFindManyArgs
    ?'include' extends U
    ? Dependent  & {
    [P in TrueKeys<S['include']>]:
        P extends 'responsible' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'responsible' ? UserGetPayload<S['select'][P]> :  P extends keyof Dependent ? Dependent[P] : never
  } 
    : Dependent
  : Dependent


  type DependentCountArgs = Merge<
    Omit<DependentFindManyArgs, 'select' | 'include'> & {
      select?: DependentCountAggregateInputType | true
    }
  >

  export interface DependentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Dependent that matches the filter.
     * @param {DependentFindUniqueArgs} args - Arguments to find a Dependent
     * @example
     * // Get one Dependent
     * const dependent = await prisma.dependent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DependentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DependentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Dependent'> extends True ? CheckSelect<T, Prisma__DependentClient<Dependent>, Prisma__DependentClient<DependentGetPayload<T>>> : CheckSelect<T, Prisma__DependentClient<Dependent | null >, Prisma__DependentClient<DependentGetPayload<T> | null >>

    /**
     * Find the first Dependent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependentFindFirstArgs} args - Arguments to find a Dependent
     * @example
     * // Get one Dependent
     * const dependent = await prisma.dependent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DependentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DependentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Dependent'> extends True ? CheckSelect<T, Prisma__DependentClient<Dependent>, Prisma__DependentClient<DependentGetPayload<T>>> : CheckSelect<T, Prisma__DependentClient<Dependent | null >, Prisma__DependentClient<DependentGetPayload<T> | null >>

    /**
     * Find zero or more Dependents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dependents
     * const dependents = await prisma.dependent.findMany()
     * 
     * // Get first 10 Dependents
     * const dependents = await prisma.dependent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dependentWithIdOnly = await prisma.dependent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DependentFindManyArgs>(
      args?: SelectSubset<T, DependentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Dependent>>, PrismaPromise<Array<DependentGetPayload<T>>>>

    /**
     * Create a Dependent.
     * @param {DependentCreateArgs} args - Arguments to create a Dependent.
     * @example
     * // Create one Dependent
     * const Dependent = await prisma.dependent.create({
     *   data: {
     *     // ... data to create a Dependent
     *   }
     * })
     * 
    **/
    create<T extends DependentCreateArgs>(
      args: SelectSubset<T, DependentCreateArgs>
    ): CheckSelect<T, Prisma__DependentClient<Dependent>, Prisma__DependentClient<DependentGetPayload<T>>>

    /**
     * Create many Dependents.
     *     @param {DependentCreateManyArgs} args - Arguments to create many Dependents.
     *     @example
     *     // Create many Dependents
     *     const dependent = await prisma.dependent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DependentCreateManyArgs>(
      args?: SelectSubset<T, DependentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Dependent.
     * @param {DependentDeleteArgs} args - Arguments to delete one Dependent.
     * @example
     * // Delete one Dependent
     * const Dependent = await prisma.dependent.delete({
     *   where: {
     *     // ... filter to delete one Dependent
     *   }
     * })
     * 
    **/
    delete<T extends DependentDeleteArgs>(
      args: SelectSubset<T, DependentDeleteArgs>
    ): CheckSelect<T, Prisma__DependentClient<Dependent>, Prisma__DependentClient<DependentGetPayload<T>>>

    /**
     * Update one Dependent.
     * @param {DependentUpdateArgs} args - Arguments to update one Dependent.
     * @example
     * // Update one Dependent
     * const dependent = await prisma.dependent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DependentUpdateArgs>(
      args: SelectSubset<T, DependentUpdateArgs>
    ): CheckSelect<T, Prisma__DependentClient<Dependent>, Prisma__DependentClient<DependentGetPayload<T>>>

    /**
     * Delete zero or more Dependents.
     * @param {DependentDeleteManyArgs} args - Arguments to filter Dependents to delete.
     * @example
     * // Delete a few Dependents
     * const { count } = await prisma.dependent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DependentDeleteManyArgs>(
      args?: SelectSubset<T, DependentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dependents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dependents
     * const dependent = await prisma.dependent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DependentUpdateManyArgs>(
      args: SelectSubset<T, DependentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Dependent.
     * @param {DependentUpsertArgs} args - Arguments to update or create a Dependent.
     * @example
     * // Update or create a Dependent
     * const dependent = await prisma.dependent.upsert({
     *   create: {
     *     // ... data to create a Dependent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dependent we want to update
     *   }
     * })
    **/
    upsert<T extends DependentUpsertArgs>(
      args: SelectSubset<T, DependentUpsertArgs>
    ): CheckSelect<T, Prisma__DependentClient<Dependent>, Prisma__DependentClient<DependentGetPayload<T>>>

    /**
     * Find one Dependent that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {DependentFindUniqueOrThrowArgs} args - Arguments to find a Dependent
     * @example
     * // Get one Dependent
     * const dependent = await prisma.dependent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DependentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DependentFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__DependentClient<Dependent>, Prisma__DependentClient<DependentGetPayload<T>>>

    /**
     * Find the first Dependent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependentFindFirstOrThrowArgs} args - Arguments to find a Dependent
     * @example
     * // Get one Dependent
     * const dependent = await prisma.dependent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DependentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DependentFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__DependentClient<Dependent>, Prisma__DependentClient<DependentGetPayload<T>>>

    /**
     * Count the number of Dependents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependentCountArgs} args - Arguments to filter Dependents to count.
     * @example
     * // Count the number of Dependents
     * const count = await prisma.dependent.count({
     *   where: {
     *     // ... the filter for the Dependents we want to count
     *   }
     * })
    **/
    count<T extends DependentCountArgs>(
      args?: Subset<T, DependentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DependentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dependent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DependentAggregateArgs>(args: Subset<T, DependentAggregateArgs>): PrismaPromise<GetDependentAggregateType<T>>

    /**
     * Group by Dependent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DependentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DependentGroupByArgs['orderBy'] }
        : { orderBy?: DependentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DependentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDependentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Dependent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DependentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    responsible<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Dependent base type for findUnique actions
   */
  export type DependentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Dependent
     * 
    **/
    select?: DependentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DependentInclude | null
    /**
     * Filter, which Dependent to fetch.
     * 
    **/
    where: DependentWhereUniqueInput
  }

  /**
   * Dependent: findUnique
   */
  export interface DependentFindUniqueArgs extends DependentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Dependent base type for findFirst actions
   */
  export type DependentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Dependent
     * 
    **/
    select?: DependentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DependentInclude | null
    /**
     * Filter, which Dependent to fetch.
     * 
    **/
    where?: DependentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependents to fetch.
     * 
    **/
    orderBy?: Enumerable<DependentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dependents.
     * 
    **/
    cursor?: DependentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dependents.
     * 
    **/
    distinct?: Enumerable<DependentScalarFieldEnum>
  }

  /**
   * Dependent: findFirst
   */
  export interface DependentFindFirstArgs extends DependentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Dependent findMany
   */
  export type DependentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Dependent
     * 
    **/
    select?: DependentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DependentInclude | null
    /**
     * Filter, which Dependents to fetch.
     * 
    **/
    where?: DependentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependents to fetch.
     * 
    **/
    orderBy?: Enumerable<DependentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dependents.
     * 
    **/
    cursor?: DependentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependents.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DependentScalarFieldEnum>
  }


  /**
   * Dependent create
   */
  export type DependentCreateArgs = {
    /**
     * Select specific fields to fetch from the Dependent
     * 
    **/
    select?: DependentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DependentInclude | null
    /**
     * The data needed to create a Dependent.
     * 
    **/
    data: XOR<DependentCreateInput, DependentUncheckedCreateInput>
  }


  /**
   * Dependent createMany
   */
  export type DependentCreateManyArgs = {
    /**
     * The data used to create many Dependents.
     * 
    **/
    data: Enumerable<DependentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Dependent update
   */
  export type DependentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Dependent
     * 
    **/
    select?: DependentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DependentInclude | null
    /**
     * The data needed to update a Dependent.
     * 
    **/
    data: XOR<DependentUpdateInput, DependentUncheckedUpdateInput>
    /**
     * Choose, which Dependent to update.
     * 
    **/
    where: DependentWhereUniqueInput
  }


  /**
   * Dependent updateMany
   */
  export type DependentUpdateManyArgs = {
    /**
     * The data used to update Dependents.
     * 
    **/
    data: XOR<DependentUpdateManyMutationInput, DependentUncheckedUpdateManyInput>
    /**
     * Filter which Dependents to update
     * 
    **/
    where?: DependentWhereInput
  }


  /**
   * Dependent upsert
   */
  export type DependentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Dependent
     * 
    **/
    select?: DependentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DependentInclude | null
    /**
     * The filter to search for the Dependent to update in case it exists.
     * 
    **/
    where: DependentWhereUniqueInput
    /**
     * In case the Dependent found by the `where` argument doesn't exist, create a new Dependent with this data.
     * 
    **/
    create: XOR<DependentCreateInput, DependentUncheckedCreateInput>
    /**
     * In case the Dependent was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DependentUpdateInput, DependentUncheckedUpdateInput>
  }


  /**
   * Dependent delete
   */
  export type DependentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Dependent
     * 
    **/
    select?: DependentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DependentInclude | null
    /**
     * Filter which Dependent to delete.
     * 
    **/
    where: DependentWhereUniqueInput
  }


  /**
   * Dependent deleteMany
   */
  export type DependentDeleteManyArgs = {
    /**
     * Filter which Dependents to delete
     * 
    **/
    where?: DependentWhereInput
  }


  /**
   * Dependent: findUniqueOrThrow
   */
  export type DependentFindUniqueOrThrowArgs = DependentFindUniqueArgsBase
      

  /**
   * Dependent: findFirstOrThrow
   */
  export type DependentFindFirstOrThrowArgs = DependentFindFirstArgsBase
      

  /**
   * Dependent without action
   */
  export type DependentArgs = {
    /**
     * Select specific fields to fetch from the Dependent
     * 
    **/
    select?: DependentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DependentInclude | null
  }



  /**
   * Model Shot
   */


  export type AggregateShot = {
    _count: ShotCountAggregateOutputType | null
    _avg: ShotAvgAggregateOutputType | null
    _sum: ShotSumAggregateOutputType | null
    _min: ShotMinAggregateOutputType | null
    _max: ShotMaxAggregateOutputType | null
  }

  export type ShotAvgAggregateOutputType = {
    id: number | null
  }

  export type ShotSumAggregateOutputType = {
    id: number | null
  }

  export type ShotMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShotMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShotCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShotAvgAggregateInputType = {
    id?: true
  }

  export type ShotSumAggregateInputType = {
    id?: true
  }

  export type ShotMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShotMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShotCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShotAggregateArgs = {
    /**
     * Filter which Shot to aggregate.
     * 
    **/
    where?: ShotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shots to fetch.
     * 
    **/
    orderBy?: Enumerable<ShotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ShotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shots from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shots.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shots
    **/
    _count?: true | ShotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShotMaxAggregateInputType
  }

  export type GetShotAggregateType<T extends ShotAggregateArgs> = {
        [P in keyof T & keyof AggregateShot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShot[P]>
      : GetScalarType<T[P], AggregateShot[P]>
  }




  export type ShotGroupByArgs = {
    where?: ShotWhereInput
    orderBy?: Enumerable<ShotOrderByWithAggregationInput>
    by: Array<ShotScalarFieldEnum>
    having?: ShotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShotCountAggregateInputType | true
    _avg?: ShotAvgAggregateInputType
    _sum?: ShotSumAggregateInputType
    _min?: ShotMinAggregateInputType
    _max?: ShotMaxAggregateInputType
  }


  export type ShotGroupByOutputType = {
    id: number
    name: string
    description: string
    createdAt: Date | null
    updatedAt: Date | null
    _count: ShotCountAggregateOutputType | null
    _avg: ShotAvgAggregateOutputType | null
    _sum: ShotSumAggregateOutputType | null
    _min: ShotMinAggregateOutputType | null
    _max: ShotMaxAggregateOutputType | null
  }

  type GetShotGroupByPayload<T extends ShotGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ShotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShotGroupByOutputType[P]>
            : GetScalarType<T[P], ShotGroupByOutputType[P]>
        }
      >
    >


  export type ShotSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usersThatTook?: boolean | ShotsTakenByUserFindManyArgs
    _count?: boolean | ShotCountOutputTypeArgs
  }

  export type ShotInclude = {
    usersThatTook?: boolean | ShotsTakenByUserFindManyArgs
    _count?: boolean | ShotCountOutputTypeArgs
  }

  export type ShotGetPayload<
    S extends boolean | null | undefined | ShotArgs,
    U = keyof S
      > = S extends true
        ? Shot
    : S extends undefined
    ? never
    : S extends ShotArgs | ShotFindManyArgs
    ?'include' extends U
    ? Shot  & {
    [P in TrueKeys<S['include']>]:
        P extends 'usersThatTook' ? Array < ShotsTakenByUserGetPayload<S['include'][P]>>  :
        P extends '_count' ? ShotCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'usersThatTook' ? Array < ShotsTakenByUserGetPayload<S['select'][P]>>  :
        P extends '_count' ? ShotCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Shot ? Shot[P] : never
  } 
    : Shot
  : Shot


  type ShotCountArgs = Merge<
    Omit<ShotFindManyArgs, 'select' | 'include'> & {
      select?: ShotCountAggregateInputType | true
    }
  >

  export interface ShotDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Shot that matches the filter.
     * @param {ShotFindUniqueArgs} args - Arguments to find a Shot
     * @example
     * // Get one Shot
     * const shot = await prisma.shot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShotFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ShotFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Shot'> extends True ? CheckSelect<T, Prisma__ShotClient<Shot>, Prisma__ShotClient<ShotGetPayload<T>>> : CheckSelect<T, Prisma__ShotClient<Shot | null >, Prisma__ShotClient<ShotGetPayload<T> | null >>

    /**
     * Find the first Shot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShotFindFirstArgs} args - Arguments to find a Shot
     * @example
     * // Get one Shot
     * const shot = await prisma.shot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShotFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ShotFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Shot'> extends True ? CheckSelect<T, Prisma__ShotClient<Shot>, Prisma__ShotClient<ShotGetPayload<T>>> : CheckSelect<T, Prisma__ShotClient<Shot | null >, Prisma__ShotClient<ShotGetPayload<T> | null >>

    /**
     * Find zero or more Shots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShotFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shots
     * const shots = await prisma.shot.findMany()
     * 
     * // Get first 10 Shots
     * const shots = await prisma.shot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shotWithIdOnly = await prisma.shot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ShotFindManyArgs>(
      args?: SelectSubset<T, ShotFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Shot>>, PrismaPromise<Array<ShotGetPayload<T>>>>

    /**
     * Create a Shot.
     * @param {ShotCreateArgs} args - Arguments to create a Shot.
     * @example
     * // Create one Shot
     * const Shot = await prisma.shot.create({
     *   data: {
     *     // ... data to create a Shot
     *   }
     * })
     * 
    **/
    create<T extends ShotCreateArgs>(
      args: SelectSubset<T, ShotCreateArgs>
    ): CheckSelect<T, Prisma__ShotClient<Shot>, Prisma__ShotClient<ShotGetPayload<T>>>

    /**
     * Create many Shots.
     *     @param {ShotCreateManyArgs} args - Arguments to create many Shots.
     *     @example
     *     // Create many Shots
     *     const shot = await prisma.shot.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShotCreateManyArgs>(
      args?: SelectSubset<T, ShotCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Shot.
     * @param {ShotDeleteArgs} args - Arguments to delete one Shot.
     * @example
     * // Delete one Shot
     * const Shot = await prisma.shot.delete({
     *   where: {
     *     // ... filter to delete one Shot
     *   }
     * })
     * 
    **/
    delete<T extends ShotDeleteArgs>(
      args: SelectSubset<T, ShotDeleteArgs>
    ): CheckSelect<T, Prisma__ShotClient<Shot>, Prisma__ShotClient<ShotGetPayload<T>>>

    /**
     * Update one Shot.
     * @param {ShotUpdateArgs} args - Arguments to update one Shot.
     * @example
     * // Update one Shot
     * const shot = await prisma.shot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShotUpdateArgs>(
      args: SelectSubset<T, ShotUpdateArgs>
    ): CheckSelect<T, Prisma__ShotClient<Shot>, Prisma__ShotClient<ShotGetPayload<T>>>

    /**
     * Delete zero or more Shots.
     * @param {ShotDeleteManyArgs} args - Arguments to filter Shots to delete.
     * @example
     * // Delete a few Shots
     * const { count } = await prisma.shot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShotDeleteManyArgs>(
      args?: SelectSubset<T, ShotDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shots
     * const shot = await prisma.shot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShotUpdateManyArgs>(
      args: SelectSubset<T, ShotUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Shot.
     * @param {ShotUpsertArgs} args - Arguments to update or create a Shot.
     * @example
     * // Update or create a Shot
     * const shot = await prisma.shot.upsert({
     *   create: {
     *     // ... data to create a Shot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shot we want to update
     *   }
     * })
    **/
    upsert<T extends ShotUpsertArgs>(
      args: SelectSubset<T, ShotUpsertArgs>
    ): CheckSelect<T, Prisma__ShotClient<Shot>, Prisma__ShotClient<ShotGetPayload<T>>>

    /**
     * Find one Shot that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ShotFindUniqueOrThrowArgs} args - Arguments to find a Shot
     * @example
     * // Get one Shot
     * const shot = await prisma.shot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShotFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ShotFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ShotClient<Shot>, Prisma__ShotClient<ShotGetPayload<T>>>

    /**
     * Find the first Shot that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShotFindFirstOrThrowArgs} args - Arguments to find a Shot
     * @example
     * // Get one Shot
     * const shot = await prisma.shot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShotFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ShotFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ShotClient<Shot>, Prisma__ShotClient<ShotGetPayload<T>>>

    /**
     * Count the number of Shots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShotCountArgs} args - Arguments to filter Shots to count.
     * @example
     * // Count the number of Shots
     * const count = await prisma.shot.count({
     *   where: {
     *     // ... the filter for the Shots we want to count
     *   }
     * })
    **/
    count<T extends ShotCountArgs>(
      args?: Subset<T, ShotCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShotAggregateArgs>(args: Subset<T, ShotAggregateArgs>): PrismaPromise<GetShotAggregateType<T>>

    /**
     * Group by Shot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShotGroupByArgs['orderBy'] }
        : { orderBy?: ShotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShotGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Shot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ShotClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    usersThatTook<T extends ShotsTakenByUserFindManyArgs = {}>(args?: Subset<T, ShotsTakenByUserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ShotsTakenByUser>>, PrismaPromise<Array<ShotsTakenByUserGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Shot base type for findUnique actions
   */
  export type ShotFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Shot
     * 
    **/
    select?: ShotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShotInclude | null
    /**
     * Filter, which Shot to fetch.
     * 
    **/
    where: ShotWhereUniqueInput
  }

  /**
   * Shot: findUnique
   */
  export interface ShotFindUniqueArgs extends ShotFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Shot base type for findFirst actions
   */
  export type ShotFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Shot
     * 
    **/
    select?: ShotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShotInclude | null
    /**
     * Filter, which Shot to fetch.
     * 
    **/
    where?: ShotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shots to fetch.
     * 
    **/
    orderBy?: Enumerable<ShotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shots.
     * 
    **/
    cursor?: ShotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shots from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shots.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shots.
     * 
    **/
    distinct?: Enumerable<ShotScalarFieldEnum>
  }

  /**
   * Shot: findFirst
   */
  export interface ShotFindFirstArgs extends ShotFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Shot findMany
   */
  export type ShotFindManyArgs = {
    /**
     * Select specific fields to fetch from the Shot
     * 
    **/
    select?: ShotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShotInclude | null
    /**
     * Filter, which Shots to fetch.
     * 
    **/
    where?: ShotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shots to fetch.
     * 
    **/
    orderBy?: Enumerable<ShotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shots.
     * 
    **/
    cursor?: ShotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shots from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shots.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ShotScalarFieldEnum>
  }


  /**
   * Shot create
   */
  export type ShotCreateArgs = {
    /**
     * Select specific fields to fetch from the Shot
     * 
    **/
    select?: ShotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShotInclude | null
    /**
     * The data needed to create a Shot.
     * 
    **/
    data: XOR<ShotCreateInput, ShotUncheckedCreateInput>
  }


  /**
   * Shot createMany
   */
  export type ShotCreateManyArgs = {
    /**
     * The data used to create many Shots.
     * 
    **/
    data: Enumerable<ShotCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Shot update
   */
  export type ShotUpdateArgs = {
    /**
     * Select specific fields to fetch from the Shot
     * 
    **/
    select?: ShotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShotInclude | null
    /**
     * The data needed to update a Shot.
     * 
    **/
    data: XOR<ShotUpdateInput, ShotUncheckedUpdateInput>
    /**
     * Choose, which Shot to update.
     * 
    **/
    where: ShotWhereUniqueInput
  }


  /**
   * Shot updateMany
   */
  export type ShotUpdateManyArgs = {
    /**
     * The data used to update Shots.
     * 
    **/
    data: XOR<ShotUpdateManyMutationInput, ShotUncheckedUpdateManyInput>
    /**
     * Filter which Shots to update
     * 
    **/
    where?: ShotWhereInput
  }


  /**
   * Shot upsert
   */
  export type ShotUpsertArgs = {
    /**
     * Select specific fields to fetch from the Shot
     * 
    **/
    select?: ShotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShotInclude | null
    /**
     * The filter to search for the Shot to update in case it exists.
     * 
    **/
    where: ShotWhereUniqueInput
    /**
     * In case the Shot found by the `where` argument doesn't exist, create a new Shot with this data.
     * 
    **/
    create: XOR<ShotCreateInput, ShotUncheckedCreateInput>
    /**
     * In case the Shot was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ShotUpdateInput, ShotUncheckedUpdateInput>
  }


  /**
   * Shot delete
   */
  export type ShotDeleteArgs = {
    /**
     * Select specific fields to fetch from the Shot
     * 
    **/
    select?: ShotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShotInclude | null
    /**
     * Filter which Shot to delete.
     * 
    **/
    where: ShotWhereUniqueInput
  }


  /**
   * Shot deleteMany
   */
  export type ShotDeleteManyArgs = {
    /**
     * Filter which Shots to delete
     * 
    **/
    where?: ShotWhereInput
  }


  /**
   * Shot: findUniqueOrThrow
   */
  export type ShotFindUniqueOrThrowArgs = ShotFindUniqueArgsBase
      

  /**
   * Shot: findFirstOrThrow
   */
  export type ShotFindFirstOrThrowArgs = ShotFindFirstArgsBase
      

  /**
   * Shot without action
   */
  export type ShotArgs = {
    /**
     * Select specific fields to fetch from the Shot
     * 
    **/
    select?: ShotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShotInclude | null
  }



  /**
   * Model ShotsTakenByUser
   */


  export type AggregateShotsTakenByUser = {
    _count: ShotsTakenByUserCountAggregateOutputType | null
    _avg: ShotsTakenByUserAvgAggregateOutputType | null
    _sum: ShotsTakenByUserSumAggregateOutputType | null
    _min: ShotsTakenByUserMinAggregateOutputType | null
    _max: ShotsTakenByUserMaxAggregateOutputType | null
  }

  export type ShotsTakenByUserAvgAggregateOutputType = {
    userId: number | null
    shotId: number | null
  }

  export type ShotsTakenByUserSumAggregateOutputType = {
    userId: number | null
    shotId: number | null
  }

  export type ShotsTakenByUserMinAggregateOutputType = {
    userId: number | null
    shotId: number | null
  }

  export type ShotsTakenByUserMaxAggregateOutputType = {
    userId: number | null
    shotId: number | null
  }

  export type ShotsTakenByUserCountAggregateOutputType = {
    userId: number
    shotId: number
    _all: number
  }


  export type ShotsTakenByUserAvgAggregateInputType = {
    userId?: true
    shotId?: true
  }

  export type ShotsTakenByUserSumAggregateInputType = {
    userId?: true
    shotId?: true
  }

  export type ShotsTakenByUserMinAggregateInputType = {
    userId?: true
    shotId?: true
  }

  export type ShotsTakenByUserMaxAggregateInputType = {
    userId?: true
    shotId?: true
  }

  export type ShotsTakenByUserCountAggregateInputType = {
    userId?: true
    shotId?: true
    _all?: true
  }

  export type ShotsTakenByUserAggregateArgs = {
    /**
     * Filter which ShotsTakenByUser to aggregate.
     * 
    **/
    where?: ShotsTakenByUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShotsTakenByUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ShotsTakenByUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ShotsTakenByUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShotsTakenByUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShotsTakenByUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShotsTakenByUsers
    **/
    _count?: true | ShotsTakenByUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShotsTakenByUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShotsTakenByUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShotsTakenByUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShotsTakenByUserMaxAggregateInputType
  }

  export type GetShotsTakenByUserAggregateType<T extends ShotsTakenByUserAggregateArgs> = {
        [P in keyof T & keyof AggregateShotsTakenByUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShotsTakenByUser[P]>
      : GetScalarType<T[P], AggregateShotsTakenByUser[P]>
  }




  export type ShotsTakenByUserGroupByArgs = {
    where?: ShotsTakenByUserWhereInput
    orderBy?: Enumerable<ShotsTakenByUserOrderByWithAggregationInput>
    by: Array<ShotsTakenByUserScalarFieldEnum>
    having?: ShotsTakenByUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShotsTakenByUserCountAggregateInputType | true
    _avg?: ShotsTakenByUserAvgAggregateInputType
    _sum?: ShotsTakenByUserSumAggregateInputType
    _min?: ShotsTakenByUserMinAggregateInputType
    _max?: ShotsTakenByUserMaxAggregateInputType
  }


  export type ShotsTakenByUserGroupByOutputType = {
    userId: number
    shotId: number
    _count: ShotsTakenByUserCountAggregateOutputType | null
    _avg: ShotsTakenByUserAvgAggregateOutputType | null
    _sum: ShotsTakenByUserSumAggregateOutputType | null
    _min: ShotsTakenByUserMinAggregateOutputType | null
    _max: ShotsTakenByUserMaxAggregateOutputType | null
  }

  type GetShotsTakenByUserGroupByPayload<T extends ShotsTakenByUserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ShotsTakenByUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShotsTakenByUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShotsTakenByUserGroupByOutputType[P]>
            : GetScalarType<T[P], ShotsTakenByUserGroupByOutputType[P]>
        }
      >
    >


  export type ShotsTakenByUserSelect = {
    user?: boolean | UserArgs
    userId?: boolean
    shot?: boolean | ShotArgs
    shotId?: boolean
  }

  export type ShotsTakenByUserInclude = {
    user?: boolean | UserArgs
    shot?: boolean | ShotArgs
  }

  export type ShotsTakenByUserGetPayload<
    S extends boolean | null | undefined | ShotsTakenByUserArgs,
    U = keyof S
      > = S extends true
        ? ShotsTakenByUser
    : S extends undefined
    ? never
    : S extends ShotsTakenByUserArgs | ShotsTakenByUserFindManyArgs
    ?'include' extends U
    ? ShotsTakenByUser  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'shot' ? ShotGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'shot' ? ShotGetPayload<S['select'][P]> :  P extends keyof ShotsTakenByUser ? ShotsTakenByUser[P] : never
  } 
    : ShotsTakenByUser
  : ShotsTakenByUser


  type ShotsTakenByUserCountArgs = Merge<
    Omit<ShotsTakenByUserFindManyArgs, 'select' | 'include'> & {
      select?: ShotsTakenByUserCountAggregateInputType | true
    }
  >

  export interface ShotsTakenByUserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ShotsTakenByUser that matches the filter.
     * @param {ShotsTakenByUserFindUniqueArgs} args - Arguments to find a ShotsTakenByUser
     * @example
     * // Get one ShotsTakenByUser
     * const shotsTakenByUser = await prisma.shotsTakenByUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShotsTakenByUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ShotsTakenByUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ShotsTakenByUser'> extends True ? CheckSelect<T, Prisma__ShotsTakenByUserClient<ShotsTakenByUser>, Prisma__ShotsTakenByUserClient<ShotsTakenByUserGetPayload<T>>> : CheckSelect<T, Prisma__ShotsTakenByUserClient<ShotsTakenByUser | null >, Prisma__ShotsTakenByUserClient<ShotsTakenByUserGetPayload<T> | null >>

    /**
     * Find the first ShotsTakenByUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShotsTakenByUserFindFirstArgs} args - Arguments to find a ShotsTakenByUser
     * @example
     * // Get one ShotsTakenByUser
     * const shotsTakenByUser = await prisma.shotsTakenByUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShotsTakenByUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ShotsTakenByUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ShotsTakenByUser'> extends True ? CheckSelect<T, Prisma__ShotsTakenByUserClient<ShotsTakenByUser>, Prisma__ShotsTakenByUserClient<ShotsTakenByUserGetPayload<T>>> : CheckSelect<T, Prisma__ShotsTakenByUserClient<ShotsTakenByUser | null >, Prisma__ShotsTakenByUserClient<ShotsTakenByUserGetPayload<T> | null >>

    /**
     * Find zero or more ShotsTakenByUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShotsTakenByUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShotsTakenByUsers
     * const shotsTakenByUsers = await prisma.shotsTakenByUser.findMany()
     * 
     * // Get first 10 ShotsTakenByUsers
     * const shotsTakenByUsers = await prisma.shotsTakenByUser.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const shotsTakenByUserWithUserIdOnly = await prisma.shotsTakenByUser.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends ShotsTakenByUserFindManyArgs>(
      args?: SelectSubset<T, ShotsTakenByUserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ShotsTakenByUser>>, PrismaPromise<Array<ShotsTakenByUserGetPayload<T>>>>

    /**
     * Create a ShotsTakenByUser.
     * @param {ShotsTakenByUserCreateArgs} args - Arguments to create a ShotsTakenByUser.
     * @example
     * // Create one ShotsTakenByUser
     * const ShotsTakenByUser = await prisma.shotsTakenByUser.create({
     *   data: {
     *     // ... data to create a ShotsTakenByUser
     *   }
     * })
     * 
    **/
    create<T extends ShotsTakenByUserCreateArgs>(
      args: SelectSubset<T, ShotsTakenByUserCreateArgs>
    ): CheckSelect<T, Prisma__ShotsTakenByUserClient<ShotsTakenByUser>, Prisma__ShotsTakenByUserClient<ShotsTakenByUserGetPayload<T>>>

    /**
     * Create many ShotsTakenByUsers.
     *     @param {ShotsTakenByUserCreateManyArgs} args - Arguments to create many ShotsTakenByUsers.
     *     @example
     *     // Create many ShotsTakenByUsers
     *     const shotsTakenByUser = await prisma.shotsTakenByUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShotsTakenByUserCreateManyArgs>(
      args?: SelectSubset<T, ShotsTakenByUserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ShotsTakenByUser.
     * @param {ShotsTakenByUserDeleteArgs} args - Arguments to delete one ShotsTakenByUser.
     * @example
     * // Delete one ShotsTakenByUser
     * const ShotsTakenByUser = await prisma.shotsTakenByUser.delete({
     *   where: {
     *     // ... filter to delete one ShotsTakenByUser
     *   }
     * })
     * 
    **/
    delete<T extends ShotsTakenByUserDeleteArgs>(
      args: SelectSubset<T, ShotsTakenByUserDeleteArgs>
    ): CheckSelect<T, Prisma__ShotsTakenByUserClient<ShotsTakenByUser>, Prisma__ShotsTakenByUserClient<ShotsTakenByUserGetPayload<T>>>

    /**
     * Update one ShotsTakenByUser.
     * @param {ShotsTakenByUserUpdateArgs} args - Arguments to update one ShotsTakenByUser.
     * @example
     * // Update one ShotsTakenByUser
     * const shotsTakenByUser = await prisma.shotsTakenByUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShotsTakenByUserUpdateArgs>(
      args: SelectSubset<T, ShotsTakenByUserUpdateArgs>
    ): CheckSelect<T, Prisma__ShotsTakenByUserClient<ShotsTakenByUser>, Prisma__ShotsTakenByUserClient<ShotsTakenByUserGetPayload<T>>>

    /**
     * Delete zero or more ShotsTakenByUsers.
     * @param {ShotsTakenByUserDeleteManyArgs} args - Arguments to filter ShotsTakenByUsers to delete.
     * @example
     * // Delete a few ShotsTakenByUsers
     * const { count } = await prisma.shotsTakenByUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShotsTakenByUserDeleteManyArgs>(
      args?: SelectSubset<T, ShotsTakenByUserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShotsTakenByUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShotsTakenByUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShotsTakenByUsers
     * const shotsTakenByUser = await prisma.shotsTakenByUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShotsTakenByUserUpdateManyArgs>(
      args: SelectSubset<T, ShotsTakenByUserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ShotsTakenByUser.
     * @param {ShotsTakenByUserUpsertArgs} args - Arguments to update or create a ShotsTakenByUser.
     * @example
     * // Update or create a ShotsTakenByUser
     * const shotsTakenByUser = await prisma.shotsTakenByUser.upsert({
     *   create: {
     *     // ... data to create a ShotsTakenByUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShotsTakenByUser we want to update
     *   }
     * })
    **/
    upsert<T extends ShotsTakenByUserUpsertArgs>(
      args: SelectSubset<T, ShotsTakenByUserUpsertArgs>
    ): CheckSelect<T, Prisma__ShotsTakenByUserClient<ShotsTakenByUser>, Prisma__ShotsTakenByUserClient<ShotsTakenByUserGetPayload<T>>>

    /**
     * Find one ShotsTakenByUser that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ShotsTakenByUserFindUniqueOrThrowArgs} args - Arguments to find a ShotsTakenByUser
     * @example
     * // Get one ShotsTakenByUser
     * const shotsTakenByUser = await prisma.shotsTakenByUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShotsTakenByUserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ShotsTakenByUserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ShotsTakenByUserClient<ShotsTakenByUser>, Prisma__ShotsTakenByUserClient<ShotsTakenByUserGetPayload<T>>>

    /**
     * Find the first ShotsTakenByUser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShotsTakenByUserFindFirstOrThrowArgs} args - Arguments to find a ShotsTakenByUser
     * @example
     * // Get one ShotsTakenByUser
     * const shotsTakenByUser = await prisma.shotsTakenByUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShotsTakenByUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ShotsTakenByUserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ShotsTakenByUserClient<ShotsTakenByUser>, Prisma__ShotsTakenByUserClient<ShotsTakenByUserGetPayload<T>>>

    /**
     * Count the number of ShotsTakenByUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShotsTakenByUserCountArgs} args - Arguments to filter ShotsTakenByUsers to count.
     * @example
     * // Count the number of ShotsTakenByUsers
     * const count = await prisma.shotsTakenByUser.count({
     *   where: {
     *     // ... the filter for the ShotsTakenByUsers we want to count
     *   }
     * })
    **/
    count<T extends ShotsTakenByUserCountArgs>(
      args?: Subset<T, ShotsTakenByUserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShotsTakenByUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShotsTakenByUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShotsTakenByUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShotsTakenByUserAggregateArgs>(args: Subset<T, ShotsTakenByUserAggregateArgs>): PrismaPromise<GetShotsTakenByUserAggregateType<T>>

    /**
     * Group by ShotsTakenByUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShotsTakenByUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShotsTakenByUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShotsTakenByUserGroupByArgs['orderBy'] }
        : { orderBy?: ShotsTakenByUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShotsTakenByUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShotsTakenByUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ShotsTakenByUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ShotsTakenByUserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    shot<T extends ShotArgs = {}>(args?: Subset<T, ShotArgs>): CheckSelect<T, Prisma__ShotClient<Shot | null >, Prisma__ShotClient<ShotGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ShotsTakenByUser base type for findUnique actions
   */
  export type ShotsTakenByUserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ShotsTakenByUser
     * 
    **/
    select?: ShotsTakenByUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShotsTakenByUserInclude | null
    /**
     * Filter, which ShotsTakenByUser to fetch.
     * 
    **/
    where: ShotsTakenByUserWhereUniqueInput
  }

  /**
   * ShotsTakenByUser: findUnique
   */
  export interface ShotsTakenByUserFindUniqueArgs extends ShotsTakenByUserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShotsTakenByUser base type for findFirst actions
   */
  export type ShotsTakenByUserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ShotsTakenByUser
     * 
    **/
    select?: ShotsTakenByUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShotsTakenByUserInclude | null
    /**
     * Filter, which ShotsTakenByUser to fetch.
     * 
    **/
    where?: ShotsTakenByUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShotsTakenByUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ShotsTakenByUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShotsTakenByUsers.
     * 
    **/
    cursor?: ShotsTakenByUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShotsTakenByUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShotsTakenByUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShotsTakenByUsers.
     * 
    **/
    distinct?: Enumerable<ShotsTakenByUserScalarFieldEnum>
  }

  /**
   * ShotsTakenByUser: findFirst
   */
  export interface ShotsTakenByUserFindFirstArgs extends ShotsTakenByUserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShotsTakenByUser findMany
   */
  export type ShotsTakenByUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the ShotsTakenByUser
     * 
    **/
    select?: ShotsTakenByUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShotsTakenByUserInclude | null
    /**
     * Filter, which ShotsTakenByUsers to fetch.
     * 
    **/
    where?: ShotsTakenByUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShotsTakenByUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ShotsTakenByUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShotsTakenByUsers.
     * 
    **/
    cursor?: ShotsTakenByUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShotsTakenByUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShotsTakenByUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ShotsTakenByUserScalarFieldEnum>
  }


  /**
   * ShotsTakenByUser create
   */
  export type ShotsTakenByUserCreateArgs = {
    /**
     * Select specific fields to fetch from the ShotsTakenByUser
     * 
    **/
    select?: ShotsTakenByUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShotsTakenByUserInclude | null
    /**
     * The data needed to create a ShotsTakenByUser.
     * 
    **/
    data: XOR<ShotsTakenByUserCreateInput, ShotsTakenByUserUncheckedCreateInput>
  }


  /**
   * ShotsTakenByUser createMany
   */
  export type ShotsTakenByUserCreateManyArgs = {
    /**
     * The data used to create many ShotsTakenByUsers.
     * 
    **/
    data: Enumerable<ShotsTakenByUserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ShotsTakenByUser update
   */
  export type ShotsTakenByUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the ShotsTakenByUser
     * 
    **/
    select?: ShotsTakenByUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShotsTakenByUserInclude | null
    /**
     * The data needed to update a ShotsTakenByUser.
     * 
    **/
    data: XOR<ShotsTakenByUserUpdateInput, ShotsTakenByUserUncheckedUpdateInput>
    /**
     * Choose, which ShotsTakenByUser to update.
     * 
    **/
    where: ShotsTakenByUserWhereUniqueInput
  }


  /**
   * ShotsTakenByUser updateMany
   */
  export type ShotsTakenByUserUpdateManyArgs = {
    /**
     * The data used to update ShotsTakenByUsers.
     * 
    **/
    data: XOR<ShotsTakenByUserUpdateManyMutationInput, ShotsTakenByUserUncheckedUpdateManyInput>
    /**
     * Filter which ShotsTakenByUsers to update
     * 
    **/
    where?: ShotsTakenByUserWhereInput
  }


  /**
   * ShotsTakenByUser upsert
   */
  export type ShotsTakenByUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the ShotsTakenByUser
     * 
    **/
    select?: ShotsTakenByUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShotsTakenByUserInclude | null
    /**
     * The filter to search for the ShotsTakenByUser to update in case it exists.
     * 
    **/
    where: ShotsTakenByUserWhereUniqueInput
    /**
     * In case the ShotsTakenByUser found by the `where` argument doesn't exist, create a new ShotsTakenByUser with this data.
     * 
    **/
    create: XOR<ShotsTakenByUserCreateInput, ShotsTakenByUserUncheckedCreateInput>
    /**
     * In case the ShotsTakenByUser was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ShotsTakenByUserUpdateInput, ShotsTakenByUserUncheckedUpdateInput>
  }


  /**
   * ShotsTakenByUser delete
   */
  export type ShotsTakenByUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the ShotsTakenByUser
     * 
    **/
    select?: ShotsTakenByUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShotsTakenByUserInclude | null
    /**
     * Filter which ShotsTakenByUser to delete.
     * 
    **/
    where: ShotsTakenByUserWhereUniqueInput
  }


  /**
   * ShotsTakenByUser deleteMany
   */
  export type ShotsTakenByUserDeleteManyArgs = {
    /**
     * Filter which ShotsTakenByUsers to delete
     * 
    **/
    where?: ShotsTakenByUserWhereInput
  }


  /**
   * ShotsTakenByUser: findUniqueOrThrow
   */
  export type ShotsTakenByUserFindUniqueOrThrowArgs = ShotsTakenByUserFindUniqueArgsBase
      

  /**
   * ShotsTakenByUser: findFirstOrThrow
   */
  export type ShotsTakenByUserFindFirstOrThrowArgs = ShotsTakenByUserFindFirstArgsBase
      

  /**
   * ShotsTakenByUser without action
   */
  export type ShotsTakenByUserArgs = {
    /**
     * Select specific fields to fetch from the ShotsTakenByUser
     * 
    **/
    select?: ShotsTakenByUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShotsTakenByUserInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const DependentScalarFieldEnum: {
    id: 'id',
    cpf: 'cpf',
    name: 'name',
    email: 'email',
    password: 'password',
    age: 'age',
    responsibleId: 'responsibleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DependentScalarFieldEnum = (typeof DependentScalarFieldEnum)[keyof typeof DependentScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ShotScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShotScalarFieldEnum = (typeof ShotScalarFieldEnum)[keyof typeof ShotScalarFieldEnum]


  export const ShotsTakenByUserScalarFieldEnum: {
    userId: 'userId',
    shotId: 'shotId'
  };

  export type ShotsTakenByUserScalarFieldEnum = (typeof ShotsTakenByUserScalarFieldEnum)[keyof typeof ShotsTakenByUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    cpf: 'cpf',
    name: 'name',
    email: 'email',
    age: 'age',
    phone: 'phone',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    cpf?: StringFilter | string
    name?: StringFilter | string
    email?: StringFilter | string
    age?: IntFilter | number
    phone?: StringFilter | string
    dependents?: DependentListRelationFilter
    password?: StringFilter | string
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    shotsTakenByUser?: ShotsTakenByUserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    cpf?: SortOrder
    name?: SortOrder
    email?: SortOrder
    age?: SortOrder
    phone?: SortOrder
    dependents?: DependentOrderByRelationAggregateInput
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shotsTakenByUser?: ShotsTakenByUserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    cpf?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    cpf?: SortOrder
    name?: SortOrder
    email?: SortOrder
    age?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    cpf?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    age?: IntWithAggregatesFilter | number
    phone?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type DependentWhereInput = {
    AND?: Enumerable<DependentWhereInput>
    OR?: Enumerable<DependentWhereInput>
    NOT?: Enumerable<DependentWhereInput>
    id?: IntFilter | number
    cpf?: StringFilter | string
    name?: StringFilter | string
    email?: StringNullableFilter | string | null
    password?: StringNullableFilter | string | null
    age?: IntFilter | number
    responsible?: XOR<UserRelationFilter, UserWhereInput>
    responsibleId?: IntFilter | number
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
  }

  export type DependentOrderByWithRelationInput = {
    id?: SortOrder
    cpf?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    age?: SortOrder
    responsible?: UserOrderByWithRelationInput
    responsibleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DependentWhereUniqueInput = {
    id?: number
    cpf?: string
  }

  export type DependentOrderByWithAggregationInput = {
    id?: SortOrder
    cpf?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    age?: SortOrder
    responsibleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DependentCountOrderByAggregateInput
    _avg?: DependentAvgOrderByAggregateInput
    _max?: DependentMaxOrderByAggregateInput
    _min?: DependentMinOrderByAggregateInput
    _sum?: DependentSumOrderByAggregateInput
  }

  export type DependentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DependentScalarWhereWithAggregatesInput>
    OR?: Enumerable<DependentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DependentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    cpf?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    email?: StringNullableWithAggregatesFilter | string | null
    password?: StringNullableWithAggregatesFilter | string | null
    age?: IntWithAggregatesFilter | number
    responsibleId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type ShotWhereInput = {
    AND?: Enumerable<ShotWhereInput>
    OR?: Enumerable<ShotWhereInput>
    NOT?: Enumerable<ShotWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    usersThatTook?: ShotsTakenByUserListRelationFilter
  }

  export type ShotOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersThatTook?: ShotsTakenByUserOrderByRelationAggregateInput
  }

  export type ShotWhereUniqueInput = {
    id?: number
  }

  export type ShotOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShotCountOrderByAggregateInput
    _avg?: ShotAvgOrderByAggregateInput
    _max?: ShotMaxOrderByAggregateInput
    _min?: ShotMinOrderByAggregateInput
    _sum?: ShotSumOrderByAggregateInput
  }

  export type ShotScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ShotScalarWhereWithAggregatesInput>
    OR?: Enumerable<ShotScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ShotScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type ShotsTakenByUserWhereInput = {
    AND?: Enumerable<ShotsTakenByUserWhereInput>
    OR?: Enumerable<ShotsTakenByUserWhereInput>
    NOT?: Enumerable<ShotsTakenByUserWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
    shot?: XOR<ShotRelationFilter, ShotWhereInput>
    shotId?: IntFilter | number
  }

  export type ShotsTakenByUserOrderByWithRelationInput = {
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    shot?: ShotOrderByWithRelationInput
    shotId?: SortOrder
  }

  export type ShotsTakenByUserWhereUniqueInput = {
    shotId_userId?: ShotsTakenByUserShotIdUserIdCompoundUniqueInput
  }

  export type ShotsTakenByUserOrderByWithAggregationInput = {
    userId?: SortOrder
    shotId?: SortOrder
    _count?: ShotsTakenByUserCountOrderByAggregateInput
    _avg?: ShotsTakenByUserAvgOrderByAggregateInput
    _max?: ShotsTakenByUserMaxOrderByAggregateInput
    _min?: ShotsTakenByUserMinOrderByAggregateInput
    _sum?: ShotsTakenByUserSumOrderByAggregateInput
  }

  export type ShotsTakenByUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ShotsTakenByUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<ShotsTakenByUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ShotsTakenByUserScalarWhereWithAggregatesInput>
    userId?: IntWithAggregatesFilter | number
    shotId?: IntWithAggregatesFilter | number
  }

  export type UserCreateInput = {
    cpf: string
    name: string
    email: string
    age: number
    phone: string
    dependents?: DependentCreateNestedManyWithoutResponsibleInput
    password: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    shotsTakenByUser?: ShotsTakenByUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    cpf: string
    name: string
    email: string
    age: number
    phone: string
    dependents?: DependentUncheckedCreateNestedManyWithoutResponsibleInput
    password: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    shotsTakenByUser?: ShotsTakenByUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    dependents?: DependentUpdateManyWithoutResponsibleNestedInput
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shotsTakenByUser?: ShotsTakenByUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    dependents?: DependentUncheckedUpdateManyWithoutResponsibleNestedInput
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shotsTakenByUser?: ShotsTakenByUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    cpf: string
    name: string
    email: string
    age: number
    phone: string
    password: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DependentCreateInput = {
    cpf: string
    name: string
    email?: string | null
    password?: string | null
    age: number
    responsible: UserCreateNestedOneWithoutDependentsInput
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type DependentUncheckedCreateInput = {
    id?: number
    cpf: string
    name: string
    email?: string | null
    password?: string | null
    age: number
    responsibleId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type DependentUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    responsible?: UserUpdateOneRequiredWithoutDependentsNestedInput
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DependentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    responsibleId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DependentCreateManyInput = {
    id?: number
    cpf: string
    name: string
    email?: string | null
    password?: string | null
    age: number
    responsibleId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type DependentUpdateManyMutationInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DependentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    responsibleId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShotCreateInput = {
    name: string
    description: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    usersThatTook?: ShotsTakenByUserCreateNestedManyWithoutShotInput
  }

  export type ShotUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    usersThatTook?: ShotsTakenByUserUncheckedCreateNestedManyWithoutShotInput
  }

  export type ShotUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usersThatTook?: ShotsTakenByUserUpdateManyWithoutShotNestedInput
  }

  export type ShotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usersThatTook?: ShotsTakenByUserUncheckedUpdateManyWithoutShotNestedInput
  }

  export type ShotCreateManyInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ShotUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShotsTakenByUserCreateInput = {
    user: UserCreateNestedOneWithoutShotsTakenByUserInput
    shot: ShotCreateNestedOneWithoutUsersThatTookInput
  }

  export type ShotsTakenByUserUncheckedCreateInput = {
    userId: number
    shotId: number
  }

  export type ShotsTakenByUserUpdateInput = {
    user?: UserUpdateOneRequiredWithoutShotsTakenByUserNestedInput
    shot?: ShotUpdateOneRequiredWithoutUsersThatTookNestedInput
  }

  export type ShotsTakenByUserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    shotId?: IntFieldUpdateOperationsInput | number
  }

  export type ShotsTakenByUserCreateManyInput = {
    userId: number
    shotId: number
  }

  export type ShotsTakenByUserUpdateManyMutationInput = {

  }

  export type ShotsTakenByUserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    shotId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DependentListRelationFilter = {
    every?: DependentWhereInput
    some?: DependentWhereInput
    none?: DependentWhereInput
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type ShotsTakenByUserListRelationFilter = {
    every?: ShotsTakenByUserWhereInput
    some?: ShotsTakenByUserWhereInput
    none?: ShotsTakenByUserWhereInput
  }

  export type DependentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShotsTakenByUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    name?: SortOrder
    email?: SortOrder
    age?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    name?: SortOrder
    email?: SortOrder
    age?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    name?: SortOrder
    email?: SortOrder
    age?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DependentCountOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    age?: SortOrder
    responsibleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DependentAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    responsibleId?: SortOrder
  }

  export type DependentMaxOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    age?: SortOrder
    responsibleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DependentMinOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    age?: SortOrder
    responsibleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DependentSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    responsibleId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type ShotCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShotAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ShotMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShotMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShotSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ShotRelationFilter = {
    is?: ShotWhereInput
    isNot?: ShotWhereInput
  }

  export type ShotsTakenByUserShotIdUserIdCompoundUniqueInput = {
    shotId: number
    userId: number
  }

  export type ShotsTakenByUserCountOrderByAggregateInput = {
    userId?: SortOrder
    shotId?: SortOrder
  }

  export type ShotsTakenByUserAvgOrderByAggregateInput = {
    userId?: SortOrder
    shotId?: SortOrder
  }

  export type ShotsTakenByUserMaxOrderByAggregateInput = {
    userId?: SortOrder
    shotId?: SortOrder
  }

  export type ShotsTakenByUserMinOrderByAggregateInput = {
    userId?: SortOrder
    shotId?: SortOrder
  }

  export type ShotsTakenByUserSumOrderByAggregateInput = {
    userId?: SortOrder
    shotId?: SortOrder
  }

  export type DependentCreateNestedManyWithoutResponsibleInput = {
    create?: XOR<Enumerable<DependentCreateWithoutResponsibleInput>, Enumerable<DependentUncheckedCreateWithoutResponsibleInput>>
    connectOrCreate?: Enumerable<DependentCreateOrConnectWithoutResponsibleInput>
    createMany?: DependentCreateManyResponsibleInputEnvelope
    connect?: Enumerable<DependentWhereUniqueInput>
  }

  export type ShotsTakenByUserCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ShotsTakenByUserCreateWithoutUserInput>, Enumerable<ShotsTakenByUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ShotsTakenByUserCreateOrConnectWithoutUserInput>
    createMany?: ShotsTakenByUserCreateManyUserInputEnvelope
    connect?: Enumerable<ShotsTakenByUserWhereUniqueInput>
  }

  export type DependentUncheckedCreateNestedManyWithoutResponsibleInput = {
    create?: XOR<Enumerable<DependentCreateWithoutResponsibleInput>, Enumerable<DependentUncheckedCreateWithoutResponsibleInput>>
    connectOrCreate?: Enumerable<DependentCreateOrConnectWithoutResponsibleInput>
    createMany?: DependentCreateManyResponsibleInputEnvelope
    connect?: Enumerable<DependentWhereUniqueInput>
  }

  export type ShotsTakenByUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ShotsTakenByUserCreateWithoutUserInput>, Enumerable<ShotsTakenByUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ShotsTakenByUserCreateOrConnectWithoutUserInput>
    createMany?: ShotsTakenByUserCreateManyUserInputEnvelope
    connect?: Enumerable<ShotsTakenByUserWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DependentUpdateManyWithoutResponsibleNestedInput = {
    create?: XOR<Enumerable<DependentCreateWithoutResponsibleInput>, Enumerable<DependentUncheckedCreateWithoutResponsibleInput>>
    connectOrCreate?: Enumerable<DependentCreateOrConnectWithoutResponsibleInput>
    upsert?: Enumerable<DependentUpsertWithWhereUniqueWithoutResponsibleInput>
    createMany?: DependentCreateManyResponsibleInputEnvelope
    set?: Enumerable<DependentWhereUniqueInput>
    disconnect?: Enumerable<DependentWhereUniqueInput>
    delete?: Enumerable<DependentWhereUniqueInput>
    connect?: Enumerable<DependentWhereUniqueInput>
    update?: Enumerable<DependentUpdateWithWhereUniqueWithoutResponsibleInput>
    updateMany?: Enumerable<DependentUpdateManyWithWhereWithoutResponsibleInput>
    deleteMany?: Enumerable<DependentScalarWhereInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ShotsTakenByUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ShotsTakenByUserCreateWithoutUserInput>, Enumerable<ShotsTakenByUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ShotsTakenByUserCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ShotsTakenByUserUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ShotsTakenByUserCreateManyUserInputEnvelope
    set?: Enumerable<ShotsTakenByUserWhereUniqueInput>
    disconnect?: Enumerable<ShotsTakenByUserWhereUniqueInput>
    delete?: Enumerable<ShotsTakenByUserWhereUniqueInput>
    connect?: Enumerable<ShotsTakenByUserWhereUniqueInput>
    update?: Enumerable<ShotsTakenByUserUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ShotsTakenByUserUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ShotsTakenByUserScalarWhereInput>
  }

  export type DependentUncheckedUpdateManyWithoutResponsibleNestedInput = {
    create?: XOR<Enumerable<DependentCreateWithoutResponsibleInput>, Enumerable<DependentUncheckedCreateWithoutResponsibleInput>>
    connectOrCreate?: Enumerable<DependentCreateOrConnectWithoutResponsibleInput>
    upsert?: Enumerable<DependentUpsertWithWhereUniqueWithoutResponsibleInput>
    createMany?: DependentCreateManyResponsibleInputEnvelope
    set?: Enumerable<DependentWhereUniqueInput>
    disconnect?: Enumerable<DependentWhereUniqueInput>
    delete?: Enumerable<DependentWhereUniqueInput>
    connect?: Enumerable<DependentWhereUniqueInput>
    update?: Enumerable<DependentUpdateWithWhereUniqueWithoutResponsibleInput>
    updateMany?: Enumerable<DependentUpdateManyWithWhereWithoutResponsibleInput>
    deleteMany?: Enumerable<DependentScalarWhereInput>
  }

  export type ShotsTakenByUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ShotsTakenByUserCreateWithoutUserInput>, Enumerable<ShotsTakenByUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ShotsTakenByUserCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ShotsTakenByUserUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ShotsTakenByUserCreateManyUserInputEnvelope
    set?: Enumerable<ShotsTakenByUserWhereUniqueInput>
    disconnect?: Enumerable<ShotsTakenByUserWhereUniqueInput>
    delete?: Enumerable<ShotsTakenByUserWhereUniqueInput>
    connect?: Enumerable<ShotsTakenByUserWhereUniqueInput>
    update?: Enumerable<ShotsTakenByUserUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ShotsTakenByUserUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ShotsTakenByUserScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutDependentsInput = {
    create?: XOR<UserCreateWithoutDependentsInput, UserUncheckedCreateWithoutDependentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDependentsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutDependentsNestedInput = {
    create?: XOR<UserCreateWithoutDependentsInput, UserUncheckedCreateWithoutDependentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDependentsInput
    upsert?: UserUpsertWithoutDependentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutDependentsInput, UserUncheckedUpdateWithoutDependentsInput>
  }

  export type ShotsTakenByUserCreateNestedManyWithoutShotInput = {
    create?: XOR<Enumerable<ShotsTakenByUserCreateWithoutShotInput>, Enumerable<ShotsTakenByUserUncheckedCreateWithoutShotInput>>
    connectOrCreate?: Enumerable<ShotsTakenByUserCreateOrConnectWithoutShotInput>
    createMany?: ShotsTakenByUserCreateManyShotInputEnvelope
    connect?: Enumerable<ShotsTakenByUserWhereUniqueInput>
  }

  export type ShotsTakenByUserUncheckedCreateNestedManyWithoutShotInput = {
    create?: XOR<Enumerable<ShotsTakenByUserCreateWithoutShotInput>, Enumerable<ShotsTakenByUserUncheckedCreateWithoutShotInput>>
    connectOrCreate?: Enumerable<ShotsTakenByUserCreateOrConnectWithoutShotInput>
    createMany?: ShotsTakenByUserCreateManyShotInputEnvelope
    connect?: Enumerable<ShotsTakenByUserWhereUniqueInput>
  }

  export type ShotsTakenByUserUpdateManyWithoutShotNestedInput = {
    create?: XOR<Enumerable<ShotsTakenByUserCreateWithoutShotInput>, Enumerable<ShotsTakenByUserUncheckedCreateWithoutShotInput>>
    connectOrCreate?: Enumerable<ShotsTakenByUserCreateOrConnectWithoutShotInput>
    upsert?: Enumerable<ShotsTakenByUserUpsertWithWhereUniqueWithoutShotInput>
    createMany?: ShotsTakenByUserCreateManyShotInputEnvelope
    set?: Enumerable<ShotsTakenByUserWhereUniqueInput>
    disconnect?: Enumerable<ShotsTakenByUserWhereUniqueInput>
    delete?: Enumerable<ShotsTakenByUserWhereUniqueInput>
    connect?: Enumerable<ShotsTakenByUserWhereUniqueInput>
    update?: Enumerable<ShotsTakenByUserUpdateWithWhereUniqueWithoutShotInput>
    updateMany?: Enumerable<ShotsTakenByUserUpdateManyWithWhereWithoutShotInput>
    deleteMany?: Enumerable<ShotsTakenByUserScalarWhereInput>
  }

  export type ShotsTakenByUserUncheckedUpdateManyWithoutShotNestedInput = {
    create?: XOR<Enumerable<ShotsTakenByUserCreateWithoutShotInput>, Enumerable<ShotsTakenByUserUncheckedCreateWithoutShotInput>>
    connectOrCreate?: Enumerable<ShotsTakenByUserCreateOrConnectWithoutShotInput>
    upsert?: Enumerable<ShotsTakenByUserUpsertWithWhereUniqueWithoutShotInput>
    createMany?: ShotsTakenByUserCreateManyShotInputEnvelope
    set?: Enumerable<ShotsTakenByUserWhereUniqueInput>
    disconnect?: Enumerable<ShotsTakenByUserWhereUniqueInput>
    delete?: Enumerable<ShotsTakenByUserWhereUniqueInput>
    connect?: Enumerable<ShotsTakenByUserWhereUniqueInput>
    update?: Enumerable<ShotsTakenByUserUpdateWithWhereUniqueWithoutShotInput>
    updateMany?: Enumerable<ShotsTakenByUserUpdateManyWithWhereWithoutShotInput>
    deleteMany?: Enumerable<ShotsTakenByUserScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutShotsTakenByUserInput = {
    create?: XOR<UserCreateWithoutShotsTakenByUserInput, UserUncheckedCreateWithoutShotsTakenByUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutShotsTakenByUserInput
    connect?: UserWhereUniqueInput
  }

  export type ShotCreateNestedOneWithoutUsersThatTookInput = {
    create?: XOR<ShotCreateWithoutUsersThatTookInput, ShotUncheckedCreateWithoutUsersThatTookInput>
    connectOrCreate?: ShotCreateOrConnectWithoutUsersThatTookInput
    connect?: ShotWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutShotsTakenByUserNestedInput = {
    create?: XOR<UserCreateWithoutShotsTakenByUserInput, UserUncheckedCreateWithoutShotsTakenByUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutShotsTakenByUserInput
    upsert?: UserUpsertWithoutShotsTakenByUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutShotsTakenByUserInput, UserUncheckedUpdateWithoutShotsTakenByUserInput>
  }

  export type ShotUpdateOneRequiredWithoutUsersThatTookNestedInput = {
    create?: XOR<ShotCreateWithoutUsersThatTookInput, ShotUncheckedCreateWithoutUsersThatTookInput>
    connectOrCreate?: ShotCreateOrConnectWithoutUsersThatTookInput
    upsert?: ShotUpsertWithoutUsersThatTookInput
    connect?: ShotWhereUniqueInput
    update?: XOR<ShotUpdateWithoutUsersThatTookInput, ShotUncheckedUpdateWithoutUsersThatTookInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DependentCreateWithoutResponsibleInput = {
    cpf: string
    name: string
    email?: string | null
    password?: string | null
    age: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type DependentUncheckedCreateWithoutResponsibleInput = {
    id?: number
    cpf: string
    name: string
    email?: string | null
    password?: string | null
    age: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type DependentCreateOrConnectWithoutResponsibleInput = {
    where: DependentWhereUniqueInput
    create: XOR<DependentCreateWithoutResponsibleInput, DependentUncheckedCreateWithoutResponsibleInput>
  }

  export type DependentCreateManyResponsibleInputEnvelope = {
    data: Enumerable<DependentCreateManyResponsibleInput>
    skipDuplicates?: boolean
  }

  export type ShotsTakenByUserCreateWithoutUserInput = {
    shot: ShotCreateNestedOneWithoutUsersThatTookInput
  }

  export type ShotsTakenByUserUncheckedCreateWithoutUserInput = {
    shotId: number
  }

  export type ShotsTakenByUserCreateOrConnectWithoutUserInput = {
    where: ShotsTakenByUserWhereUniqueInput
    create: XOR<ShotsTakenByUserCreateWithoutUserInput, ShotsTakenByUserUncheckedCreateWithoutUserInput>
  }

  export type ShotsTakenByUserCreateManyUserInputEnvelope = {
    data: Enumerable<ShotsTakenByUserCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type DependentUpsertWithWhereUniqueWithoutResponsibleInput = {
    where: DependentWhereUniqueInput
    update: XOR<DependentUpdateWithoutResponsibleInput, DependentUncheckedUpdateWithoutResponsibleInput>
    create: XOR<DependentCreateWithoutResponsibleInput, DependentUncheckedCreateWithoutResponsibleInput>
  }

  export type DependentUpdateWithWhereUniqueWithoutResponsibleInput = {
    where: DependentWhereUniqueInput
    data: XOR<DependentUpdateWithoutResponsibleInput, DependentUncheckedUpdateWithoutResponsibleInput>
  }

  export type DependentUpdateManyWithWhereWithoutResponsibleInput = {
    where: DependentScalarWhereInput
    data: XOR<DependentUpdateManyMutationInput, DependentUncheckedUpdateManyWithoutDependentsInput>
  }

  export type DependentScalarWhereInput = {
    AND?: Enumerable<DependentScalarWhereInput>
    OR?: Enumerable<DependentScalarWhereInput>
    NOT?: Enumerable<DependentScalarWhereInput>
    id?: IntFilter | number
    cpf?: StringFilter | string
    name?: StringFilter | string
    email?: StringNullableFilter | string | null
    password?: StringNullableFilter | string | null
    age?: IntFilter | number
    responsibleId?: IntFilter | number
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
  }

  export type ShotsTakenByUserUpsertWithWhereUniqueWithoutUserInput = {
    where: ShotsTakenByUserWhereUniqueInput
    update: XOR<ShotsTakenByUserUpdateWithoutUserInput, ShotsTakenByUserUncheckedUpdateWithoutUserInput>
    create: XOR<ShotsTakenByUserCreateWithoutUserInput, ShotsTakenByUserUncheckedCreateWithoutUserInput>
  }

  export type ShotsTakenByUserUpdateWithWhereUniqueWithoutUserInput = {
    where: ShotsTakenByUserWhereUniqueInput
    data: XOR<ShotsTakenByUserUpdateWithoutUserInput, ShotsTakenByUserUncheckedUpdateWithoutUserInput>
  }

  export type ShotsTakenByUserUpdateManyWithWhereWithoutUserInput = {
    where: ShotsTakenByUserScalarWhereInput
    data: XOR<ShotsTakenByUserUpdateManyMutationInput, ShotsTakenByUserUncheckedUpdateManyWithoutShotsTakenByUserInput>
  }

  export type ShotsTakenByUserScalarWhereInput = {
    AND?: Enumerable<ShotsTakenByUserScalarWhereInput>
    OR?: Enumerable<ShotsTakenByUserScalarWhereInput>
    NOT?: Enumerable<ShotsTakenByUserScalarWhereInput>
    userId?: IntFilter | number
    shotId?: IntFilter | number
  }

  export type UserCreateWithoutDependentsInput = {
    cpf: string
    name: string
    email: string
    age: number
    phone: string
    password: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    shotsTakenByUser?: ShotsTakenByUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDependentsInput = {
    id?: number
    cpf: string
    name: string
    email: string
    age: number
    phone: string
    password: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    shotsTakenByUser?: ShotsTakenByUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDependentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDependentsInput, UserUncheckedCreateWithoutDependentsInput>
  }

  export type UserUpsertWithoutDependentsInput = {
    update: XOR<UserUpdateWithoutDependentsInput, UserUncheckedUpdateWithoutDependentsInput>
    create: XOR<UserCreateWithoutDependentsInput, UserUncheckedCreateWithoutDependentsInput>
  }

  export type UserUpdateWithoutDependentsInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shotsTakenByUser?: ShotsTakenByUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDependentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shotsTakenByUser?: ShotsTakenByUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShotsTakenByUserCreateWithoutShotInput = {
    user: UserCreateNestedOneWithoutShotsTakenByUserInput
  }

  export type ShotsTakenByUserUncheckedCreateWithoutShotInput = {
    userId: number
  }

  export type ShotsTakenByUserCreateOrConnectWithoutShotInput = {
    where: ShotsTakenByUserWhereUniqueInput
    create: XOR<ShotsTakenByUserCreateWithoutShotInput, ShotsTakenByUserUncheckedCreateWithoutShotInput>
  }

  export type ShotsTakenByUserCreateManyShotInputEnvelope = {
    data: Enumerable<ShotsTakenByUserCreateManyShotInput>
    skipDuplicates?: boolean
  }

  export type ShotsTakenByUserUpsertWithWhereUniqueWithoutShotInput = {
    where: ShotsTakenByUserWhereUniqueInput
    update: XOR<ShotsTakenByUserUpdateWithoutShotInput, ShotsTakenByUserUncheckedUpdateWithoutShotInput>
    create: XOR<ShotsTakenByUserCreateWithoutShotInput, ShotsTakenByUserUncheckedCreateWithoutShotInput>
  }

  export type ShotsTakenByUserUpdateWithWhereUniqueWithoutShotInput = {
    where: ShotsTakenByUserWhereUniqueInput
    data: XOR<ShotsTakenByUserUpdateWithoutShotInput, ShotsTakenByUserUncheckedUpdateWithoutShotInput>
  }

  export type ShotsTakenByUserUpdateManyWithWhereWithoutShotInput = {
    where: ShotsTakenByUserScalarWhereInput
    data: XOR<ShotsTakenByUserUpdateManyMutationInput, ShotsTakenByUserUncheckedUpdateManyWithoutUsersThatTookInput>
  }

  export type UserCreateWithoutShotsTakenByUserInput = {
    cpf: string
    name: string
    email: string
    age: number
    phone: string
    dependents?: DependentCreateNestedManyWithoutResponsibleInput
    password: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type UserUncheckedCreateWithoutShotsTakenByUserInput = {
    id?: number
    cpf: string
    name: string
    email: string
    age: number
    phone: string
    dependents?: DependentUncheckedCreateNestedManyWithoutResponsibleInput
    password: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type UserCreateOrConnectWithoutShotsTakenByUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShotsTakenByUserInput, UserUncheckedCreateWithoutShotsTakenByUserInput>
  }

  export type ShotCreateWithoutUsersThatTookInput = {
    name: string
    description: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ShotUncheckedCreateWithoutUsersThatTookInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ShotCreateOrConnectWithoutUsersThatTookInput = {
    where: ShotWhereUniqueInput
    create: XOR<ShotCreateWithoutUsersThatTookInput, ShotUncheckedCreateWithoutUsersThatTookInput>
  }

  export type UserUpsertWithoutShotsTakenByUserInput = {
    update: XOR<UserUpdateWithoutShotsTakenByUserInput, UserUncheckedUpdateWithoutShotsTakenByUserInput>
    create: XOR<UserCreateWithoutShotsTakenByUserInput, UserUncheckedCreateWithoutShotsTakenByUserInput>
  }

  export type UserUpdateWithoutShotsTakenByUserInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    dependents?: DependentUpdateManyWithoutResponsibleNestedInput
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateWithoutShotsTakenByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    dependents?: DependentUncheckedUpdateManyWithoutResponsibleNestedInput
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShotUpsertWithoutUsersThatTookInput = {
    update: XOR<ShotUpdateWithoutUsersThatTookInput, ShotUncheckedUpdateWithoutUsersThatTookInput>
    create: XOR<ShotCreateWithoutUsersThatTookInput, ShotUncheckedCreateWithoutUsersThatTookInput>
  }

  export type ShotUpdateWithoutUsersThatTookInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShotUncheckedUpdateWithoutUsersThatTookInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DependentCreateManyResponsibleInput = {
    id?: number
    cpf: string
    name: string
    email?: string | null
    password?: string | null
    age: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ShotsTakenByUserCreateManyUserInput = {
    shotId: number
  }

  export type DependentUpdateWithoutResponsibleInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DependentUncheckedUpdateWithoutResponsibleInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DependentUncheckedUpdateManyWithoutDependentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShotsTakenByUserUpdateWithoutUserInput = {
    shot?: ShotUpdateOneRequiredWithoutUsersThatTookNestedInput
  }

  export type ShotsTakenByUserUncheckedUpdateWithoutUserInput = {
    shotId?: IntFieldUpdateOperationsInput | number
  }

  export type ShotsTakenByUserUncheckedUpdateManyWithoutShotsTakenByUserInput = {
    shotId?: IntFieldUpdateOperationsInput | number
  }

  export type ShotsTakenByUserCreateManyShotInput = {
    userId: number
  }

  export type ShotsTakenByUserUpdateWithoutShotInput = {
    user?: UserUpdateOneRequiredWithoutShotsTakenByUserNestedInput
  }

  export type ShotsTakenByUserUncheckedUpdateWithoutShotInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ShotsTakenByUserUncheckedUpdateManyWithoutUsersThatTookInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}