interface StudentProps {
  id: number;
  name: string;
  description: string;
}

const person: string = 'hello world';
console.log(person);

function generateName<T>(name: T): string {
  return 'Hello ' + name;
}

const student: StudentProps = {
  id: 201,
  name: 'Ersome',
  description: '',
};

const data = (x: string) => console.log(x);

const beautiful_name = generateName<string>('Junaid Bin');
console.log(student, beautiful_name);
