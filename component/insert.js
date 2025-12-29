import db from './connectdatabase.js';

//
export const save_requisition = async (item) => {
    const { data } = item;
    const insert = 'insert into requisitions (requisition_position, department_id, requisition_request, requisition_type, requisition_year, requisition_month, requisition_reason, requisition_name, requisition_job, requisition_main, requisition_key, requisition_status) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const [result_insert] = await db.connectdatabase_recuitment.query(insert, [data[0].requisition_position, data[0].department_id, data[0].requisition_request, data[0].requisition_type, data[0].requisition_year, data[0].requisition_month, data[0].requisition_reason, data[0].requisition_name, data[0].requisition_job, data[0].requisition_main, data[0].requisition_key, data[0].requisition_status]);
    if (result_insert.affectedRows > 0) {
        return 'success';
    } else {
        return 'fail';
    }
}