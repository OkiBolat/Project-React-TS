export default class DateUtils {
    static getSimpleDateFormat = (date: string) => {
        return new Date(date).toLocaleString('fr-CH', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    };
}
