
// DONDE SE ALMACENA LA INFORMACIÓN
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Consequat velit aute tempor exercitation excepteur laboris culpa incididunt ut.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Dolore officia labore id ea elit labore labore.',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Nulla officia irure nostrud aliqua sint.',
            picture: null,
        },
    ]
})