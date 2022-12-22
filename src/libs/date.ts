namespace DateUtils {
    export const getSimpleDateFormat = (date: string) => {
        return new Date(date).toLocaleString('fr-CH', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    };
    export const getAge = (date: string) => {
        const today = new Date();
        const birthDate = new Date(date);
        const age = today.getFullYear() - birthDate.getFullYear();
        const months = today.getMonth() - birthDate.getMonth();

        if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) return age - 1;

        return age;
    };
}

export default DateUtils;
