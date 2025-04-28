
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ExpenseTracker
 * 
 */
export type ExpenseTracker = $Result.DefaultSelection<Prisma.$ExpenseTrackerPayload>
/**
 * Model Notes
 * 
 */
export type Notes = $Result.DefaultSelection<Prisma.$NotesPayload>
/**
 * Model Reminders
 * 
 */
export type Reminders = $Result.DefaultSelection<Prisma.$RemindersPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Link
 * 
 */
export type Link = $Result.DefaultSelection<Prisma.$LinkPayload>
/**
 * Model Credentials
 * 
 */
export type Credentials = $Result.DefaultSelection<Prisma.$CredentialsPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ExpenseTrackers
 * const expenseTrackers = await prisma.expenseTracker.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ExpenseTrackers
   * const expenseTrackers = await prisma.expenseTracker.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.expenseTracker`: Exposes CRUD operations for the **ExpenseTracker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpenseTrackers
    * const expenseTrackers = await prisma.expenseTracker.findMany()
    * ```
    */
  get expenseTracker(): Prisma.ExpenseTrackerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notes`: Exposes CRUD operations for the **Notes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.notes.findMany()
    * ```
    */
  get notes(): Prisma.NotesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reminders`: Exposes CRUD operations for the **Reminders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reminders
    * const reminders = await prisma.reminders.findMany()
    * ```
    */
  get reminders(): Prisma.RemindersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.link`: Exposes CRUD operations for the **Link** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Links
    * const links = await prisma.link.findMany()
    * ```
    */
  get link(): Prisma.LinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.credentials`: Exposes CRUD operations for the **Credentials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Credentials
    * const credentials = await prisma.credentials.findMany()
    * ```
    */
  get credentials(): Prisma.CredentialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ExpenseTracker: 'ExpenseTracker',
    Notes: 'Notes',
    Reminders: 'Reminders',
    Image: 'Image',
    Link: 'Link',
    Credentials: 'Credentials',
    Tag: 'Tag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "expenseTracker" | "notes" | "reminders" | "image" | "link" | "credentials" | "tag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ExpenseTracker: {
        payload: Prisma.$ExpenseTrackerPayload<ExtArgs>
        fields: Prisma.ExpenseTrackerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseTrackerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTrackerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseTrackerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTrackerPayload>
          }
          findFirst: {
            args: Prisma.ExpenseTrackerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTrackerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseTrackerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTrackerPayload>
          }
          findMany: {
            args: Prisma.ExpenseTrackerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTrackerPayload>[]
          }
          create: {
            args: Prisma.ExpenseTrackerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTrackerPayload>
          }
          createMany: {
            args: Prisma.ExpenseTrackerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseTrackerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTrackerPayload>[]
          }
          delete: {
            args: Prisma.ExpenseTrackerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTrackerPayload>
          }
          update: {
            args: Prisma.ExpenseTrackerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTrackerPayload>
          }
          deleteMany: {
            args: Prisma.ExpenseTrackerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseTrackerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseTrackerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTrackerPayload>[]
          }
          upsert: {
            args: Prisma.ExpenseTrackerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTrackerPayload>
          }
          aggregate: {
            args: Prisma.ExpenseTrackerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenseTracker>
          }
          groupBy: {
            args: Prisma.ExpenseTrackerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseTrackerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseTrackerCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseTrackerCountAggregateOutputType> | number
          }
        }
      }
      Notes: {
        payload: Prisma.$NotesPayload<ExtArgs>
        fields: Prisma.NotesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          findFirst: {
            args: Prisma.NotesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          findMany: {
            args: Prisma.NotesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>[]
          }
          create: {
            args: Prisma.NotesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          createMany: {
            args: Prisma.NotesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>[]
          }
          delete: {
            args: Prisma.NotesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          update: {
            args: Prisma.NotesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          deleteMany: {
            args: Prisma.NotesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>[]
          }
          upsert: {
            args: Prisma.NotesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          aggregate: {
            args: Prisma.NotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotes>
          }
          groupBy: {
            args: Prisma.NotesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotesCountArgs<ExtArgs>
            result: $Utils.Optional<NotesCountAggregateOutputType> | number
          }
        }
      }
      Reminders: {
        payload: Prisma.$RemindersPayload<ExtArgs>
        fields: Prisma.RemindersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RemindersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemindersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RemindersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemindersPayload>
          }
          findFirst: {
            args: Prisma.RemindersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemindersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RemindersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemindersPayload>
          }
          findMany: {
            args: Prisma.RemindersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemindersPayload>[]
          }
          create: {
            args: Prisma.RemindersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemindersPayload>
          }
          createMany: {
            args: Prisma.RemindersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RemindersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemindersPayload>[]
          }
          delete: {
            args: Prisma.RemindersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemindersPayload>
          }
          update: {
            args: Prisma.RemindersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemindersPayload>
          }
          deleteMany: {
            args: Prisma.RemindersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RemindersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RemindersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemindersPayload>[]
          }
          upsert: {
            args: Prisma.RemindersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemindersPayload>
          }
          aggregate: {
            args: Prisma.RemindersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReminders>
          }
          groupBy: {
            args: Prisma.RemindersGroupByArgs<ExtArgs>
            result: $Utils.Optional<RemindersGroupByOutputType>[]
          }
          count: {
            args: Prisma.RemindersCountArgs<ExtArgs>
            result: $Utils.Optional<RemindersCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Link: {
        payload: Prisma.$LinkPayload<ExtArgs>
        fields: Prisma.LinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findFirst: {
            args: Prisma.LinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findMany: {
            args: Prisma.LinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          create: {
            args: Prisma.LinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          createMany: {
            args: Prisma.LinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          delete: {
            args: Prisma.LinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          update: {
            args: Prisma.LinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          deleteMany: {
            args: Prisma.LinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          upsert: {
            args: Prisma.LinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          aggregate: {
            args: Prisma.LinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLink>
          }
          groupBy: {
            args: Prisma.LinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkCountArgs<ExtArgs>
            result: $Utils.Optional<LinkCountAggregateOutputType> | number
          }
        }
      }
      Credentials: {
        payload: Prisma.$CredentialsPayload<ExtArgs>
        fields: Prisma.CredentialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CredentialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CredentialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>
          }
          findFirst: {
            args: Prisma.CredentialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CredentialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>
          }
          findMany: {
            args: Prisma.CredentialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>[]
          }
          create: {
            args: Prisma.CredentialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>
          }
          createMany: {
            args: Prisma.CredentialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CredentialsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>[]
          }
          delete: {
            args: Prisma.CredentialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>
          }
          update: {
            args: Prisma.CredentialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>
          }
          deleteMany: {
            args: Prisma.CredentialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CredentialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CredentialsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>[]
          }
          upsert: {
            args: Prisma.CredentialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>
          }
          aggregate: {
            args: Prisma.CredentialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCredentials>
          }
          groupBy: {
            args: Prisma.CredentialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CredentialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CredentialsCountArgs<ExtArgs>
            result: $Utils.Optional<CredentialsCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    expenseTracker?: ExpenseTrackerOmit
    notes?: NotesOmit
    reminders?: RemindersOmit
    image?: ImageOmit
    link?: LinkOmit
    credentials?: CredentialsOmit
    tag?: TagOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ExpenseTrackerCountOutputType
   */

  export type ExpenseTrackerCountOutputType = {
    Tags: number
  }

  export type ExpenseTrackerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tags?: boolean | ExpenseTrackerCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * ExpenseTrackerCountOutputType without action
   */
  export type ExpenseTrackerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTrackerCountOutputType
     */
    select?: ExpenseTrackerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpenseTrackerCountOutputType without action
   */
  export type ExpenseTrackerCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Count Type NotesCountOutputType
   */

  export type NotesCountOutputType = {
    Tags: number
  }

  export type NotesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tags?: boolean | NotesCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * NotesCountOutputType without action
   */
  export type NotesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotesCountOutputType
     */
    select?: NotesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotesCountOutputType without action
   */
  export type NotesCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Count Type RemindersCountOutputType
   */

  export type RemindersCountOutputType = {
    Tags: number
  }

  export type RemindersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tags?: boolean | RemindersCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * RemindersCountOutputType without action
   */
  export type RemindersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemindersCountOutputType
     */
    select?: RemindersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RemindersCountOutputType without action
   */
  export type RemindersCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    Tags: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tags?: boolean | ImageCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Count Type LinkCountOutputType
   */

  export type LinkCountOutputType = {
    Tags: number
  }

  export type LinkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tags?: boolean | LinkCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * LinkCountOutputType without action
   */
  export type LinkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkCountOutputType
     */
    select?: LinkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LinkCountOutputType without action
   */
  export type LinkCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Count Type CredentialsCountOutputType
   */

  export type CredentialsCountOutputType = {
    Tags: number
  }

  export type CredentialsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tags?: boolean | CredentialsCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * CredentialsCountOutputType without action
   */
  export type CredentialsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CredentialsCountOutputType
     */
    select?: CredentialsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CredentialsCountOutputType without action
   */
  export type CredentialsCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    Notes: number
    Reminders: number
    Images: number
    Links: number
    Credentials: number
    ExpenseTracker: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Notes?: boolean | TagCountOutputTypeCountNotesArgs
    Reminders?: boolean | TagCountOutputTypeCountRemindersArgs
    Images?: boolean | TagCountOutputTypeCountImagesArgs
    Links?: boolean | TagCountOutputTypeCountLinksArgs
    Credentials?: boolean | TagCountOutputTypeCountCredentialsArgs
    ExpenseTracker?: boolean | TagCountOutputTypeCountExpenseTrackerArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotesWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RemindersWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountCredentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CredentialsWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountExpenseTrackerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseTrackerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ExpenseTracker
   */

  export type AggregateExpenseTracker = {
    _count: ExpenseTrackerCountAggregateOutputType | null
    _avg: ExpenseTrackerAvgAggregateOutputType | null
    _sum: ExpenseTrackerSumAggregateOutputType | null
    _min: ExpenseTrackerMinAggregateOutputType | null
    _max: ExpenseTrackerMaxAggregateOutputType | null
  }

  export type ExpenseTrackerAvgAggregateOutputType = {
    amount: number | null
  }

  export type ExpenseTrackerSumAggregateOutputType = {
    amount: number | null
  }

  export type ExpenseTrackerMinAggregateOutputType = {
    id: string | null
    name: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpenseTrackerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpenseTrackerCountAggregateOutputType = {
    id: number
    name: number
    amount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExpenseTrackerAvgAggregateInputType = {
    amount?: true
  }

  export type ExpenseTrackerSumAggregateInputType = {
    amount?: true
  }

  export type ExpenseTrackerMinAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpenseTrackerMaxAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpenseTrackerCountAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExpenseTrackerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseTracker to aggregate.
     */
    where?: ExpenseTrackerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseTrackers to fetch.
     */
    orderBy?: ExpenseTrackerOrderByWithRelationInput | ExpenseTrackerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseTrackerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseTrackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseTrackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpenseTrackers
    **/
    _count?: true | ExpenseTrackerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseTrackerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseTrackerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseTrackerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseTrackerMaxAggregateInputType
  }

  export type GetExpenseTrackerAggregateType<T extends ExpenseTrackerAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenseTracker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenseTracker[P]>
      : GetScalarType<T[P], AggregateExpenseTracker[P]>
  }




  export type ExpenseTrackerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseTrackerWhereInput
    orderBy?: ExpenseTrackerOrderByWithAggregationInput | ExpenseTrackerOrderByWithAggregationInput[]
    by: ExpenseTrackerScalarFieldEnum[] | ExpenseTrackerScalarFieldEnum
    having?: ExpenseTrackerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseTrackerCountAggregateInputType | true
    _avg?: ExpenseTrackerAvgAggregateInputType
    _sum?: ExpenseTrackerSumAggregateInputType
    _min?: ExpenseTrackerMinAggregateInputType
    _max?: ExpenseTrackerMaxAggregateInputType
  }

  export type ExpenseTrackerGroupByOutputType = {
    id: string
    name: string
    amount: number
    createdAt: Date
    updatedAt: Date
    _count: ExpenseTrackerCountAggregateOutputType | null
    _avg: ExpenseTrackerAvgAggregateOutputType | null
    _sum: ExpenseTrackerSumAggregateOutputType | null
    _min: ExpenseTrackerMinAggregateOutputType | null
    _max: ExpenseTrackerMaxAggregateOutputType | null
  }

  type GetExpenseTrackerGroupByPayload<T extends ExpenseTrackerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseTrackerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseTrackerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseTrackerGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseTrackerGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseTrackerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tags?: boolean | ExpenseTracker$TagsArgs<ExtArgs>
    _count?: boolean | ExpenseTrackerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseTracker"]>

  export type ExpenseTrackerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["expenseTracker"]>

  export type ExpenseTrackerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["expenseTracker"]>

  export type ExpenseTrackerSelectScalar = {
    id?: boolean
    name?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExpenseTrackerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "amount" | "createdAt" | "updatedAt", ExtArgs["result"]["expenseTracker"]>
  export type ExpenseTrackerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tags?: boolean | ExpenseTracker$TagsArgs<ExtArgs>
    _count?: boolean | ExpenseTrackerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpenseTrackerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExpenseTrackerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExpenseTrackerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpenseTracker"
    objects: {
      Tags: Prisma.$TagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      amount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["expenseTracker"]>
    composites: {}
  }

  type ExpenseTrackerGetPayload<S extends boolean | null | undefined | ExpenseTrackerDefaultArgs> = $Result.GetResult<Prisma.$ExpenseTrackerPayload, S>

  type ExpenseTrackerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseTrackerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseTrackerCountAggregateInputType | true
    }

  export interface ExpenseTrackerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpenseTracker'], meta: { name: 'ExpenseTracker' } }
    /**
     * Find zero or one ExpenseTracker that matches the filter.
     * @param {ExpenseTrackerFindUniqueArgs} args - Arguments to find a ExpenseTracker
     * @example
     * // Get one ExpenseTracker
     * const expenseTracker = await prisma.expenseTracker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseTrackerFindUniqueArgs>(args: SelectSubset<T, ExpenseTrackerFindUniqueArgs<ExtArgs>>): Prisma__ExpenseTrackerClient<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpenseTracker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseTrackerFindUniqueOrThrowArgs} args - Arguments to find a ExpenseTracker
     * @example
     * // Get one ExpenseTracker
     * const expenseTracker = await prisma.expenseTracker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseTrackerFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseTrackerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseTrackerClient<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseTracker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTrackerFindFirstArgs} args - Arguments to find a ExpenseTracker
     * @example
     * // Get one ExpenseTracker
     * const expenseTracker = await prisma.expenseTracker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseTrackerFindFirstArgs>(args?: SelectSubset<T, ExpenseTrackerFindFirstArgs<ExtArgs>>): Prisma__ExpenseTrackerClient<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseTracker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTrackerFindFirstOrThrowArgs} args - Arguments to find a ExpenseTracker
     * @example
     * // Get one ExpenseTracker
     * const expenseTracker = await prisma.expenseTracker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseTrackerFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseTrackerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseTrackerClient<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpenseTrackers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTrackerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpenseTrackers
     * const expenseTrackers = await prisma.expenseTracker.findMany()
     * 
     * // Get first 10 ExpenseTrackers
     * const expenseTrackers = await prisma.expenseTracker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseTrackerWithIdOnly = await prisma.expenseTracker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseTrackerFindManyArgs>(args?: SelectSubset<T, ExpenseTrackerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpenseTracker.
     * @param {ExpenseTrackerCreateArgs} args - Arguments to create a ExpenseTracker.
     * @example
     * // Create one ExpenseTracker
     * const ExpenseTracker = await prisma.expenseTracker.create({
     *   data: {
     *     // ... data to create a ExpenseTracker
     *   }
     * })
     * 
     */
    create<T extends ExpenseTrackerCreateArgs>(args: SelectSubset<T, ExpenseTrackerCreateArgs<ExtArgs>>): Prisma__ExpenseTrackerClient<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpenseTrackers.
     * @param {ExpenseTrackerCreateManyArgs} args - Arguments to create many ExpenseTrackers.
     * @example
     * // Create many ExpenseTrackers
     * const expenseTracker = await prisma.expenseTracker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseTrackerCreateManyArgs>(args?: SelectSubset<T, ExpenseTrackerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpenseTrackers and returns the data saved in the database.
     * @param {ExpenseTrackerCreateManyAndReturnArgs} args - Arguments to create many ExpenseTrackers.
     * @example
     * // Create many ExpenseTrackers
     * const expenseTracker = await prisma.expenseTracker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpenseTrackers and only return the `id`
     * const expenseTrackerWithIdOnly = await prisma.expenseTracker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseTrackerCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseTrackerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExpenseTracker.
     * @param {ExpenseTrackerDeleteArgs} args - Arguments to delete one ExpenseTracker.
     * @example
     * // Delete one ExpenseTracker
     * const ExpenseTracker = await prisma.expenseTracker.delete({
     *   where: {
     *     // ... filter to delete one ExpenseTracker
     *   }
     * })
     * 
     */
    delete<T extends ExpenseTrackerDeleteArgs>(args: SelectSubset<T, ExpenseTrackerDeleteArgs<ExtArgs>>): Prisma__ExpenseTrackerClient<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpenseTracker.
     * @param {ExpenseTrackerUpdateArgs} args - Arguments to update one ExpenseTracker.
     * @example
     * // Update one ExpenseTracker
     * const expenseTracker = await prisma.expenseTracker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseTrackerUpdateArgs>(args: SelectSubset<T, ExpenseTrackerUpdateArgs<ExtArgs>>): Prisma__ExpenseTrackerClient<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpenseTrackers.
     * @param {ExpenseTrackerDeleteManyArgs} args - Arguments to filter ExpenseTrackers to delete.
     * @example
     * // Delete a few ExpenseTrackers
     * const { count } = await prisma.expenseTracker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseTrackerDeleteManyArgs>(args?: SelectSubset<T, ExpenseTrackerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseTrackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTrackerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpenseTrackers
     * const expenseTracker = await prisma.expenseTracker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseTrackerUpdateManyArgs>(args: SelectSubset<T, ExpenseTrackerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseTrackers and returns the data updated in the database.
     * @param {ExpenseTrackerUpdateManyAndReturnArgs} args - Arguments to update many ExpenseTrackers.
     * @example
     * // Update many ExpenseTrackers
     * const expenseTracker = await prisma.expenseTracker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExpenseTrackers and only return the `id`
     * const expenseTrackerWithIdOnly = await prisma.expenseTracker.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseTrackerUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseTrackerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExpenseTracker.
     * @param {ExpenseTrackerUpsertArgs} args - Arguments to update or create a ExpenseTracker.
     * @example
     * // Update or create a ExpenseTracker
     * const expenseTracker = await prisma.expenseTracker.upsert({
     *   create: {
     *     // ... data to create a ExpenseTracker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpenseTracker we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseTrackerUpsertArgs>(args: SelectSubset<T, ExpenseTrackerUpsertArgs<ExtArgs>>): Prisma__ExpenseTrackerClient<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpenseTrackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTrackerCountArgs} args - Arguments to filter ExpenseTrackers to count.
     * @example
     * // Count the number of ExpenseTrackers
     * const count = await prisma.expenseTracker.count({
     *   where: {
     *     // ... the filter for the ExpenseTrackers we want to count
     *   }
     * })
    **/
    count<T extends ExpenseTrackerCountArgs>(
      args?: Subset<T, ExpenseTrackerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseTrackerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpenseTracker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTrackerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpenseTrackerAggregateArgs>(args: Subset<T, ExpenseTrackerAggregateArgs>): Prisma.PrismaPromise<GetExpenseTrackerAggregateType<T>>

    /**
     * Group by ExpenseTracker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTrackerGroupByArgs} args - Group by arguments.
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
      T extends ExpenseTrackerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseTrackerGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseTrackerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExpenseTrackerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseTrackerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpenseTracker model
   */
  readonly fields: ExpenseTrackerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpenseTracker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseTrackerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tags<T extends ExpenseTracker$TagsArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseTracker$TagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExpenseTracker model
   */
  interface ExpenseTrackerFieldRefs {
    readonly id: FieldRef<"ExpenseTracker", 'String'>
    readonly name: FieldRef<"ExpenseTracker", 'String'>
    readonly amount: FieldRef<"ExpenseTracker", 'Float'>
    readonly createdAt: FieldRef<"ExpenseTracker", 'DateTime'>
    readonly updatedAt: FieldRef<"ExpenseTracker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExpenseTracker findUnique
   */
  export type ExpenseTrackerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseTracker to fetch.
     */
    where: ExpenseTrackerWhereUniqueInput
  }

  /**
   * ExpenseTracker findUniqueOrThrow
   */
  export type ExpenseTrackerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseTracker to fetch.
     */
    where: ExpenseTrackerWhereUniqueInput
  }

  /**
   * ExpenseTracker findFirst
   */
  export type ExpenseTrackerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseTracker to fetch.
     */
    where?: ExpenseTrackerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseTrackers to fetch.
     */
    orderBy?: ExpenseTrackerOrderByWithRelationInput | ExpenseTrackerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseTrackers.
     */
    cursor?: ExpenseTrackerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseTrackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseTrackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseTrackers.
     */
    distinct?: ExpenseTrackerScalarFieldEnum | ExpenseTrackerScalarFieldEnum[]
  }

  /**
   * ExpenseTracker findFirstOrThrow
   */
  export type ExpenseTrackerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseTracker to fetch.
     */
    where?: ExpenseTrackerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseTrackers to fetch.
     */
    orderBy?: ExpenseTrackerOrderByWithRelationInput | ExpenseTrackerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseTrackers.
     */
    cursor?: ExpenseTrackerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseTrackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseTrackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseTrackers.
     */
    distinct?: ExpenseTrackerScalarFieldEnum | ExpenseTrackerScalarFieldEnum[]
  }

  /**
   * ExpenseTracker findMany
   */
  export type ExpenseTrackerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseTrackers to fetch.
     */
    where?: ExpenseTrackerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseTrackers to fetch.
     */
    orderBy?: ExpenseTrackerOrderByWithRelationInput | ExpenseTrackerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpenseTrackers.
     */
    cursor?: ExpenseTrackerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseTrackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseTrackers.
     */
    skip?: number
    distinct?: ExpenseTrackerScalarFieldEnum | ExpenseTrackerScalarFieldEnum[]
  }

  /**
   * ExpenseTracker create
   */
  export type ExpenseTrackerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpenseTracker.
     */
    data: XOR<ExpenseTrackerCreateInput, ExpenseTrackerUncheckedCreateInput>
  }

  /**
   * ExpenseTracker createMany
   */
  export type ExpenseTrackerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpenseTrackers.
     */
    data: ExpenseTrackerCreateManyInput | ExpenseTrackerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpenseTracker createManyAndReturn
   */
  export type ExpenseTrackerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * The data used to create many ExpenseTrackers.
     */
    data: ExpenseTrackerCreateManyInput | ExpenseTrackerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpenseTracker update
   */
  export type ExpenseTrackerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpenseTracker.
     */
    data: XOR<ExpenseTrackerUpdateInput, ExpenseTrackerUncheckedUpdateInput>
    /**
     * Choose, which ExpenseTracker to update.
     */
    where: ExpenseTrackerWhereUniqueInput
  }

  /**
   * ExpenseTracker updateMany
   */
  export type ExpenseTrackerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpenseTrackers.
     */
    data: XOR<ExpenseTrackerUpdateManyMutationInput, ExpenseTrackerUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseTrackers to update
     */
    where?: ExpenseTrackerWhereInput
    /**
     * Limit how many ExpenseTrackers to update.
     */
    limit?: number
  }

  /**
   * ExpenseTracker updateManyAndReturn
   */
  export type ExpenseTrackerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * The data used to update ExpenseTrackers.
     */
    data: XOR<ExpenseTrackerUpdateManyMutationInput, ExpenseTrackerUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseTrackers to update
     */
    where?: ExpenseTrackerWhereInput
    /**
     * Limit how many ExpenseTrackers to update.
     */
    limit?: number
  }

  /**
   * ExpenseTracker upsert
   */
  export type ExpenseTrackerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpenseTracker to update in case it exists.
     */
    where: ExpenseTrackerWhereUniqueInput
    /**
     * In case the ExpenseTracker found by the `where` argument doesn't exist, create a new ExpenseTracker with this data.
     */
    create: XOR<ExpenseTrackerCreateInput, ExpenseTrackerUncheckedCreateInput>
    /**
     * In case the ExpenseTracker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseTrackerUpdateInput, ExpenseTrackerUncheckedUpdateInput>
  }

  /**
   * ExpenseTracker delete
   */
  export type ExpenseTrackerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
    /**
     * Filter which ExpenseTracker to delete.
     */
    where: ExpenseTrackerWhereUniqueInput
  }

  /**
   * ExpenseTracker deleteMany
   */
  export type ExpenseTrackerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseTrackers to delete
     */
    where?: ExpenseTrackerWhereInput
    /**
     * Limit how many ExpenseTrackers to delete.
     */
    limit?: number
  }

  /**
   * ExpenseTracker.Tags
   */
  export type ExpenseTracker$TagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * ExpenseTracker without action
   */
  export type ExpenseTrackerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
  }


  /**
   * Model Notes
   */

  export type AggregateNotes = {
    _count: NotesCountAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  export type NotesMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotesCountAggregateOutputType = {
    id: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotesMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotesMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotesCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to aggregate.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotesMaxAggregateInputType
  }

  export type GetNotesAggregateType<T extends NotesAggregateArgs> = {
        [P in keyof T & keyof AggregateNotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotes[P]>
      : GetScalarType<T[P], AggregateNotes[P]>
  }




  export type NotesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotesWhereInput
    orderBy?: NotesOrderByWithAggregationInput | NotesOrderByWithAggregationInput[]
    by: NotesScalarFieldEnum[] | NotesScalarFieldEnum
    having?: NotesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotesCountAggregateInputType | true
    _min?: NotesMinAggregateInputType
    _max?: NotesMaxAggregateInputType
  }

  export type NotesGroupByOutputType = {
    id: string
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: NotesCountAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  type GetNotesGroupByPayload<T extends NotesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotesGroupByOutputType[P]>
            : GetScalarType<T[P], NotesGroupByOutputType[P]>
        }
      >
    >


  export type NotesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tags?: boolean | Notes$TagsArgs<ExtArgs>
    _count?: boolean | NotesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>

  export type NotesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notes"]>

  export type NotesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notes"]>

  export type NotesSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["notes"]>
  export type NotesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tags?: boolean | Notes$TagsArgs<ExtArgs>
    _count?: boolean | NotesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NotesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NotesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NotesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notes"
    objects: {
      Tags: Prisma.$TagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notes"]>
    composites: {}
  }

  type NotesGetPayload<S extends boolean | null | undefined | NotesDefaultArgs> = $Result.GetResult<Prisma.$NotesPayload, S>

  type NotesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotesCountAggregateInputType | true
    }

  export interface NotesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notes'], meta: { name: 'Notes' } }
    /**
     * Find zero or one Notes that matches the filter.
     * @param {NotesFindUniqueArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotesFindUniqueArgs>(args: SelectSubset<T, NotesFindUniqueArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotesFindUniqueOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotesFindUniqueOrThrowArgs>(args: SelectSubset<T, NotesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindFirstArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotesFindFirstArgs>(args?: SelectSubset<T, NotesFindFirstArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindFirstOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotesFindFirstOrThrowArgs>(args?: SelectSubset<T, NotesFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.notes.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.notes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notesWithIdOnly = await prisma.notes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotesFindManyArgs>(args?: SelectSubset<T, NotesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notes.
     * @param {NotesCreateArgs} args - Arguments to create a Notes.
     * @example
     * // Create one Notes
     * const Notes = await prisma.notes.create({
     *   data: {
     *     // ... data to create a Notes
     *   }
     * })
     * 
     */
    create<T extends NotesCreateArgs>(args: SelectSubset<T, NotesCreateArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NotesCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotesCreateManyArgs>(args?: SelectSubset<T, NotesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NotesCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const notesWithIdOnly = await prisma.notes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotesCreateManyAndReturnArgs>(args?: SelectSubset<T, NotesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notes.
     * @param {NotesDeleteArgs} args - Arguments to delete one Notes.
     * @example
     * // Delete one Notes
     * const Notes = await prisma.notes.delete({
     *   where: {
     *     // ... filter to delete one Notes
     *   }
     * })
     * 
     */
    delete<T extends NotesDeleteArgs>(args: SelectSubset<T, NotesDeleteArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notes.
     * @param {NotesUpdateArgs} args - Arguments to update one Notes.
     * @example
     * // Update one Notes
     * const notes = await prisma.notes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotesUpdateArgs>(args: SelectSubset<T, NotesUpdateArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NotesDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.notes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotesDeleteManyArgs>(args?: SelectSubset<T, NotesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotesUpdateManyArgs>(args: SelectSubset<T, NotesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NotesUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const notesWithIdOnly = await prisma.notes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotesUpdateManyAndReturnArgs>(args: SelectSubset<T, NotesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notes.
     * @param {NotesUpsertArgs} args - Arguments to update or create a Notes.
     * @example
     * // Update or create a Notes
     * const notes = await prisma.notes.upsert({
     *   create: {
     *     // ... data to create a Notes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notes we want to update
     *   }
     * })
     */
    upsert<T extends NotesUpsertArgs>(args: SelectSubset<T, NotesUpsertArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.notes.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NotesCountArgs>(
      args?: Subset<T, NotesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotesAggregateArgs>(args: Subset<T, NotesAggregateArgs>): Prisma.PrismaPromise<GetNotesAggregateType<T>>

    /**
     * Group by Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesGroupByArgs} args - Group by arguments.
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
      T extends NotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotesGroupByArgs['orderBy'] }
        : { orderBy?: NotesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notes model
   */
  readonly fields: NotesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tags<T extends Notes$TagsArgs<ExtArgs> = {}>(args?: Subset<T, Notes$TagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notes model
   */
  interface NotesFieldRefs {
    readonly id: FieldRef<"Notes", 'String'>
    readonly title: FieldRef<"Notes", 'String'>
    readonly content: FieldRef<"Notes", 'String'>
    readonly createdAt: FieldRef<"Notes", 'DateTime'>
    readonly updatedAt: FieldRef<"Notes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notes findUnique
   */
  export type NotesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes findUniqueOrThrow
   */
  export type NotesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes findFirst
   */
  export type NotesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes findFirstOrThrow
   */
  export type NotesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes findMany
   */
  export type NotesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes create
   */
  export type NotesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * The data needed to create a Notes.
     */
    data: XOR<NotesCreateInput, NotesUncheckedCreateInput>
  }

  /**
   * Notes createMany
   */
  export type NotesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NotesCreateManyInput | NotesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notes createManyAndReturn
   */
  export type NotesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NotesCreateManyInput | NotesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notes update
   */
  export type NotesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * The data needed to update a Notes.
     */
    data: XOR<NotesUpdateInput, NotesUncheckedUpdateInput>
    /**
     * Choose, which Notes to update.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes updateMany
   */
  export type NotesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NotesUpdateManyMutationInput, NotesUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NotesWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Notes updateManyAndReturn
   */
  export type NotesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * The data used to update Notes.
     */
    data: XOR<NotesUpdateManyMutationInput, NotesUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NotesWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Notes upsert
   */
  export type NotesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * The filter to search for the Notes to update in case it exists.
     */
    where: NotesWhereUniqueInput
    /**
     * In case the Notes found by the `where` argument doesn't exist, create a new Notes with this data.
     */
    create: XOR<NotesCreateInput, NotesUncheckedCreateInput>
    /**
     * In case the Notes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotesUpdateInput, NotesUncheckedUpdateInput>
  }

  /**
   * Notes delete
   */
  export type NotesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter which Notes to delete.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes deleteMany
   */
  export type NotesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NotesWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Notes.Tags
   */
  export type Notes$TagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Notes without action
   */
  export type NotesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
  }


  /**
   * Model Reminders
   */

  export type AggregateReminders = {
    _count: RemindersCountAggregateOutputType | null
    _min: RemindersMinAggregateOutputType | null
    _max: RemindersMaxAggregateOutputType | null
  }

  export type RemindersMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RemindersMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RemindersCountAggregateOutputType = {
    id: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RemindersMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RemindersMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RemindersCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RemindersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminders to aggregate.
     */
    where?: RemindersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: RemindersOrderByWithRelationInput | RemindersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RemindersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reminders
    **/
    _count?: true | RemindersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RemindersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RemindersMaxAggregateInputType
  }

  export type GetRemindersAggregateType<T extends RemindersAggregateArgs> = {
        [P in keyof T & keyof AggregateReminders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminders[P]>
      : GetScalarType<T[P], AggregateReminders[P]>
  }




  export type RemindersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RemindersWhereInput
    orderBy?: RemindersOrderByWithAggregationInput | RemindersOrderByWithAggregationInput[]
    by: RemindersScalarFieldEnum[] | RemindersScalarFieldEnum
    having?: RemindersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RemindersCountAggregateInputType | true
    _min?: RemindersMinAggregateInputType
    _max?: RemindersMaxAggregateInputType
  }

  export type RemindersGroupByOutputType = {
    id: string
    title: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: RemindersCountAggregateOutputType | null
    _min: RemindersMinAggregateOutputType | null
    _max: RemindersMaxAggregateOutputType | null
  }

  type GetRemindersGroupByPayload<T extends RemindersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RemindersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RemindersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RemindersGroupByOutputType[P]>
            : GetScalarType<T[P], RemindersGroupByOutputType[P]>
        }
      >
    >


  export type RemindersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tags?: boolean | Reminders$TagsArgs<ExtArgs>
    _count?: boolean | RemindersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminders"]>

  export type RemindersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reminders"]>

  export type RemindersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reminders"]>

  export type RemindersSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RemindersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["reminders"]>
  export type RemindersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tags?: boolean | Reminders$TagsArgs<ExtArgs>
    _count?: boolean | RemindersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RemindersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RemindersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RemindersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reminders"
    objects: {
      Tags: Prisma.$TagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reminders"]>
    composites: {}
  }

  type RemindersGetPayload<S extends boolean | null | undefined | RemindersDefaultArgs> = $Result.GetResult<Prisma.$RemindersPayload, S>

  type RemindersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RemindersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RemindersCountAggregateInputType | true
    }

  export interface RemindersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reminders'], meta: { name: 'Reminders' } }
    /**
     * Find zero or one Reminders that matches the filter.
     * @param {RemindersFindUniqueArgs} args - Arguments to find a Reminders
     * @example
     * // Get one Reminders
     * const reminders = await prisma.reminders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RemindersFindUniqueArgs>(args: SelectSubset<T, RemindersFindUniqueArgs<ExtArgs>>): Prisma__RemindersClient<$Result.GetResult<Prisma.$RemindersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reminders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RemindersFindUniqueOrThrowArgs} args - Arguments to find a Reminders
     * @example
     * // Get one Reminders
     * const reminders = await prisma.reminders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RemindersFindUniqueOrThrowArgs>(args: SelectSubset<T, RemindersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RemindersClient<$Result.GetResult<Prisma.$RemindersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemindersFindFirstArgs} args - Arguments to find a Reminders
     * @example
     * // Get one Reminders
     * const reminders = await prisma.reminders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RemindersFindFirstArgs>(args?: SelectSubset<T, RemindersFindFirstArgs<ExtArgs>>): Prisma__RemindersClient<$Result.GetResult<Prisma.$RemindersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reminders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemindersFindFirstOrThrowArgs} args - Arguments to find a Reminders
     * @example
     * // Get one Reminders
     * const reminders = await prisma.reminders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RemindersFindFirstOrThrowArgs>(args?: SelectSubset<T, RemindersFindFirstOrThrowArgs<ExtArgs>>): Prisma__RemindersClient<$Result.GetResult<Prisma.$RemindersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemindersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reminders
     * const reminders = await prisma.reminders.findMany()
     * 
     * // Get first 10 Reminders
     * const reminders = await prisma.reminders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const remindersWithIdOnly = await prisma.reminders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RemindersFindManyArgs>(args?: SelectSubset<T, RemindersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemindersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reminders.
     * @param {RemindersCreateArgs} args - Arguments to create a Reminders.
     * @example
     * // Create one Reminders
     * const Reminders = await prisma.reminders.create({
     *   data: {
     *     // ... data to create a Reminders
     *   }
     * })
     * 
     */
    create<T extends RemindersCreateArgs>(args: SelectSubset<T, RemindersCreateArgs<ExtArgs>>): Prisma__RemindersClient<$Result.GetResult<Prisma.$RemindersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reminders.
     * @param {RemindersCreateManyArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminders = await prisma.reminders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RemindersCreateManyArgs>(args?: SelectSubset<T, RemindersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reminders and returns the data saved in the database.
     * @param {RemindersCreateManyAndReturnArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminders = await prisma.reminders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reminders and only return the `id`
     * const remindersWithIdOnly = await prisma.reminders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RemindersCreateManyAndReturnArgs>(args?: SelectSubset<T, RemindersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemindersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reminders.
     * @param {RemindersDeleteArgs} args - Arguments to delete one Reminders.
     * @example
     * // Delete one Reminders
     * const Reminders = await prisma.reminders.delete({
     *   where: {
     *     // ... filter to delete one Reminders
     *   }
     * })
     * 
     */
    delete<T extends RemindersDeleteArgs>(args: SelectSubset<T, RemindersDeleteArgs<ExtArgs>>): Prisma__RemindersClient<$Result.GetResult<Prisma.$RemindersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reminders.
     * @param {RemindersUpdateArgs} args - Arguments to update one Reminders.
     * @example
     * // Update one Reminders
     * const reminders = await prisma.reminders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RemindersUpdateArgs>(args: SelectSubset<T, RemindersUpdateArgs<ExtArgs>>): Prisma__RemindersClient<$Result.GetResult<Prisma.$RemindersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reminders.
     * @param {RemindersDeleteManyArgs} args - Arguments to filter Reminders to delete.
     * @example
     * // Delete a few Reminders
     * const { count } = await prisma.reminders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RemindersDeleteManyArgs>(args?: SelectSubset<T, RemindersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemindersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reminders
     * const reminders = await prisma.reminders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RemindersUpdateManyArgs>(args: SelectSubset<T, RemindersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders and returns the data updated in the database.
     * @param {RemindersUpdateManyAndReturnArgs} args - Arguments to update many Reminders.
     * @example
     * // Update many Reminders
     * const reminders = await prisma.reminders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reminders and only return the `id`
     * const remindersWithIdOnly = await prisma.reminders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RemindersUpdateManyAndReturnArgs>(args: SelectSubset<T, RemindersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemindersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reminders.
     * @param {RemindersUpsertArgs} args - Arguments to update or create a Reminders.
     * @example
     * // Update or create a Reminders
     * const reminders = await prisma.reminders.upsert({
     *   create: {
     *     // ... data to create a Reminders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reminders we want to update
     *   }
     * })
     */
    upsert<T extends RemindersUpsertArgs>(args: SelectSubset<T, RemindersUpsertArgs<ExtArgs>>): Prisma__RemindersClient<$Result.GetResult<Prisma.$RemindersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemindersCountArgs} args - Arguments to filter Reminders to count.
     * @example
     * // Count the number of Reminders
     * const count = await prisma.reminders.count({
     *   where: {
     *     // ... the filter for the Reminders we want to count
     *   }
     * })
    **/
    count<T extends RemindersCountArgs>(
      args?: Subset<T, RemindersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RemindersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemindersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RemindersAggregateArgs>(args: Subset<T, RemindersAggregateArgs>): Prisma.PrismaPromise<GetRemindersAggregateType<T>>

    /**
     * Group by Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemindersGroupByArgs} args - Group by arguments.
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
      T extends RemindersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RemindersGroupByArgs['orderBy'] }
        : { orderBy?: RemindersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RemindersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRemindersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reminders model
   */
  readonly fields: RemindersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reminders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RemindersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tags<T extends Reminders$TagsArgs<ExtArgs> = {}>(args?: Subset<T, Reminders$TagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reminders model
   */
  interface RemindersFieldRefs {
    readonly id: FieldRef<"Reminders", 'String'>
    readonly title: FieldRef<"Reminders", 'String'>
    readonly description: FieldRef<"Reminders", 'String'>
    readonly createdAt: FieldRef<"Reminders", 'DateTime'>
    readonly updatedAt: FieldRef<"Reminders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reminders findUnique
   */
  export type RemindersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminders
     */
    select?: RemindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminders
     */
    omit?: RemindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemindersInclude<ExtArgs> | null
    /**
     * Filter, which Reminders to fetch.
     */
    where: RemindersWhereUniqueInput
  }

  /**
   * Reminders findUniqueOrThrow
   */
  export type RemindersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminders
     */
    select?: RemindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminders
     */
    omit?: RemindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemindersInclude<ExtArgs> | null
    /**
     * Filter, which Reminders to fetch.
     */
    where: RemindersWhereUniqueInput
  }

  /**
   * Reminders findFirst
   */
  export type RemindersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminders
     */
    select?: RemindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminders
     */
    omit?: RemindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemindersInclude<ExtArgs> | null
    /**
     * Filter, which Reminders to fetch.
     */
    where?: RemindersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: RemindersOrderByWithRelationInput | RemindersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: RemindersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: RemindersScalarFieldEnum | RemindersScalarFieldEnum[]
  }

  /**
   * Reminders findFirstOrThrow
   */
  export type RemindersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminders
     */
    select?: RemindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminders
     */
    omit?: RemindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemindersInclude<ExtArgs> | null
    /**
     * Filter, which Reminders to fetch.
     */
    where?: RemindersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: RemindersOrderByWithRelationInput | RemindersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: RemindersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: RemindersScalarFieldEnum | RemindersScalarFieldEnum[]
  }

  /**
   * Reminders findMany
   */
  export type RemindersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminders
     */
    select?: RemindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminders
     */
    omit?: RemindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemindersInclude<ExtArgs> | null
    /**
     * Filter, which Reminders to fetch.
     */
    where?: RemindersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: RemindersOrderByWithRelationInput | RemindersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reminders.
     */
    cursor?: RemindersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    distinct?: RemindersScalarFieldEnum | RemindersScalarFieldEnum[]
  }

  /**
   * Reminders create
   */
  export type RemindersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminders
     */
    select?: RemindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminders
     */
    omit?: RemindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemindersInclude<ExtArgs> | null
    /**
     * The data needed to create a Reminders.
     */
    data: XOR<RemindersCreateInput, RemindersUncheckedCreateInput>
  }

  /**
   * Reminders createMany
   */
  export type RemindersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reminders.
     */
    data: RemindersCreateManyInput | RemindersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reminders createManyAndReturn
   */
  export type RemindersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminders
     */
    select?: RemindersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reminders
     */
    omit?: RemindersOmit<ExtArgs> | null
    /**
     * The data used to create many Reminders.
     */
    data: RemindersCreateManyInput | RemindersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reminders update
   */
  export type RemindersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminders
     */
    select?: RemindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminders
     */
    omit?: RemindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemindersInclude<ExtArgs> | null
    /**
     * The data needed to update a Reminders.
     */
    data: XOR<RemindersUpdateInput, RemindersUncheckedUpdateInput>
    /**
     * Choose, which Reminders to update.
     */
    where: RemindersWhereUniqueInput
  }

  /**
   * Reminders updateMany
   */
  export type RemindersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reminders.
     */
    data: XOR<RemindersUpdateManyMutationInput, RemindersUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: RemindersWhereInput
    /**
     * Limit how many Reminders to update.
     */
    limit?: number
  }

  /**
   * Reminders updateManyAndReturn
   */
  export type RemindersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminders
     */
    select?: RemindersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reminders
     */
    omit?: RemindersOmit<ExtArgs> | null
    /**
     * The data used to update Reminders.
     */
    data: XOR<RemindersUpdateManyMutationInput, RemindersUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: RemindersWhereInput
    /**
     * Limit how many Reminders to update.
     */
    limit?: number
  }

  /**
   * Reminders upsert
   */
  export type RemindersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminders
     */
    select?: RemindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminders
     */
    omit?: RemindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemindersInclude<ExtArgs> | null
    /**
     * The filter to search for the Reminders to update in case it exists.
     */
    where: RemindersWhereUniqueInput
    /**
     * In case the Reminders found by the `where` argument doesn't exist, create a new Reminders with this data.
     */
    create: XOR<RemindersCreateInput, RemindersUncheckedCreateInput>
    /**
     * In case the Reminders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RemindersUpdateInput, RemindersUncheckedUpdateInput>
  }

  /**
   * Reminders delete
   */
  export type RemindersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminders
     */
    select?: RemindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminders
     */
    omit?: RemindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemindersInclude<ExtArgs> | null
    /**
     * Filter which Reminders to delete.
     */
    where: RemindersWhereUniqueInput
  }

  /**
   * Reminders deleteMany
   */
  export type RemindersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminders to delete
     */
    where?: RemindersWhereInput
    /**
     * Limit how many Reminders to delete.
     */
    limit?: number
  }

  /**
   * Reminders.Tags
   */
  export type Reminders$TagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Reminders without action
   */
  export type RemindersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminders
     */
    select?: RemindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminders
     */
    omit?: RemindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemindersInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    key: string | null
    reference: string | null
    description: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    key: string | null
    reference: string | null
    description: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    key: number
    reference: number
    description: number
    summary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImageMinAggregateInputType = {
    id?: true
    key?: true
    reference?: true
    description?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    key?: true
    reference?: true
    description?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    key?: true
    reference?: true
    description?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    key: string
    reference: string
    description: string | null
    summary: string | null
    createdAt: Date
    updatedAt: Date
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    reference?: boolean
    description?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tags?: boolean | Image$TagsArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    reference?: boolean
    description?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    reference?: boolean
    description?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    key?: boolean
    reference?: boolean
    description?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "reference" | "description" | "summary" | "createdAt" | "updatedAt", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tags?: boolean | Image$TagsArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      Tags: Prisma.$TagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      reference: string
      description: string | null
      summary: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tags<T extends Image$TagsArgs<ExtArgs> = {}>(args?: Subset<T, Image$TagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly key: FieldRef<"Image", 'String'>
    readonly reference: FieldRef<"Image", 'String'>
    readonly description: FieldRef<"Image", 'String'>
    readonly summary: FieldRef<"Image", 'String'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
    readonly updatedAt: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.Tags
   */
  export type Image$TagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Link
   */

  export type AggregateLink = {
    _count: LinkCountAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  export type LinkMinAggregateOutputType = {
    id: string | null
    url: string | null
    description: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LinkMaxAggregateOutputType = {
    id: string | null
    url: string | null
    description: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LinkCountAggregateOutputType = {
    id: number
    url: number
    description: number
    summary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LinkMinAggregateInputType = {
    id?: true
    url?: true
    description?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LinkMaxAggregateInputType = {
    id?: true
    url?: true
    description?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LinkCountAggregateInputType = {
    id?: true
    url?: true
    description?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Link to aggregate.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Links
    **/
    _count?: true | LinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkMaxAggregateInputType
  }

  export type GetLinkAggregateType<T extends LinkAggregateArgs> = {
        [P in keyof T & keyof AggregateLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLink[P]>
      : GetScalarType<T[P], AggregateLink[P]>
  }




  export type LinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithAggregationInput | LinkOrderByWithAggregationInput[]
    by: LinkScalarFieldEnum[] | LinkScalarFieldEnum
    having?: LinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkCountAggregateInputType | true
    _min?: LinkMinAggregateInputType
    _max?: LinkMaxAggregateInputType
  }

  export type LinkGroupByOutputType = {
    id: string
    url: string
    description: string | null
    summary: string | null
    createdAt: Date
    updatedAt: Date
    _count: LinkCountAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  type GetLinkGroupByPayload<T extends LinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkGroupByOutputType[P]>
            : GetScalarType<T[P], LinkGroupByOutputType[P]>
        }
      >
    >


  export type LinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    description?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tags?: boolean | Link$TagsArgs<ExtArgs>
    _count?: boolean | LinkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    description?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["link"]>

  export type LinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    description?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["link"]>

  export type LinkSelectScalar = {
    id?: boolean
    url?: boolean
    description?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "description" | "summary" | "createdAt" | "updatedAt", ExtArgs["result"]["link"]>
  export type LinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tags?: boolean | Link$TagsArgs<ExtArgs>
    _count?: boolean | LinkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Link"
    objects: {
      Tags: Prisma.$TagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      description: string | null
      summary: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["link"]>
    composites: {}
  }

  type LinkGetPayload<S extends boolean | null | undefined | LinkDefaultArgs> = $Result.GetResult<Prisma.$LinkPayload, S>

  type LinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkCountAggregateInputType | true
    }

  export interface LinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Link'], meta: { name: 'Link' } }
    /**
     * Find zero or one Link that matches the filter.
     * @param {LinkFindUniqueArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkFindUniqueArgs>(args: SelectSubset<T, LinkFindUniqueArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Link that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkFindUniqueOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkFindFirstArgs>(args?: SelectSubset<T, LinkFindFirstArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Links
     * const links = await prisma.link.findMany()
     * 
     * // Get first 10 Links
     * const links = await prisma.link.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkWithIdOnly = await prisma.link.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkFindManyArgs>(args?: SelectSubset<T, LinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Link.
     * @param {LinkCreateArgs} args - Arguments to create a Link.
     * @example
     * // Create one Link
     * const Link = await prisma.link.create({
     *   data: {
     *     // ... data to create a Link
     *   }
     * })
     * 
     */
    create<T extends LinkCreateArgs>(args: SelectSubset<T, LinkCreateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Links.
     * @param {LinkCreateManyArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkCreateManyArgs>(args?: SelectSubset<T, LinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Links and returns the data saved in the database.
     * @param {LinkCreateManyAndReturnArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Link.
     * @param {LinkDeleteArgs} args - Arguments to delete one Link.
     * @example
     * // Delete one Link
     * const Link = await prisma.link.delete({
     *   where: {
     *     // ... filter to delete one Link
     *   }
     * })
     * 
     */
    delete<T extends LinkDeleteArgs>(args: SelectSubset<T, LinkDeleteArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Link.
     * @param {LinkUpdateArgs} args - Arguments to update one Link.
     * @example
     * // Update one Link
     * const link = await prisma.link.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkUpdateArgs>(args: SelectSubset<T, LinkUpdateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Links.
     * @param {LinkDeleteManyArgs} args - Arguments to filter Links to delete.
     * @example
     * // Delete a few Links
     * const { count } = await prisma.link.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkDeleteManyArgs>(args?: SelectSubset<T, LinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkUpdateManyArgs>(args: SelectSubset<T, LinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links and returns the data updated in the database.
     * @param {LinkUpdateManyAndReturnArgs} args - Arguments to update many Links.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LinkUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Link.
     * @param {LinkUpsertArgs} args - Arguments to update or create a Link.
     * @example
     * // Update or create a Link
     * const link = await prisma.link.upsert({
     *   create: {
     *     // ... data to create a Link
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Link we want to update
     *   }
     * })
     */
    upsert<T extends LinkUpsertArgs>(args: SelectSubset<T, LinkUpsertArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCountArgs} args - Arguments to filter Links to count.
     * @example
     * // Count the number of Links
     * const count = await prisma.link.count({
     *   where: {
     *     // ... the filter for the Links we want to count
     *   }
     * })
    **/
    count<T extends LinkCountArgs>(
      args?: Subset<T, LinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinkAggregateArgs>(args: Subset<T, LinkAggregateArgs>): Prisma.PrismaPromise<GetLinkAggregateType<T>>

    /**
     * Group by Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkGroupByArgs} args - Group by arguments.
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
      T extends LinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkGroupByArgs['orderBy'] }
        : { orderBy?: LinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Link model
   */
  readonly fields: LinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Link.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tags<T extends Link$TagsArgs<ExtArgs> = {}>(args?: Subset<T, Link$TagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Link model
   */
  interface LinkFieldRefs {
    readonly id: FieldRef<"Link", 'String'>
    readonly url: FieldRef<"Link", 'String'>
    readonly description: FieldRef<"Link", 'String'>
    readonly summary: FieldRef<"Link", 'String'>
    readonly createdAt: FieldRef<"Link", 'DateTime'>
    readonly updatedAt: FieldRef<"Link", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Link findUnique
   */
  export type LinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findUniqueOrThrow
   */
  export type LinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findFirst
   */
  export type LinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findFirstOrThrow
   */
  export type LinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findMany
   */
  export type LinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Links to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link create
   */
  export type LinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to create a Link.
     */
    data: XOR<LinkCreateInput, LinkUncheckedCreateInput>
  }

  /**
   * Link createMany
   */
  export type LinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Link createManyAndReturn
   */
  export type LinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Link update
   */
  export type LinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to update a Link.
     */
    data: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
    /**
     * Choose, which Link to update.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link updateMany
   */
  export type LinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
  }

  /**
   * Link updateManyAndReturn
   */
  export type LinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
  }

  /**
   * Link upsert
   */
  export type LinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The filter to search for the Link to update in case it exists.
     */
    where: LinkWhereUniqueInput
    /**
     * In case the Link found by the `where` argument doesn't exist, create a new Link with this data.
     */
    create: XOR<LinkCreateInput, LinkUncheckedCreateInput>
    /**
     * In case the Link was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
  }

  /**
   * Link delete
   */
  export type LinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter which Link to delete.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link deleteMany
   */
  export type LinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Links to delete
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to delete.
     */
    limit?: number
  }

  /**
   * Link.Tags
   */
  export type Link$TagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Link without action
   */
  export type LinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
  }


  /**
   * Model Credentials
   */

  export type AggregateCredentials = {
    _count: CredentialsCountAggregateOutputType | null
    _min: CredentialsMinAggregateOutputType | null
    _max: CredentialsMaxAggregateOutputType | null
  }

  export type CredentialsMinAggregateOutputType = {
    id: string | null
    name: string | null
    secret: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CredentialsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    secret: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CredentialsCountAggregateOutputType = {
    id: number
    name: number
    secret: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CredentialsMinAggregateInputType = {
    id?: true
    name?: true
    secret?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CredentialsMaxAggregateInputType = {
    id?: true
    name?: true
    secret?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CredentialsCountAggregateInputType = {
    id?: true
    name?: true
    secret?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CredentialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credentials to aggregate.
     */
    where?: CredentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialsOrderByWithRelationInput | CredentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CredentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Credentials
    **/
    _count?: true | CredentialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CredentialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CredentialsMaxAggregateInputType
  }

  export type GetCredentialsAggregateType<T extends CredentialsAggregateArgs> = {
        [P in keyof T & keyof AggregateCredentials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredentials[P]>
      : GetScalarType<T[P], AggregateCredentials[P]>
  }




  export type CredentialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CredentialsWhereInput
    orderBy?: CredentialsOrderByWithAggregationInput | CredentialsOrderByWithAggregationInput[]
    by: CredentialsScalarFieldEnum[] | CredentialsScalarFieldEnum
    having?: CredentialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CredentialsCountAggregateInputType | true
    _min?: CredentialsMinAggregateInputType
    _max?: CredentialsMaxAggregateInputType
  }

  export type CredentialsGroupByOutputType = {
    id: string
    name: string
    secret: string
    createdAt: Date
    updatedAt: Date
    _count: CredentialsCountAggregateOutputType | null
    _min: CredentialsMinAggregateOutputType | null
    _max: CredentialsMaxAggregateOutputType | null
  }

  type GetCredentialsGroupByPayload<T extends CredentialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CredentialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CredentialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CredentialsGroupByOutputType[P]>
            : GetScalarType<T[P], CredentialsGroupByOutputType[P]>
        }
      >
    >


  export type CredentialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    secret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tags?: boolean | Credentials$TagsArgs<ExtArgs>
    _count?: boolean | CredentialsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credentials"]>

  export type CredentialsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    secret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["credentials"]>

  export type CredentialsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    secret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["credentials"]>

  export type CredentialsSelectScalar = {
    id?: boolean
    name?: boolean
    secret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CredentialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "secret" | "createdAt" | "updatedAt", ExtArgs["result"]["credentials"]>
  export type CredentialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tags?: boolean | Credentials$TagsArgs<ExtArgs>
    _count?: boolean | CredentialsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CredentialsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CredentialsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CredentialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Credentials"
    objects: {
      Tags: Prisma.$TagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      secret: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["credentials"]>
    composites: {}
  }

  type CredentialsGetPayload<S extends boolean | null | undefined | CredentialsDefaultArgs> = $Result.GetResult<Prisma.$CredentialsPayload, S>

  type CredentialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CredentialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CredentialsCountAggregateInputType | true
    }

  export interface CredentialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Credentials'], meta: { name: 'Credentials' } }
    /**
     * Find zero or one Credentials that matches the filter.
     * @param {CredentialsFindUniqueArgs} args - Arguments to find a Credentials
     * @example
     * // Get one Credentials
     * const credentials = await prisma.credentials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CredentialsFindUniqueArgs>(args: SelectSubset<T, CredentialsFindUniqueArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Credentials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CredentialsFindUniqueOrThrowArgs} args - Arguments to find a Credentials
     * @example
     * // Get one Credentials
     * const credentials = await prisma.credentials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CredentialsFindUniqueOrThrowArgs>(args: SelectSubset<T, CredentialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsFindFirstArgs} args - Arguments to find a Credentials
     * @example
     * // Get one Credentials
     * const credentials = await prisma.credentials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CredentialsFindFirstArgs>(args?: SelectSubset<T, CredentialsFindFirstArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credentials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsFindFirstOrThrowArgs} args - Arguments to find a Credentials
     * @example
     * // Get one Credentials
     * const credentials = await prisma.credentials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CredentialsFindFirstOrThrowArgs>(args?: SelectSubset<T, CredentialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credentials
     * const credentials = await prisma.credentials.findMany()
     * 
     * // Get first 10 Credentials
     * const credentials = await prisma.credentials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const credentialsWithIdOnly = await prisma.credentials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CredentialsFindManyArgs>(args?: SelectSubset<T, CredentialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Credentials.
     * @param {CredentialsCreateArgs} args - Arguments to create a Credentials.
     * @example
     * // Create one Credentials
     * const Credentials = await prisma.credentials.create({
     *   data: {
     *     // ... data to create a Credentials
     *   }
     * })
     * 
     */
    create<T extends CredentialsCreateArgs>(args: SelectSubset<T, CredentialsCreateArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Credentials.
     * @param {CredentialsCreateManyArgs} args - Arguments to create many Credentials.
     * @example
     * // Create many Credentials
     * const credentials = await prisma.credentials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CredentialsCreateManyArgs>(args?: SelectSubset<T, CredentialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Credentials and returns the data saved in the database.
     * @param {CredentialsCreateManyAndReturnArgs} args - Arguments to create many Credentials.
     * @example
     * // Create many Credentials
     * const credentials = await prisma.credentials.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Credentials and only return the `id`
     * const credentialsWithIdOnly = await prisma.credentials.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CredentialsCreateManyAndReturnArgs>(args?: SelectSubset<T, CredentialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Credentials.
     * @param {CredentialsDeleteArgs} args - Arguments to delete one Credentials.
     * @example
     * // Delete one Credentials
     * const Credentials = await prisma.credentials.delete({
     *   where: {
     *     // ... filter to delete one Credentials
     *   }
     * })
     * 
     */
    delete<T extends CredentialsDeleteArgs>(args: SelectSubset<T, CredentialsDeleteArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Credentials.
     * @param {CredentialsUpdateArgs} args - Arguments to update one Credentials.
     * @example
     * // Update one Credentials
     * const credentials = await prisma.credentials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CredentialsUpdateArgs>(args: SelectSubset<T, CredentialsUpdateArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Credentials.
     * @param {CredentialsDeleteManyArgs} args - Arguments to filter Credentials to delete.
     * @example
     * // Delete a few Credentials
     * const { count } = await prisma.credentials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CredentialsDeleteManyArgs>(args?: SelectSubset<T, CredentialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credentials
     * const credentials = await prisma.credentials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CredentialsUpdateManyArgs>(args: SelectSubset<T, CredentialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credentials and returns the data updated in the database.
     * @param {CredentialsUpdateManyAndReturnArgs} args - Arguments to update many Credentials.
     * @example
     * // Update many Credentials
     * const credentials = await prisma.credentials.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Credentials and only return the `id`
     * const credentialsWithIdOnly = await prisma.credentials.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CredentialsUpdateManyAndReturnArgs>(args: SelectSubset<T, CredentialsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Credentials.
     * @param {CredentialsUpsertArgs} args - Arguments to update or create a Credentials.
     * @example
     * // Update or create a Credentials
     * const credentials = await prisma.credentials.upsert({
     *   create: {
     *     // ... data to create a Credentials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credentials we want to update
     *   }
     * })
     */
    upsert<T extends CredentialsUpsertArgs>(args: SelectSubset<T, CredentialsUpsertArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsCountArgs} args - Arguments to filter Credentials to count.
     * @example
     * // Count the number of Credentials
     * const count = await prisma.credentials.count({
     *   where: {
     *     // ... the filter for the Credentials we want to count
     *   }
     * })
    **/
    count<T extends CredentialsCountArgs>(
      args?: Subset<T, CredentialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CredentialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CredentialsAggregateArgs>(args: Subset<T, CredentialsAggregateArgs>): Prisma.PrismaPromise<GetCredentialsAggregateType<T>>

    /**
     * Group by Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsGroupByArgs} args - Group by arguments.
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
      T extends CredentialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CredentialsGroupByArgs['orderBy'] }
        : { orderBy?: CredentialsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CredentialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredentialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Credentials model
   */
  readonly fields: CredentialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Credentials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CredentialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tags<T extends Credentials$TagsArgs<ExtArgs> = {}>(args?: Subset<T, Credentials$TagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Credentials model
   */
  interface CredentialsFieldRefs {
    readonly id: FieldRef<"Credentials", 'String'>
    readonly name: FieldRef<"Credentials", 'String'>
    readonly secret: FieldRef<"Credentials", 'String'>
    readonly createdAt: FieldRef<"Credentials", 'DateTime'>
    readonly updatedAt: FieldRef<"Credentials", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Credentials findUnique
   */
  export type CredentialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * Filter, which Credentials to fetch.
     */
    where: CredentialsWhereUniqueInput
  }

  /**
   * Credentials findUniqueOrThrow
   */
  export type CredentialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * Filter, which Credentials to fetch.
     */
    where: CredentialsWhereUniqueInput
  }

  /**
   * Credentials findFirst
   */
  export type CredentialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * Filter, which Credentials to fetch.
     */
    where?: CredentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialsOrderByWithRelationInput | CredentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credentials.
     */
    cursor?: CredentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credentials.
     */
    distinct?: CredentialsScalarFieldEnum | CredentialsScalarFieldEnum[]
  }

  /**
   * Credentials findFirstOrThrow
   */
  export type CredentialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * Filter, which Credentials to fetch.
     */
    where?: CredentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialsOrderByWithRelationInput | CredentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credentials.
     */
    cursor?: CredentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credentials.
     */
    distinct?: CredentialsScalarFieldEnum | CredentialsScalarFieldEnum[]
  }

  /**
   * Credentials findMany
   */
  export type CredentialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * Filter, which Credentials to fetch.
     */
    where?: CredentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialsOrderByWithRelationInput | CredentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Credentials.
     */
    cursor?: CredentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    distinct?: CredentialsScalarFieldEnum | CredentialsScalarFieldEnum[]
  }

  /**
   * Credentials create
   */
  export type CredentialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * The data needed to create a Credentials.
     */
    data: XOR<CredentialsCreateInput, CredentialsUncheckedCreateInput>
  }

  /**
   * Credentials createMany
   */
  export type CredentialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Credentials.
     */
    data: CredentialsCreateManyInput | CredentialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Credentials createManyAndReturn
   */
  export type CredentialsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * The data used to create many Credentials.
     */
    data: CredentialsCreateManyInput | CredentialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Credentials update
   */
  export type CredentialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * The data needed to update a Credentials.
     */
    data: XOR<CredentialsUpdateInput, CredentialsUncheckedUpdateInput>
    /**
     * Choose, which Credentials to update.
     */
    where: CredentialsWhereUniqueInput
  }

  /**
   * Credentials updateMany
   */
  export type CredentialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Credentials.
     */
    data: XOR<CredentialsUpdateManyMutationInput, CredentialsUncheckedUpdateManyInput>
    /**
     * Filter which Credentials to update
     */
    where?: CredentialsWhereInput
    /**
     * Limit how many Credentials to update.
     */
    limit?: number
  }

  /**
   * Credentials updateManyAndReturn
   */
  export type CredentialsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * The data used to update Credentials.
     */
    data: XOR<CredentialsUpdateManyMutationInput, CredentialsUncheckedUpdateManyInput>
    /**
     * Filter which Credentials to update
     */
    where?: CredentialsWhereInput
    /**
     * Limit how many Credentials to update.
     */
    limit?: number
  }

  /**
   * Credentials upsert
   */
  export type CredentialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * The filter to search for the Credentials to update in case it exists.
     */
    where: CredentialsWhereUniqueInput
    /**
     * In case the Credentials found by the `where` argument doesn't exist, create a new Credentials with this data.
     */
    create: XOR<CredentialsCreateInput, CredentialsUncheckedCreateInput>
    /**
     * In case the Credentials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CredentialsUpdateInput, CredentialsUncheckedUpdateInput>
  }

  /**
   * Credentials delete
   */
  export type CredentialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * Filter which Credentials to delete.
     */
    where: CredentialsWhereUniqueInput
  }

  /**
   * Credentials deleteMany
   */
  export type CredentialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credentials to delete
     */
    where?: CredentialsWhereInput
    /**
     * Limit how many Credentials to delete.
     */
    limit?: number
  }

  /**
   * Credentials.Tags
   */
  export type Credentials$TagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Credentials without action
   */
  export type CredentialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Notes?: boolean | Tag$NotesArgs<ExtArgs>
    Reminders?: boolean | Tag$RemindersArgs<ExtArgs>
    Images?: boolean | Tag$ImagesArgs<ExtArgs>
    Links?: boolean | Tag$LinksArgs<ExtArgs>
    Credentials?: boolean | Tag$CredentialsArgs<ExtArgs>
    ExpenseTracker?: boolean | Tag$ExpenseTrackerArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Notes?: boolean | Tag$NotesArgs<ExtArgs>
    Reminders?: boolean | Tag$RemindersArgs<ExtArgs>
    Images?: boolean | Tag$ImagesArgs<ExtArgs>
    Links?: boolean | Tag$LinksArgs<ExtArgs>
    Credentials?: boolean | Tag$CredentialsArgs<ExtArgs>
    ExpenseTracker?: boolean | Tag$ExpenseTrackerArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      Notes: Prisma.$NotesPayload<ExtArgs>[]
      Reminders: Prisma.$RemindersPayload<ExtArgs>[]
      Images: Prisma.$ImagePayload<ExtArgs>[]
      Links: Prisma.$LinkPayload<ExtArgs>[]
      Credentials: Prisma.$CredentialsPayload<ExtArgs>[]
      ExpenseTracker: Prisma.$ExpenseTrackerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Notes<T extends Tag$NotesArgs<ExtArgs> = {}>(args?: Subset<T, Tag$NotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Reminders<T extends Tag$RemindersArgs<ExtArgs> = {}>(args?: Subset<T, Tag$RemindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemindersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Images<T extends Tag$ImagesArgs<ExtArgs> = {}>(args?: Subset<T, Tag$ImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Links<T extends Tag$LinksArgs<ExtArgs> = {}>(args?: Subset<T, Tag$LinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Credentials<T extends Tag$CredentialsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$CredentialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ExpenseTracker<T extends Tag$ExpenseTrackerArgs<ExtArgs> = {}>(args?: Subset<T, Tag$ExpenseTrackerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.Notes
   */
  export type Tag$NotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    where?: NotesWhereInput
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    cursor?: NotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Tag.Reminders
   */
  export type Tag$RemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminders
     */
    select?: RemindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminders
     */
    omit?: RemindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemindersInclude<ExtArgs> | null
    where?: RemindersWhereInput
    orderBy?: RemindersOrderByWithRelationInput | RemindersOrderByWithRelationInput[]
    cursor?: RemindersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RemindersScalarFieldEnum | RemindersScalarFieldEnum[]
  }

  /**
   * Tag.Images
   */
  export type Tag$ImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Tag.Links
   */
  export type Tag$LinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    cursor?: LinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Tag.Credentials
   */
  export type Tag$CredentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    where?: CredentialsWhereInput
    orderBy?: CredentialsOrderByWithRelationInput | CredentialsOrderByWithRelationInput[]
    cursor?: CredentialsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CredentialsScalarFieldEnum | CredentialsScalarFieldEnum[]
  }

  /**
   * Tag.ExpenseTracker
   */
  export type Tag$ExpenseTrackerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
    where?: ExpenseTrackerWhereInput
    orderBy?: ExpenseTrackerOrderByWithRelationInput | ExpenseTrackerOrderByWithRelationInput[]
    cursor?: ExpenseTrackerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseTrackerScalarFieldEnum | ExpenseTrackerScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ExpenseTrackerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExpenseTrackerScalarFieldEnum = (typeof ExpenseTrackerScalarFieldEnum)[keyof typeof ExpenseTrackerScalarFieldEnum]


  export const NotesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotesScalarFieldEnum = (typeof NotesScalarFieldEnum)[keyof typeof NotesScalarFieldEnum]


  export const RemindersScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RemindersScalarFieldEnum = (typeof RemindersScalarFieldEnum)[keyof typeof RemindersScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    key: 'key',
    reference: 'reference',
    description: 'description',
    summary: 'summary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const LinkScalarFieldEnum: {
    id: 'id',
    url: 'url',
    description: 'description',
    summary: 'summary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LinkScalarFieldEnum = (typeof LinkScalarFieldEnum)[keyof typeof LinkScalarFieldEnum]


  export const CredentialsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    secret: 'secret',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CredentialsScalarFieldEnum = (typeof CredentialsScalarFieldEnum)[keyof typeof CredentialsScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ExpenseTrackerWhereInput = {
    AND?: ExpenseTrackerWhereInput | ExpenseTrackerWhereInput[]
    OR?: ExpenseTrackerWhereInput[]
    NOT?: ExpenseTrackerWhereInput | ExpenseTrackerWhereInput[]
    id?: StringFilter<"ExpenseTracker"> | string
    name?: StringFilter<"ExpenseTracker"> | string
    amount?: FloatFilter<"ExpenseTracker"> | number
    createdAt?: DateTimeFilter<"ExpenseTracker"> | Date | string
    updatedAt?: DateTimeFilter<"ExpenseTracker"> | Date | string
    Tags?: TagListRelationFilter
  }

  export type ExpenseTrackerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Tags?: TagOrderByRelationAggregateInput
  }

  export type ExpenseTrackerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseTrackerWhereInput | ExpenseTrackerWhereInput[]
    OR?: ExpenseTrackerWhereInput[]
    NOT?: ExpenseTrackerWhereInput | ExpenseTrackerWhereInput[]
    name?: StringFilter<"ExpenseTracker"> | string
    amount?: FloatFilter<"ExpenseTracker"> | number
    createdAt?: DateTimeFilter<"ExpenseTracker"> | Date | string
    updatedAt?: DateTimeFilter<"ExpenseTracker"> | Date | string
    Tags?: TagListRelationFilter
  }, "id">

  export type ExpenseTrackerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExpenseTrackerCountOrderByAggregateInput
    _avg?: ExpenseTrackerAvgOrderByAggregateInput
    _max?: ExpenseTrackerMaxOrderByAggregateInput
    _min?: ExpenseTrackerMinOrderByAggregateInput
    _sum?: ExpenseTrackerSumOrderByAggregateInput
  }

  export type ExpenseTrackerScalarWhereWithAggregatesInput = {
    AND?: ExpenseTrackerScalarWhereWithAggregatesInput | ExpenseTrackerScalarWhereWithAggregatesInput[]
    OR?: ExpenseTrackerScalarWhereWithAggregatesInput[]
    NOT?: ExpenseTrackerScalarWhereWithAggregatesInput | ExpenseTrackerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExpenseTracker"> | string
    name?: StringWithAggregatesFilter<"ExpenseTracker"> | string
    amount?: FloatWithAggregatesFilter<"ExpenseTracker"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ExpenseTracker"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExpenseTracker"> | Date | string
  }

  export type NotesWhereInput = {
    AND?: NotesWhereInput | NotesWhereInput[]
    OR?: NotesWhereInput[]
    NOT?: NotesWhereInput | NotesWhereInput[]
    id?: StringFilter<"Notes"> | string
    title?: StringFilter<"Notes"> | string
    content?: StringFilter<"Notes"> | string
    createdAt?: DateTimeFilter<"Notes"> | Date | string
    updatedAt?: DateTimeFilter<"Notes"> | Date | string
    Tags?: TagListRelationFilter
  }

  export type NotesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Tags?: TagOrderByRelationAggregateInput
  }

  export type NotesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotesWhereInput | NotesWhereInput[]
    OR?: NotesWhereInput[]
    NOT?: NotesWhereInput | NotesWhereInput[]
    title?: StringFilter<"Notes"> | string
    content?: StringFilter<"Notes"> | string
    createdAt?: DateTimeFilter<"Notes"> | Date | string
    updatedAt?: DateTimeFilter<"Notes"> | Date | string
    Tags?: TagListRelationFilter
  }, "id">

  export type NotesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotesCountOrderByAggregateInput
    _max?: NotesMaxOrderByAggregateInput
    _min?: NotesMinOrderByAggregateInput
  }

  export type NotesScalarWhereWithAggregatesInput = {
    AND?: NotesScalarWhereWithAggregatesInput | NotesScalarWhereWithAggregatesInput[]
    OR?: NotesScalarWhereWithAggregatesInput[]
    NOT?: NotesScalarWhereWithAggregatesInput | NotesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notes"> | string
    title?: StringWithAggregatesFilter<"Notes"> | string
    content?: StringWithAggregatesFilter<"Notes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notes"> | Date | string
  }

  export type RemindersWhereInput = {
    AND?: RemindersWhereInput | RemindersWhereInput[]
    OR?: RemindersWhereInput[]
    NOT?: RemindersWhereInput | RemindersWhereInput[]
    id?: StringFilter<"Reminders"> | string
    title?: StringFilter<"Reminders"> | string
    description?: StringNullableFilter<"Reminders"> | string | null
    createdAt?: DateTimeFilter<"Reminders"> | Date | string
    updatedAt?: DateTimeFilter<"Reminders"> | Date | string
    Tags?: TagListRelationFilter
  }

  export type RemindersOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Tags?: TagOrderByRelationAggregateInput
  }

  export type RemindersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RemindersWhereInput | RemindersWhereInput[]
    OR?: RemindersWhereInput[]
    NOT?: RemindersWhereInput | RemindersWhereInput[]
    title?: StringFilter<"Reminders"> | string
    description?: StringNullableFilter<"Reminders"> | string | null
    createdAt?: DateTimeFilter<"Reminders"> | Date | string
    updatedAt?: DateTimeFilter<"Reminders"> | Date | string
    Tags?: TagListRelationFilter
  }, "id">

  export type RemindersOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RemindersCountOrderByAggregateInput
    _max?: RemindersMaxOrderByAggregateInput
    _min?: RemindersMinOrderByAggregateInput
  }

  export type RemindersScalarWhereWithAggregatesInput = {
    AND?: RemindersScalarWhereWithAggregatesInput | RemindersScalarWhereWithAggregatesInput[]
    OR?: RemindersScalarWhereWithAggregatesInput[]
    NOT?: RemindersScalarWhereWithAggregatesInput | RemindersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reminders"> | string
    title?: StringWithAggregatesFilter<"Reminders"> | string
    description?: StringNullableWithAggregatesFilter<"Reminders"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Reminders"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reminders"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    key?: StringFilter<"Image"> | string
    reference?: StringFilter<"Image"> | string
    description?: StringNullableFilter<"Image"> | string | null
    summary?: StringNullableFilter<"Image"> | string | null
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    Tags?: TagListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    reference?: SortOrder
    description?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Tags?: TagOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    key?: StringFilter<"Image"> | string
    reference?: StringFilter<"Image"> | string
    description?: StringNullableFilter<"Image"> | string | null
    summary?: StringNullableFilter<"Image"> | string | null
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    Tags?: TagListRelationFilter
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    reference?: SortOrder
    description?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    key?: StringWithAggregatesFilter<"Image"> | string
    reference?: StringWithAggregatesFilter<"Image"> | string
    description?: StringNullableWithAggregatesFilter<"Image"> | string | null
    summary?: StringNullableWithAggregatesFilter<"Image"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type LinkWhereInput = {
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    id?: StringFilter<"Link"> | string
    url?: StringFilter<"Link"> | string
    description?: StringNullableFilter<"Link"> | string | null
    summary?: StringNullableFilter<"Link"> | string | null
    createdAt?: DateTimeFilter<"Link"> | Date | string
    updatedAt?: DateTimeFilter<"Link"> | Date | string
    Tags?: TagListRelationFilter
  }

  export type LinkOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Tags?: TagOrderByRelationAggregateInput
  }

  export type LinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    url?: StringFilter<"Link"> | string
    description?: StringNullableFilter<"Link"> | string | null
    summary?: StringNullableFilter<"Link"> | string | null
    createdAt?: DateTimeFilter<"Link"> | Date | string
    updatedAt?: DateTimeFilter<"Link"> | Date | string
    Tags?: TagListRelationFilter
  }, "id">

  export type LinkOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LinkCountOrderByAggregateInput
    _max?: LinkMaxOrderByAggregateInput
    _min?: LinkMinOrderByAggregateInput
  }

  export type LinkScalarWhereWithAggregatesInput = {
    AND?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    OR?: LinkScalarWhereWithAggregatesInput[]
    NOT?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Link"> | string
    url?: StringWithAggregatesFilter<"Link"> | string
    description?: StringNullableWithAggregatesFilter<"Link"> | string | null
    summary?: StringNullableWithAggregatesFilter<"Link"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Link"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Link"> | Date | string
  }

  export type CredentialsWhereInput = {
    AND?: CredentialsWhereInput | CredentialsWhereInput[]
    OR?: CredentialsWhereInput[]
    NOT?: CredentialsWhereInput | CredentialsWhereInput[]
    id?: StringFilter<"Credentials"> | string
    name?: StringFilter<"Credentials"> | string
    secret?: StringFilter<"Credentials"> | string
    createdAt?: DateTimeFilter<"Credentials"> | Date | string
    updatedAt?: DateTimeFilter<"Credentials"> | Date | string
    Tags?: TagListRelationFilter
  }

  export type CredentialsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    secret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Tags?: TagOrderByRelationAggregateInput
  }

  export type CredentialsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CredentialsWhereInput | CredentialsWhereInput[]
    OR?: CredentialsWhereInput[]
    NOT?: CredentialsWhereInput | CredentialsWhereInput[]
    name?: StringFilter<"Credentials"> | string
    secret?: StringFilter<"Credentials"> | string
    createdAt?: DateTimeFilter<"Credentials"> | Date | string
    updatedAt?: DateTimeFilter<"Credentials"> | Date | string
    Tags?: TagListRelationFilter
  }, "id">

  export type CredentialsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    secret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CredentialsCountOrderByAggregateInput
    _max?: CredentialsMaxOrderByAggregateInput
    _min?: CredentialsMinOrderByAggregateInput
  }

  export type CredentialsScalarWhereWithAggregatesInput = {
    AND?: CredentialsScalarWhereWithAggregatesInput | CredentialsScalarWhereWithAggregatesInput[]
    OR?: CredentialsScalarWhereWithAggregatesInput[]
    NOT?: CredentialsScalarWhereWithAggregatesInput | CredentialsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Credentials"> | string
    name?: StringWithAggregatesFilter<"Credentials"> | string
    secret?: StringWithAggregatesFilter<"Credentials"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Credentials"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Credentials"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    Notes?: NotesListRelationFilter
    Reminders?: RemindersListRelationFilter
    Images?: ImageListRelationFilter
    Links?: LinkListRelationFilter
    Credentials?: CredentialsListRelationFilter
    ExpenseTracker?: ExpenseTrackerListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Notes?: NotesOrderByRelationAggregateInput
    Reminders?: RemindersOrderByRelationAggregateInput
    Images?: ImageOrderByRelationAggregateInput
    Links?: LinkOrderByRelationAggregateInput
    Credentials?: CredentialsOrderByRelationAggregateInput
    ExpenseTracker?: ExpenseTrackerOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    Notes?: NotesListRelationFilter
    Reminders?: RemindersListRelationFilter
    Images?: ImageListRelationFilter
    Links?: LinkListRelationFilter
    Credentials?: CredentialsListRelationFilter
    ExpenseTracker?: ExpenseTrackerListRelationFilter
  }, "id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type ExpenseTrackerCreateInput = {
    id?: string
    name: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Tags?: TagCreateNestedManyWithoutExpenseTrackerInput
  }

  export type ExpenseTrackerUncheckedCreateInput = {
    id?: string
    name: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Tags?: TagUncheckedCreateNestedManyWithoutExpenseTrackerInput
  }

  export type ExpenseTrackerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tags?: TagUpdateManyWithoutExpenseTrackerNestedInput
  }

  export type ExpenseTrackerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tags?: TagUncheckedUpdateManyWithoutExpenseTrackerNestedInput
  }

  export type ExpenseTrackerCreateManyInput = {
    id?: string
    name: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseTrackerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseTrackerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotesCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Tags?: TagCreateNestedManyWithoutNotesInput
  }

  export type NotesUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Tags?: TagUncheckedCreateNestedManyWithoutNotesInput
  }

  export type NotesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tags?: TagUpdateManyWithoutNotesNestedInput
  }

  export type NotesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tags?: TagUncheckedUpdateManyWithoutNotesNestedInput
  }

  export type NotesCreateManyInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemindersCreateInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Tags?: TagCreateNestedManyWithoutRemindersInput
  }

  export type RemindersUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Tags?: TagUncheckedCreateNestedManyWithoutRemindersInput
  }

  export type RemindersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tags?: TagUpdateManyWithoutRemindersNestedInput
  }

  export type RemindersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tags?: TagUncheckedUpdateManyWithoutRemindersNestedInput
  }

  export type RemindersCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemindersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemindersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    id?: string
    key: string
    reference: string
    description?: string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Tags?: TagCreateNestedManyWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    key: string
    reference: string
    description?: string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Tags?: TagUncheckedCreateNestedManyWithoutImagesInput
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tags?: TagUpdateManyWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tags?: TagUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type ImageCreateManyInput = {
    id?: string
    key: string
    reference: string
    description?: string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCreateInput = {
    id?: string
    url: string
    description?: string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Tags?: TagCreateNestedManyWithoutLinksInput
  }

  export type LinkUncheckedCreateInput = {
    id?: string
    url: string
    description?: string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Tags?: TagUncheckedCreateNestedManyWithoutLinksInput
  }

  export type LinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tags?: TagUpdateManyWithoutLinksNestedInput
  }

  export type LinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tags?: TagUncheckedUpdateManyWithoutLinksNestedInput
  }

  export type LinkCreateManyInput = {
    id?: string
    url: string
    description?: string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialsCreateInput = {
    id?: string
    name: string
    secret: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Tags?: TagCreateNestedManyWithoutCredentialsInput
  }

  export type CredentialsUncheckedCreateInput = {
    id?: string
    name: string
    secret: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Tags?: TagUncheckedCreateNestedManyWithoutCredentialsInput
  }

  export type CredentialsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tags?: TagUpdateManyWithoutCredentialsNestedInput
  }

  export type CredentialsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tags?: TagUncheckedUpdateManyWithoutCredentialsNestedInput
  }

  export type CredentialsCreateManyInput = {
    id?: string
    name: string
    secret: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CredentialsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Notes?: NotesCreateNestedManyWithoutTagsInput
    Reminders?: RemindersCreateNestedManyWithoutTagsInput
    Images?: ImageCreateNestedManyWithoutTagsInput
    Links?: LinkCreateNestedManyWithoutTagsInput
    Credentials?: CredentialsCreateNestedManyWithoutTagsInput
    ExpenseTracker?: ExpenseTrackerCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Notes?: NotesUncheckedCreateNestedManyWithoutTagsInput
    Reminders?: RemindersUncheckedCreateNestedManyWithoutTagsInput
    Images?: ImageUncheckedCreateNestedManyWithoutTagsInput
    Links?: LinkUncheckedCreateNestedManyWithoutTagsInput
    Credentials?: CredentialsUncheckedCreateNestedManyWithoutTagsInput
    ExpenseTracker?: ExpenseTrackerUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notes?: NotesUpdateManyWithoutTagsNestedInput
    Reminders?: RemindersUpdateManyWithoutTagsNestedInput
    Images?: ImageUpdateManyWithoutTagsNestedInput
    Links?: LinkUpdateManyWithoutTagsNestedInput
    Credentials?: CredentialsUpdateManyWithoutTagsNestedInput
    ExpenseTracker?: ExpenseTrackerUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notes?: NotesUncheckedUpdateManyWithoutTagsNestedInput
    Reminders?: RemindersUncheckedUpdateManyWithoutTagsNestedInput
    Images?: ImageUncheckedUpdateManyWithoutTagsNestedInput
    Links?: LinkUncheckedUpdateManyWithoutTagsNestedInput
    Credentials?: CredentialsUncheckedUpdateManyWithoutTagsNestedInput
    ExpenseTracker?: ExpenseTrackerUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseTrackerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseTrackerAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExpenseTrackerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseTrackerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseTrackerSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NotesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RemindersCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemindersMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemindersMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    reference?: SortOrder
    description?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    reference?: SortOrder
    description?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    reference?: SortOrder
    description?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LinkCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LinkMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LinkMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CredentialsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    secret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CredentialsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    secret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CredentialsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    secret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotesListRelationFilter = {
    every?: NotesWhereInput
    some?: NotesWhereInput
    none?: NotesWhereInput
  }

  export type RemindersListRelationFilter = {
    every?: RemindersWhereInput
    some?: RemindersWhereInput
    none?: RemindersWhereInput
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type LinkListRelationFilter = {
    every?: LinkWhereInput
    some?: LinkWhereInput
    none?: LinkWhereInput
  }

  export type CredentialsListRelationFilter = {
    every?: CredentialsWhereInput
    some?: CredentialsWhereInput
    none?: CredentialsWhereInput
  }

  export type ExpenseTrackerListRelationFilter = {
    every?: ExpenseTrackerWhereInput
    some?: ExpenseTrackerWhereInput
    none?: ExpenseTrackerWhereInput
  }

  export type NotesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RemindersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CredentialsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseTrackerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagCreateNestedManyWithoutExpenseTrackerInput = {
    create?: XOR<TagCreateWithoutExpenseTrackerInput, TagUncheckedCreateWithoutExpenseTrackerInput> | TagCreateWithoutExpenseTrackerInput[] | TagUncheckedCreateWithoutExpenseTrackerInput[]
    connectOrCreate?: TagCreateOrConnectWithoutExpenseTrackerInput | TagCreateOrConnectWithoutExpenseTrackerInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutExpenseTrackerInput = {
    create?: XOR<TagCreateWithoutExpenseTrackerInput, TagUncheckedCreateWithoutExpenseTrackerInput> | TagCreateWithoutExpenseTrackerInput[] | TagUncheckedCreateWithoutExpenseTrackerInput[]
    connectOrCreate?: TagCreateOrConnectWithoutExpenseTrackerInput | TagCreateOrConnectWithoutExpenseTrackerInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TagUpdateManyWithoutExpenseTrackerNestedInput = {
    create?: XOR<TagCreateWithoutExpenseTrackerInput, TagUncheckedCreateWithoutExpenseTrackerInput> | TagCreateWithoutExpenseTrackerInput[] | TagUncheckedCreateWithoutExpenseTrackerInput[]
    connectOrCreate?: TagCreateOrConnectWithoutExpenseTrackerInput | TagCreateOrConnectWithoutExpenseTrackerInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutExpenseTrackerInput | TagUpsertWithWhereUniqueWithoutExpenseTrackerInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutExpenseTrackerInput | TagUpdateWithWhereUniqueWithoutExpenseTrackerInput[]
    updateMany?: TagUpdateManyWithWhereWithoutExpenseTrackerInput | TagUpdateManyWithWhereWithoutExpenseTrackerInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutExpenseTrackerNestedInput = {
    create?: XOR<TagCreateWithoutExpenseTrackerInput, TagUncheckedCreateWithoutExpenseTrackerInput> | TagCreateWithoutExpenseTrackerInput[] | TagUncheckedCreateWithoutExpenseTrackerInput[]
    connectOrCreate?: TagCreateOrConnectWithoutExpenseTrackerInput | TagCreateOrConnectWithoutExpenseTrackerInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutExpenseTrackerInput | TagUpsertWithWhereUniqueWithoutExpenseTrackerInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutExpenseTrackerInput | TagUpdateWithWhereUniqueWithoutExpenseTrackerInput[]
    updateMany?: TagUpdateManyWithWhereWithoutExpenseTrackerInput | TagUpdateManyWithWhereWithoutExpenseTrackerInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TagCreateNestedManyWithoutNotesInput = {
    create?: XOR<TagCreateWithoutNotesInput, TagUncheckedCreateWithoutNotesInput> | TagCreateWithoutNotesInput[] | TagUncheckedCreateWithoutNotesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutNotesInput | TagCreateOrConnectWithoutNotesInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutNotesInput = {
    create?: XOR<TagCreateWithoutNotesInput, TagUncheckedCreateWithoutNotesInput> | TagCreateWithoutNotesInput[] | TagUncheckedCreateWithoutNotesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutNotesInput | TagCreateOrConnectWithoutNotesInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TagUpdateManyWithoutNotesNestedInput = {
    create?: XOR<TagCreateWithoutNotesInput, TagUncheckedCreateWithoutNotesInput> | TagCreateWithoutNotesInput[] | TagUncheckedCreateWithoutNotesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutNotesInput | TagCreateOrConnectWithoutNotesInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutNotesInput | TagUpsertWithWhereUniqueWithoutNotesInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutNotesInput | TagUpdateWithWhereUniqueWithoutNotesInput[]
    updateMany?: TagUpdateManyWithWhereWithoutNotesInput | TagUpdateManyWithWhereWithoutNotesInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutNotesNestedInput = {
    create?: XOR<TagCreateWithoutNotesInput, TagUncheckedCreateWithoutNotesInput> | TagCreateWithoutNotesInput[] | TagUncheckedCreateWithoutNotesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutNotesInput | TagCreateOrConnectWithoutNotesInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutNotesInput | TagUpsertWithWhereUniqueWithoutNotesInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutNotesInput | TagUpdateWithWhereUniqueWithoutNotesInput[]
    updateMany?: TagUpdateManyWithWhereWithoutNotesInput | TagUpdateManyWithWhereWithoutNotesInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TagCreateNestedManyWithoutRemindersInput = {
    create?: XOR<TagCreateWithoutRemindersInput, TagUncheckedCreateWithoutRemindersInput> | TagCreateWithoutRemindersInput[] | TagUncheckedCreateWithoutRemindersInput[]
    connectOrCreate?: TagCreateOrConnectWithoutRemindersInput | TagCreateOrConnectWithoutRemindersInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutRemindersInput = {
    create?: XOR<TagCreateWithoutRemindersInput, TagUncheckedCreateWithoutRemindersInput> | TagCreateWithoutRemindersInput[] | TagUncheckedCreateWithoutRemindersInput[]
    connectOrCreate?: TagCreateOrConnectWithoutRemindersInput | TagCreateOrConnectWithoutRemindersInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TagUpdateManyWithoutRemindersNestedInput = {
    create?: XOR<TagCreateWithoutRemindersInput, TagUncheckedCreateWithoutRemindersInput> | TagCreateWithoutRemindersInput[] | TagUncheckedCreateWithoutRemindersInput[]
    connectOrCreate?: TagCreateOrConnectWithoutRemindersInput | TagCreateOrConnectWithoutRemindersInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutRemindersInput | TagUpsertWithWhereUniqueWithoutRemindersInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutRemindersInput | TagUpdateWithWhereUniqueWithoutRemindersInput[]
    updateMany?: TagUpdateManyWithWhereWithoutRemindersInput | TagUpdateManyWithWhereWithoutRemindersInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutRemindersNestedInput = {
    create?: XOR<TagCreateWithoutRemindersInput, TagUncheckedCreateWithoutRemindersInput> | TagCreateWithoutRemindersInput[] | TagUncheckedCreateWithoutRemindersInput[]
    connectOrCreate?: TagCreateOrConnectWithoutRemindersInput | TagCreateOrConnectWithoutRemindersInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutRemindersInput | TagUpsertWithWhereUniqueWithoutRemindersInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutRemindersInput | TagUpdateWithWhereUniqueWithoutRemindersInput[]
    updateMany?: TagUpdateManyWithWhereWithoutRemindersInput | TagUpdateManyWithWhereWithoutRemindersInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TagCreateNestedManyWithoutImagesInput = {
    create?: XOR<TagCreateWithoutImagesInput, TagUncheckedCreateWithoutImagesInput> | TagCreateWithoutImagesInput[] | TagUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutImagesInput | TagCreateOrConnectWithoutImagesInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutImagesInput = {
    create?: XOR<TagCreateWithoutImagesInput, TagUncheckedCreateWithoutImagesInput> | TagCreateWithoutImagesInput[] | TagUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutImagesInput | TagCreateOrConnectWithoutImagesInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TagUpdateManyWithoutImagesNestedInput = {
    create?: XOR<TagCreateWithoutImagesInput, TagUncheckedCreateWithoutImagesInput> | TagCreateWithoutImagesInput[] | TagUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutImagesInput | TagCreateOrConnectWithoutImagesInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutImagesInput | TagUpsertWithWhereUniqueWithoutImagesInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutImagesInput | TagUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: TagUpdateManyWithWhereWithoutImagesInput | TagUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutImagesNestedInput = {
    create?: XOR<TagCreateWithoutImagesInput, TagUncheckedCreateWithoutImagesInput> | TagCreateWithoutImagesInput[] | TagUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutImagesInput | TagCreateOrConnectWithoutImagesInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutImagesInput | TagUpsertWithWhereUniqueWithoutImagesInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutImagesInput | TagUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: TagUpdateManyWithWhereWithoutImagesInput | TagUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TagCreateNestedManyWithoutLinksInput = {
    create?: XOR<TagCreateWithoutLinksInput, TagUncheckedCreateWithoutLinksInput> | TagCreateWithoutLinksInput[] | TagUncheckedCreateWithoutLinksInput[]
    connectOrCreate?: TagCreateOrConnectWithoutLinksInput | TagCreateOrConnectWithoutLinksInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutLinksInput = {
    create?: XOR<TagCreateWithoutLinksInput, TagUncheckedCreateWithoutLinksInput> | TagCreateWithoutLinksInput[] | TagUncheckedCreateWithoutLinksInput[]
    connectOrCreate?: TagCreateOrConnectWithoutLinksInput | TagCreateOrConnectWithoutLinksInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TagUpdateManyWithoutLinksNestedInput = {
    create?: XOR<TagCreateWithoutLinksInput, TagUncheckedCreateWithoutLinksInput> | TagCreateWithoutLinksInput[] | TagUncheckedCreateWithoutLinksInput[]
    connectOrCreate?: TagCreateOrConnectWithoutLinksInput | TagCreateOrConnectWithoutLinksInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutLinksInput | TagUpsertWithWhereUniqueWithoutLinksInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutLinksInput | TagUpdateWithWhereUniqueWithoutLinksInput[]
    updateMany?: TagUpdateManyWithWhereWithoutLinksInput | TagUpdateManyWithWhereWithoutLinksInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutLinksNestedInput = {
    create?: XOR<TagCreateWithoutLinksInput, TagUncheckedCreateWithoutLinksInput> | TagCreateWithoutLinksInput[] | TagUncheckedCreateWithoutLinksInput[]
    connectOrCreate?: TagCreateOrConnectWithoutLinksInput | TagCreateOrConnectWithoutLinksInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutLinksInput | TagUpsertWithWhereUniqueWithoutLinksInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutLinksInput | TagUpdateWithWhereUniqueWithoutLinksInput[]
    updateMany?: TagUpdateManyWithWhereWithoutLinksInput | TagUpdateManyWithWhereWithoutLinksInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TagCreateNestedManyWithoutCredentialsInput = {
    create?: XOR<TagCreateWithoutCredentialsInput, TagUncheckedCreateWithoutCredentialsInput> | TagCreateWithoutCredentialsInput[] | TagUncheckedCreateWithoutCredentialsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutCredentialsInput | TagCreateOrConnectWithoutCredentialsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutCredentialsInput = {
    create?: XOR<TagCreateWithoutCredentialsInput, TagUncheckedCreateWithoutCredentialsInput> | TagCreateWithoutCredentialsInput[] | TagUncheckedCreateWithoutCredentialsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutCredentialsInput | TagCreateOrConnectWithoutCredentialsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TagUpdateManyWithoutCredentialsNestedInput = {
    create?: XOR<TagCreateWithoutCredentialsInput, TagUncheckedCreateWithoutCredentialsInput> | TagCreateWithoutCredentialsInput[] | TagUncheckedCreateWithoutCredentialsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutCredentialsInput | TagCreateOrConnectWithoutCredentialsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutCredentialsInput | TagUpsertWithWhereUniqueWithoutCredentialsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutCredentialsInput | TagUpdateWithWhereUniqueWithoutCredentialsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutCredentialsInput | TagUpdateManyWithWhereWithoutCredentialsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutCredentialsNestedInput = {
    create?: XOR<TagCreateWithoutCredentialsInput, TagUncheckedCreateWithoutCredentialsInput> | TagCreateWithoutCredentialsInput[] | TagUncheckedCreateWithoutCredentialsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutCredentialsInput | TagCreateOrConnectWithoutCredentialsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutCredentialsInput | TagUpsertWithWhereUniqueWithoutCredentialsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutCredentialsInput | TagUpdateWithWhereUniqueWithoutCredentialsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutCredentialsInput | TagUpdateManyWithWhereWithoutCredentialsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type NotesCreateNestedManyWithoutTagsInput = {
    create?: XOR<NotesCreateWithoutTagsInput, NotesUncheckedCreateWithoutTagsInput> | NotesCreateWithoutTagsInput[] | NotesUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutTagsInput | NotesCreateOrConnectWithoutTagsInput[]
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
  }

  export type RemindersCreateNestedManyWithoutTagsInput = {
    create?: XOR<RemindersCreateWithoutTagsInput, RemindersUncheckedCreateWithoutTagsInput> | RemindersCreateWithoutTagsInput[] | RemindersUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: RemindersCreateOrConnectWithoutTagsInput | RemindersCreateOrConnectWithoutTagsInput[]
    connect?: RemindersWhereUniqueInput | RemindersWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutTagsInput = {
    create?: XOR<ImageCreateWithoutTagsInput, ImageUncheckedCreateWithoutTagsInput> | ImageCreateWithoutTagsInput[] | ImageUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutTagsInput | ImageCreateOrConnectWithoutTagsInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type LinkCreateNestedManyWithoutTagsInput = {
    create?: XOR<LinkCreateWithoutTagsInput, LinkUncheckedCreateWithoutTagsInput> | LinkCreateWithoutTagsInput[] | LinkUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutTagsInput | LinkCreateOrConnectWithoutTagsInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type CredentialsCreateNestedManyWithoutTagsInput = {
    create?: XOR<CredentialsCreateWithoutTagsInput, CredentialsUncheckedCreateWithoutTagsInput> | CredentialsCreateWithoutTagsInput[] | CredentialsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: CredentialsCreateOrConnectWithoutTagsInput | CredentialsCreateOrConnectWithoutTagsInput[]
    connect?: CredentialsWhereUniqueInput | CredentialsWhereUniqueInput[]
  }

  export type ExpenseTrackerCreateNestedManyWithoutTagsInput = {
    create?: XOR<ExpenseTrackerCreateWithoutTagsInput, ExpenseTrackerUncheckedCreateWithoutTagsInput> | ExpenseTrackerCreateWithoutTagsInput[] | ExpenseTrackerUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ExpenseTrackerCreateOrConnectWithoutTagsInput | ExpenseTrackerCreateOrConnectWithoutTagsInput[]
    connect?: ExpenseTrackerWhereUniqueInput | ExpenseTrackerWhereUniqueInput[]
  }

  export type NotesUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<NotesCreateWithoutTagsInput, NotesUncheckedCreateWithoutTagsInput> | NotesCreateWithoutTagsInput[] | NotesUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutTagsInput | NotesCreateOrConnectWithoutTagsInput[]
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
  }

  export type RemindersUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<RemindersCreateWithoutTagsInput, RemindersUncheckedCreateWithoutTagsInput> | RemindersCreateWithoutTagsInput[] | RemindersUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: RemindersCreateOrConnectWithoutTagsInput | RemindersCreateOrConnectWithoutTagsInput[]
    connect?: RemindersWhereUniqueInput | RemindersWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<ImageCreateWithoutTagsInput, ImageUncheckedCreateWithoutTagsInput> | ImageCreateWithoutTagsInput[] | ImageUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutTagsInput | ImageCreateOrConnectWithoutTagsInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type LinkUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<LinkCreateWithoutTagsInput, LinkUncheckedCreateWithoutTagsInput> | LinkCreateWithoutTagsInput[] | LinkUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutTagsInput | LinkCreateOrConnectWithoutTagsInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type CredentialsUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<CredentialsCreateWithoutTagsInput, CredentialsUncheckedCreateWithoutTagsInput> | CredentialsCreateWithoutTagsInput[] | CredentialsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: CredentialsCreateOrConnectWithoutTagsInput | CredentialsCreateOrConnectWithoutTagsInput[]
    connect?: CredentialsWhereUniqueInput | CredentialsWhereUniqueInput[]
  }

  export type ExpenseTrackerUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<ExpenseTrackerCreateWithoutTagsInput, ExpenseTrackerUncheckedCreateWithoutTagsInput> | ExpenseTrackerCreateWithoutTagsInput[] | ExpenseTrackerUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ExpenseTrackerCreateOrConnectWithoutTagsInput | ExpenseTrackerCreateOrConnectWithoutTagsInput[]
    connect?: ExpenseTrackerWhereUniqueInput | ExpenseTrackerWhereUniqueInput[]
  }

  export type NotesUpdateManyWithoutTagsNestedInput = {
    create?: XOR<NotesCreateWithoutTagsInput, NotesUncheckedCreateWithoutTagsInput> | NotesCreateWithoutTagsInput[] | NotesUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutTagsInput | NotesCreateOrConnectWithoutTagsInput[]
    upsert?: NotesUpsertWithWhereUniqueWithoutTagsInput | NotesUpsertWithWhereUniqueWithoutTagsInput[]
    set?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    disconnect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    delete?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    update?: NotesUpdateWithWhereUniqueWithoutTagsInput | NotesUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: NotesUpdateManyWithWhereWithoutTagsInput | NotesUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: NotesScalarWhereInput | NotesScalarWhereInput[]
  }

  export type RemindersUpdateManyWithoutTagsNestedInput = {
    create?: XOR<RemindersCreateWithoutTagsInput, RemindersUncheckedCreateWithoutTagsInput> | RemindersCreateWithoutTagsInput[] | RemindersUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: RemindersCreateOrConnectWithoutTagsInput | RemindersCreateOrConnectWithoutTagsInput[]
    upsert?: RemindersUpsertWithWhereUniqueWithoutTagsInput | RemindersUpsertWithWhereUniqueWithoutTagsInput[]
    set?: RemindersWhereUniqueInput | RemindersWhereUniqueInput[]
    disconnect?: RemindersWhereUniqueInput | RemindersWhereUniqueInput[]
    delete?: RemindersWhereUniqueInput | RemindersWhereUniqueInput[]
    connect?: RemindersWhereUniqueInput | RemindersWhereUniqueInput[]
    update?: RemindersUpdateWithWhereUniqueWithoutTagsInput | RemindersUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: RemindersUpdateManyWithWhereWithoutTagsInput | RemindersUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: RemindersScalarWhereInput | RemindersScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutTagsNestedInput = {
    create?: XOR<ImageCreateWithoutTagsInput, ImageUncheckedCreateWithoutTagsInput> | ImageCreateWithoutTagsInput[] | ImageUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutTagsInput | ImageCreateOrConnectWithoutTagsInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutTagsInput | ImageUpsertWithWhereUniqueWithoutTagsInput[]
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutTagsInput | ImageUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutTagsInput | ImageUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type LinkUpdateManyWithoutTagsNestedInput = {
    create?: XOR<LinkCreateWithoutTagsInput, LinkUncheckedCreateWithoutTagsInput> | LinkCreateWithoutTagsInput[] | LinkUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutTagsInput | LinkCreateOrConnectWithoutTagsInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutTagsInput | LinkUpsertWithWhereUniqueWithoutTagsInput[]
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutTagsInput | LinkUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutTagsInput | LinkUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type CredentialsUpdateManyWithoutTagsNestedInput = {
    create?: XOR<CredentialsCreateWithoutTagsInput, CredentialsUncheckedCreateWithoutTagsInput> | CredentialsCreateWithoutTagsInput[] | CredentialsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: CredentialsCreateOrConnectWithoutTagsInput | CredentialsCreateOrConnectWithoutTagsInput[]
    upsert?: CredentialsUpsertWithWhereUniqueWithoutTagsInput | CredentialsUpsertWithWhereUniqueWithoutTagsInput[]
    set?: CredentialsWhereUniqueInput | CredentialsWhereUniqueInput[]
    disconnect?: CredentialsWhereUniqueInput | CredentialsWhereUniqueInput[]
    delete?: CredentialsWhereUniqueInput | CredentialsWhereUniqueInput[]
    connect?: CredentialsWhereUniqueInput | CredentialsWhereUniqueInput[]
    update?: CredentialsUpdateWithWhereUniqueWithoutTagsInput | CredentialsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: CredentialsUpdateManyWithWhereWithoutTagsInput | CredentialsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: CredentialsScalarWhereInput | CredentialsScalarWhereInput[]
  }

  export type ExpenseTrackerUpdateManyWithoutTagsNestedInput = {
    create?: XOR<ExpenseTrackerCreateWithoutTagsInput, ExpenseTrackerUncheckedCreateWithoutTagsInput> | ExpenseTrackerCreateWithoutTagsInput[] | ExpenseTrackerUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ExpenseTrackerCreateOrConnectWithoutTagsInput | ExpenseTrackerCreateOrConnectWithoutTagsInput[]
    upsert?: ExpenseTrackerUpsertWithWhereUniqueWithoutTagsInput | ExpenseTrackerUpsertWithWhereUniqueWithoutTagsInput[]
    set?: ExpenseTrackerWhereUniqueInput | ExpenseTrackerWhereUniqueInput[]
    disconnect?: ExpenseTrackerWhereUniqueInput | ExpenseTrackerWhereUniqueInput[]
    delete?: ExpenseTrackerWhereUniqueInput | ExpenseTrackerWhereUniqueInput[]
    connect?: ExpenseTrackerWhereUniqueInput | ExpenseTrackerWhereUniqueInput[]
    update?: ExpenseTrackerUpdateWithWhereUniqueWithoutTagsInput | ExpenseTrackerUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: ExpenseTrackerUpdateManyWithWhereWithoutTagsInput | ExpenseTrackerUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: ExpenseTrackerScalarWhereInput | ExpenseTrackerScalarWhereInput[]
  }

  export type NotesUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<NotesCreateWithoutTagsInput, NotesUncheckedCreateWithoutTagsInput> | NotesCreateWithoutTagsInput[] | NotesUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutTagsInput | NotesCreateOrConnectWithoutTagsInput[]
    upsert?: NotesUpsertWithWhereUniqueWithoutTagsInput | NotesUpsertWithWhereUniqueWithoutTagsInput[]
    set?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    disconnect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    delete?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    update?: NotesUpdateWithWhereUniqueWithoutTagsInput | NotesUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: NotesUpdateManyWithWhereWithoutTagsInput | NotesUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: NotesScalarWhereInput | NotesScalarWhereInput[]
  }

  export type RemindersUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<RemindersCreateWithoutTagsInput, RemindersUncheckedCreateWithoutTagsInput> | RemindersCreateWithoutTagsInput[] | RemindersUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: RemindersCreateOrConnectWithoutTagsInput | RemindersCreateOrConnectWithoutTagsInput[]
    upsert?: RemindersUpsertWithWhereUniqueWithoutTagsInput | RemindersUpsertWithWhereUniqueWithoutTagsInput[]
    set?: RemindersWhereUniqueInput | RemindersWhereUniqueInput[]
    disconnect?: RemindersWhereUniqueInput | RemindersWhereUniqueInput[]
    delete?: RemindersWhereUniqueInput | RemindersWhereUniqueInput[]
    connect?: RemindersWhereUniqueInput | RemindersWhereUniqueInput[]
    update?: RemindersUpdateWithWhereUniqueWithoutTagsInput | RemindersUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: RemindersUpdateManyWithWhereWithoutTagsInput | RemindersUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: RemindersScalarWhereInput | RemindersScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<ImageCreateWithoutTagsInput, ImageUncheckedCreateWithoutTagsInput> | ImageCreateWithoutTagsInput[] | ImageUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutTagsInput | ImageCreateOrConnectWithoutTagsInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutTagsInput | ImageUpsertWithWhereUniqueWithoutTagsInput[]
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutTagsInput | ImageUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutTagsInput | ImageUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type LinkUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<LinkCreateWithoutTagsInput, LinkUncheckedCreateWithoutTagsInput> | LinkCreateWithoutTagsInput[] | LinkUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutTagsInput | LinkCreateOrConnectWithoutTagsInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutTagsInput | LinkUpsertWithWhereUniqueWithoutTagsInput[]
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutTagsInput | LinkUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutTagsInput | LinkUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type CredentialsUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<CredentialsCreateWithoutTagsInput, CredentialsUncheckedCreateWithoutTagsInput> | CredentialsCreateWithoutTagsInput[] | CredentialsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: CredentialsCreateOrConnectWithoutTagsInput | CredentialsCreateOrConnectWithoutTagsInput[]
    upsert?: CredentialsUpsertWithWhereUniqueWithoutTagsInput | CredentialsUpsertWithWhereUniqueWithoutTagsInput[]
    set?: CredentialsWhereUniqueInput | CredentialsWhereUniqueInput[]
    disconnect?: CredentialsWhereUniqueInput | CredentialsWhereUniqueInput[]
    delete?: CredentialsWhereUniqueInput | CredentialsWhereUniqueInput[]
    connect?: CredentialsWhereUniqueInput | CredentialsWhereUniqueInput[]
    update?: CredentialsUpdateWithWhereUniqueWithoutTagsInput | CredentialsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: CredentialsUpdateManyWithWhereWithoutTagsInput | CredentialsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: CredentialsScalarWhereInput | CredentialsScalarWhereInput[]
  }

  export type ExpenseTrackerUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<ExpenseTrackerCreateWithoutTagsInput, ExpenseTrackerUncheckedCreateWithoutTagsInput> | ExpenseTrackerCreateWithoutTagsInput[] | ExpenseTrackerUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ExpenseTrackerCreateOrConnectWithoutTagsInput | ExpenseTrackerCreateOrConnectWithoutTagsInput[]
    upsert?: ExpenseTrackerUpsertWithWhereUniqueWithoutTagsInput | ExpenseTrackerUpsertWithWhereUniqueWithoutTagsInput[]
    set?: ExpenseTrackerWhereUniqueInput | ExpenseTrackerWhereUniqueInput[]
    disconnect?: ExpenseTrackerWhereUniqueInput | ExpenseTrackerWhereUniqueInput[]
    delete?: ExpenseTrackerWhereUniqueInput | ExpenseTrackerWhereUniqueInput[]
    connect?: ExpenseTrackerWhereUniqueInput | ExpenseTrackerWhereUniqueInput[]
    update?: ExpenseTrackerUpdateWithWhereUniqueWithoutTagsInput | ExpenseTrackerUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: ExpenseTrackerUpdateManyWithWhereWithoutTagsInput | ExpenseTrackerUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: ExpenseTrackerScalarWhereInput | ExpenseTrackerScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TagCreateWithoutExpenseTrackerInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Notes?: NotesCreateNestedManyWithoutTagsInput
    Reminders?: RemindersCreateNestedManyWithoutTagsInput
    Images?: ImageCreateNestedManyWithoutTagsInput
    Links?: LinkCreateNestedManyWithoutTagsInput
    Credentials?: CredentialsCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutExpenseTrackerInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Notes?: NotesUncheckedCreateNestedManyWithoutTagsInput
    Reminders?: RemindersUncheckedCreateNestedManyWithoutTagsInput
    Images?: ImageUncheckedCreateNestedManyWithoutTagsInput
    Links?: LinkUncheckedCreateNestedManyWithoutTagsInput
    Credentials?: CredentialsUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutExpenseTrackerInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutExpenseTrackerInput, TagUncheckedCreateWithoutExpenseTrackerInput>
  }

  export type TagUpsertWithWhereUniqueWithoutExpenseTrackerInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutExpenseTrackerInput, TagUncheckedUpdateWithoutExpenseTrackerInput>
    create: XOR<TagCreateWithoutExpenseTrackerInput, TagUncheckedCreateWithoutExpenseTrackerInput>
  }

  export type TagUpdateWithWhereUniqueWithoutExpenseTrackerInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutExpenseTrackerInput, TagUncheckedUpdateWithoutExpenseTrackerInput>
  }

  export type TagUpdateManyWithWhereWithoutExpenseTrackerInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutExpenseTrackerInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
  }

  export type TagCreateWithoutNotesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Reminders?: RemindersCreateNestedManyWithoutTagsInput
    Images?: ImageCreateNestedManyWithoutTagsInput
    Links?: LinkCreateNestedManyWithoutTagsInput
    Credentials?: CredentialsCreateNestedManyWithoutTagsInput
    ExpenseTracker?: ExpenseTrackerCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutNotesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Reminders?: RemindersUncheckedCreateNestedManyWithoutTagsInput
    Images?: ImageUncheckedCreateNestedManyWithoutTagsInput
    Links?: LinkUncheckedCreateNestedManyWithoutTagsInput
    Credentials?: CredentialsUncheckedCreateNestedManyWithoutTagsInput
    ExpenseTracker?: ExpenseTrackerUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutNotesInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutNotesInput, TagUncheckedCreateWithoutNotesInput>
  }

  export type TagUpsertWithWhereUniqueWithoutNotesInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutNotesInput, TagUncheckedUpdateWithoutNotesInput>
    create: XOR<TagCreateWithoutNotesInput, TagUncheckedCreateWithoutNotesInput>
  }

  export type TagUpdateWithWhereUniqueWithoutNotesInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutNotesInput, TagUncheckedUpdateWithoutNotesInput>
  }

  export type TagUpdateManyWithWhereWithoutNotesInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutNotesInput>
  }

  export type TagCreateWithoutRemindersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Notes?: NotesCreateNestedManyWithoutTagsInput
    Images?: ImageCreateNestedManyWithoutTagsInput
    Links?: LinkCreateNestedManyWithoutTagsInput
    Credentials?: CredentialsCreateNestedManyWithoutTagsInput
    ExpenseTracker?: ExpenseTrackerCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutRemindersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Notes?: NotesUncheckedCreateNestedManyWithoutTagsInput
    Images?: ImageUncheckedCreateNestedManyWithoutTagsInput
    Links?: LinkUncheckedCreateNestedManyWithoutTagsInput
    Credentials?: CredentialsUncheckedCreateNestedManyWithoutTagsInput
    ExpenseTracker?: ExpenseTrackerUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutRemindersInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutRemindersInput, TagUncheckedCreateWithoutRemindersInput>
  }

  export type TagUpsertWithWhereUniqueWithoutRemindersInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutRemindersInput, TagUncheckedUpdateWithoutRemindersInput>
    create: XOR<TagCreateWithoutRemindersInput, TagUncheckedCreateWithoutRemindersInput>
  }

  export type TagUpdateWithWhereUniqueWithoutRemindersInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutRemindersInput, TagUncheckedUpdateWithoutRemindersInput>
  }

  export type TagUpdateManyWithWhereWithoutRemindersInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutRemindersInput>
  }

  export type TagCreateWithoutImagesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Notes?: NotesCreateNestedManyWithoutTagsInput
    Reminders?: RemindersCreateNestedManyWithoutTagsInput
    Links?: LinkCreateNestedManyWithoutTagsInput
    Credentials?: CredentialsCreateNestedManyWithoutTagsInput
    ExpenseTracker?: ExpenseTrackerCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutImagesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Notes?: NotesUncheckedCreateNestedManyWithoutTagsInput
    Reminders?: RemindersUncheckedCreateNestedManyWithoutTagsInput
    Links?: LinkUncheckedCreateNestedManyWithoutTagsInput
    Credentials?: CredentialsUncheckedCreateNestedManyWithoutTagsInput
    ExpenseTracker?: ExpenseTrackerUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutImagesInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutImagesInput, TagUncheckedCreateWithoutImagesInput>
  }

  export type TagUpsertWithWhereUniqueWithoutImagesInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutImagesInput, TagUncheckedUpdateWithoutImagesInput>
    create: XOR<TagCreateWithoutImagesInput, TagUncheckedCreateWithoutImagesInput>
  }

  export type TagUpdateWithWhereUniqueWithoutImagesInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutImagesInput, TagUncheckedUpdateWithoutImagesInput>
  }

  export type TagUpdateManyWithWhereWithoutImagesInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutImagesInput>
  }

  export type TagCreateWithoutLinksInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Notes?: NotesCreateNestedManyWithoutTagsInput
    Reminders?: RemindersCreateNestedManyWithoutTagsInput
    Images?: ImageCreateNestedManyWithoutTagsInput
    Credentials?: CredentialsCreateNestedManyWithoutTagsInput
    ExpenseTracker?: ExpenseTrackerCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutLinksInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Notes?: NotesUncheckedCreateNestedManyWithoutTagsInput
    Reminders?: RemindersUncheckedCreateNestedManyWithoutTagsInput
    Images?: ImageUncheckedCreateNestedManyWithoutTagsInput
    Credentials?: CredentialsUncheckedCreateNestedManyWithoutTagsInput
    ExpenseTracker?: ExpenseTrackerUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutLinksInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutLinksInput, TagUncheckedCreateWithoutLinksInput>
  }

  export type TagUpsertWithWhereUniqueWithoutLinksInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutLinksInput, TagUncheckedUpdateWithoutLinksInput>
    create: XOR<TagCreateWithoutLinksInput, TagUncheckedCreateWithoutLinksInput>
  }

  export type TagUpdateWithWhereUniqueWithoutLinksInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutLinksInput, TagUncheckedUpdateWithoutLinksInput>
  }

  export type TagUpdateManyWithWhereWithoutLinksInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutLinksInput>
  }

  export type TagCreateWithoutCredentialsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Notes?: NotesCreateNestedManyWithoutTagsInput
    Reminders?: RemindersCreateNestedManyWithoutTagsInput
    Images?: ImageCreateNestedManyWithoutTagsInput
    Links?: LinkCreateNestedManyWithoutTagsInput
    ExpenseTracker?: ExpenseTrackerCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutCredentialsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Notes?: NotesUncheckedCreateNestedManyWithoutTagsInput
    Reminders?: RemindersUncheckedCreateNestedManyWithoutTagsInput
    Images?: ImageUncheckedCreateNestedManyWithoutTagsInput
    Links?: LinkUncheckedCreateNestedManyWithoutTagsInput
    ExpenseTracker?: ExpenseTrackerUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutCredentialsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutCredentialsInput, TagUncheckedCreateWithoutCredentialsInput>
  }

  export type TagUpsertWithWhereUniqueWithoutCredentialsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutCredentialsInput, TagUncheckedUpdateWithoutCredentialsInput>
    create: XOR<TagCreateWithoutCredentialsInput, TagUncheckedCreateWithoutCredentialsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutCredentialsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutCredentialsInput, TagUncheckedUpdateWithoutCredentialsInput>
  }

  export type TagUpdateManyWithWhereWithoutCredentialsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutCredentialsInput>
  }

  export type NotesCreateWithoutTagsInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotesUncheckedCreateWithoutTagsInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotesCreateOrConnectWithoutTagsInput = {
    where: NotesWhereUniqueInput
    create: XOR<NotesCreateWithoutTagsInput, NotesUncheckedCreateWithoutTagsInput>
  }

  export type RemindersCreateWithoutTagsInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemindersUncheckedCreateWithoutTagsInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemindersCreateOrConnectWithoutTagsInput = {
    where: RemindersWhereUniqueInput
    create: XOR<RemindersCreateWithoutTagsInput, RemindersUncheckedCreateWithoutTagsInput>
  }

  export type ImageCreateWithoutTagsInput = {
    id?: string
    key: string
    reference: string
    description?: string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUncheckedCreateWithoutTagsInput = {
    id?: string
    key: string
    reference: string
    description?: string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageCreateOrConnectWithoutTagsInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutTagsInput, ImageUncheckedCreateWithoutTagsInput>
  }

  export type LinkCreateWithoutTagsInput = {
    id?: string
    url: string
    description?: string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkUncheckedCreateWithoutTagsInput = {
    id?: string
    url: string
    description?: string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkCreateOrConnectWithoutTagsInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutTagsInput, LinkUncheckedCreateWithoutTagsInput>
  }

  export type CredentialsCreateWithoutTagsInput = {
    id?: string
    name: string
    secret: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CredentialsUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    secret: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CredentialsCreateOrConnectWithoutTagsInput = {
    where: CredentialsWhereUniqueInput
    create: XOR<CredentialsCreateWithoutTagsInput, CredentialsUncheckedCreateWithoutTagsInput>
  }

  export type ExpenseTrackerCreateWithoutTagsInput = {
    id?: string
    name: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseTrackerUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseTrackerCreateOrConnectWithoutTagsInput = {
    where: ExpenseTrackerWhereUniqueInput
    create: XOR<ExpenseTrackerCreateWithoutTagsInput, ExpenseTrackerUncheckedCreateWithoutTagsInput>
  }

  export type NotesUpsertWithWhereUniqueWithoutTagsInput = {
    where: NotesWhereUniqueInput
    update: XOR<NotesUpdateWithoutTagsInput, NotesUncheckedUpdateWithoutTagsInput>
    create: XOR<NotesCreateWithoutTagsInput, NotesUncheckedCreateWithoutTagsInput>
  }

  export type NotesUpdateWithWhereUniqueWithoutTagsInput = {
    where: NotesWhereUniqueInput
    data: XOR<NotesUpdateWithoutTagsInput, NotesUncheckedUpdateWithoutTagsInput>
  }

  export type NotesUpdateManyWithWhereWithoutTagsInput = {
    where: NotesScalarWhereInput
    data: XOR<NotesUpdateManyMutationInput, NotesUncheckedUpdateManyWithoutTagsInput>
  }

  export type NotesScalarWhereInput = {
    AND?: NotesScalarWhereInput | NotesScalarWhereInput[]
    OR?: NotesScalarWhereInput[]
    NOT?: NotesScalarWhereInput | NotesScalarWhereInput[]
    id?: StringFilter<"Notes"> | string
    title?: StringFilter<"Notes"> | string
    content?: StringFilter<"Notes"> | string
    createdAt?: DateTimeFilter<"Notes"> | Date | string
    updatedAt?: DateTimeFilter<"Notes"> | Date | string
  }

  export type RemindersUpsertWithWhereUniqueWithoutTagsInput = {
    where: RemindersWhereUniqueInput
    update: XOR<RemindersUpdateWithoutTagsInput, RemindersUncheckedUpdateWithoutTagsInput>
    create: XOR<RemindersCreateWithoutTagsInput, RemindersUncheckedCreateWithoutTagsInput>
  }

  export type RemindersUpdateWithWhereUniqueWithoutTagsInput = {
    where: RemindersWhereUniqueInput
    data: XOR<RemindersUpdateWithoutTagsInput, RemindersUncheckedUpdateWithoutTagsInput>
  }

  export type RemindersUpdateManyWithWhereWithoutTagsInput = {
    where: RemindersScalarWhereInput
    data: XOR<RemindersUpdateManyMutationInput, RemindersUncheckedUpdateManyWithoutTagsInput>
  }

  export type RemindersScalarWhereInput = {
    AND?: RemindersScalarWhereInput | RemindersScalarWhereInput[]
    OR?: RemindersScalarWhereInput[]
    NOT?: RemindersScalarWhereInput | RemindersScalarWhereInput[]
    id?: StringFilter<"Reminders"> | string
    title?: StringFilter<"Reminders"> | string
    description?: StringNullableFilter<"Reminders"> | string | null
    createdAt?: DateTimeFilter<"Reminders"> | Date | string
    updatedAt?: DateTimeFilter<"Reminders"> | Date | string
  }

  export type ImageUpsertWithWhereUniqueWithoutTagsInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutTagsInput, ImageUncheckedUpdateWithoutTagsInput>
    create: XOR<ImageCreateWithoutTagsInput, ImageUncheckedCreateWithoutTagsInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutTagsInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutTagsInput, ImageUncheckedUpdateWithoutTagsInput>
  }

  export type ImageUpdateManyWithWhereWithoutTagsInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutTagsInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: StringFilter<"Image"> | string
    key?: StringFilter<"Image"> | string
    reference?: StringFilter<"Image"> | string
    description?: StringNullableFilter<"Image"> | string | null
    summary?: StringNullableFilter<"Image"> | string | null
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
  }

  export type LinkUpsertWithWhereUniqueWithoutTagsInput = {
    where: LinkWhereUniqueInput
    update: XOR<LinkUpdateWithoutTagsInput, LinkUncheckedUpdateWithoutTagsInput>
    create: XOR<LinkCreateWithoutTagsInput, LinkUncheckedCreateWithoutTagsInput>
  }

  export type LinkUpdateWithWhereUniqueWithoutTagsInput = {
    where: LinkWhereUniqueInput
    data: XOR<LinkUpdateWithoutTagsInput, LinkUncheckedUpdateWithoutTagsInput>
  }

  export type LinkUpdateManyWithWhereWithoutTagsInput = {
    where: LinkScalarWhereInput
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyWithoutTagsInput>
  }

  export type LinkScalarWhereInput = {
    AND?: LinkScalarWhereInput | LinkScalarWhereInput[]
    OR?: LinkScalarWhereInput[]
    NOT?: LinkScalarWhereInput | LinkScalarWhereInput[]
    id?: StringFilter<"Link"> | string
    url?: StringFilter<"Link"> | string
    description?: StringNullableFilter<"Link"> | string | null
    summary?: StringNullableFilter<"Link"> | string | null
    createdAt?: DateTimeFilter<"Link"> | Date | string
    updatedAt?: DateTimeFilter<"Link"> | Date | string
  }

  export type CredentialsUpsertWithWhereUniqueWithoutTagsInput = {
    where: CredentialsWhereUniqueInput
    update: XOR<CredentialsUpdateWithoutTagsInput, CredentialsUncheckedUpdateWithoutTagsInput>
    create: XOR<CredentialsCreateWithoutTagsInput, CredentialsUncheckedCreateWithoutTagsInput>
  }

  export type CredentialsUpdateWithWhereUniqueWithoutTagsInput = {
    where: CredentialsWhereUniqueInput
    data: XOR<CredentialsUpdateWithoutTagsInput, CredentialsUncheckedUpdateWithoutTagsInput>
  }

  export type CredentialsUpdateManyWithWhereWithoutTagsInput = {
    where: CredentialsScalarWhereInput
    data: XOR<CredentialsUpdateManyMutationInput, CredentialsUncheckedUpdateManyWithoutTagsInput>
  }

  export type CredentialsScalarWhereInput = {
    AND?: CredentialsScalarWhereInput | CredentialsScalarWhereInput[]
    OR?: CredentialsScalarWhereInput[]
    NOT?: CredentialsScalarWhereInput | CredentialsScalarWhereInput[]
    id?: StringFilter<"Credentials"> | string
    name?: StringFilter<"Credentials"> | string
    secret?: StringFilter<"Credentials"> | string
    createdAt?: DateTimeFilter<"Credentials"> | Date | string
    updatedAt?: DateTimeFilter<"Credentials"> | Date | string
  }

  export type ExpenseTrackerUpsertWithWhereUniqueWithoutTagsInput = {
    where: ExpenseTrackerWhereUniqueInput
    update: XOR<ExpenseTrackerUpdateWithoutTagsInput, ExpenseTrackerUncheckedUpdateWithoutTagsInput>
    create: XOR<ExpenseTrackerCreateWithoutTagsInput, ExpenseTrackerUncheckedCreateWithoutTagsInput>
  }

  export type ExpenseTrackerUpdateWithWhereUniqueWithoutTagsInput = {
    where: ExpenseTrackerWhereUniqueInput
    data: XOR<ExpenseTrackerUpdateWithoutTagsInput, ExpenseTrackerUncheckedUpdateWithoutTagsInput>
  }

  export type ExpenseTrackerUpdateManyWithWhereWithoutTagsInput = {
    where: ExpenseTrackerScalarWhereInput
    data: XOR<ExpenseTrackerUpdateManyMutationInput, ExpenseTrackerUncheckedUpdateManyWithoutTagsInput>
  }

  export type ExpenseTrackerScalarWhereInput = {
    AND?: ExpenseTrackerScalarWhereInput | ExpenseTrackerScalarWhereInput[]
    OR?: ExpenseTrackerScalarWhereInput[]
    NOT?: ExpenseTrackerScalarWhereInput | ExpenseTrackerScalarWhereInput[]
    id?: StringFilter<"ExpenseTracker"> | string
    name?: StringFilter<"ExpenseTracker"> | string
    amount?: FloatFilter<"ExpenseTracker"> | number
    createdAt?: DateTimeFilter<"ExpenseTracker"> | Date | string
    updatedAt?: DateTimeFilter<"ExpenseTracker"> | Date | string
  }

  export type TagUpdateWithoutExpenseTrackerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notes?: NotesUpdateManyWithoutTagsNestedInput
    Reminders?: RemindersUpdateManyWithoutTagsNestedInput
    Images?: ImageUpdateManyWithoutTagsNestedInput
    Links?: LinkUpdateManyWithoutTagsNestedInput
    Credentials?: CredentialsUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutExpenseTrackerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notes?: NotesUncheckedUpdateManyWithoutTagsNestedInput
    Reminders?: RemindersUncheckedUpdateManyWithoutTagsNestedInput
    Images?: ImageUncheckedUpdateManyWithoutTagsNestedInput
    Links?: LinkUncheckedUpdateManyWithoutTagsNestedInput
    Credentials?: CredentialsUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutExpenseTrackerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Reminders?: RemindersUpdateManyWithoutTagsNestedInput
    Images?: ImageUpdateManyWithoutTagsNestedInput
    Links?: LinkUpdateManyWithoutTagsNestedInput
    Credentials?: CredentialsUpdateManyWithoutTagsNestedInput
    ExpenseTracker?: ExpenseTrackerUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Reminders?: RemindersUncheckedUpdateManyWithoutTagsNestedInput
    Images?: ImageUncheckedUpdateManyWithoutTagsNestedInput
    Links?: LinkUncheckedUpdateManyWithoutTagsNestedInput
    Credentials?: CredentialsUncheckedUpdateManyWithoutTagsNestedInput
    ExpenseTracker?: ExpenseTrackerUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notes?: NotesUpdateManyWithoutTagsNestedInput
    Images?: ImageUpdateManyWithoutTagsNestedInput
    Links?: LinkUpdateManyWithoutTagsNestedInput
    Credentials?: CredentialsUpdateManyWithoutTagsNestedInput
    ExpenseTracker?: ExpenseTrackerUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notes?: NotesUncheckedUpdateManyWithoutTagsNestedInput
    Images?: ImageUncheckedUpdateManyWithoutTagsNestedInput
    Links?: LinkUncheckedUpdateManyWithoutTagsNestedInput
    Credentials?: CredentialsUncheckedUpdateManyWithoutTagsNestedInput
    ExpenseTracker?: ExpenseTrackerUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notes?: NotesUpdateManyWithoutTagsNestedInput
    Reminders?: RemindersUpdateManyWithoutTagsNestedInput
    Links?: LinkUpdateManyWithoutTagsNestedInput
    Credentials?: CredentialsUpdateManyWithoutTagsNestedInput
    ExpenseTracker?: ExpenseTrackerUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notes?: NotesUncheckedUpdateManyWithoutTagsNestedInput
    Reminders?: RemindersUncheckedUpdateManyWithoutTagsNestedInput
    Links?: LinkUncheckedUpdateManyWithoutTagsNestedInput
    Credentials?: CredentialsUncheckedUpdateManyWithoutTagsNestedInput
    ExpenseTracker?: ExpenseTrackerUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notes?: NotesUpdateManyWithoutTagsNestedInput
    Reminders?: RemindersUpdateManyWithoutTagsNestedInput
    Images?: ImageUpdateManyWithoutTagsNestedInput
    Credentials?: CredentialsUpdateManyWithoutTagsNestedInput
    ExpenseTracker?: ExpenseTrackerUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notes?: NotesUncheckedUpdateManyWithoutTagsNestedInput
    Reminders?: RemindersUncheckedUpdateManyWithoutTagsNestedInput
    Images?: ImageUncheckedUpdateManyWithoutTagsNestedInput
    Credentials?: CredentialsUncheckedUpdateManyWithoutTagsNestedInput
    ExpenseTracker?: ExpenseTrackerUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpdateWithoutCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notes?: NotesUpdateManyWithoutTagsNestedInput
    Reminders?: RemindersUpdateManyWithoutTagsNestedInput
    Images?: ImageUpdateManyWithoutTagsNestedInput
    Links?: LinkUpdateManyWithoutTagsNestedInput
    ExpenseTracker?: ExpenseTrackerUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notes?: NotesUncheckedUpdateManyWithoutTagsNestedInput
    Reminders?: RemindersUncheckedUpdateManyWithoutTagsNestedInput
    Images?: ImageUncheckedUpdateManyWithoutTagsNestedInput
    Links?: LinkUncheckedUpdateManyWithoutTagsNestedInput
    ExpenseTracker?: ExpenseTrackerUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotesUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotesUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotesUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemindersUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemindersUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemindersUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialsUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialsUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialsUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseTrackerUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseTrackerUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseTrackerUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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