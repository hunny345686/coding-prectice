// Interface

interface User {
  name: string;
  id: number;
}

// type
type User1 = {
  name: string;
  id: number;
};

type State = "Fullfill" | "Pending" | "Reject";

// generics

function identity<T>(val: T): T {
  return val;
}

const result = identity<string>("Prem");

function getFirst<T>(items: T[]): T {
  return items[0];
}

// What is unknown vs any?

let a: any = "hello";

a.toUpperCase();

a.foo.bar; // TypeScript allows it

// With unknown

let value: unknown = "Prem";
value.toUpperCase(); // it will give an error

if (typeof value === "string") {
  value.toUpperCase(); // It will allow it
}

// utility types?
interface User {
  id: number;
  name: string;
  email: string;
}

type UpdatedUser = Partial<User>; // All are optional
type UserWithoutEmail = Omit<User, "email">;

// union type

// Use TypeScript's built-in Readonly

interface Obj {
  name: string;
  address: {
    city: string;
    state: string;
  };
}

// const obj: Readonly<Obj> = {
//   name: "Prem",
//   address: {
//     city: "Mohali",
//     state: "Punjab",
//   },
// };

// obj.name = "ra";
// obj.address.city = "HJkhj";

// Approach B: Create a generic deep-readonly utility

type DeepReadOnly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadOnly<T[K]> : T[K];
};

const obj: DeepReadOnly<Obj> = {
  name: "Prem",
  address: {
    city: "Mohali",
    state: "Punjab",
  },
};

obj.name = "ra";
obj.address.city = "HJkhj";
