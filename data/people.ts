export interface Person {
    id: number;
    name: string;
    department: string;
    title: string;
}

export const people = [
    {
        id: 2001,
        name: 'John Doe',
        department: 'ISD',
        title: 'Software Developer',
    },
    {
        id: 2002,
        name: 'Jane Doe',
        department: 'ARC',
        title: 'Software Developer'
    },
    {
        id: 2003,
        name: 'Jim Doe',
        department: 'Finance',
        title: 'Software Developer'
    },
    {
        id: 2004,
        name: 'Jill Doe',
        department: 'Etc',
        title: 'Software Developer'
    }
];

export const peopleDict: { [key: number]: Person } = people.reduce((acc:any, person) => {
    acc[person.id] = person;
    return acc;
}, {});
