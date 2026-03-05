
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model G6pd
 * 
 */
export type G6pd = $Result.DefaultSelection<Prisma.$G6pdPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Risco: {
  ALTO: 'ALTO',
  MODERADO: 'MODERADO',
  BAIXO: 'BAIXO'
};

export type Risco = (typeof Risco)[keyof typeof Risco]

}

export type Risco = $Enums.Risco

export const Risco: typeof $Enums.Risco

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categoria.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categoria.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.g6pd`: Exposes CRUD operations for the **G6pd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more G6pds
    * const g6pds = await prisma.g6pd.findMany()
    * ```
    */
  get g6pd(): Prisma.G6pdDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Categoria: 'Categoria',
    G6pd: 'G6pd'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categoria" | "g6pd"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      G6pd: {
        payload: Prisma.$G6pdPayload<ExtArgs>
        fields: Prisma.G6pdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.G6pdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G6pdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.G6pdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G6pdPayload>
          }
          findFirst: {
            args: Prisma.G6pdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G6pdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.G6pdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G6pdPayload>
          }
          findMany: {
            args: Prisma.G6pdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G6pdPayload>[]
          }
          create: {
            args: Prisma.G6pdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G6pdPayload>
          }
          createMany: {
            args: Prisma.G6pdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.G6pdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G6pdPayload>
          }
          update: {
            args: Prisma.G6pdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G6pdPayload>
          }
          deleteMany: {
            args: Prisma.G6pdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.G6pdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.G6pdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G6pdPayload>
          }
          aggregate: {
            args: Prisma.G6pdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateG6pd>
          }
          groupBy: {
            args: Prisma.G6pdGroupByArgs<ExtArgs>
            result: $Utils.Optional<G6pdGroupByOutputType>[]
          }
          count: {
            args: Prisma.G6pdCountArgs<ExtArgs>
            result: $Utils.Optional<G6pdCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    categoria?: CategoriaOmit
    g6pd?: G6pdOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    g6dp: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    g6dp?: boolean | CategoriaCountOutputTypeCountG6dpArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountG6dpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: G6pdWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    status: number | null
    userAt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    status: number | null
    userAt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nome: number
    status: number
    userAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
    status?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
    status?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nome?: true
    status?: true
    userAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nome?: true
    status?: true
    userAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nome?: true
    status?: true
    userAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nome: string
    status: number
    userAt: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    status?: boolean
    userAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    g6dp?: boolean | Categoria$g6dpArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>



  export type CategoriaSelectScalar = {
    id?: boolean
    nome?: boolean
    status?: boolean
    userAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "status" | "userAt" | "createdAt" | "updatedAt", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    g6dp?: boolean | Categoria$g6dpArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      g6dp: Prisma.$G6pdPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      status: number
      userAt: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    g6dp<T extends Categoria$g6dpArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$g6dpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$G6pdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nome: FieldRef<"Categoria", 'String'>
    readonly status: FieldRef<"Categoria", 'Int'>
    readonly userAt: FieldRef<"Categoria", 'String'>
    readonly createdAt: FieldRef<"Categoria", 'DateTime'>
    readonly updatedAt: FieldRef<"Categoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.g6dp
   */
  export type Categoria$g6dpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G6pd
     */
    select?: G6pdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G6pd
     */
    omit?: G6pdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G6pdInclude<ExtArgs> | null
    where?: G6pdWhereInput
    orderBy?: G6pdOrderByWithRelationInput | G6pdOrderByWithRelationInput[]
    cursor?: G6pdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: G6pdScalarFieldEnum | G6pdScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model G6pd
   */

  export type AggregateG6pd = {
    _count: G6pdCountAggregateOutputType | null
    _avg: G6pdAvgAggregateOutputType | null
    _sum: G6pdSumAggregateOutputType | null
    _min: G6pdMinAggregateOutputType | null
    _max: G6pdMaxAggregateOutputType | null
  }

  export type G6pdAvgAggregateOutputType = {
    categoriaId: number | null
    status: number | null
  }

  export type G6pdSumAggregateOutputType = {
    categoriaId: number | null
    status: number | null
  }

  export type G6pdMinAggregateOutputType = {
    id: string | null
    nome: string | null
    composicao: string | null
    categoriaId: number | null
    classe: string | null
    causa: string | null
    utilizacao: string | null
    risco: $Enums.Risco | null
    confirma: string | null
    status: number | null
    userAt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type G6pdMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    composicao: string | null
    categoriaId: number | null
    classe: string | null
    causa: string | null
    utilizacao: string | null
    risco: $Enums.Risco | null
    confirma: string | null
    status: number | null
    userAt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type G6pdCountAggregateOutputType = {
    id: number
    nome: number
    composicao: number
    categoriaId: number
    classe: number
    causa: number
    utilizacao: number
    risco: number
    confirma: number
    status: number
    userAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type G6pdAvgAggregateInputType = {
    categoriaId?: true
    status?: true
  }

  export type G6pdSumAggregateInputType = {
    categoriaId?: true
    status?: true
  }

  export type G6pdMinAggregateInputType = {
    id?: true
    nome?: true
    composicao?: true
    categoriaId?: true
    classe?: true
    causa?: true
    utilizacao?: true
    risco?: true
    confirma?: true
    status?: true
    userAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type G6pdMaxAggregateInputType = {
    id?: true
    nome?: true
    composicao?: true
    categoriaId?: true
    classe?: true
    causa?: true
    utilizacao?: true
    risco?: true
    confirma?: true
    status?: true
    userAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type G6pdCountAggregateInputType = {
    id?: true
    nome?: true
    composicao?: true
    categoriaId?: true
    classe?: true
    causa?: true
    utilizacao?: true
    risco?: true
    confirma?: true
    status?: true
    userAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type G6pdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which G6pd to aggregate.
     */
    where?: G6pdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G6pds to fetch.
     */
    orderBy?: G6pdOrderByWithRelationInput | G6pdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: G6pdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G6pds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G6pds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned G6pds
    **/
    _count?: true | G6pdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: G6pdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: G6pdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: G6pdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: G6pdMaxAggregateInputType
  }

  export type GetG6pdAggregateType<T extends G6pdAggregateArgs> = {
        [P in keyof T & keyof AggregateG6pd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateG6pd[P]>
      : GetScalarType<T[P], AggregateG6pd[P]>
  }




  export type G6pdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: G6pdWhereInput
    orderBy?: G6pdOrderByWithAggregationInput | G6pdOrderByWithAggregationInput[]
    by: G6pdScalarFieldEnum[] | G6pdScalarFieldEnum
    having?: G6pdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: G6pdCountAggregateInputType | true
    _avg?: G6pdAvgAggregateInputType
    _sum?: G6pdSumAggregateInputType
    _min?: G6pdMinAggregateInputType
    _max?: G6pdMaxAggregateInputType
  }

  export type G6pdGroupByOutputType = {
    id: string
    nome: string
    composicao: string
    categoriaId: number
    classe: string
    causa: string
    utilizacao: string
    risco: $Enums.Risco
    confirma: string | null
    status: number
    userAt: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: G6pdCountAggregateOutputType | null
    _avg: G6pdAvgAggregateOutputType | null
    _sum: G6pdSumAggregateOutputType | null
    _min: G6pdMinAggregateOutputType | null
    _max: G6pdMaxAggregateOutputType | null
  }

  type GetG6pdGroupByPayload<T extends G6pdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<G6pdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof G6pdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], G6pdGroupByOutputType[P]>
            : GetScalarType<T[P], G6pdGroupByOutputType[P]>
        }
      >
    >


  export type G6pdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    composicao?: boolean
    categoriaId?: boolean
    classe?: boolean
    causa?: boolean
    utilizacao?: boolean
    risco?: boolean
    confirma?: boolean
    status?: boolean
    userAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["g6pd"]>



  export type G6pdSelectScalar = {
    id?: boolean
    nome?: boolean
    composicao?: boolean
    categoriaId?: boolean
    classe?: boolean
    causa?: boolean
    utilizacao?: boolean
    risco?: boolean
    confirma?: boolean
    status?: boolean
    userAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type G6pdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "composicao" | "categoriaId" | "classe" | "causa" | "utilizacao" | "risco" | "confirma" | "status" | "userAt" | "createdAt" | "updatedAt", ExtArgs["result"]["g6pd"]>
  export type G6pdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $G6pdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "G6pd"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      composicao: string
      categoriaId: number
      classe: string
      causa: string
      utilizacao: string
      risco: $Enums.Risco
      confirma: string | null
      status: number
      userAt: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["g6pd"]>
    composites: {}
  }

  type G6pdGetPayload<S extends boolean | null | undefined | G6pdDefaultArgs> = $Result.GetResult<Prisma.$G6pdPayload, S>

  type G6pdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<G6pdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: G6pdCountAggregateInputType | true
    }

  export interface G6pdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['G6pd'], meta: { name: 'G6pd' } }
    /**
     * Find zero or one G6pd that matches the filter.
     * @param {G6pdFindUniqueArgs} args - Arguments to find a G6pd
     * @example
     * // Get one G6pd
     * const g6pd = await prisma.g6pd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends G6pdFindUniqueArgs>(args: SelectSubset<T, G6pdFindUniqueArgs<ExtArgs>>): Prisma__G6pdClient<$Result.GetResult<Prisma.$G6pdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one G6pd that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {G6pdFindUniqueOrThrowArgs} args - Arguments to find a G6pd
     * @example
     * // Get one G6pd
     * const g6pd = await prisma.g6pd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends G6pdFindUniqueOrThrowArgs>(args: SelectSubset<T, G6pdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__G6pdClient<$Result.GetResult<Prisma.$G6pdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first G6pd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G6pdFindFirstArgs} args - Arguments to find a G6pd
     * @example
     * // Get one G6pd
     * const g6pd = await prisma.g6pd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends G6pdFindFirstArgs>(args?: SelectSubset<T, G6pdFindFirstArgs<ExtArgs>>): Prisma__G6pdClient<$Result.GetResult<Prisma.$G6pdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first G6pd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G6pdFindFirstOrThrowArgs} args - Arguments to find a G6pd
     * @example
     * // Get one G6pd
     * const g6pd = await prisma.g6pd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends G6pdFindFirstOrThrowArgs>(args?: SelectSubset<T, G6pdFindFirstOrThrowArgs<ExtArgs>>): Prisma__G6pdClient<$Result.GetResult<Prisma.$G6pdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more G6pds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G6pdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all G6pds
     * const g6pds = await prisma.g6pd.findMany()
     * 
     * // Get first 10 G6pds
     * const g6pds = await prisma.g6pd.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const g6pdWithIdOnly = await prisma.g6pd.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends G6pdFindManyArgs>(args?: SelectSubset<T, G6pdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$G6pdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a G6pd.
     * @param {G6pdCreateArgs} args - Arguments to create a G6pd.
     * @example
     * // Create one G6pd
     * const G6pd = await prisma.g6pd.create({
     *   data: {
     *     // ... data to create a G6pd
     *   }
     * })
     * 
     */
    create<T extends G6pdCreateArgs>(args: SelectSubset<T, G6pdCreateArgs<ExtArgs>>): Prisma__G6pdClient<$Result.GetResult<Prisma.$G6pdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many G6pds.
     * @param {G6pdCreateManyArgs} args - Arguments to create many G6pds.
     * @example
     * // Create many G6pds
     * const g6pd = await prisma.g6pd.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends G6pdCreateManyArgs>(args?: SelectSubset<T, G6pdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a G6pd.
     * @param {G6pdDeleteArgs} args - Arguments to delete one G6pd.
     * @example
     * // Delete one G6pd
     * const G6pd = await prisma.g6pd.delete({
     *   where: {
     *     // ... filter to delete one G6pd
     *   }
     * })
     * 
     */
    delete<T extends G6pdDeleteArgs>(args: SelectSubset<T, G6pdDeleteArgs<ExtArgs>>): Prisma__G6pdClient<$Result.GetResult<Prisma.$G6pdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one G6pd.
     * @param {G6pdUpdateArgs} args - Arguments to update one G6pd.
     * @example
     * // Update one G6pd
     * const g6pd = await prisma.g6pd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends G6pdUpdateArgs>(args: SelectSubset<T, G6pdUpdateArgs<ExtArgs>>): Prisma__G6pdClient<$Result.GetResult<Prisma.$G6pdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more G6pds.
     * @param {G6pdDeleteManyArgs} args - Arguments to filter G6pds to delete.
     * @example
     * // Delete a few G6pds
     * const { count } = await prisma.g6pd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends G6pdDeleteManyArgs>(args?: SelectSubset<T, G6pdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more G6pds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G6pdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many G6pds
     * const g6pd = await prisma.g6pd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends G6pdUpdateManyArgs>(args: SelectSubset<T, G6pdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one G6pd.
     * @param {G6pdUpsertArgs} args - Arguments to update or create a G6pd.
     * @example
     * // Update or create a G6pd
     * const g6pd = await prisma.g6pd.upsert({
     *   create: {
     *     // ... data to create a G6pd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the G6pd we want to update
     *   }
     * })
     */
    upsert<T extends G6pdUpsertArgs>(args: SelectSubset<T, G6pdUpsertArgs<ExtArgs>>): Prisma__G6pdClient<$Result.GetResult<Prisma.$G6pdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of G6pds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G6pdCountArgs} args - Arguments to filter G6pds to count.
     * @example
     * // Count the number of G6pds
     * const count = await prisma.g6pd.count({
     *   where: {
     *     // ... the filter for the G6pds we want to count
     *   }
     * })
    **/
    count<T extends G6pdCountArgs>(
      args?: Subset<T, G6pdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], G6pdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a G6pd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G6pdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends G6pdAggregateArgs>(args: Subset<T, G6pdAggregateArgs>): Prisma.PrismaPromise<GetG6pdAggregateType<T>>

    /**
     * Group by G6pd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G6pdGroupByArgs} args - Group by arguments.
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
      T extends G6pdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: G6pdGroupByArgs['orderBy'] }
        : { orderBy?: G6pdGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, G6pdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetG6pdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the G6pd model
   */
  readonly fields: G6pdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for G6pd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__G6pdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the G6pd model
   */
  interface G6pdFieldRefs {
    readonly id: FieldRef<"G6pd", 'String'>
    readonly nome: FieldRef<"G6pd", 'String'>
    readonly composicao: FieldRef<"G6pd", 'String'>
    readonly categoriaId: FieldRef<"G6pd", 'Int'>
    readonly classe: FieldRef<"G6pd", 'String'>
    readonly causa: FieldRef<"G6pd", 'String'>
    readonly utilizacao: FieldRef<"G6pd", 'String'>
    readonly risco: FieldRef<"G6pd", 'Risco'>
    readonly confirma: FieldRef<"G6pd", 'String'>
    readonly status: FieldRef<"G6pd", 'Int'>
    readonly userAt: FieldRef<"G6pd", 'String'>
    readonly createdAt: FieldRef<"G6pd", 'DateTime'>
    readonly updatedAt: FieldRef<"G6pd", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * G6pd findUnique
   */
  export type G6pdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G6pd
     */
    select?: G6pdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G6pd
     */
    omit?: G6pdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G6pdInclude<ExtArgs> | null
    /**
     * Filter, which G6pd to fetch.
     */
    where: G6pdWhereUniqueInput
  }

  /**
   * G6pd findUniqueOrThrow
   */
  export type G6pdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G6pd
     */
    select?: G6pdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G6pd
     */
    omit?: G6pdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G6pdInclude<ExtArgs> | null
    /**
     * Filter, which G6pd to fetch.
     */
    where: G6pdWhereUniqueInput
  }

  /**
   * G6pd findFirst
   */
  export type G6pdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G6pd
     */
    select?: G6pdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G6pd
     */
    omit?: G6pdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G6pdInclude<ExtArgs> | null
    /**
     * Filter, which G6pd to fetch.
     */
    where?: G6pdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G6pds to fetch.
     */
    orderBy?: G6pdOrderByWithRelationInput | G6pdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for G6pds.
     */
    cursor?: G6pdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G6pds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G6pds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of G6pds.
     */
    distinct?: G6pdScalarFieldEnum | G6pdScalarFieldEnum[]
  }

  /**
   * G6pd findFirstOrThrow
   */
  export type G6pdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G6pd
     */
    select?: G6pdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G6pd
     */
    omit?: G6pdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G6pdInclude<ExtArgs> | null
    /**
     * Filter, which G6pd to fetch.
     */
    where?: G6pdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G6pds to fetch.
     */
    orderBy?: G6pdOrderByWithRelationInput | G6pdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for G6pds.
     */
    cursor?: G6pdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G6pds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G6pds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of G6pds.
     */
    distinct?: G6pdScalarFieldEnum | G6pdScalarFieldEnum[]
  }

  /**
   * G6pd findMany
   */
  export type G6pdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G6pd
     */
    select?: G6pdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G6pd
     */
    omit?: G6pdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G6pdInclude<ExtArgs> | null
    /**
     * Filter, which G6pds to fetch.
     */
    where?: G6pdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G6pds to fetch.
     */
    orderBy?: G6pdOrderByWithRelationInput | G6pdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing G6pds.
     */
    cursor?: G6pdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G6pds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G6pds.
     */
    skip?: number
    distinct?: G6pdScalarFieldEnum | G6pdScalarFieldEnum[]
  }

  /**
   * G6pd create
   */
  export type G6pdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G6pd
     */
    select?: G6pdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G6pd
     */
    omit?: G6pdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G6pdInclude<ExtArgs> | null
    /**
     * The data needed to create a G6pd.
     */
    data: XOR<G6pdCreateInput, G6pdUncheckedCreateInput>
  }

  /**
   * G6pd createMany
   */
  export type G6pdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many G6pds.
     */
    data: G6pdCreateManyInput | G6pdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * G6pd update
   */
  export type G6pdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G6pd
     */
    select?: G6pdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G6pd
     */
    omit?: G6pdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G6pdInclude<ExtArgs> | null
    /**
     * The data needed to update a G6pd.
     */
    data: XOR<G6pdUpdateInput, G6pdUncheckedUpdateInput>
    /**
     * Choose, which G6pd to update.
     */
    where: G6pdWhereUniqueInput
  }

  /**
   * G6pd updateMany
   */
  export type G6pdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update G6pds.
     */
    data: XOR<G6pdUpdateManyMutationInput, G6pdUncheckedUpdateManyInput>
    /**
     * Filter which G6pds to update
     */
    where?: G6pdWhereInput
    /**
     * Limit how many G6pds to update.
     */
    limit?: number
  }

  /**
   * G6pd upsert
   */
  export type G6pdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G6pd
     */
    select?: G6pdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G6pd
     */
    omit?: G6pdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G6pdInclude<ExtArgs> | null
    /**
     * The filter to search for the G6pd to update in case it exists.
     */
    where: G6pdWhereUniqueInput
    /**
     * In case the G6pd found by the `where` argument doesn't exist, create a new G6pd with this data.
     */
    create: XOR<G6pdCreateInput, G6pdUncheckedCreateInput>
    /**
     * In case the G6pd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<G6pdUpdateInput, G6pdUncheckedUpdateInput>
  }

  /**
   * G6pd delete
   */
  export type G6pdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G6pd
     */
    select?: G6pdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G6pd
     */
    omit?: G6pdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G6pdInclude<ExtArgs> | null
    /**
     * Filter which G6pd to delete.
     */
    where: G6pdWhereUniqueInput
  }

  /**
   * G6pd deleteMany
   */
  export type G6pdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which G6pds to delete
     */
    where?: G6pdWhereInput
    /**
     * Limit how many G6pds to delete.
     */
    limit?: number
  }

  /**
   * G6pd without action
   */
  export type G6pdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G6pd
     */
    select?: G6pdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G6pd
     */
    omit?: G6pdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G6pdInclude<ExtArgs> | null
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


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    status: 'status',
    userAt: 'userAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const G6pdScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    composicao: 'composicao',
    categoriaId: 'categoriaId',
    classe: 'classe',
    causa: 'causa',
    utilizacao: 'utilizacao',
    risco: 'risco',
    confirma: 'confirma',
    status: 'status',
    userAt: 'userAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type G6pdScalarFieldEnum = (typeof G6pdScalarFieldEnum)[keyof typeof G6pdScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const CategoriaOrderByRelevanceFieldEnum: {
    nome: 'nome',
    userAt: 'userAt'
  };

  export type CategoriaOrderByRelevanceFieldEnum = (typeof CategoriaOrderByRelevanceFieldEnum)[keyof typeof CategoriaOrderByRelevanceFieldEnum]


  export const G6pdOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    composicao: 'composicao',
    classe: 'classe',
    causa: 'causa',
    utilizacao: 'utilizacao',
    confirma: 'confirma',
    userAt: 'userAt'
  };

  export type G6pdOrderByRelevanceFieldEnum = (typeof G6pdOrderByRelevanceFieldEnum)[keyof typeof G6pdOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Risco'
   */
  export type EnumRiscoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Risco'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nome?: StringFilter<"Categoria"> | string
    status?: IntFilter<"Categoria"> | number
    userAt?: StringNullableFilter<"Categoria"> | string | null
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Categoria"> | Date | string | null
    g6dp?: G6pdListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    status?: SortOrder
    userAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    g6dp?: G6pdOrderByRelationAggregateInput
    _relevance?: CategoriaOrderByRelevanceInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    status?: IntFilter<"Categoria"> | number
    userAt?: StringNullableFilter<"Categoria"> | string | null
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Categoria"> | Date | string | null
    g6dp?: G6pdListRelationFilter
  }, "id" | "nome">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    status?: SortOrder
    userAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nome?: StringWithAggregatesFilter<"Categoria"> | string
    status?: IntWithAggregatesFilter<"Categoria"> | number
    userAt?: StringNullableWithAggregatesFilter<"Categoria"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Categoria"> | Date | string | null
  }

  export type G6pdWhereInput = {
    AND?: G6pdWhereInput | G6pdWhereInput[]
    OR?: G6pdWhereInput[]
    NOT?: G6pdWhereInput | G6pdWhereInput[]
    id?: StringFilter<"G6pd"> | string
    nome?: StringFilter<"G6pd"> | string
    composicao?: StringFilter<"G6pd"> | string
    categoriaId?: IntFilter<"G6pd"> | number
    classe?: StringFilter<"G6pd"> | string
    causa?: StringFilter<"G6pd"> | string
    utilizacao?: StringFilter<"G6pd"> | string
    risco?: EnumRiscoFilter<"G6pd"> | $Enums.Risco
    confirma?: StringNullableFilter<"G6pd"> | string | null
    status?: IntFilter<"G6pd"> | number
    userAt?: StringNullableFilter<"G6pd"> | string | null
    createdAt?: DateTimeFilter<"G6pd"> | Date | string
    updatedAt?: DateTimeNullableFilter<"G6pd"> | Date | string | null
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
  }

  export type G6pdOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    composicao?: SortOrder
    categoriaId?: SortOrder
    classe?: SortOrder
    causa?: SortOrder
    utilizacao?: SortOrder
    risco?: SortOrder
    confirma?: SortOrderInput | SortOrder
    status?: SortOrder
    userAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    _relevance?: G6pdOrderByRelevanceInput
  }

  export type G6pdWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome?: string
    AND?: G6pdWhereInput | G6pdWhereInput[]
    OR?: G6pdWhereInput[]
    NOT?: G6pdWhereInput | G6pdWhereInput[]
    composicao?: StringFilter<"G6pd"> | string
    categoriaId?: IntFilter<"G6pd"> | number
    classe?: StringFilter<"G6pd"> | string
    causa?: StringFilter<"G6pd"> | string
    utilizacao?: StringFilter<"G6pd"> | string
    risco?: EnumRiscoFilter<"G6pd"> | $Enums.Risco
    confirma?: StringNullableFilter<"G6pd"> | string | null
    status?: IntFilter<"G6pd"> | number
    userAt?: StringNullableFilter<"G6pd"> | string | null
    createdAt?: DateTimeFilter<"G6pd"> | Date | string
    updatedAt?: DateTimeNullableFilter<"G6pd"> | Date | string | null
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
  }, "id" | "nome">

  export type G6pdOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    composicao?: SortOrder
    categoriaId?: SortOrder
    classe?: SortOrder
    causa?: SortOrder
    utilizacao?: SortOrder
    risco?: SortOrder
    confirma?: SortOrderInput | SortOrder
    status?: SortOrder
    userAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: G6pdCountOrderByAggregateInput
    _avg?: G6pdAvgOrderByAggregateInput
    _max?: G6pdMaxOrderByAggregateInput
    _min?: G6pdMinOrderByAggregateInput
    _sum?: G6pdSumOrderByAggregateInput
  }

  export type G6pdScalarWhereWithAggregatesInput = {
    AND?: G6pdScalarWhereWithAggregatesInput | G6pdScalarWhereWithAggregatesInput[]
    OR?: G6pdScalarWhereWithAggregatesInput[]
    NOT?: G6pdScalarWhereWithAggregatesInput | G6pdScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"G6pd"> | string
    nome?: StringWithAggregatesFilter<"G6pd"> | string
    composicao?: StringWithAggregatesFilter<"G6pd"> | string
    categoriaId?: IntWithAggregatesFilter<"G6pd"> | number
    classe?: StringWithAggregatesFilter<"G6pd"> | string
    causa?: StringWithAggregatesFilter<"G6pd"> | string
    utilizacao?: StringWithAggregatesFilter<"G6pd"> | string
    risco?: EnumRiscoWithAggregatesFilter<"G6pd"> | $Enums.Risco
    confirma?: StringNullableWithAggregatesFilter<"G6pd"> | string | null
    status?: IntWithAggregatesFilter<"G6pd"> | number
    userAt?: StringNullableWithAggregatesFilter<"G6pd"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"G6pd"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"G6pd"> | Date | string | null
  }

  export type CategoriaCreateInput = {
    nome: string
    status?: number
    userAt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    g6dp?: G6pdCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nome: string
    status?: number
    userAt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    g6dp?: G6pdUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    userAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    g6dp?: G6pdUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    userAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    g6dp?: G6pdUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nome: string
    status?: number
    userAt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CategoriaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    userAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    userAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type G6pdCreateInput = {
    id?: string
    nome: string
    composicao: string
    classe: string
    causa: string
    utilizacao: string
    risco?: $Enums.Risco
    confirma?: string | null
    status?: number
    userAt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    categoria: CategoriaCreateNestedOneWithoutG6dpInput
  }

  export type G6pdUncheckedCreateInput = {
    id?: string
    nome: string
    composicao: string
    categoriaId: number
    classe: string
    causa: string
    utilizacao: string
    risco?: $Enums.Risco
    confirma?: string | null
    status?: number
    userAt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type G6pdUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    composicao?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    causa?: StringFieldUpdateOperationsInput | string
    utilizacao?: StringFieldUpdateOperationsInput | string
    risco?: EnumRiscoFieldUpdateOperationsInput | $Enums.Risco
    confirma?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    userAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoria?: CategoriaUpdateOneRequiredWithoutG6dpNestedInput
  }

  export type G6pdUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    composicao?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    classe?: StringFieldUpdateOperationsInput | string
    causa?: StringFieldUpdateOperationsInput | string
    utilizacao?: StringFieldUpdateOperationsInput | string
    risco?: EnumRiscoFieldUpdateOperationsInput | $Enums.Risco
    confirma?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    userAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type G6pdCreateManyInput = {
    id?: string
    nome: string
    composicao: string
    categoriaId: number
    classe: string
    causa: string
    utilizacao: string
    risco?: $Enums.Risco
    confirma?: string | null
    status?: number
    userAt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type G6pdUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    composicao?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    causa?: StringFieldUpdateOperationsInput | string
    utilizacao?: StringFieldUpdateOperationsInput | string
    risco?: EnumRiscoFieldUpdateOperationsInput | $Enums.Risco
    confirma?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    userAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type G6pdUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    composicao?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    classe?: StringFieldUpdateOperationsInput | string
    causa?: StringFieldUpdateOperationsInput | string
    utilizacao?: StringFieldUpdateOperationsInput | string
    risco?: EnumRiscoFieldUpdateOperationsInput | $Enums.Risco
    confirma?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    userAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type G6pdListRelationFilter = {
    every?: G6pdWhereInput
    some?: G6pdWhereInput
    none?: G6pdWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type G6pdOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaOrderByRelevanceInput = {
    fields: CategoriaOrderByRelevanceFieldEnum | CategoriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    status?: SortOrder
    userAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    status?: SortOrder
    userAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    status?: SortOrder
    userAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRiscoFilter<$PrismaModel = never> = {
    equals?: $Enums.Risco | EnumRiscoFieldRefInput<$PrismaModel>
    in?: $Enums.Risco[]
    notIn?: $Enums.Risco[]
    not?: NestedEnumRiscoFilter<$PrismaModel> | $Enums.Risco
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type G6pdOrderByRelevanceInput = {
    fields: G6pdOrderByRelevanceFieldEnum | G6pdOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type G6pdCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    composicao?: SortOrder
    categoriaId?: SortOrder
    classe?: SortOrder
    causa?: SortOrder
    utilizacao?: SortOrder
    risco?: SortOrder
    confirma?: SortOrder
    status?: SortOrder
    userAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type G6pdAvgOrderByAggregateInput = {
    categoriaId?: SortOrder
    status?: SortOrder
  }

  export type G6pdMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    composicao?: SortOrder
    categoriaId?: SortOrder
    classe?: SortOrder
    causa?: SortOrder
    utilizacao?: SortOrder
    risco?: SortOrder
    confirma?: SortOrder
    status?: SortOrder
    userAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type G6pdMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    composicao?: SortOrder
    categoriaId?: SortOrder
    classe?: SortOrder
    causa?: SortOrder
    utilizacao?: SortOrder
    risco?: SortOrder
    confirma?: SortOrder
    status?: SortOrder
    userAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type G6pdSumOrderByAggregateInput = {
    categoriaId?: SortOrder
    status?: SortOrder
  }

  export type EnumRiscoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Risco | EnumRiscoFieldRefInput<$PrismaModel>
    in?: $Enums.Risco[]
    notIn?: $Enums.Risco[]
    not?: NestedEnumRiscoWithAggregatesFilter<$PrismaModel> | $Enums.Risco
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiscoFilter<$PrismaModel>
    _max?: NestedEnumRiscoFilter<$PrismaModel>
  }

  export type G6pdCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<G6pdCreateWithoutCategoriaInput, G6pdUncheckedCreateWithoutCategoriaInput> | G6pdCreateWithoutCategoriaInput[] | G6pdUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: G6pdCreateOrConnectWithoutCategoriaInput | G6pdCreateOrConnectWithoutCategoriaInput[]
    createMany?: G6pdCreateManyCategoriaInputEnvelope
    connect?: G6pdWhereUniqueInput | G6pdWhereUniqueInput[]
  }

  export type G6pdUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<G6pdCreateWithoutCategoriaInput, G6pdUncheckedCreateWithoutCategoriaInput> | G6pdCreateWithoutCategoriaInput[] | G6pdUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: G6pdCreateOrConnectWithoutCategoriaInput | G6pdCreateOrConnectWithoutCategoriaInput[]
    createMany?: G6pdCreateManyCategoriaInputEnvelope
    connect?: G6pdWhereUniqueInput | G6pdWhereUniqueInput[]
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type G6pdUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<G6pdCreateWithoutCategoriaInput, G6pdUncheckedCreateWithoutCategoriaInput> | G6pdCreateWithoutCategoriaInput[] | G6pdUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: G6pdCreateOrConnectWithoutCategoriaInput | G6pdCreateOrConnectWithoutCategoriaInput[]
    upsert?: G6pdUpsertWithWhereUniqueWithoutCategoriaInput | G6pdUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: G6pdCreateManyCategoriaInputEnvelope
    set?: G6pdWhereUniqueInput | G6pdWhereUniqueInput[]
    disconnect?: G6pdWhereUniqueInput | G6pdWhereUniqueInput[]
    delete?: G6pdWhereUniqueInput | G6pdWhereUniqueInput[]
    connect?: G6pdWhereUniqueInput | G6pdWhereUniqueInput[]
    update?: G6pdUpdateWithWhereUniqueWithoutCategoriaInput | G6pdUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: G6pdUpdateManyWithWhereWithoutCategoriaInput | G6pdUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: G6pdScalarWhereInput | G6pdScalarWhereInput[]
  }

  export type G6pdUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<G6pdCreateWithoutCategoriaInput, G6pdUncheckedCreateWithoutCategoriaInput> | G6pdCreateWithoutCategoriaInput[] | G6pdUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: G6pdCreateOrConnectWithoutCategoriaInput | G6pdCreateOrConnectWithoutCategoriaInput[]
    upsert?: G6pdUpsertWithWhereUniqueWithoutCategoriaInput | G6pdUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: G6pdCreateManyCategoriaInputEnvelope
    set?: G6pdWhereUniqueInput | G6pdWhereUniqueInput[]
    disconnect?: G6pdWhereUniqueInput | G6pdWhereUniqueInput[]
    delete?: G6pdWhereUniqueInput | G6pdWhereUniqueInput[]
    connect?: G6pdWhereUniqueInput | G6pdWhereUniqueInput[]
    update?: G6pdUpdateWithWhereUniqueWithoutCategoriaInput | G6pdUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: G6pdUpdateManyWithWhereWithoutCategoriaInput | G6pdUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: G6pdScalarWhereInput | G6pdScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutG6dpInput = {
    create?: XOR<CategoriaCreateWithoutG6dpInput, CategoriaUncheckedCreateWithoutG6dpInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutG6dpInput
    connect?: CategoriaWhereUniqueInput
  }

  export type EnumRiscoFieldUpdateOperationsInput = {
    set?: $Enums.Risco
  }

  export type CategoriaUpdateOneRequiredWithoutG6dpNestedInput = {
    create?: XOR<CategoriaCreateWithoutG6dpInput, CategoriaUncheckedCreateWithoutG6dpInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutG6dpInput
    upsert?: CategoriaUpsertWithoutG6dpInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutG6dpInput, CategoriaUpdateWithoutG6dpInput>, CategoriaUncheckedUpdateWithoutG6dpInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRiscoFilter<$PrismaModel = never> = {
    equals?: $Enums.Risco | EnumRiscoFieldRefInput<$PrismaModel>
    in?: $Enums.Risco[]
    notIn?: $Enums.Risco[]
    not?: NestedEnumRiscoFilter<$PrismaModel> | $Enums.Risco
  }

  export type NestedEnumRiscoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Risco | EnumRiscoFieldRefInput<$PrismaModel>
    in?: $Enums.Risco[]
    notIn?: $Enums.Risco[]
    not?: NestedEnumRiscoWithAggregatesFilter<$PrismaModel> | $Enums.Risco
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiscoFilter<$PrismaModel>
    _max?: NestedEnumRiscoFilter<$PrismaModel>
  }

  export type G6pdCreateWithoutCategoriaInput = {
    id?: string
    nome: string
    composicao: string
    classe: string
    causa: string
    utilizacao: string
    risco?: $Enums.Risco
    confirma?: string | null
    status?: number
    userAt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type G6pdUncheckedCreateWithoutCategoriaInput = {
    id?: string
    nome: string
    composicao: string
    classe: string
    causa: string
    utilizacao: string
    risco?: $Enums.Risco
    confirma?: string | null
    status?: number
    userAt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type G6pdCreateOrConnectWithoutCategoriaInput = {
    where: G6pdWhereUniqueInput
    create: XOR<G6pdCreateWithoutCategoriaInput, G6pdUncheckedCreateWithoutCategoriaInput>
  }

  export type G6pdCreateManyCategoriaInputEnvelope = {
    data: G6pdCreateManyCategoriaInput | G6pdCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type G6pdUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: G6pdWhereUniqueInput
    update: XOR<G6pdUpdateWithoutCategoriaInput, G6pdUncheckedUpdateWithoutCategoriaInput>
    create: XOR<G6pdCreateWithoutCategoriaInput, G6pdUncheckedCreateWithoutCategoriaInput>
  }

  export type G6pdUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: G6pdWhereUniqueInput
    data: XOR<G6pdUpdateWithoutCategoriaInput, G6pdUncheckedUpdateWithoutCategoriaInput>
  }

  export type G6pdUpdateManyWithWhereWithoutCategoriaInput = {
    where: G6pdScalarWhereInput
    data: XOR<G6pdUpdateManyMutationInput, G6pdUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type G6pdScalarWhereInput = {
    AND?: G6pdScalarWhereInput | G6pdScalarWhereInput[]
    OR?: G6pdScalarWhereInput[]
    NOT?: G6pdScalarWhereInput | G6pdScalarWhereInput[]
    id?: StringFilter<"G6pd"> | string
    nome?: StringFilter<"G6pd"> | string
    composicao?: StringFilter<"G6pd"> | string
    categoriaId?: IntFilter<"G6pd"> | number
    classe?: StringFilter<"G6pd"> | string
    causa?: StringFilter<"G6pd"> | string
    utilizacao?: StringFilter<"G6pd"> | string
    risco?: EnumRiscoFilter<"G6pd"> | $Enums.Risco
    confirma?: StringNullableFilter<"G6pd"> | string | null
    status?: IntFilter<"G6pd"> | number
    userAt?: StringNullableFilter<"G6pd"> | string | null
    createdAt?: DateTimeFilter<"G6pd"> | Date | string
    updatedAt?: DateTimeNullableFilter<"G6pd"> | Date | string | null
  }

  export type CategoriaCreateWithoutG6dpInput = {
    nome: string
    status?: number
    userAt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CategoriaUncheckedCreateWithoutG6dpInput = {
    id?: number
    nome: string
    status?: number
    userAt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CategoriaCreateOrConnectWithoutG6dpInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutG6dpInput, CategoriaUncheckedCreateWithoutG6dpInput>
  }

  export type CategoriaUpsertWithoutG6dpInput = {
    update: XOR<CategoriaUpdateWithoutG6dpInput, CategoriaUncheckedUpdateWithoutG6dpInput>
    create: XOR<CategoriaCreateWithoutG6dpInput, CategoriaUncheckedCreateWithoutG6dpInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutG6dpInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutG6dpInput, CategoriaUncheckedUpdateWithoutG6dpInput>
  }

  export type CategoriaUpdateWithoutG6dpInput = {
    nome?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    userAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoriaUncheckedUpdateWithoutG6dpInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    userAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type G6pdCreateManyCategoriaInput = {
    id?: string
    nome: string
    composicao: string
    classe: string
    causa: string
    utilizacao: string
    risco?: $Enums.Risco
    confirma?: string | null
    status?: number
    userAt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type G6pdUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    composicao?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    causa?: StringFieldUpdateOperationsInput | string
    utilizacao?: StringFieldUpdateOperationsInput | string
    risco?: EnumRiscoFieldUpdateOperationsInput | $Enums.Risco
    confirma?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    userAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type G6pdUncheckedUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    composicao?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    causa?: StringFieldUpdateOperationsInput | string
    utilizacao?: StringFieldUpdateOperationsInput | string
    risco?: EnumRiscoFieldUpdateOperationsInput | $Enums.Risco
    confirma?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    userAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type G6pdUncheckedUpdateManyWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    composicao?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    causa?: StringFieldUpdateOperationsInput | string
    utilizacao?: StringFieldUpdateOperationsInput | string
    risco?: EnumRiscoFieldUpdateOperationsInput | $Enums.Risco
    confirma?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    userAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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