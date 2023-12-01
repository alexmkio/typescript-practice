export default function Advanced() {
  return (
    <>
      <h2>Advanced</h2>

      <h3>
        <a
          href="https://github.com/jorupp/typescript-part3/blob/main/slides/index.md#json-handling"
          target="_blank"
        >
          JSON Handling
        </a>
      </h3>

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types"
          target="_blank"
        >
          Inferring with Conditional Types - Unboxing
        </a>
      </h3>

      <h3>
        <a href="https://react.dev/reference/react/forwardRef" target="_blank">
          React fwdRefs
        </a>
      </h3>
      <ul>
        <li>
          Usage
          <ul>
            <li>Exposing a DOM node to the parent component</li>
            <li>Forwarding a ref through multiple components</li>
            <li>Exposing an imperative handle instead of a DOM node</li>
          </ul>
        </li>
      </ul>

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/decorators.html"
          target="_blank"
        >
          Decorators
        </a>
      </h3>
      <p>
        Decorators provide a way to add both annotations and a meta-programming
        syntax for class declarations and members.
      </p>
      <p>
        To enable experimental support for decorators, you must enable the
        experimentalDecorators compiler option in your tsconfig.json
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/O6A-u_FoEX8?si=A4suNpDOdNuXAXFE"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/2/typeof-types.html"
          target="_blank"
        >
          Typeof Type Operator - ReturnType{"<"}f{">"}
        </a>
      </h3>
      <p>
        TypeScript adds a typeof operator you can use in a type context to refer
        to the type of a variable or property
      </p>

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates"
          target="_blank"
        >
          Type Predicates
        </a>
      </h3>
      <p>Allows you to narrow expected type usage (type-guard).</p>
      <code>
        <span>function isFish(pet: Fish | Bird): pet is Fish {"{"}</span>
        <span className="line">return (pet as Fish).swim !== undefined;</span>
        <span>{"}"}</span>
      </code>
      <p>
        pet is Fish is our type predicate in this example. A predicate takes the
        form parameterName is Type, where parameterName must be the name of a
        parameter from the current function signature.
      </p>
      <p>
        Any time isFish is called with some variable, TypeScript will narrow
        that variable to that specific type if the original type is compatible.
      </p>
      <code>
        <span>let pet = getSmallPet();</span>
        <br />
        <br />
        <span>if (isFish(pet)) {"{"}</span>
        <span className="line">pet.swim();</span>
        <span>
          {"}"} else {"{"}
        </span>
        <span className="line">pet.fly();</span>
        <span>{"}"}</span>
      </code>
      <p>
        Notice that TypeScript not only knows that pet is a Fish in the if
        branch; it also knows that in the else branch, you don’t have a Fish, so
        you must have a Bird.
      </p>
      <p>
        You may use the type guard isFish to filter an array of Fish | Bird and
        obtain an array of Fish:
      </p>
      <code>
        <span>
          const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(),
          getSmallPet()];
        </span>
        <br />
        <span>const underWater1: Fish[] = zoo.filter(isFish);</span>
      </code>

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/type-compatibility.html"
          target="_blank"
        >
          Type Compatibility
        </a>
      </h3>
      <img src="https://i.pinimg.com/originals/34/53/7f/34537f05816bca3f525f6c8859e4aba6.gif" />
      <br />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/wqm5ibtCSf0?si=WRslViu9_Q6FPjjG"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#the-awaited-type-and-promise-improvements"
          target="_blank"
        >
          Awaited Type
        </a>
      </h3>
      <p>
        This type is meant to model operations like await in async functions, or
        the .then() method on Promises - specifically, the way that they
        recursively unwrap Promises.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5QU_5FB6Z08?si=_zRiTX5aOfdxmla8"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/2/keyof-types.html"
          target="_blank"
        >
          Keyof Type Operator
        </a>
      </h3>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/45gSwNdWSjU?si=tNQEClU2ZVHHWXaV"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html"
          target="_blank"
        >
          Triple-Slash Directives
        </a>
      </h3>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/v9kOkOtJjg4?si=jijd3uTusJ25bmwU"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/namespaces.html"
          target="_blank"
        >
          Namespaces
        </a>
      </h3>
      <p>
        Prevents namespace collisions within a file or between files liked to
        one another through reference directives (see above) by declaring
        classes, functions, interfaces, etc. within a namespace.
      </p>

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/symbols.html"
          target="_blank"
        >
          Symbols
        </a>
      </h3>
      <p>
        Starting with ECMAScript 2015, symbol is a primitive data type, just
        like number and string.
      </p>
      <p>symbol values are created by calling the Symbol constructor.</p>
      <code>
        let sym1 = Symbol();
        <br />
        <br />
        let sym2 = Symbol("key"); // optional string key
      </code>
      <p>Symbols are immutable, and unique.</p>
      <code>
        let sym2 = Symbol("key");
        <br />
        let sym3 = Symbol("key");
        <br />
        <br />
        sym2 === sym3; // false, symbols are unique
      </code>
      <p>
        Just like strings, symbols can be used as keys for object properties.
      </p>
      <code>
        <span>const sym = Symbol();</span>
        <br />
        <br />
        <span>let obj = {"{"}</span>
        <span className="line">[sym]: "value",</span>
        <span>{"}"}</span>
      </code>
    </>
  );
}
