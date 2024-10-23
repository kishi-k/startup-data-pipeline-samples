import boto3
import logging
import os

logger = logging.getLogger()
logger.setLevel(os.getenv("LOG_LEVEL", logging.INFO))
logger.setLevel(os.getenv("LOG_LEVEL", logging.DEBUG))

rds = boto3.client('rds')


def handler(event, context):

    logger.debug(event)

    resp = rds.describe_export_tasks(
        ExportTaskIdentifier=event["ExportTaskIdentifier"],
    )

    logger.debug(resp)
    logger.info(f'jedge: {resp["ExportTasks"][0]["Status"] == "COMPLETE"}')

    return resp["ExportTasks"][0]["Status"] == "COMPLETE"