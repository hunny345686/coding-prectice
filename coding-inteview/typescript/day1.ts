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
