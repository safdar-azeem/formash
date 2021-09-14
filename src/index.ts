const formSchema = [
    {
        value: '',
        name: 'menu',
        label: 'Menu',
        type: 'select',
        required: true,
        error: 'Please select your favorite menu',
        placeholder: 'What is your favorite menu?',
        options: [
            {
                label: 'Pizza',
                value: 'pizza',
            },
            {
                label: 'Burger',
                value: 'burger',
            },
        ],
    },
]