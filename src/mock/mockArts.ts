import { ArtWork, Author } from '../libs/types/artWork';

const MOCK_AUTHORS: Author[] = [
    {
        id: 0,
        name: 'Martin',
        surname: 'Eden',
        phone: '8 (900) 999 00 00',
        email: 'martin_eden@gmail.com',
        dateOfBirth: new Date(1999, 0, 15).toDateString(),
        birthCertificate:
            'https://templatelab.com/wp-content/uploads/2020/05/Birth-Certificate-Template-1-TemplateLab-scaled.jpg',
    },
    {
        id: 1,
        name: 'Andrei',
        surname: 'Bolkonsky',
        phone: '8 (900) 999 01 01',
        email: 'bonkonsky@gmail.com',
        dateOfBirth: new Date(1980, 9, 5).toDateString(),
        birthCertificate:
            'https://templatelab.com/wp-content/uploads/2020/05/Birth-Certificate-Template-1-TemplateLab-scaled.jpg',
    },
    {
        id: 2,
        name: 'Arthur',
        surname: 'ChtoToTam',
        phone: '8 (900) 999 02 02',
        email: 'chto@gmail.com',
        dateOfBirth: new Date(1977, 2, 12).toDateString(),
        birthCertificate:
            'https://templatelab.com/wp-content/uploads/2020/05/Birth-Certificate-Template-1-TemplateLab-scaled.jpg',
    },
    {
        id: 3,
        name: 'Brian',
        surname: 'Aldiss',
        phone: '8 (900) 999 11 15',
        email: 'react-redux@gmail.com',
        dateOfBirth: new Date(1925, 7, 19).toDateString(),
        birthCertificate:
            'https://templatelab.com/wp-content/uploads/2020/05/Birth-Certificate-Template-1-TemplateLab-scaled.jpg',
    },
    {
        id: 4,
        name: 'Brian',
        surname: 'Balfour-Oatts',
        phone: '8 (917) 999 22 22',
        email: 'brian@gmail.com',
        dateOfBirth: new Date(1966, 0, 15).toDateString(),
        birthCertificate:
            'https://templatelab.com/wp-content/uploads/2020/05/Birth-Certificate-Template-1-TemplateLab-scaled.jpg',
    },
];

const MOCK_ART_WORKS: ArtWork[] = [
    {
        id: 0,
        author: MOCK_AUTHORS[1],
        created_date: new Date(1999, 0, 12).toDateString(),
        competition: 'Ночь',
        url: 'https://lh6.ggpht.com/HlgucZ0ylJAfZgusynnUwxNIgIp5htNhShF559x3dRXiuy_UdP3UQVLYW6c=s1200',
        decision: null,
    },
    {
        id: 1,
        author: MOCK_AUTHORS[2],
        created_date: new Date(2000, 11, 12).toDateString(),
        competition: 'Маленький принц',
        url: 'https://ensia.com/wp-content/uploads/2018/01/Voices_Arts_main-760x378.jpg',
        decision: null,
    },
    {
        id: 2,
        author: MOCK_AUTHORS[3],
        created_date: new Date(2008, 8, 8).toDateString(),
        competition: 'Современное искусство',
        url: 'https://ecorner.stanford.edu/wp-content/uploads/sites/2/2016/08/eCorner_Arts_Tech5-960x541.jpg',
        decision: null,
    },
    {
        id: 3,
        author: MOCK_AUTHORS[0],
        created_date: new Date(2009, 9, 8).toDateString(),
        competition: 'Современное искусство',
        url: 'https://umsu.unimelb.edu.au/pageassets/express-yourself/arts/ARTS_Album%20Cover[2022]_.png',
        decision: null,
    },
    {
        id: 4,
        author: MOCK_AUTHORS[4],
        created_date: new Date(20010, 3, 3).toDateString(),
        competition: 'Маленький принц',
        url: 'https://images.theconversation.com/files/296052/original/file-20191008-128681-ngzwqb.jpg?ixlib=rb-1.1.0&rect=15%2C20%2C929%2C926&q=45&auto=format&w=1000&fit=clip',
        decision: null,
    },
    {
        id: 5,
        author: MOCK_AUTHORS[1],
        created_date: new Date(1999, 0, 12).toDateString(),
        competition: 'Ночь',
        url: 'https://lh6.ggpht.com/HlgucZ0ylJAfZgusynnUwxNIgIp5htNhShF559x3dRXiuy_UdP3UQVLYW6c=s1200',
        decision: null,
    },
    {
        id: 6,
        author: MOCK_AUTHORS[2],
        created_date: new Date(2000, 11, 12).toDateString(),
        competition: 'Маленький принц',
        url: 'https://ensia.com/wp-content/uploads/2018/01/Voices_Arts_main-760x378.jpg',
        decision: null,
    },
    {
        id: 7,
        author: MOCK_AUTHORS[3],
        created_date: new Date(2008, 8, 8).toDateString(),
        competition: 'Современное искусство',
        url: 'https://ecorner.stanford.edu/wp-content/uploads/sites/2/2016/08/eCorner_Arts_Tech5-960x541.jpg',
        decision: null,
    },
    {
        id: 8,
        author: MOCK_AUTHORS[0],
        created_date: new Date(2009, 9, 8).toDateString(),
        competition: 'Современное искусство',
        url: 'https://umsu.unimelb.edu.au/pageassets/express-yourself/arts/ARTS_Album%20Cover[2022]_.png',
        decision: null,
    },
    {
        id: 9,
        author: MOCK_AUTHORS[4],
        created_date: new Date(20010, 3, 3).toDateString(),
        competition: 'Маленький принц',
        url: 'https://images.theconversation.com/files/296052/original/file-20191008-128681-ngzwqb.jpg?ixlib=rb-1.1.0&rect=15%2C20%2C929%2C926&q=45&auto=format&w=1000&fit=clip',
        decision: null,
    },
];

export default MOCK_ART_WORKS;
