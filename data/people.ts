export interface Person {
    id: number;
    name: string;
    department: string;
    title: string;
}

export const people = [
    {
        id: 7865,
        name: 'Partha Nath',
        department: 'ISD',
        title: 'Senior Analyst Developer',
    },
    {
        id: 7845,
        name: 'Deborah Okogwu',
        department: 'ISD',
        title: 'Agile Delivery Manager'
    },
    {
        id: 34567,
        name: 'Deeksha Shankar',
        department: 'Finance',
        title: 'Senior Analyst Developer '
    },
    {
        id: 7865,
        name: 'Cristian Dinu',
        department: 'ARC',
        title: 'Research Software Engineer'
    },
    {
        id: 7847,
        name: 'Jenny Griffiths',
        department: 'ISD',
        title: 'Senior Analyst Developer'
    },
];

export const peopleDict: { [key: number]: Person } = people.reduce((acc:any, person) => {
    acc[person.id] = person;
    return acc;
}, {});
