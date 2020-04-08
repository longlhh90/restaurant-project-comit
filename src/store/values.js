export const partyValues= [
    {value: '',displayValue: ''},
    {value: '1', displayValue: 1},
    {value: '2', displayValue: 2},
    {value: '3', displayValue: 3},
    {value: '4', displayValue: 4},
    {value: '5', displayValue: 5},
    {value: '6', displayValue: 6},
    {value: '7', displayValue: 7},
    {value: '8', displayValue: 8},
    {value: '9', displayValue: 9},
    {value: '10', displayValue: 10},
]

export const timeValues = [
    {value: '',displayValue: ''},
    {value: '10:00 AM',displayValue: '10:00 AM'},
    {value: '10:30 AM',displayValue: '10:30 AM'},
    {value: '11:00 AM',displayValue: '11:00 AM'},
    {value: '11:30 AM',displayValue: '11:30 AM'},
    {value: '12:00 AM',displayValue: '12:00 AM'},
    {value: '12:30 PM',displayValue: '12:30 PM'},
    {value: '13:00 PM',displayValue: '13:00 PM'},
    {value: '13:30 PM',displayValue: '13:30 PM'},
    {value: '14:00 PM',displayValue: '14:00 PM'},
    {value: '14:30 PM',displayValue: '14:30 PM'},
    {value: '15:00 PM',displayValue: '15:00 PM'},
    {value: '15:30 PM',displayValue: '15:30 PM'},
    {value: '16:00 PM',displayValue: '16:00 PM'},
    {value: '16:30 PM',displayValue: '16:30 PM'},
    {value: '17:00 PM',displayValue: '17:00 PM'},
    {value: '17:30 PM',displayValue: '17:30 PM'},
    {value: '18:00 PM',displayValue: '18:00 PM'},
    {value: '18:30 PM',displayValue: '18:30 PM'},
    {value: '19:00 PM',displayValue: '19:00 PM'},
    {value: '19:30 PM',displayValue: '19:30 PM'}
]

const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

export const today = `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`; 