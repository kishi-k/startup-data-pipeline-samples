type Config = {
    pipelineName: string,
    isExistDB?: boolean,
    dbClusterName: string,
    dbName: string,
    schemaName: string,
    tables: Array<any>,
    sampleDataBucketName: string,
    snapshotS3BucketName: string,
    s3ExportPrefix: string,
    enableBackupExportedData: boolean

}
export const config: Config = {
    pipelineName: "sample-ticket-database",
    isExistDB: false, //既存 DB を使う場合は true にしてください
    dbClusterName: "sample-ticket-database",
    dbName: 'demodb',
    schemaName: 'demodb',
    tables: [
        {
            table_name: "event",
            condition: "starttime"
        },
        {
            table_name: "sales",
            condition: "saletime"
        },
        {
            table_name: "listing",
            condition: "listtime"
        },
        {
            table_name: "category"
        },
        {
            table_name: "date",
            condition: "caldate"
        },
        {
            table_name: "users"
        },
        {
            table_name: "venue"
        }
    ],
    sampleDataBucketName:"sample-ticket-data-bucket",
    snapshotS3BucketName: "sample-snapshot-bucket", 
    s3ExportPrefix: "s3export",
    enableBackupExportedData:true
}