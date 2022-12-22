import React from 'react';
import { ArtWork } from '../../../../libs/types/artWork';
import DateUtils from '../../../../libs/date';
import styles from './ArtInformation.module.scss';
import TableRaw from '../../../../ui/TableRaw';

const { getSimpleDateFormat, getAge } = DateUtils;

type TableRowDescription = {
    title: string;
    value: (data: ArtWork) => string | number | React.ReactNode;
};

const ROWS: TableRowDescription[] = [
    { title: 'Автор:', value: ({ author }) => [author.name, author.surname].join(' ') },
    { title: 'Телефон:', value: ({ author }) => author.phone },
    { title: 'E-mail:', value: ({ author }) => author.email },
    { title: 'Возраст:', value: ({ author }) => getAge(author.dateOfBirth) },
    { title: 'Дата загрузки:', value: ({ created_date }) => getSimpleDateFormat(created_date) },
    { title: 'Конкурс:', value: ({ competition }) => competition },
    {
        title: 'Свидетельство о рождении:',
        value: ({ author }) => (
            <img className={styles.birth_certificate} src={author.birthCertificate} />
        ),
    },
];

type ArtInformationProps = {
    children?: React.ReactNode;
    data: ArtWork;
};

const ArtInformation: React.FC<ArtInformationProps> = ({ data }) => {
    return (
        <div className={styles.table_wrapper}>
            <table className={styles.table}>
                <colgroup>
                    <col width={'30%'}></col>
                    <col width={'70%'}></col>
                </colgroup>
                <tbody>
                    {ROWS.map(({ title, value }, index) => (
                        <TableRaw key={index} title={title} value={value(data)} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ArtInformation;
