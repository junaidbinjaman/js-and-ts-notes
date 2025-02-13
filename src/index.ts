const person: string = "hello world";
console.log(person);

function generateName<T>(name: T): string {
  return "Hello " + name;
}

const beautiful_name = generateName<string>("Junaid Bin");
console.log(beautiful_name);
