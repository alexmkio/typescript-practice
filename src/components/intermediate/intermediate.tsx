export default function Intermediate() {
  return (
    <>
      <h2>Intermediate</h2>

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces"
          target="_blank"
        >
          Differences Between Types and Interfaces
        </a>
      </h3>
      <p>
        Almost all features of an interface are available in type, the key
        distinction is that a type cannot be re-opened to add new properties vs
        an interface which is always extendable.
      </p>

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/declaration-merging.html"
          target="_blank"
        >
          Declaration Merging - Merging Interfaces
        </a>
      </h3>
      <code>
        <span>interface Box {"{"}</span>
        <span className="line">height: number;</span>
        <span className="line">width: number;</span>
        <span>{"}"}</span>
        <br />
        <br />
        <span>interface Box {"{"}</span>
        <span className="line">scale: number;</span>
        <span>{"}"}</span>
        <br />
        <br />
        <span>
          let box: Box = {"{"} height: 5, width: 6, scale: 10 {"}"};
        </span>
      </code>
      <p>Merging isn't permitted with imported interfaces</p>

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types"
          target="_blank"
        >
          Union Types
        </a>
      </h3>
      <p>
        A union type is a type formed from two or more other types, representing
        values that may be any one of those types. We refer to each of these
        types as the union’s members.
      </p>
      <code>type UnionType = string | number;</code>

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/2/generics.html"
          target="_blank"
        >
          Generics - Interfaces, classes, and functions
        </a>
      </h3>
      <p>
        Generics allow us to be able to create a component that can work over a
        variety of types rather than a single one. This allows users to consume
        these components and use their own types.
      </p>
      <p>Example of Generic Function:</p>
      <code>
        <span>
          function identity{"<"}Type{">"}(arg: Type): Type {"{"}
        </span>
        <span className="line">return arg;</span>
        <span>{"}"}</span>
      </code>
      <p>
        We’ve now added a type variable Type to the identity function. This Type
        allows us to capture the type the user provides (e.g. number), so that
        we can use that information later. Here, we use Type again as the return
        type.
      </p>
      <p>Example of Generic Type interface:</p>
      <code>
        <span>
          let myIdentity: {"<"}Type{">"}(arg: Type) ={">"} Type = identity;
        </span>
      </code>
      <p>Or:</p>
      <code>
        <span>interface GenericIdentityFn {"{"}</span>
        <span className="line">
          {"<"}Type{">"}(arg: Type): Type;
        </span>
        <span>{"}"}</span>
        <br />
        <br />
        <span>let myIdentity: GenericIdentityFn = identity;</span>
      </code>

      <h3>
        <a href="https://www.typescriptlang.org/tsconfig" target="_blank">
          TS Config
        </a>
      </h3>

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types"
          target="_blank"
        >
          Tuples
        </a>
      </h3>
      <p>
        A tuple type is another sort of Array type that knows exactly how many
        elements it contains, and exactly which types it contains at specific
        positions.
      </p>
      <code>type StringNumberPair = [string, number];</code>

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions"
          target="_blank"
        >
          Type Assertions - Casting
        </a>
      </h3>
      <p>
        Sometimes you will have information about the type of a value that
        TypeScript can’t know about.
      </p>
      <p>
        For example, if you’re using document.getElementById, TypeScript only
        knows that this will return some kind of HTMLElement, but you might know
        that your page will always have an HTMLCanvasElement with a given ID.
      </p>
      <p>
        In this situation, you can use a type assertion to specify a more
        specific type:
      </p>
      <code>
        const myCanvas = document.getElementById("main_canvas") as
        HTMLCanvasElement;
      </code>
    </>
  );
}
