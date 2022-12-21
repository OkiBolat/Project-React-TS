import React from 'react';
import { ArtWork } from '../../../../assets/types/artWork';
import DateUtils from '../../../../utils/dateUtils';
import styles from './ArtInformation.module.scss';

interface IArtInformationProps {
    children?: React.ReactNode;
    data: ArtWork;
}

const ArtInformation: React.FC<IArtInformationProps> = ({ data }) => {
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
                    <tr>
                        <td>Автор:</td>
                        <td>{authorFullName}</td>
                    </tr>
                    <tr>
                        <td>Телефон:</td>
                        <td>{author.phone}</td>
                    </tr>
                    <tr>
                        <td>E-mail:</td>
                        <td>{author.email}</td>
                    </tr>
                    <tr>
                        <td>Возраст:</td>
                        <td>{DateUtils.getSimpleDateFormat(author.dateOfBirth)}</td>
                    </tr>
                    <tr>
                        <td>Дата загрузки:</td>
                        <td>{DateUtils.getSimpleDateFormat(created_date)}</td>
                    </tr>
                    <tr>
                        <td>Конкурс:</td>
                        <td>"{competition}"</td>
                    </tr>
                    <tr>
                        <td>Свидетельство о рождении:</td>
                        <td>
                            <img
                                className={styles.birth_certificate}
                                src={author.birthCertificate}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ArtInformation;
