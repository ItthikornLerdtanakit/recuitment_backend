import { configDotenv } from 'dotenv';

import db from './connectdatabase.js';

configDotenv();

export const get_requisition = async (item) => {
    const { department_id } = item;
    const select_requisition = 'select * from requisitions where department_id = ?';
    const [result_requisition] = await db.connectdatabase_recuitment.query(select_requisition, [department_id]);
    const select_department = 'select department_name from departments where department_id = ?';
    const [result_department] = await db.connectdatabase.query(select_department, [department_id]);
    const finalResult = result_requisition.map(row => ({
        ...row,
        department_name: result_department[0]?.department_name || null
    }));
    return finalResult;
}