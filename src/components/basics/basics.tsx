export default function Basics() {
  return (
    <>
      <h2>Basics</h2>

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#type-annotations"
          target="_blank"
        >
          Type Annotations
        </a>
      </h3>
      <code>
        const addNumbers = (a: number, b: number): number =&gt; a + b;
      </code>
      <p>
        This errors if you try to pass anything other than two numbers to
        addNumbers
      </p>

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean"
          target="_blank"
        >
          Primitive Types
        </a>
      </h3>
      <ul>
        <li>string</li>
        <li>number</li>
        <li>boolean</li>
      </ul>

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html"
          target="_blank"
        >
          Type Declarations
        </a>
      </h3>

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/dom-manipulation.html"
          target="_blank"
        >
          Type Definitions for the DOM
        </a>
      </h3>
      <p>
        This relates to the Document interface found in lib.dom.d.ts that
        ensures type safety when doing things like:
        <code>
          const app = document.getElementById("app");
          <br />
          <br />
          const p = document.createElement("p");
          <br />
          <br />
          p.textContent = "Hello, World!";
          <br />
          <br />
          element app?.appendChild(p);
        </code>
      </p>

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html#global-modifying-modules"
          target="_blank"
        >
          Global Modifying Values
        </a>
      </h3>
      <p>
        A global-modifying module alters existing values in the global scope
        when they are imported. For example, there might exist a library which
        adds new members to String.prototype when imported. This pattern is
        somewhat dangerous due to the possibility of runtime conflicts, but we
        can still write a declaration file for it.
      </p>

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/enums.html"
          target="_blank"
        >
          Enums
        </a>
      </h3>
      <p>
        Enums allow a developer to define a set of named constants. Using enums
        can make it easier to document intent, or create a set of distinct
        cases. TypeScript provides both numeric and string-based enums.
      </p>
      <p>Numberic enums auto-initialize at 0 and auto-increment.</p>
      <p>
        So:
        <code>
          <span>enum Direction {"{"}</span>
          <span className="line">Up,</span>
          <span className="line">Down,</span>
          <span className="line">Left,</span>
          <span className="line">Right,</span>
          <span>{"}"}</span>
        </code>
        Is actually:
        <code>
          <span>enum Direction {"{"}</span>
          <span className="line">Up = 0,</span>
          <span className="line">Down = 1,</span>
          <span className="line">Left = 2,</span>
          <span className="line">Right = 3,</span>
          <span>{"}"}</span>
        </code>
      </p>
      <p>
        This auto-incrementing behavior is useful for cases where we might not
        care about the member values themselves, but do care that each value is
        distinct from other values in the same enum.
      </p>
      <p>We can initialize a numeric enum to any number</p>
      <p>
        So:
        <code>
          <span>enum Direction {"{"}</span>
          <span className="line">Up = 10,</span>
          <span className="line">Down,</span>
          <span className="line">Left,</span>
          <span className="line">Right,</span>
          <span>{"}"}</span>
        </code>
        Is actually:
        <code>
          <span>enum Direction {"{"}</span>
          <span className="line">Up = 10,</span>
          <span className="line">Down = 11,</span>
          <span className="line">Left = 12,</span>
          <span className="line">Right = 13,</span>
          <span>{"}"}</span>
        </code>
      </p>
      <p>
        How to use a numeric enum:
        <code>
          <span>enum UserResponse {"{"}</span>
          <span className="line">No = 0,</span>
          <span className="line">Yes = 1,</span>
          <span>{"}"}</span>
          <br />
          <br />
          <span>
            function respond(recipient: string, message: UserResponse): void{" "}
            {"{"}
          </span>
          <span className="line">// ...</span>
          <span>{"}"}</span>
          <br />
          <br />
          <span>respond("Princess Caroline", UserResponse.Yes);</span>
        </code>
      </p>
      <p>
        String emum example:
        <code>
          <span>enum Direction {"{"}</span>
          <span className="line">Up = 'UP',</span>
          <span className="line">Down = 'DOWN',</span>
          <span className="line">Left = 'LEFT',</span>
          <span className="line">Right = 'RIGHT',</span>
          <span>{"}"}</span>
        </code>
      </p>
      <p>
        In modern TypeScript, you may not need an enum when an object with as
        const could suffice:
        <code>
          <span>const enum EDirection {"{"}</span>
          <span className="line">Up,</span>
          <span className="line">Down,</span>
          <span className="line">Left,</span>
          <span className="line">Right,</span>
          <span>{"}"}</span>
          <br />
          <br />
          <span>const ODirection {"{"}</span>
          <span className="line">Up: 0,</span>
          <span className="line">Down: 1,</span>
          <span className="line">Left: 2,</span>
          <span className="line">Right: 3,</span>
          <span>{"}"} as const;</span>
        </code>
      </p>

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining"
          target="_blank"
        >
          Optional Chaining
        </a>
      </h3>
      <p>
        Optional chaining lets us write code where TypeScript can immediately
        stop running some expressions, returning undefined, if we run into a
        null or undefined.
      </p>

      <h3>
        <a
          href="https://www.typescriptlang.org/docs/handbook/utility-types.html"
          target="_blank"
        >
          Utility Types
        </a>
      </h3>
      <p>
        TypeScript provides several utility types to facilitate common type
        transformations. These utilities are available globally.
      </p>
    </>
  );
}
