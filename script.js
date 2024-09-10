document.addEventListener('DOMContentLoaded', () => {
    // Function to set the minimum selectable date to today
    function setMinDate() {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('Input').setAttribute('min', today);
    }

    setMinDate(); // Call the function to set the minimum date

 
    function formatDate(date, format) {
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-indexed
        const year = date.getFullYear();
        const shortYear = year.toString().slice(-2); // Last two digits of the year

        switch (format) {
            case 'writtenFormat':
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                return `${day}${day === 1 ? 'st' : day === 2 ? 'nd' : day === 3 ? 'rd' : 'th'} ${months[month - 1]} ${year}`;
            case 'dateFirst':
                return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
            case 'monthFirst':
                return `${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}/${year}`;
            case 'yearFirst':
                return `${year}/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}`;
            case 'notFullYear':
                return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${shortYear}`;
            default:
                return '';
        }
    }

    // Handle format change event
    document.getElementById('formatSelect').addEventListener('change', () => {
        const selectedDate = new Date(document.getElementById('Input').value);
        const selectedFormat = document.getElementById('formatSelect').value;

        if ( selectedFormat) {
            const formatted = formatDate(selectedDate, selectedFormat);
            document.getElementById('formattedDate').textContent = formatted;
        } else {
            document.getElementById('formattedDate').textContent = '';
        }
    });

   
   
});
