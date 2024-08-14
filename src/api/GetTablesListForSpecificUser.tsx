import axios from 'axios';

const GetTablesListForSpecificUser = async (username: any) => {
    try {
        const response = await axios.get(`http://localhost:8000/db/users/${username}/tables`);
        return response.data.tables;
    } catch (error) {
        console.error('There was an error fetching the table data!', error);
        return [];
    }
};

export default GetTablesListForSpecificUser;
