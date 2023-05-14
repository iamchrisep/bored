export const filters = {
    types: ['any', 'education', 'recreational', 'social', 'diy', 'charity', 'cooking', 'relaxation', 'music', 'busywork'],
    participants: ['any', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    price: ['any', 'cheap', 'average', 'expensive'],
}

export const prices = [
    {
        id: 0,
        name: 'any',
        factor: 0,
    }, {
        id: 1,
        name: 'cheap',
        factor: 0.4,
    }, {
        id: 2,
        name: 'average',
        factor: 0.6,
    }, {
        id: 3,
        name: 'expensive',
        factor: 1,
    },
]
