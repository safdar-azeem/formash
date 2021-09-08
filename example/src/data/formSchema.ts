import { IFormSchema } from 'formash'

const formSchema: IFormSchema[] = [
  {
    type: 'text',
    name: 'name',
    label: 'Name',
    placeholder: 'Enter your name',
    error: 'Please enter your name',
    value: '',
    required: true,
    minLength: 3,
    maxLength: 5,
    enum: ['John', 'Jane'],
    trim: true,
  },
  {
    type: 'textarea',
    name: 'bio',
    label: 'Bio',
    placeholder: 'Enter your bio',
    error: 'Please enter your bio',
    value: '',
    required: true,
    trim: true,
  },
  {
    name: 'gender',
    label: 'Gender',
    placeholder: 'What is your gender?',
    type: 'radio',
    error: 'Please select your gender',
    value: 'male',
    required: true,
    options: [
      {
        id: 'male',
        label: 'Male',
        value: 'male',
      },
      {
        id: 'female',
        label: 'Female',
        value: 'female',
      },
    ],
  },

  {
    name: 'hobbies',
    label: 'Hobbies',
    placeholder: 'What is your hobbies?',
    type: 'checkbox',
    error: '',
    value: [''],
    required: true,
    options: [
      {
        id: 'football',
        label: 'Football',
        value: 'football',
      },
      {
        id: 'cricket',
        label: 'Cricket',
        value: 'cricket',
      },
    ],
  },

  {
    name: 'menu',
    label: 'Menu',
    placeholder: 'What is your favorite menu?',
    type: 'select',
    error: 'Please select your favorite menu',
    value: '',
    required: true,
    options: [
      {
        id: 'pizza',
        label: 'Pizza',
        value: 'pizza',
      },
      {
        id: 'burger',
        label: 'Burger',
        value: 'burger',
      },
    ],
  },
  {
    type: 'file',
    name: 'avatar',
    label: 'Avatar',
    placeholder: 'Enter your avatar',
    error: 'Please enter your avatar',
    value: '',
    required: true,
    accept: 'image/*',
    multiple: true,
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Please enter your email address',
    error: 'Please enter a valid email address',
    value: '',
    required: true,
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    value: '',
    placeholder: 'Please enter your password',
    error: 'Please enter a valid password',
    required: true,
  },
  {
    type: 'date',
    name: 'date',
    label: 'Date',
    value: new Date(),
    placeholder: 'Please enter your date',
    error: 'Please enter a valid date',
    required: true,
  },
]

export default formSchema
