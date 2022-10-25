import { IFormSchema } from 'ifarm';

const formSchema: IFormSchema[] = [
  {
    type: 'text',
    name: 'name',
    label: 'Name',
    placeholder: 'Enter your name',
    error: 'Please enter your name',
    value: '',
    required: true,
  },
  {
    type: 'textarea',
    name: 'bio',
    label: 'Bio',
    placeholder: 'Enter your bio',
    error: 'Please enter your bio',
    value: '',
    required: true,
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
        label: 'Male',
        value: 'male',
        name: 'male',
      },
      {
        label: 'Female',
        value: 'female',
        name: 'female',
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
        label: 'Football',
        value: 'football',
        name: 'football',
      },
      {
        label: 'Cricket',
        value: 'cricket',
        name: 'cricket',
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
        label: 'Pizza',
        value: 'pizza',
      },
      {
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
];

export default formSchema;
