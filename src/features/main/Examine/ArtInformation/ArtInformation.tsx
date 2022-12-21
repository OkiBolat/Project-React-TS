import React from 'react';
import { ArtWork } from '../../../../libs/types/artWork';
import DateUtils from '../../../../libs/date';
import styles from './ArtInformation.module.scss';
import TableRaw from '../../../../ui/TableRaw';

type ArtInformationProps = {
    children?: React.ReactNode;
    data: ArtWork;
};

const ArtInformation: React.FC<ArtInformationProps> = ({ data }) => {
    const { author, competition, created_date } = data;
    const authorFullName = [author.name, author.surname].join(' ');

    return (
        <div className={styles.table_wrapper}>
            <table className={styles.table}>
                <colgroup>
                    <col width={'30%'}></col>
                    <col width={'70%'}></col>
                </colgroup>
                <tbody>
                    <TableRaw title='Автор:' value={authorFullName} />
                    <TableRaw title='Телефон:' value={author.phone} />
                    <TableRaw title='E-mail:' value={author.email} />
                    <TableRaw
                        title='Возраст:'
                        value={DateUtils.getSimpleDateFormat(author.dateOfBirth)}
                    />
                    <TableRaw
                        title='Дата загрузки:'
                        value={DateUtils.getSimpleDateFormat(created_date)}
                    />
                    <TableRaw title='Конкурс:' value={competition} />
                    <TableRaw
                        title='Свидетельство о рождении:'
                        value={
                            <img
                                className={styles.birth_certificate}
                                src={author.birthCertificate}
                            />
                        }
                    />
                </tbody>
            </table>
        </div>
    );
};

export default ArtInformation;
